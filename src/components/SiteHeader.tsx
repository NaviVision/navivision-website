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
  const navRef = useRef<HTMLElement | null>(null);

  const blurOnClick = (event: ReactMouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenBucket(null);
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
        <nav ref={navRef} className="hidden items-center gap-2 md:flex" aria-label="Primary">
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
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
                        className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
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
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <Link className="btn btn-primary" href={withLocale(locale, "/contact")} onClick={blurOnClick}>
            {t(locale, "header.contact")}
          </Link>
        </div>
      </Container>
    </header>
  );
}
