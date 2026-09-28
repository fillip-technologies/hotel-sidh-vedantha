import { readFormRequest, mailFailed } from "@/lib/formRequest";
import { text, validateContact } from "@/lib/validation";
import { sendMail } from "@/services/mail/mailService";
import { buildEnquiryEmail } from "@/services/mail/templates";

export async function POST(request: Request) {
  const parsed = await readFormRequest(request, "enquiry");
  if (parsed.response) return parsed.response;
  const { body } = parsed;

  const contact = {
    name: text(body.name, 100),
    phone: text(body.phone, 20),
    email: text(body.email, 150),
  };
  const context = text(body.context, 100) || "Hotel enquiry";
  const service = text(body.service, 60) || "General Enquiry";
  const message = text(body.message, 2000);

  const errors = validateContact(contact);

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, error: "Please check the form and try again.", errors }, { status: 400 });
  }

  try {
    await sendMail(buildEnquiryEmail({ ...contact, context, service, message }));
  } catch (error) {
    return mailFailed(error);
  }

  return Response.json({ ok: true });
}
