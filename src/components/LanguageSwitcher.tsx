"use client";

import { useMemo, useState } from "react";
import { LOCALE_COOKIE, defaultLocale, localeLabels, locales, normalizeLocale } from "@/lib/i18n";

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2) return undefined;
  return parts.pop()?.split(";").shift();
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState(() => {
    if (typeof document === "undefined") return defaultLocale;
    const urlLocale = new URLSearchParams(window.location.search).get("lang");
    if (urlLocale && (locales as readonly string[]).includes(urlLocale)) {
      return normalizeLocale(urlLocale);
    }
    return normalizeLocale(getCookie(LOCALE_COOKIE));
  });

  const currentLabel = useMemo(() => localeLabels[locale], [locale]);

  return (
    <div className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
          <path d="M12 10h.01" />
        </svg>
        <span className="whitespace-nowrap">{currentLabel}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 w-56 pt-2" role="menu">
          <div className="rounded-2xl border border-border/70 bg-background shadow-lg">
            <div className="p-2">
              {locales.map((value) => (
                <button
                  key={value}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setCookie(LOCALE_COOKIE, value);
                    setLocale(value);
                    setOpen(false);
                    const url = new URL(window.location.href);
                    url.searchParams.set("lang", value);
                    window.location.href = url.toString();
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
                  role="menuitem"
                >
                  <span>{localeLabels[value]}</span>
                  {locale === value ? (
                    <span className="text-primary">●</span>
                  ) : (
                    <span className="text-muted"> </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
