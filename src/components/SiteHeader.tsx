"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LOCALE_COOKIE, defaultLocale, locales, normalizeLocale, t, type Locale } from "@/lib/i18n";

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2) return undefined;
  return parts.pop()?.split(";").shift();
}

export function SiteHeader() {
  const locale: Locale =
    typeof document === "undefined"
      ? defaultLocale
      : (() => {
          const urlLocale = new URLSearchParams(window.location.search).get("lang");
          if (urlLocale && (locales as readonly string[]).includes(urlLocale)) {
            return normalizeLocale(urlLocale);
          }
          return normalizeLocale(getCookie(LOCALE_COOKIE));
        })();

  const blurOnClick = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {siteConfig.navBuckets.map((bucket) => (
            <div key={bucket.href} className="group relative">
              <Link
                href={bucket.href}
                onClick={blurOnClick}
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {t(locale, bucket.labelKey)}
              </Link>
              <div className="absolute left-0 top-full z-50 hidden w-72 pt-2 group-hover:block group-focus-within:block">
                <div className="rounded-2xl border border-border/70 bg-background shadow-lg">
                  <div className="p-2">
                    {bucket.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={blurOnClick}
                        className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
                      >
                        {t(locale, item.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link className="btn btn-secondary hidden sm:inline-flex" href="/jobs">
            {t(locale, "header.viewJobs")}
          </Link>
          <Link className="btn btn-primary" href="/contact">
            {t(locale, "header.contact")}
          </Link>
        </div>
      </Container>
    </header>
  );
}
