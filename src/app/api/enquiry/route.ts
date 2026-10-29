import { readFormRequest, mailFailed } from "@/lib/formRequest";
import { isDate, isEmail, isPhone, text, validateContact } from "@/lib/validation";
import { sendMail } from "@/services/mail/mailService";
import { buildEnquiryConfirmation, buildEnquiryEmail } from "@/services/mail/templates";

const eventTypes = new Set([
  "Wedding & Reception",
  "Birthday / Anniversary",
  "Corporate Event",
  "Meeting & Conference",
  "Engagement / Ring Ceremony",
  "Family Function / Social Gathering",
  "Other",
]);
const meetingTypes = new Set([
  "Business Meeting",
  "Team Discussion",
  "Client Meeting",
  "Presentation",
  "Training Session",
  "Small Corporate Gathering",
  "Other",
]);

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
  const isBanquetEnquiry = context === "Banquets & Events enquiry";
  const isMeetingEnquiry = context === "Meeting Room enquiry";
  const isVenueEnquiry = isBanquetEnquiry || isMeetingEnquiry;
  const eventDate = text(body.eventDate, 10);
  const guestCountValue = text(body.guestCount, 5);
  const guestCount = Number(guestCountValue);

  const errors = isVenueEnquiry
    ? {}
    : validateContact(contact);

  if (isVenueEnquiry) {
    if (!contact.name) errors.name = "Please enter your name.";
    if (!isPhone(contact.phone)) errors.phone = "Please enter a valid phone number.";
    if (contact.email && !isEmail(contact.email)) errors.email = "Please enter a valid email address.";
    if (!isDate(eventDate)) errors.eventDate = "Please enter a valid event date.";
    if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10000) {
      errors.guestCount = "Please enter a guest count from 1 to 10,000.";
    }
    if (isBanquetEnquiry && !eventTypes.has(service)) errors.service = "Please choose a valid event type.";
    if (isMeetingEnquiry && !meetingTypes.has(service)) errors.service = "Please choose a valid meeting type.";
  } else if (!isEmail(contact.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, error: "Please check the form and try again.", errors }, { status: 400 });
  }

  const details = {
    ...contact,
    email: contact.email || undefined,
    context,
    service,
    message,
    ...(isVenueEnquiry ? { eventDate, guestCount } : {}),
  };

  try {
    await sendMail(buildEnquiryEmail(details));
  } catch (error) {
    return mailFailed(error);
  }

  // The hotel has the request at this point, so a failed confirmation must not fail the form.
  if (details.email) {
    await sendMail(buildEnquiryConfirmation(details)).catch((error) =>
      console.error("Failed to send guest confirmation:", error),
    );
  }

  return Response.json({ ok: true });
}
