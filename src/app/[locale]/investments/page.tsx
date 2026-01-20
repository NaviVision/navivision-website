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
  const title = c(copy.investments.metaTitle, locale);
  const description = c(copy.investments.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/investments"),
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

export default async function InvestmentsPage({
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
            {c(copy.investments.kicker, locale)}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.investments.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.investments.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.investments.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href="#startup-investing">
              {c(copy.investments.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="startup-investing">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.investments.sectionTitle, locale)}
            subtitle={c(copy.investments.sectionSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.investments.teamTitle, locale)}
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.investments.teamLi1, locale)}</li>
                <li>{c(copy.investments.teamLi2, locale)}</li>
                <li>{c(copy.investments.teamLi3, locale)}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.investments.businessTitle, locale)}
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.investments.bizLi1, locale)}</li>
                <li>{c(copy.investments.bizLi2, locale)}</li>
                <li>{c(copy.investments.bizLi3, locale)}</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="focus">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.investments.focusTitle, locale)}
            subtitle={c(copy.investments.focusSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.investments.focusCard1Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.investments.focusCard1Body, locale)}</p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.investments.focusCard2Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.investments.focusCard2Body, locale)}</p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.investments.focusCard3Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.investments.focusCard3Body, locale)}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="support">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.investments.supportTitle, locale)}
            subtitle={c(copy.investments.supportSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.investments.supportCard1Title, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.investments.supportCard1Li1, locale)}</li>
                <li>{c(copy.investments.supportCard1Li2, locale)}</li>
                <li>{c(copy.investments.supportCard1Li3, locale)}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.investments.supportCard2Title, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.investments.supportCard2Li1, locale)}</li>
                <li>{c(copy.investments.supportCard2Li2, locale)}</li>
                <li>{c(copy.investments.supportCard2Li3, locale)}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 card">
            <h3 className="text-base font-semibold">{c(copy.investments.contactTitle, locale)}</h3>
            <p className="mt-2 text-sm text-muted">{c(copy.investments.contactBody, locale)}</p>
            <div className="mt-4">
              <a className="btn btn-primary w-full justify-center" href="mailto:hello@navivision.net">
                {c(copy.investments.contactCta, locale)}
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">hello@navivision.net</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="faqs">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.investments.faqTitle, locale)}
            subtitle={c(copy.investments.faqSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4">
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.investments.faq1Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.investments.faq1A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.investments.faq2Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.investments.faq2A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.investments.faq3Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.investments.faq3A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.investments.faq4Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.investments.faq4A, locale)}</p>
            </details>
          </div>
        </Container>
      </section>
    </div>
  );
}
