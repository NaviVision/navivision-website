import { locales, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: withLocale(locale, path),
    languages: Object.fromEntries(locales.map((tag) => [tag, withLocale(tag, path)])),
  } as const;
}

