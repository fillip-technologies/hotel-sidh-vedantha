import { readFormRequest, mailFailed } from "@/lib/formRequest";
import { isDate, text, validateContact } from "@/lib/validation";
import { sendMail } from "@/services/mail/mailService";
import { buildBookingConfirmation, buildBookingEmail } from "@/services/mail/templates";

export async function POST(request: Request) {
  const parsed = await readFormRequest(request, "booking");
  if (parsed.response) return parsed.response;
  const { body } = parsed;

  const contact = {
    name: text(body.name, 100),
    phone: text(body.phone, 20),
    email: text(body.email, 150),
  };
  const roomTitle = text(body.roomTitle, 120);
  const checkIn = text(body.checkIn, 10);
  const checkOut = text(body.checkOut, 10);
  const guests = Number(body.guests);

  const errors = validateContact(contact);
  if (!roomTitle) errors.roomTitle = "Room is required.";
  if (!isDate(checkIn) || !isDate(checkOut) || checkOut <= checkIn) errors.dates = "Please choose valid dates.";
  if (!Number.isInteger(guests) || guests < 1 || guests > 20) errors.guests = "Please enter a valid guest count.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, error: "Please check the form and try again.", errors }, { status: 400 });
  }

  const details = { ...contact, roomTitle, checkIn, checkOut, guests };

  try {
    await sendMail(buildBookingEmail(details));
  } catch (error) {
    return mailFailed(error);
  }

  // The hotel has the request at this point, so a failed confirmation must not fail the form.
  await sendMail(buildBookingConfirmation(details)).catch((error) =>
    console.error("Failed to send guest confirmation:", error),
  );

  return Response.json({ ok: true });
}
