import { Container } from "@/components/Container";
import { c, copy } from "@/content/copy";
import Link from "next/link";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { withLocale } from "@/lib/urls";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  return {
    title: c(copy.privacy.metaTitle, locale),
    description: c(copy.privacy.metaDescription, locale),
    alternates: alternatesFor(locale, "/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">{c(copy.privacy.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.privacy.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.privacy.intro, locale)}
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-lg font-semibold">{c(copy.privacy.section1Title, locale)}</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>{c(copy.privacy.li1, locale)}</li>
              <li>{c(copy.privacy.li2, locale)}</li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold">{c(copy.privacy.section2Title, locale)}</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>{c(copy.privacy.li3, locale)}</li>
              <li>{c(copy.privacy.li4, locale)}</li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold">{c(copy.privacy.section3Title, locale)}</h2>
            <p className="mt-3 text-sm text-muted">
              {c(copy.privacy.contactBody, locale)}{" "}
              <Link className="font-semibold text-foreground hover:text-primary" href={withLocale(locale, "/contact")}>
                {c(copy.privacy.contactLink, locale)}
              </Link>
              .
            </p>
            <p className="mt-3 text-sm text-muted">
              {c(copy.privacy.disclaimer, locale)}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
