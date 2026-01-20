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
  const title = c(copy.customSaas.metaTitle, locale);
  const description = c(copy.customSaas.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/custom-saas"),
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

export default async function CustomSaasPage({
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
          <p className="text-sm font-medium text-muted">{c(copy.customSaas.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.customSaas.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.customSaas.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.customSaas.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href="#what-we-build">
              {c(copy.customSaas.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="what-we-build">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.customSaas.section1Title, locale)}
            subtitle={c(copy.customSaas.section1Subtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.customSaas.card1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.customSaas.card1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.customSaas.card2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.customSaas.card2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.customSaas.card3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.customSaas.card3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="how-we-engage">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.customSaas.section2Title, locale)}
            subtitle={c(copy.customSaas.section2Subtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.customSaas.step1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.customSaas.step1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.customSaas.step2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.customSaas.step2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.customSaas.step3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.customSaas.step3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="deliverables">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.customSaas.deliverablesTitle, locale)}
            subtitle={c(copy.customSaas.deliverablesSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.customSaas.deliverablesCard1Title, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.customSaas.deliverablesCard1Li1, locale)}</li>
                <li>{c(copy.customSaas.deliverablesCard1Li2, locale)}</li>
                <li>{c(copy.customSaas.deliverablesCard1Li3, locale)}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.customSaas.deliverablesCard2Title, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.customSaas.deliverablesCard2Li1, locale)}</li>
                <li>{c(copy.customSaas.deliverablesCard2Li2, locale)}</li>
                <li>{c(copy.customSaas.deliverablesCard2Li3, locale)}</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="quality">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.customSaas.qualityTitle, locale)}
            subtitle={c(copy.customSaas.qualitySubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.customSaas.qualityCard1Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.customSaas.qualityCard1Body, locale)}</p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.customSaas.qualityCard2Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.customSaas.qualityCard2Body, locale)}</p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.customSaas.qualityCard3Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.customSaas.qualityCard3Body, locale)}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="faqs">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.customSaas.faqTitle, locale)}
            subtitle={c(copy.customSaas.faqSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4">
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.customSaas.faq1Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.customSaas.faq1A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.customSaas.faq2Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.customSaas.faq2A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.customSaas.faq3Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.customSaas.faq3A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.customSaas.faq4Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.customSaas.faq4A, locale)}</p>
            </details>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {c(copy.customSaas.closingTitle, locale)}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm text-muted sm:text-base">
              {c(copy.customSaas.closingBody, locale)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
                {c(copy.customSaas.closingCtaPrimary, locale)}
              </Link>
              <Link className="btn btn-secondary" href="#what-we-build">
                {c(copy.customSaas.closingCtaSecondary, locale)}
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted">hello@navivision.net</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
