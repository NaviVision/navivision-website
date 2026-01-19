import type { Metadata } from "next";
import { PortfolioRedirector } from "./redirector";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  return {
    robots: { index: false, follow: false },
    alternates: { canonical: withLocale(locale, "/") },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  return <PortfolioRedirector locale={locale} />;
}
