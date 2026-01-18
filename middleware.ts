import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, LOCALE_COOKIE, locales, normalizeLocale, type Locale } from "@/lib/i18n";

const localeSet = new Set<string>(locales as unknown as string[]);

function parseAcceptLanguage(headerValue: string | null): string[] {
  if (!headerValue) return [];
  return headerValue
    .split(",")
    .map((part) => part.trim())
    .map((part) => part.split(";")[0]?.trim())
    .filter(Boolean);
}

function matchPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale) return normalizeLocale(cookieLocale);

  const accepted = parseAcceptLanguage(request.headers.get("accept-language"));
  for (const tag of accepted) {
    const normalized = tag.replace("_", "-");
    if (localeSet.has(normalized)) return normalized as Locale;
    const primary = normalized.split("-")[0];
    if (primary && localeSet.has(primary)) return primary as Locale;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname } = url;

  // Handle legacy `?lang=` by redirecting to locale-prefixed routes.
  const queryLang = url.searchParams.get("lang");
  if (queryLang && localeSet.has(queryLang)) {
    const locale = queryLang as Locale;
    url.searchParams.delete("lang");

    const parts = pathname.split("/").filter(Boolean);
    const maybeLocale = parts[0];
    const rest = maybeLocale && localeSet.has(maybeLocale) ? parts.slice(1) : parts;
    url.pathname = `/${locale}/${rest.join("/")}`.replace(/\/+$/, "") || `/${locale}`;

    const response = NextResponse.redirect(url, 308);
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];

  if (!maybeLocale || !localeSet.has(maybeLocale)) {
    const locale = matchPreferredLocale(request);
    const nextUrl = request.nextUrl.clone();
    nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(nextUrl, 308);
  }

  const locale = maybeLocale as Locale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nv-locale", locale);
  requestHeaders.set("x-nv-path", `/${parts.slice(1).join("/")}`);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Keep the user's locale sticky.
  if (request.cookies.get(LOCALE_COOKIE)?.value !== locale) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons/|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)",
  ],
};

