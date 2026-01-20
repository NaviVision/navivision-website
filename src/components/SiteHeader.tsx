"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { t, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [openBucket, setOpenBucket] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenBucket, setMobileOpenBucket] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const mobileCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const blurOnClick = (event: ReactMouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenBucket(null);
        setMobileOpen(false);
        setMobileOpenBucket(null);
      }
    };
    const onPointerDown = (event: globalThis.MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && navRef.current && !navRef.current.contains(target)) {
        setOpenBucket(null);
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
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    mobileCloseButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusables = mobilePanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"]),input,select,textarea',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      const panel = mobilePanelRef.current;

      if (panel && active instanceof HTMLElement && !panel.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }

      if (event.shiftKey) {
        if (active === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      restoreFocusRef.current?.focus?.();
      restoreFocusRef.current = null;
    };
  }, [mobileOpen]);

  const navBuckets = useMemo(() => {
    return siteConfig.navBuckets.map((bucket) => ({
      ...bucket,
      href: withLocale(locale, bucket.href),
      items: bucket.items.map((item) => ({ ...item, href: withLocale(locale, item.href) })),
    }));
  }, [locale]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo href={withLocale(locale, "/")} />
        <nav ref={navRef} className="hidden items-center gap-2 md:flex" aria-label={t(locale, "a11y.primaryNav")}>
          {navBuckets.map((bucket) => (
            <div
              key={bucket.href}
              className="relative"
              onMouseEnter={() => setOpenBucket(bucket.href)}
              onMouseLeave={() => setOpenBucket((current) => (current === bucket.href ? null : current))}
            >
              <Link
                href={bucket.href}
                onClick={(event) => {
                  blurOnClick(event);
                  setOpenBucket(null);
                }}
                onFocus={() => setOpenBucket(bucket.href)}
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-current={pathname === bucket.href ? "page" : undefined}
                aria-haspopup={bucket.items.length ? "menu" : undefined}
                aria-expanded={openBucket === bucket.href}
              >
                {t(locale, bucket.labelKey)}
              </Link>
              {bucket.items.length ? (
                <div
                  className="absolute left-0 top-full z-50 w-72 pt-2"
                  hidden={openBucket !== bucket.href}
                  role="menu"
                  aria-label={t(locale, bucket.labelKey)}
                >
                <div className="rounded-2xl border border-border/70 bg-background shadow-lg">
                  <div className="p-2">
                    {bucket.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(event) => {
                          blurOnClick(event);
                          setOpenBucket(null);
                        }}
                        className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        role="menuitem"
                      >
                        {t(locale, item.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} className="hidden md:block" />
          <ThemeToggle locale={locale} className="hidden md:inline-flex" />
          <Link
            className="btn btn-primary px-3 py-2 sm:px-5 sm:py-3"
            href={withLocale(locale, "/contact")}
            onClick={blurOnClick}
            aria-label={t(locale, "header.contact")}
            title={t(locale, "header.contact")}
            data-nv-location="header"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16v16H4z" opacity="0.15" />
              <path d="M4 8l8 6 8-6" />
              <path d="M4 4h16v16H4z" />
            </svg>
            <span className="hidden sm:inline">{t(locale, "header.contact")}</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label={t(locale, "a11y.openMenu")}
            aria-expanded={mobileOpen}
            aria-controls="nv-mobile-nav"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t(locale, "a11y.mobileNav")}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => {
              setMobileOpen(false);
              setMobileOpenBucket(null);
            }}
            aria-hidden="true"
          />
          <div
            ref={mobilePanelRef}
            id="nv-mobile-nav"
            className="absolute right-0 top-0 h-full w-[min(24rem,100%)] border-l border-border/70 bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/70 p-4">
              <p className="text-sm font-semibold">{t(locale, "a11y.menu")}</p>
              <button
                ref={mobileCloseButtonRef}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileOpenBucket(null);
                }}
                aria-label={t(locale, "a11y.closeMenu")}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="grid gap-5 p-4">
              <div className="flex items-center gap-2">
                <LanguageSwitcher locale={locale} />
                <ThemeToggle locale={locale} />
              </div>

              <nav aria-label={t(locale, "a11y.primaryNav")} className="grid gap-3">
                {navBuckets.map((bucket, index) => {
                  const expanded = mobileOpenBucket === bucket.href;
                  const panelId = `nv-mobile-bucket-${index}`;
                  return (
                    <div key={bucket.href} className="rounded-2xl border border-border/70 bg-background">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        onClick={() =>
                          setMobileOpenBucket((current) => (current === bucket.href ? null : bucket.href))
                        }
                        aria-expanded={expanded}
                        aria-controls={panelId}
                      >
                        <span>{t(locale, bucket.labelKey)}</span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className={[
                            "h-4 w-4 transition-transform",
                            expanded ? "rotate-180" : "rotate-0",
                          ].join(" ")}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div id={panelId} hidden={!expanded} className="border-t border-border/70 p-2">
                        <div className="grid gap-1">
                          {bucket.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(event) => {
                                blurOnClick(event);
                                setMobileOpen(false);
                                setMobileOpenBucket(null);
                              }}
                              className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              {t(locale, item.labelKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
