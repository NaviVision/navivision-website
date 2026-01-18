"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE, localeLabels, locales, type Locale } from "@/lib/i18n";
import { swapLocaleInPathname } from "@/lib/urls";

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
  const color =
    locale === "en-US"
      ? "rgb(var(--map-us))"
      : locale === "en-GB"
        ? "rgb(var(--map-uk))"
        : locale === "fr"
          ? "rgb(var(--map-fr))"
          : locale === "de"
            ? "rgb(var(--map-de))"
            : "rgb(var(--map-es))";

  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinejoin: "round",
    strokeLinecap: "round",
  } as const;

  // Minimal, stylized silhouettes (outlined) to read better at small sizes.
  if (locale === "en-US") {
    return (
      <svg {...common} style={{ color }}>
        <path d="M4 10.5l2-2 3 .5 2-1 2 1.2 2.5-.2 2 1.5 2-.5 1.5 2-1 2 1 2-2 1.3-1.1 2.2-2.6.3-2.2-1.1-2.1.6-2-1.5-2.2.2-2-1.8.5-2.2-1.5-1.8 1.3-1.1Z" />
      </svg>
    );
  }

  if (locale === "en-GB") {
    return (
      <svg {...common} style={{ color }}>
        <path d="M14.5 3.5l2 1-1 2 1.2 1.7-1.2 1.3.6 1.5-1.1 1.1.7 1.8-1.4 1.3.6 1.5-1.7 1.2-1.4-1-1.1-2-1.5-1.2.8-1.6-1.1-1.4 1.4-1.4-.5-2 1.2-1.5-.6-1.9 1.5-1Z" />
      </svg>
    );
  }

  if (locale === "fr") {
    return (
      <svg {...common} style={{ color }}>
        <path d="M12 3 18.7 7v10L12 21l-6.7-4V7L12 3Z" />
      </svg>
    );
  }

  if (locale === "de") {
    return (
      <svg {...common} style={{ color }}>
        <path d="M7.5 4h9l1 3-1 3 1 3-1 3 1 3h-9l-1-3 1-3-1-3 1-3-1-3 1-3Z" />
      </svg>
    );
  }

  // Spain (es)
  return (
    <svg {...common} style={{ color }}>
      <path d="M6 10l2-2 3 .7 2-1 2 1 2.5-.3 1.5 2-1 2 1.2 1.8-1.7 1.2-.8 2-2.2.6-2-1-2 .7-2-1.7-2 .1.4-2.1-1.4-1.7 1.5-1.3Z" />
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
        aria-label={`Language: ${currentLabel}`}
        title={`Language: ${currentLabel}`}
        disabled={isPending}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-surface"
          aria-hidden="true"
        >
          <CountryMapIcon locale={locale} />
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 w-20 pt-2" role="menu" aria-label="Language">
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
                      "flex w-full items-center justify-center rounded-xl p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      locale === value
                        ? "bg-surface text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground",
                    ].join(" ")}
                    role="menuitemradio"
                    aria-checked={locale === value}
                    aria-label={localeLabels[value]}
                    title={localeLabels[value]}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-background">
                      <CountryMapIcon locale={value} />
                      {locale === value ? (
                        <span
                          aria-hidden="true"
                          className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-background bg-primary"
                        />
                      ) : null}
                      <span className="sr-only">{localeShort(value)}</span>
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
