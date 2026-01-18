"use client";

import { useEffect } from "react";
import { LOCALE_COOKIE, defaultLocale, locales, normalizeLocale } from "@/lib/i18n";

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2) return undefined;
  return parts.pop()?.split(";").shift();
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function ClientLocale() {
  useEffect(() => {
    const urlLocale = new URLSearchParams(window.location.search).get("lang");
    const normalizedUrlLocale = urlLocale ? normalizeLocale(urlLocale) : undefined;
    if (normalizedUrlLocale && (locales as readonly string[]).includes(urlLocale!)) {
      setCookie(LOCALE_COOKIE, normalizedUrlLocale);
    }

    const locale = normalizeLocale(
      normalizedUrlLocale ?? getCookie(LOCALE_COOKIE) ?? defaultLocale,
    );
    document.documentElement.lang = locale;
  }, []);

  return null;
}
