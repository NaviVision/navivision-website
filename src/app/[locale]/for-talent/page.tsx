import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy } from "@/content/copy";
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
  const title = c(copy.forTalent.metaTitle, locale);
  const description = c(copy.forTalent.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/for-talent"),
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

export default async function ForTalentPage({
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
          <p className="text-sm font-medium text-muted">
            {c(copy.forTalent.kicker, locale)}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.forTalent.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.forTalent.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/jobs")}>
              {c(copy.forTalent.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/contact")}>
              {c(copy.forTalent.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.forTalent.sectionTitle, locale)}
            subtitle={c(copy.forTalent.sectionSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.forTalent.card1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.forTalent.card1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.forTalent.card2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.forTalent.card2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.forTalent.card3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.forTalent.card3Body, locale)}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link className="link" href={withLocale(locale, "/talent-hiring/candidate-process")}>
              {c(copy.forTalent.processLink, locale)}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
