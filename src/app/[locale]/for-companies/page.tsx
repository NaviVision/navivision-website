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
  const title = c(copy.forCompanies.metaTitle, locale);
  const description = c(copy.forCompanies.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/for-companies"),
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

export default async function ForCompaniesPage({
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
            {c(copy.forCompanies.kicker, locale)}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.forCompanies.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.forCompanies.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.forCompanies.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/about")}>
              {c(copy.forCompanies.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.forCompanies.sectionTitle, locale)}
            subtitle={c(copy.forCompanies.sectionSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.forCompanies.option1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.forCompanies.option1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.forCompanies.option2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.forCompanies.option2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.forCompanies.option3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.forCompanies.option3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {c(copy.forCompanies.closingTitle, locale)}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm text-muted sm:text-base">
              {c(copy.forCompanies.closingBody, locale)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
                {c(copy.forCompanies.closingCtaPrimary, locale)}
              </Link>
              <Link className="btn btn-secondary" href={withLocale(locale, "/jobs")}>
                {c(copy.forCompanies.closingCtaSecondary, locale)}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
