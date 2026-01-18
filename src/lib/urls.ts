import { locales, type Locale } from "@/lib/i18n";

const localeSet = new Set<string>(locales as unknown as string[]);

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function withLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (isExternalHref(href)) return href;

  const parts = href.split("/").filter(Boolean);
  const maybeLocale = parts[0];
  if (maybeLocale && localeSet.has(maybeLocale)) return href;

  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export function swapLocaleInPathname(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];
  const rest = maybeLocale && localeSet.has(maybeLocale) ? parts.slice(1) : parts;
  const next = `/${nextLocale}/${rest.join("/")}`.replace(/\/+$/, "");
  return next === "" ? `/${nextLocale}` : next;
}

