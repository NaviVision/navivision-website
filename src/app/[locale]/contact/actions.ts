"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";
import { sendContactEmail } from "@/lib/email";

function cleanString(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(value: string) {
  if (value.length > 254) return false;
  const at = value.lastIndexOf("@");
  if (at <= 0 || at === value.length - 1) return false;
  if (value.includes(" ")) return false;
  return true;
}

function normalizeTopic(value: string) {
  const allowed = new Set(["hiring", "talent", "software", "real-estate", "investing", "other"]);
  if (allowed.has(value)) return value;
  return "other";
}

export async function submitContact(formData: FormData) {
  const locale = normalizeLocale(cleanString(formData.get("locale")));

  const honeypot = cleanString(formData.get("website"));
  if (honeypot) {
    redirect(withLocale(locale, "/contact?status=sent"));
  }

  const name = cleanString(formData.get("name")).slice(0, 120);
  const email = cleanString(formData.get("email")).slice(0, 160);
  const topic = normalizeTopic(cleanString(formData.get("topic")));
  const message = cleanString(formData.get("message")).slice(0, 5000);

  if (!name || !isValidEmail(email) || message.length < 10) {
    redirect(withLocale(locale, "/contact?status=invalid"));
  }

  try {
    const headerStore = await headers();
    const ip = headerStore.get("x-forwarded-for") ?? headerStore.get("x-real-ip");
    const userAgent = headerStore.get("user-agent");
    const referrer = headerStore.get("referer");

    await sendContactEmail({
      name,
      email,
      topic,
      message,
      meta: {
        ip,
        userAgent,
        referrer,
      },
    });
  } catch (error) {
    console.error("[contact] send failed", error);
    redirect(withLocale(locale, "/contact?status=error"));
  }

  redirect(withLocale(locale, "/contact?status=sent"));
}

