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
    title: c(copy.about.metaTitle, locale),
    description: c(copy.about.metaDescription, locale),
    alternates: alternatesFor(locale, "/about"),
  };
}

export default async function AboutPage({
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
          <p className="text-sm font-medium text-muted">{c(copy.about.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.about.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.about.intro, locale)}
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.about.focusTitle, locale)}
            subtitle={c(copy.about.focusSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.about.verticalTalentTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.about.verticalTalentBody, locale)}
              </p>
              <div className="mt-4 flex gap-4">
                <Link className="link" href={withLocale(locale, "/for-companies")}>
                  {c(copy.about.linkForCompanies, locale)}
                </Link>
                <Link className="link" href={withLocale(locale, "/for-talent")}>
                  {c(copy.about.linkForTalent, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.about.verticalSoftwareTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.about.verticalSoftwareBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/custom-saas")}>
                  {c(copy.about.linkExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.about.verticalRealEstateTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.about.verticalRealEstateBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/real-estate")}>
                  {c(copy.about.linkExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.about.verticalInvestTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.about.verticalInvestBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/investments")}>
                  {c(copy.about.linkExplore, locale)}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.about.teamTitle, locale)}
            subtitle={c(copy.about.teamSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Annie Truong", initials: "AT" },
              { name: "Greg William", initials: "GW" },
              { name: "Corey Somers", initials: "CS" },
              { name: "Sam Patel", initials: "SP" },
            ].map((person) => (
              <div key={person.name} className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-sm font-semibold text-foreground">
                    {person.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs text-muted">NaviVision</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">
                  {c(copy.about.profileSoon, locale)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
