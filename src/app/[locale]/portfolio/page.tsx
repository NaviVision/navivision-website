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
    title: c(copy.portfolio.metaTitle, locale),
    description: c(copy.portfolio.metaDescription, locale),
    alternates: alternatesFor(locale, "/portfolio"),
  };
}

export default async function PortfolioPage({
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
          <p className="text-sm font-medium text-muted">{c(copy.portfolio.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.portfolio.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.portfolio.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.portfolio.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/about")}>
              {c(copy.portfolio.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="software">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.portfolio.softwareTitle, locale)}
            subtitle={c(copy.portfolio.softwareSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.portfolio.softwareCard1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.portfolio.softwareCard1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.portfolio.softwareCard2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.portfolio.softwareCard2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.portfolio.softwareCard3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.portfolio.softwareCard3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="real-estate">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.portfolio.realEstateTitle, locale)}
            subtitle={c(copy.portfolio.realEstateSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.portfolio.reCard1Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.portfolio.reCard1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.portfolio.reCard2Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.portfolio.reCard2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.portfolio.reCard3Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.portfolio.reCard3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="investing">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.portfolio.investingTitle, locale)}
            subtitle={c(copy.portfolio.investingSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.portfolio.lookForTitle, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.portfolio.investLookLi1, locale)}</li>
                <li>{c(copy.portfolio.investLookLi2, locale)}</li>
                <li>{c(copy.portfolio.investLookLi3, locale)}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.portfolio.helpTitle, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.portfolio.investHelpLi1, locale)}</li>
                <li>{c(copy.portfolio.investHelpLi2, locale)}</li>
                <li>{c(copy.portfolio.investHelpLi3, locale)}</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
