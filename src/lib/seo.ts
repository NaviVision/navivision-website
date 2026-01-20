import { locales, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: withLocale(locale, path),
    languages: Object.fromEntries(locales.map((tag) => [tag, withLocale(tag, path)])),
  } as const;
}

export function ogImageUrl({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  return `/api/og?${params.toString()}`;
}
