"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE, localeLabels, locales, t, type Locale } from "@/lib/i18n";
import { swapLocaleInPathname } from "@/lib/urls";

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function localeCode(value: string) {
  if (value === "en-US") return "EN-US";
  if (value === "en-GB") return "EN-GB";
  if (value === "es") return "ES";
  if (value === "fr") return "FR";
  if (value === "de") return "DE";
  return value.toUpperCase();
}

function FlagIcon({ locale }: { locale: Locale }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 16",
    className: "h-4 w-6 shrink-0 rounded-[4px] border border-border/70",
  } as const;

  if (locale === "en-US") {
    return (
      <svg {...common}>
        <defs>
          <clipPath id="nv-us">
            <rect x="0" y="0" width="24" height="16" rx="3" ry="3" />
          </clipPath>
        </defs>
        <g clipPath="url(#nv-us)">
          <rect width="24" height="16" fill="#fff" />
          {Array.from({ length: 7 }).map((_, index) => (
            <rect key={index} y={index * 2 + 1} width="24" height="1" fill="#B91C1C" />
          ))}
          <rect width="10.5" height="7.5" fill="#1E40AF" />
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 4 }).map((__, col) => (
              <circle
                key={`${row}-${col}`}
                cx={1.3 + col * 2.4 + (row % 2) * 1.2}
                cy={1.2 + row * 1.2}
                r="0.25"
                fill="#fff"
              />
            )),
          )}
        </g>
      </svg>
    );
  }

  if (locale === "en-GB") {
    return (
      <svg {...common}>
        <defs>
          <clipPath id="nv-uk">
            <rect x="0" y="0" width="24" height="16" rx="3" ry="3" />
          </clipPath>
        </defs>
        <g clipPath="url(#nv-uk)">
          <rect width="24" height="16" fill="#1E3A8A" />
          <path d="M0 0l9 0 15 10v6H15L0 6V0Z" fill="#fff" opacity="0.9" />
          <path d="M24 0H15L0 10v6h9l15-10V0Z" fill="#fff" opacity="0.9" />
          <path d="M0 0l24 16M24 0 0 16" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0l24 16M24 0 0 16" stroke="#B91C1C" strokeWidth="1.6" />
          <rect x="10" width="4" height="16" fill="#fff" />
          <rect y="6" width="24" height="4" fill="#fff" />
          <rect x="10.8" width="2.4" height="16" fill="#B91C1C" />
          <rect y="6.8" width="24" height="2.4" fill="#B91C1C" />
        </g>
      </svg>
    );
  }

  if (locale === "fr") {
    return (
      <svg {...common}>
        <defs>
          <clipPath id="nv-fr">
            <rect x="0" y="0" width="24" height="16" rx="3" ry="3" />
          </clipPath>
        </defs>
        <g clipPath="url(#nv-fr)">
          <rect width="8" height="16" fill="#1D4ED8" />
          <rect x="8" width="8" height="16" fill="#fff" />
          <rect x="16" width="8" height="16" fill="#B91C1C" />
        </g>
      </svg>
    );
  }

  if (locale === "de") {
    return (
      <svg {...common}>
        <defs>
          <clipPath id="nv-de">
            <rect x="0" y="0" width="24" height="16" rx="3" ry="3" />
          </clipPath>
        </defs>
        <g clipPath="url(#nv-de)">
          <rect width="24" height="5.34" fill="#111827" />
          <rect y="5.33" width="24" height="5.34" fill="#B91C1C" />
          <rect y="10.66" width="24" height="5.34" fill="#F59E0B" />
        </g>
      </svg>
    );
  }

  // Spain (es)
  return (
    <svg {...common}>
      <defs>
        <clipPath id="nv-es">
          <rect x="0" y="0" width="24" height="16" rx="3" ry="3" />
        </clipPath>
      </defs>
      <g clipPath="url(#nv-es)">
        <rect width="24" height="16" fill="#B91C1C" />
        <rect y="4" width="24" height="8" fill="#F59E0B" />
        <circle cx="8.2" cy="8" r="1.1" fill="#1F2937" opacity="0.25" />
      </g>
    </svg>
  );
}

export function LanguageSwitcher({ locale: initialLocale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);
  const [locale, setLocale] = useState<Locale>(() => initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  const currentLabel = useMemo(() => localeLabels[locale], [locale]);
  const buttonLabel = `${t(locale, "header.language")}: ${currentLabel}`;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            queueMicrotask(() => firstItemRef.current?.focus());
          }
        }}
        className="inline-flex items-center rounded-full border border-border/80 bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={buttonLabel}
        title={buttonLabel}
        disabled={isPending}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-surface"
          aria-hidden="true"
        >
          <FlagIcon locale={locale} />
        </span>
      </button>

      {open ? (
        <div
          className="absolute right-0 top-full z-50 w-36 pt-2"
          role="menu"
          aria-label={t(locale, "header.language")}
        >
          <div className="rounded-2xl border border-border/70 bg-background shadow-lg">
            <div className="p-2">
              <div className="grid grid-cols-1 gap-1">
                {locales.map((value) => (
                  <button
                    key={value}
                    type="button"
                    ref={value === locales[0] ? firstItemRef : undefined}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      setCookie(LOCALE_COOKIE, value);
                      setLocale(value);
                      setOpen(false);
                      startTransition(() => {
                        const nextPath = swapLocaleInPathname(pathname, value);
                        const nextUrl = `${nextPath}${window.location.search}${window.location.hash}`;
                        router.replace(nextUrl, { scroll: false });
                      });
                    }}
                    className={[
                      "flex w-full items-center justify-between rounded-xl px-2 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      locale === value
                        ? "bg-surface text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground",
                    ].join(" ")}
                    role="menuitemradio"
                    aria-checked={locale === value}
                    aria-label={localeLabels[value]}
                    title={localeLabels[value]}
                  >
                    <span className="flex items-center gap-2">
                      <FlagIcon locale={value} />
                      <span className="whitespace-nowrap text-[11px] font-semibold leading-none text-foreground">
                        {localeCode(value)}
                      </span>
                      {locale === value ? (
                        <span
                          aria-hidden="true"
                          className="ml-1 inline-flex h-2 w-2 rounded-full bg-primary"
                        />
                      ) : null}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
