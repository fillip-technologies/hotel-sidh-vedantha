import { isRateLimited } from "@/lib/rateLimit";
import { isPhone, text } from "@/lib/validation";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { mailFailed } from "@/lib/formRequest";
import { sendMail } from "@/services/mail/mailService";
import { buildCareerApplicationEmail } from "@/services/mail/templates";
import { careerPositions } from "@/data/careerPositions";
import { siteContact } from "@/data/siteContact";

export const runtime = "nodejs";

const maxResumeBytes = 5 * 1024 * 1024;
const maxRequestBytes = maxResumeBytes + 64 * 1024;
const mimeByExtension: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(`career:${ip}`, 3, 10 * 60 * 1000)) {
    return Response.json({ ok: false, error: "Too many applications. Please try again later." }, { status: 429 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxRequestBytes) {
    return Response.json({ ok: false, error: "The request is too large. Please upload a resume under 5 MB." }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("multipart/form-data")) {
    return Response.json({ ok: false, error: "Please submit the application form." }, { status: 400 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "The application could not be read. Please try again." }, { status: 400 });
  }

  if (text(formData.get("website"), 200)) {
    return Response.json({ ok: true });
  }

  const name = text(formData.get("name"), 100);
  const phone = text(formData.get("phone"), 20);
  const position = text(formData.get("position"), 100);
  const resume = formData.get("resume");
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your full name.";
  if (!isPhone(phone) || (phone.match(/\d/g)?.length ?? 0) < 10) {
    errors.phone = "Please enter a valid phone number with at least 10 digits.";
  }
  if (!careerPositions.some((role) => role.title === position)) {
    errors.position = "Please select one of the listed hotel positions.";
  }
  if (!(resume instanceof File) || resume.size === 0) {
    errors.resume = "Please attach your resume.";
  } else if (resume.size > maxResumeBytes) {
    errors.resume = "Your resume must be 5 MB or smaller.";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, error: "Please check the application form.", errors }, { status: 400 });
  }

  const file = resume as File;
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  const expectedMime = mimeByExtension[extension];
  if (!expectedMime || (file.type && file.type !== expectedMime && file.type !== "application/octet-stream")) {
    return Response.json({ ok: false, error: "Upload a PDF, DOC, or DOCX resume." }, { status: 400 });
  }

  const recaptchaToken = text(formData.get("recaptchaToken"), 4096);
  if (!(await verifyRecaptcha(recaptchaToken, "career_application", ip))) {
    return Response.json(
      { ok: false, error: "We couldn't verify your application. Please refresh the page and try again." },
      { status: 400 },
    );
  }

  let resumeBytes: Buffer;
  try {
    resumeBytes = Buffer.from(await file.arrayBuffer());
  } catch {
    return Response.json({ ok: false, error: "The resume file could not be read. Please choose it again." }, { status: 400 });
  }

  const hasPdfSignature = resumeBytes.subarray(0, 5).toString("ascii") === "%PDF-";
  const hasDocSignature = resumeBytes.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
  const hasDocxSignature = resumeBytes.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]));
  const signatureMatches =
    (extension === "pdf" && hasPdfSignature) ||
    (extension === "doc" && hasDocSignature) ||
    (extension === "docx" && hasDocxSignature);

  if (!signatureMatches) {
    return Response.json({ ok: false, error: "The file contents do not match a PDF, DOC, or DOCX resume." }, { status: 400 });
  }

  const rawBaseName = file.name.split(/[\\/]/).pop() ?? "resume";
  const safeStem = rawBaseName
    .slice(0, -(extension.length + 1))
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 100);
  const filename = `${safeStem || "resume"}.${extension}`;

  try {
    await sendMail(
      buildCareerApplicationEmail({
        name,
        phone,
        position,
        to: siteContact.careersEmail,
        resume: { filename, content: resumeBytes, contentType: expectedMime },
      }),
    );
  } catch (error) {
    return mailFailed(error);
  }

  return Response.json({ ok: true });
}
