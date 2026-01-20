import Link from "next/link";
import { headers } from "next/headers";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy } from "@/content/copy";
import { defaultLocale, normalizeLocale, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export default async function NotFound() {
  const headerStore = await headers();
  const localeHeader = (headerStore.get("x-nv-locale") ?? defaultLocale) as string;
  const locale: Locale = normalizeLocale(localeHeader);

  return (
    <div>
      <section className="bg-surface">
        <Container className="py-16 sm:py-24">
          <p className="text-sm font-medium text-muted">{c(copy.notFound.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.notFound.title, locale)}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.notFound.body, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/")}>
              {c(copy.notFound.ctaHome, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/contact")}>
              {c(copy.notFound.ctaContact, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.notFound.linksTitle, locale)}
            subtitle={c(copy.notFound.linksSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.home.cardTalentTitle, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.home.cardTalentBody, locale)}</p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/talent-hiring")}>
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.home.cardSoftwareTitle, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.home.cardSoftwareBody, locale)}</p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/custom-saas")}>
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.home.cardRealEstateTitle, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.home.cardRealEstateBody, locale)}</p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/real-estate")}>
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.home.cardInvestmentsTitle, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.home.cardInvestmentsBody, locale)}</p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/investments")}>
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 card">
            <h3 className="text-base font-semibold">{c(copy.notFound.jobsTitle, locale)}</h3>
            <p className="mt-2 text-sm text-muted">{c(copy.notFound.jobsBody, locale)}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <Link className="link" href={withLocale(locale, "/jobs")}>
                {c(copy.notFound.jobsLink, locale)}
              </Link>
              <a className="link" href="mailto:hello@navivision.net">
                hello@navivision.net
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
