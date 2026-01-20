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
  const title = c(copy.talentHiring.metaTitle, locale);
  const description = c(copy.talentHiring.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/talent-hiring"),
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

export default async function TalentHiringPage({
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
            {c(copy.talentHiring.kicker, locale)}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.talentHiring.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.talentHiring.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.talentHiring.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/jobs")}>
              {c(copy.talentHiring.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.talentHiring.sectionTitle, locale)}
            subtitle={c(copy.talentHiring.sectionSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.pillar1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.pillar1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.pillar2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.pillar2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.pillar3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.pillar3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="how-we-help">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.talentHiring.howTitle, locale)}
            subtitle={c(copy.talentHiring.howSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.howCard1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.howCard1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.howCard2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.howCard2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.howCard3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.howCard3Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.howCard4Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.howCard4Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="roles">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.talentHiring.rolesTitle, locale)}
            subtitle={c(copy.talentHiring.rolesSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.rolesCard1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.rolesCard1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.rolesCard2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.rolesCard2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.rolesCard3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.rolesCard3Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.rolesCard4Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.rolesCard4Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.talentHiring.exploreTitle, locale)}
            subtitle={c(copy.talentHiring.exploreSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.cardCompaniesTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.cardCompaniesBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/for-companies")}>
                  {c(copy.talentHiring.cardCompaniesLink, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.cardTalentTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.cardTalentBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/talent-hiring/candidate-process")}>
                  {c(copy.talentHiring.cardTalentLink, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.talentHiring.cardJobsTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.talentHiring.cardJobsBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/jobs")}>
                  {c(copy.talentHiring.cardJobsLink, locale)}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="faqs">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.talentHiring.faqTitle, locale)}
            subtitle={c(copy.talentHiring.faqSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4">
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.talentHiring.faq1Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.talentHiring.faq1A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.talentHiring.faq2Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.talentHiring.faq2A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.talentHiring.faq3Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.talentHiring.faq3A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.talentHiring.faq4Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.talentHiring.faq4A, locale)}</p>
            </details>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {c(copy.talentHiring.closingTitle, locale)}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm text-muted sm:text-base">
              {c(copy.talentHiring.closingBody, locale)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
                {c(copy.talentHiring.closingCtaPrimary, locale)}
              </Link>
              <Link className="btn btn-secondary" href={withLocale(locale, "/talent-hiring/candidate-process")}>
                {c(copy.talentHiring.closingCtaSecondary, locale)}
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted">hello@navivision.net</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
