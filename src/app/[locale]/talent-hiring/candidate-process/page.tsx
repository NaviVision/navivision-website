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
    title: c(copy.candidateProcess.metaTitle, locale),
    description: c(copy.candidateProcess.metaDescription, locale),
    alternates: alternatesFor(locale, "/talent-hiring/candidate-process"),
  };
}

export default async function CandidateProcessPage({
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
            {c(copy.candidateProcess.kicker, locale)}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.candidateProcess.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.candidateProcess.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/jobs")}>
              {c(copy.candidateProcess.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/contact")}>
              {c(copy.candidateProcess.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="process">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.candidateProcess.stepsTitle, locale)}
            subtitle={c(copy.candidateProcess.stepsSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">
                {c(copy.candidateProcess.step1Kicker, locale)}
              </p>
              <h3 className="mt-2 text-base font-semibold">
                {c(copy.candidateProcess.step1Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.candidateProcess.step1Body, locale)}
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">
                {c(copy.candidateProcess.step2Kicker, locale)}
              </p>
              <h3 className="mt-2 text-base font-semibold">
                {c(copy.candidateProcess.step2Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.candidateProcess.step2Body, locale)}
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">
                {c(copy.candidateProcess.step3Kicker, locale)}
              </p>
              <h3 className="mt-2 text-base font-semibold">
                {c(copy.candidateProcess.step3Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.candidateProcess.step3Body, locale)}
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">
                {c(copy.candidateProcess.step4Kicker, locale)}
              </p>
              <h3 className="mt-2 text-base font-semibold">
                {c(copy.candidateProcess.step4Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.candidateProcess.step4Body, locale)}
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">
                {c(copy.candidateProcess.step5Kicker, locale)}
              </p>
              <h3 className="mt-2 text-base font-semibold">
                {c(copy.candidateProcess.step5Title, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.candidateProcess.step5Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.candidateProcess.timelineTitle, locale)}
            subtitle={c(copy.candidateProcess.timelineSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.candidateProcess.timelineCardTitle, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.candidateProcess.timelineLi1, locale)}</li>
                <li>{c(copy.candidateProcess.timelineLi2, locale)}</li>
                <li>{c(copy.candidateProcess.timelineLi3, locale)}</li>
                <li>{c(copy.candidateProcess.timelineLi4, locale)}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.candidateProcess.communicationTitle, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.candidateProcess.communicationLi1, locale)}</li>
                <li>{c(copy.candidateProcess.communicationLi2, locale)}</li>
                <li>{c(copy.candidateProcess.communicationLi3, locale)}</li>
                <li>{c(copy.candidateProcess.communicationLi4, locale)}</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.candidateProcess.faqTitle, locale)}
            subtitle={c(copy.candidateProcess.faqSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4">
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold focus:outline-none">
                {c(copy.candidateProcess.faq1Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.candidateProcess.faq1A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold focus:outline-none">
                {c(copy.candidateProcess.faq2Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.candidateProcess.faq2A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold focus:outline-none">
                {c(copy.candidateProcess.faq3Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.candidateProcess.faq3A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold focus:outline-none">
                {c(copy.candidateProcess.faq4Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.candidateProcess.faq4A, locale)}</p>
            </details>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {c(copy.candidateProcess.closingTitle, locale)}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm text-muted sm:text-base">
              {c(copy.candidateProcess.closingBody, locale)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href={withLocale(locale, "/jobs")}>
                {c(copy.candidateProcess.closingCtaPrimary, locale)}
              </Link>
              <a className="btn btn-secondary" href="mailto:hello@navivision.net">
                {c(copy.candidateProcess.closingCtaSecondary, locale)}
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">hello@navivision.net</p>
          </div>
        </Container>
      </section>
    </div>
  );
}

