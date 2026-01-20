import { Container } from "@/components/Container";
import { c, copy } from "@/content/copy";
import Link from "next/link";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { alternatesFor, ogImageUrl } from "@/lib/seo";
import { withLocale } from "@/lib/urls";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const title = c(copy.terms.metaTitle, locale);
  const description = c(copy.terms.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/terms"),
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function TermsPage({
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
          <p className="text-sm font-medium text-muted">{c(copy.terms.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.terms.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.terms.intro, locale)}
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-lg font-semibold">{c(copy.terms.section1Title, locale)}</h2>
            <p className="mt-3 text-sm text-muted">
              {c(copy.terms.section1Body, locale)}
            </p>

            <h2 className="mt-8 text-lg font-semibold">{c(copy.terms.section2Title, locale)}</h2>
            <p className="mt-3 text-sm text-muted">
              {c(copy.terms.section2Body, locale)}
            </p>

            <h2 className="mt-8 text-lg font-semibold">{c(copy.terms.section3Title, locale)}</h2>
            <p className="mt-3 text-sm text-muted">
              {c(copy.terms.section3Body, locale)}{" "}
              <Link className="font-semibold text-foreground hover:text-primary" href={withLocale(locale, "/contact")}>
                {c(copy.terms.contactLink, locale)}
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
