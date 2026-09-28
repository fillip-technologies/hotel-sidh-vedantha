import { siteContact } from "@/data/siteContact";

import type { MailMessage } from "./mailService";

export type BookingDetails = {
  roomTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
};

export type EnquiryDetails = {
  context: string;
  service: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Strip line breaks so user input can never inject extra mail headers via the subject.
function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function renderEmail(title: string, rows: [label: string, value: string][]): Pick<MailMessage, "text" | "html"> {
  const text = [title, "", ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#222">
      <h2 style="margin:0 0 16px">${escapeHtml(title)}</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;width:35%"><strong>${escapeHtml(label)}</strong></td>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;white-space:pre-wrap">${escapeHtml(value)}</td>
        </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  return { text, html };
}

export function buildBookingEmail(details: BookingDetails): MailMessage {
  const title = `Reservation Request - ${details.roomTitle}`;

  return {
    subject: singleLine(title),
    replyTo: details.email,
    ...renderEmail(title, [
      ["Room", details.roomTitle],
      ["Check In", details.checkIn],
      ["Check Out", details.checkOut],
      ["Guests", String(details.guests)],
      ["Name", details.name],
      ["Phone", details.phone],
      ["Email", details.email],
    ]),
  };
}

export function buildEnquiryEmail(details: EnquiryDetails): MailMessage {
  const title = `New Enquiry - ${details.context}`;

  return {
    subject: singleLine(title),
    replyTo: details.email,
    ...renderEmail(title, [
      ["Source", details.context],
      ["Service", details.service],
      ["Name", details.name],
      ["Phone", details.phone],
      ["Email", details.email],
      ["Message", details.message || "-"],
    ]),
  };
}

function renderGuestReply(name: string, intro: string, rows: [label: string, value: string][]) {
  const closing = `For anything urgent, call us on ${siteContact.phoneDisplay}.`;
  const text = [
    `Dear ${name},`,
    "",
    intro,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    closing,
    "",
    "Warm regards,",
    "Hotel Sidh Vedantha",
    siteContact.address,
  ].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#222;line-height:1.55">
      <p>Dear ${escapeHtml(name)},</p>
      <p>${escapeHtml(intro)}</p>
      <table style="border-collapse:collapse;width:100%;margin:16px 0">
        ${rows
          .map(
            ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;width:35%"><strong>${escapeHtml(label)}</strong></td>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;white-space:pre-wrap">${escapeHtml(value)}</td>
        </tr>`,
          )
          .join("")}
      </table>
      <p>${escapeHtml(closing)}</p>
      <p style="margin-top:24px">Warm regards,<br /><strong>Hotel Sidh Vedantha</strong><br />${escapeHtml(siteContact.address)}</p>
    </div>`;

  return { text, html };
}

/** Confirmation sent to the guest, at the address they entered in the form. */
export function buildBookingConfirmation(details: BookingDetails): MailMessage {
  return {
    subject: singleLine(`We have received your request - ${details.roomTitle}`),
    to: details.email,
    replyTo: siteContact.email,
    ...renderGuestReply(
      details.name,
      "Thank you for choosing Hotel Sidh Vedantha. We have received your reservation request and will contact you shortly to confirm availability.",
      [
        ["Room", details.roomTitle],
        ["Check In", details.checkIn],
        ["Check Out", details.checkOut],
        ["Guests", String(details.guests)],
      ],
    ),
  };
}

export function buildEnquiryConfirmation(details: EnquiryDetails): MailMessage {
  return {
    subject: singleLine(`We have received your enquiry - ${details.service}`),
    to: details.email,
    replyTo: siteContact.email,
    ...renderGuestReply(
      details.name,
      "Thank you for contacting Hotel Sidh Vedantha. We have received your enquiry and will contact you shortly.",
      [
        ["Service", details.service],
        ["Your message", details.message || "-"],
      ],
    ),
  };
}
