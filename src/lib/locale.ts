import { cookies } from "next/headers";
import { defaultLocale, LOCALE_COOKIE, normalizeLocale, type Locale } from "@/lib/i18n";

type SearchParams = Record<string, string | string[] | undefined>;

export async function getServerLocale(searchParams?: SearchParams): Promise<Locale> {
  const urlLocaleRaw = searchParams?.lang;
  const urlLocale =
    typeof urlLocaleRaw === "string"
      ? urlLocaleRaw
      : Array.isArray(urlLocaleRaw)
        ? urlLocaleRaw[0]
        : undefined;

  if (urlLocale) return normalizeLocale(urlLocale);

  const store = await cookies();
  const cookieLocale = store.get(LOCALE_COOKIE)?.value;
  return normalizeLocale(cookieLocale ?? defaultLocale);
}

