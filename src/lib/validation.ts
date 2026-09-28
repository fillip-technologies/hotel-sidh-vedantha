const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[0-9 \-]{10,15}$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export type FieldErrors = Record<string, string>;

export function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function isEmail(value: string) {
  return EMAIL_PATTERN.test(value);
}

export function isPhone(value: string) {
  return PHONE_PATTERN.test(value);
}

export function isDate(value: string) {
  return DATE_PATTERN.test(value) && !Number.isNaN(Date.parse(value));
}

/** Validates the fields shared by every form: name, phone, email. */
export function validateContact(contact: { name: string; phone: string; email: string }) {
  const errors: FieldErrors = {};

  if (!contact.name) errors.name = "Please enter your name.";
  if (!isPhone(contact.phone)) errors.phone = "Please enter a valid phone number.";
  if (!isEmail(contact.email)) errors.email = "Please enter a valid email address.";

  return errors;
}
