"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";
import { LOCALE_COOKIE, defaultLocale, locales, normalizeLocale, type Locale } from "@/lib/i18n";
import { c, copy } from "@/content/copy";

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length !== 2) return undefined;
  return parts.pop()?.split(";").shift();
}

export function SiteFooter() {
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

  const footerLinks = [
    { href: "/jobs", label: c(copy.footer.jobs, locale) },
    { href: "/privacy", label: c(copy.footer.privacy, locale) },
    { href: "/terms", label: c(copy.footer.terms, locale) },
    { href: "https://www.linkedin.com/company/navivision/", label: c(copy.footer.linkedIn, locale) },
  ] as const;

  return (
    <footer className="border-t border-border/70 bg-surface">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted">
              {c(copy.footer.tagline, locale)}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.href.startsWith("http") ? `${item.label} (opens in a new tab)` : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border/70 pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. {c(copy.footer.rights, locale)}
          </p>
        </div>
      </Container>
    </footer>
  );
}
