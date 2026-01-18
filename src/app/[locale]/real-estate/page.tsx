import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy } from "@/content/copy";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { withLocale } from "@/lib/urls";

function PropertiesMap({ title, description }: { title: string; description: string }) {
  return (
    <figure className="card overflow-hidden">
      <svg
        role="img"
        viewBox="0 0 560 340"
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

        <rect x="0" y="0" width="560" height="340" rx="20" fill="url(#nv-map-bg)" />

        <path
          d="M66 130l26-34 44-18 42 10 36 8 40-14 62 18 36-4 38 16 22 34-10 32 18 24-18 30-44 16-30 34-70 10-70-18-44 8-38-18-34 8-42-28 8-40-28-30 18-34Z"
          fill="rgba(255,255,255,0.65)"
          stroke="rgba(17,24,39,0.10)"
          strokeWidth="2"
        />

        <g filter="url(#nv-shadow)">
          <g transform="translate(150 175)">
            <circle cx="0" cy="0" r="16" fill="rgb(var(--brand-blue))" />
            <circle cx="0" cy="0" r="10" fill="url(#nv-pin)" />
            <path d="M0 18c8 0 13 6 13 12 0 10-13 24-13 24S-13 40-13 30c0-6 5-12 13-12Z" fill="rgb(var(--brand-blue))" opacity="0.95" />
            <text x="22" y="6" fontSize="14" fill="rgb(var(--foreground))" fontWeight="600">
              CA
            </text>
          </g>

          <g transform="translate(410 230)">
            <circle cx="0" cy="0" r="16" fill="rgb(var(--brand-green))" />
            <circle cx="0" cy="0" r="10" fill="url(#nv-pin)" />
            <path d="M0 18c8 0 13 6 13 12 0 10-13 24-13 24S-13 40-13 30c0-6 5-12 13-12Z" fill="rgb(var(--brand-green))" opacity="0.95" />
            <text x="22" y="6" fontSize="14" fill="rgb(var(--foreground))" fontWeight="600">
              FL
            </text>
          </g>

          <g transform="translate(250 118)">
            <circle cx="0" cy="0" r="16" fill="rgb(var(--brand-blue))" opacity="0.85" />
            <circle cx="0" cy="0" r="10" fill="url(#nv-pin)" />
            <path d="M0 18c8 0 13 6 13 12 0 10-13 24-13 24S-13 40-13 30c0-6 5-12 13-12Z" fill="rgb(var(--brand-blue))" opacity="0.9" />
            <text x="22" y="6" fontSize="14" fill="rgb(var(--foreground))" fontWeight="600">
              SEA
            </text>
          </g>
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
  return {
    title: c(copy.realEstate.metaTitle, locale),
    description: c(copy.realEstate.metaDescription, locale),
    alternates: alternatesFor(locale, "/real-estate"),
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
            <Link className="btn btn-secondary" href={withLocale(locale, "/portfolio#real-estate")}>
              {c(copy.realEstate.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
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

      <section className="border-t border-border/70 bg-surface">
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
              />
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <div className="card">
                  <h3 className="text-base font-semibold">{c(copy.realEstate.locationCaliforniaTitle, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{c(copy.realEstate.locationCaliforniaBody, locale)}</p>
                </div>
                <div className="card">
                  <h3 className="text-base font-semibold">{c(copy.realEstate.locationFloridaTitle, locale)}</h3>
                  <p className="mt-2 text-sm text-muted">{c(copy.realEstate.locationFloridaBody, locale)}</p>
                </div>
                <div className="card">
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
    </div>
  );
}
