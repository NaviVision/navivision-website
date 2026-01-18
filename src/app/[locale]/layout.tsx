import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { c, copy } from "@/content/copy";
import { defaultLocale, locales, normalizeLocale, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const canonical = withLocale(locale, "/");

  return {
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((tag) => [tag, withLocale(tag, "/")])),
    },
    title: {
      template: "%s | NaviVision",
      default: c(copy.meta.siteTitle, locale),
    },
    description: c(copy.meta.siteDescription, locale),
    openGraph: {
      type: "website",
      title: c(copy.meta.siteTitle, locale),
      description: c(copy.meta.siteDescription, locale),
      url: `https://navivision.net${canonical}`,
      siteName: "NaviVision",
    },
    twitter: {
      card: "summary_large_image",
      title: c(copy.meta.siteTitle, locale),
      description: c(copy.meta.siteDescription, locale),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam ?? defaultLocale);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

