import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy } from "@/content/copy";
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
    title: c(copy.talentHiring.metaTitle, locale),
    description: c(copy.talentHiring.metaDescription, locale),
    alternates: alternatesFor(locale, "/talent-hiring"),
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
                <Link className="link" href={withLocale(locale, "/for-talent")}>
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
    </div>
  );
}
