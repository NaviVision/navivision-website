import "server-only";

import nodemailer, { type Transporter } from "nodemailer";

type ContactEmailPayload = {
  name: string;
  email: string;
  topic: string;
  message: string;
  meta?: {
    ip?: string | null;
    userAgent?: string | null;
    referrer?: string | null;
  };
};

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function optionalNumber(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  if (Number.isFinite(parsed)) return parsed;
  return undefined;
}

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const host = requiredEnv("SMTP_HOST");
  const port = optionalNumber(process.env.SMTP_PORT) ?? 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const auth = user && pass ? { user, pass } : undefined;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth,
  });

  return cachedTransporter;
}

function safeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const transporter = getTransporter();

  const to = "hello@navivision.net";
  const from = safeHeaderValue(process.env.SMTP_FROM ?? "NaviVision <hello@navivision.net>");
  const replyTo = safeHeaderValue(payload.email);

  const name = safeHeaderValue(payload.name);
  const topic = safeHeaderValue(payload.topic);

  const subject = safeHeaderValue(`[NaviVision] Contact: ${topic} from ${name}`);

  const lines = [
    "New contact submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Topic: ${payload.topic}`,
    "",
    payload.message,
    "",
    "---",
    `IP: ${payload.meta?.ip ?? ""}`,
    `User-Agent: ${payload.meta?.userAgent ?? ""}`,
    `Referrer: ${payload.meta?.referrer ?? ""}`,
  ];

  await transporter.sendMail({
    to,
    from,
    replyTo,
    subject,
    text: lines.join("\n"),
  });
}

