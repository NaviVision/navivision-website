"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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

function localeShort(value: string) {
  if (value === "en-US") return "US";
  if (value === "en-GB") return "UK";
  if (value === "es") return "ES";
  if (value === "fr") return "FR";
  if (value === "de") return "DE";
  return value.toUpperCase();
}

function CountryMapIcon({ locale }: { locale: string }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "currentColor",
  } as const;

  // Minimal, stylized silhouettes to avoid heavy assets.
  if (locale === "en-US") {
    return (
      <svg {...common}>
        <path d="M3.5 9.5l2-2 3 .5 2-1 2 1.2 2.5-.2 2 1.5 2-.5 1.5 2-1 2 1 2-1.8 1.2-1.2 2.3-2.5.3-2.2-1.1-2.1.6-2-1.5-2.2.2-2-1.8.5-2.2-1.5-1.8 1.5-1.2Z" />
      </svg>
    );
  }

  if (locale === "en-GB") {
    return (
      <svg {...common}>
        <path d="M14.5 3.5l2 1-1 2 1.2 1.7-1.2 1.3.6 1.5-1.1 1.1.7 1.8-1.4 1.3.6 1.5-1.7 1.2-1.4-1-1.1-2-1.5-1.2.8-1.6-1.1-1.4 1.4-1.4-.5-2 1.2-1.5-.6-1.9 1.5-1Z" />
      </svg>
    );
  }

  if (locale === "fr") {
    return (
      <svg {...common}>
        <path d="M12 2.8 19 7v10l-7 4.2L5 17V7l7-4.2Z" />
      </svg>
    );
  }

  if (locale === "de") {
    return (
      <svg {...common}>
        <path d="M7 4h10l1 3-1 3 1 3-1 3 1 3H7l-1-3 1-3-1-3 1-3-1-3 1-3Z" />
      </svg>
    );
  }

  // Spain (es)
  return (
    <svg {...common}>
      <path d="M6 9l2-2 3 .7 2-1 2 1 2.5-.3 1.5 2-1 2 1.2 1.8-1.7 1.2-.8 2-2.2.6-2-1-2 .7-2-1.7-2 .1.4-2.1-1.4-1.7 1.5-1.3Z" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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
        className="inline-flex items-center rounded-full border border-border/80 bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${currentLabel}`}
        title={`Language: ${currentLabel}`}
        disabled={isPending}
      >
        <span className="text-muted">
          <CountryMapIcon locale={locale} />
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 w-44 pt-2" role="menu">
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
                    document.documentElement.lang = value;
                    setOpen(false);
                    startTransition(() => {
                      const params = new URLSearchParams(window.location.search);
                      params.set("lang", value);
                      const nextUrl = `${window.location.pathname}?${params.toString()}`;
                      router.replace(nextUrl, { scroll: false });
                      router.refresh();
                    });
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
                  role="menuitem"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-muted">
                      <CountryMapIcon locale={value} />
                    </span>
                    <span className="font-semibold text-foreground">
                      {localeShort(value)}
                    </span>
                  </span>
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
