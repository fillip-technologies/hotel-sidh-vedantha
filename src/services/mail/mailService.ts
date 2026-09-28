import nodemailer, { type Transporter } from "nodemailer";

export type MailMessage = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

let transporter: Transporter | null = null;

function getConfig() {
  const host = process.env.MAIL_HOST;
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD;
  const to = process.env.MAIL_TO;

  if (!host || !user || !pass || !to) {
    throw new Error("Mail is not configured: set MAIL_HOST, MAIL_USERNAME, MAIL_PASSWORD and MAIL_TO.");
  }

  const port = Number(process.env.MAIL_PORT ?? 587);
  const fromAddress = process.env.MAIL_FROM_ADDRESS ?? user;
  const fromName = process.env.MAIL_FROM_NAME;

  return {
    host,
    port,
    user,
    pass,
    to,
    // Port 465 uses implicit TLS; 587 upgrades with STARTTLS.
    secure: port === 465,
    from: fromName ? { name: fromName, address: fromAddress } : fromAddress,
  };
}

function getTransporter(config: ReturnType<typeof getConfig>) {
  transporter ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
  });

  return transporter;
}

/** Sends a message to the inbox defined in MAIL_TO. Server-only. */
export async function sendMail({ subject, text, html, replyTo }: MailMessage) {
  const config = getConfig();

  await getTransporter(config).sendMail({
    from: config.from,
    to: config.to,
    replyTo,
    subject,
    text,
    html,
  });
}
