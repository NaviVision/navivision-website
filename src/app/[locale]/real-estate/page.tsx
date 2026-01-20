import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy } from "@/content/copy";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { alternatesFor, ogImageUrl } from "@/lib/seo";
import { withLocale } from "@/lib/urls";

function PropertiesMap({
  title,
  description,
  californiaAriaLabel,
  floridaAriaLabel,
  seattleAriaLabel,
}: {
  title: string;
  description: string;
  californiaAriaLabel: string;
  floridaAriaLabel: string;
  seattleAriaLabel: string;
}) {
  return (
    <figure className="card overflow-hidden">
      <svg
        role="img"
        viewBox="0 0 640 360"
        className="h-auto w-full"
        aria-labelledby="nv-properties-map-title nv-properties-map-desc"
      >
        <title id="nv-properties-map-title">{title}</title>
        <desc id="nv-properties-map-desc">{description}</desc>

        <defs>
          <linearGradient id="nv-map-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(32,160,224,0.18)" />
            <stop offset="1" stopColor="rgba(64,160,64,0.12)" />
          </linearGradient>
          <radialGradient id="nv-pin" cx="50%" cy="40%" r="70%">
            <stop offset="0" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.55)" />
          </radialGradient>
          <filter id="nv-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.25" />
          </filter>
        </defs>

        <rect x="0" y="0" width="640" height="360" rx="20" fill="url(#nv-map-bg)" />

        <path
          d="M150 102
             L170 82
             L248 70
             L326 74
             Q360 64 394 78
             L472 74
             L524 100
             Q544 116 536 152
             Q530 192 520 222
             L520 250
             Q538 266 548 292
             Q540 322 512 320
             Q488 318 478 300
             Q456 284 430 292
             Q404 316 372 310
             L330 312
             L300 304
             L260 296
             Q230 286 220 270
             Q206 252 190 228
             Q176 206 168 180
             Q160 148 150 120
             Z"
          fill="rgba(255,255,255,0.66)"
          stroke="rgb(var(--border))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <g filter="url(#nv-shadow)">
          <a href="#seattle" aria-label={seattleAriaLabel} tabIndex={0}>
            <g transform="translate(162 126)">
              <circle cx="0" cy="0" r="16" fill="rgb(var(--brand-blue))" />
              <circle cx="0" cy="0" r="10" fill="url(#nv-pin)" />
              <path
                d="M0 18c8 0 13 6 13 12 0 10-13 24-13 24S-13 40-13 30c0-6 5-12 13-12Z"
                fill="rgb(var(--brand-blue))"
                opacity="0.95"
              />
              <text x="22" y="6" fontSize="14" fill="rgb(var(--foreground))" fontWeight="600">
                SEA
              </text>
            </g>
          </a>

          <a href="#california" aria-label={californiaAriaLabel} tabIndex={0}>
            <g transform="translate(168 230)">
              <circle cx="0" cy="0" r="16" fill="rgb(var(--brand-green))" />
              <circle cx="0" cy="0" r="10" fill="url(#nv-pin)" />
              <path
                d="M0 18c8 0 13 6 13 12 0 10-13 24-13 24S-13 40-13 30c0-6 5-12 13-12Z"
                fill="rgb(var(--brand-green))"
                opacity="0.95"
              />
              <text x="22" y="6" fontSize="14" fill="rgb(var(--foreground))" fontWeight="600">
                CA
              </text>
            </g>
          </a>

          <a href="#florida" aria-label={floridaAriaLabel} tabIndex={0}>
            <g transform="translate(496 292)">
              <circle cx="0" cy="0" r="16" fill="rgb(var(--brand-blue))" />
              <circle cx="0" cy="0" r="10" fill="url(#nv-pin)" />
              <path
                d="M0 18c8 0 13 6 13 12 0 10-13 24-13 24S-13 40-13 30c0-6 5-12 13-12Z"
                fill="rgb(var(--brand-blue))"
                opacity="0.95"
              />
              <text x="22" y="6" fontSize="14" fill="rgb(var(--foreground))" fontWeight="600">
                FL
              </text>
            </g>
          </a>
        </g>
      </svg>
    </figure>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const title = c(copy.realEstate.metaTitle, locale);
  const description = c(copy.realEstate.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/real-estate"),
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

export default async function RealEstatePage({
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
          <p className="text-sm font-medium text-muted">{c(copy.realEstate.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.realEstate.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.realEstate.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.realEstate.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href="#locations">
              {c(copy.realEstate.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="how-we-operate">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.realEstate.sectionTitle, locale)}
            subtitle={c(copy.realEstate.sectionSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.realEstate.card1Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.realEstate.card1Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.realEstate.card2Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.realEstate.card2Body, locale)}
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.realEstate.card3Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.realEstate.card3Body, locale)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="criteria">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.realEstate.criteriaTitle, locale)}
            subtitle={c(copy.realEstate.criteriaSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.realEstate.criteriaCard1Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.criteriaCard1Body, locale)}</p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.realEstate.criteriaCard2Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.criteriaCard2Body, locale)}</p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.realEstate.criteriaCard3Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.criteriaCard3Body, locale)}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="partner-process">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.realEstate.processTitle, locale)}
            subtitle={c(copy.realEstate.processSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">{c(copy.realEstate.processStep1Kicker, locale)}</p>
              <h3 className="mt-2 text-base font-semibold">{c(copy.realEstate.processStep1Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.processStep1Body, locale)}</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">{c(copy.realEstate.processStep2Kicker, locale)}</p>
              <h3 className="mt-2 text-base font-semibold">{c(copy.realEstate.processStep2Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.processStep2Body, locale)}</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">{c(copy.realEstate.processStep3Kicker, locale)}</p>
              <h3 className="mt-2 text-base font-semibold">{c(copy.realEstate.processStep3Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.processStep3Body, locale)}</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold tracking-wide text-muted">{c(copy.realEstate.processStep4Kicker, locale)}</p>
              <h3 className="mt-2 text-base font-semibold">{c(copy.realEstate.processStep4Title, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.realEstate.processStep4Body, locale)}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="locations">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.realEstate.locationsTitle, locale)}
            subtitle={c(copy.realEstate.locationsSubtitle, locale)}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <PropertiesMap
                title={c(copy.realEstate.locationsTitle, locale)}
                description={`${c(copy.realEstate.locationCaliforniaTitle, locale)}, ${c(copy.realEstate.locationFloridaTitle, locale)}, ${c(copy.realEstate.locationSeattleTitle, locale)}`}
                californiaAriaLabel={c(copy.realEstate.mapMarkerCaliforniaAria, locale)}
                floridaAriaLabel={c(copy.realEstate.mapMarkerFloridaAria, locale)}
                seattleAriaLabel={c(copy.realEstate.mapMarkerSeattleAria, locale)}
              />
            </div>
            <div className="lg:col-span-5">
                <div className="grid gap-4">
                <div className="card" id="california">
                  <h3 className="text-base font-semibold">{c(copy.realEstate.locationCaliforniaTitle, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{c(copy.realEstate.locationCaliforniaBody, locale)}</p>
                </div>
                <div className="card" id="florida">
                  <h3 className="text-base font-semibold">{c(copy.realEstate.locationFloridaTitle, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{c(copy.realEstate.locationFloridaBody, locale)}</p>
                </div>
                <div className="card" id="seattle">
                  <h3 className="text-base font-semibold">{c(copy.realEstate.locationSeattleTitle, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{c(copy.realEstate.locationSeattleBody, locale)}</p>
                </div>
                <div className="card">
                  <h3 className="text-base font-semibold">{c(copy.realEstate.ownerCtaTitle, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{c(copy.realEstate.ownerCtaBody, locale)}</p>
                  <div className="mt-4">
                    <a className="btn btn-primary w-full justify-center" href="mailto:hello@navivision.net">
                      {c(copy.realEstate.ownerCtaLink, locale)}
                    </a>
                  </div>
                  <p className="mt-3 text-xs text-muted">hello@navivision.net</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="faqs">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.realEstate.faqTitle, locale)}
            subtitle={c(copy.realEstate.faqSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4">
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.realEstate.faq1Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.realEstate.faq1A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.realEstate.faq2Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.realEstate.faq2A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.realEstate.faq3Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.realEstate.faq3A, locale)}</p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                {c(copy.realEstate.faq4Q, locale)}
              </summary>
              <p className="mt-3 text-sm text-muted">{c(copy.realEstate.faq4A, locale)}</p>
            </details>
          </div>
        </Container>
      </section>
    </div>
  );
}
