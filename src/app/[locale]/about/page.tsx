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
  const title = c(copy.about.metaTitle, locale);
  const description = c(copy.about.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/about"),
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);

  const focusLabels = {
    talent: c(copy.about.verticalTalentTitle, locale),
    software: c(copy.about.verticalSoftwareTitle, locale),
    realEstate: c(copy.about.verticalRealEstateTitle, locale),
    investments: c(copy.about.verticalInvestTitle, locale),
  } as const;

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

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.about.teamTitle, locale)}
            subtitle={c(copy.about.teamSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Annie Truong",
                initials: "AT",
                role: c(copy.about.memberAnnieRole, locale),
                focusAreas: [focusLabels.realEstate, focusLabels.talent],
                body: c(copy.about.memberAnnieBody, locale),
                email: "annie.truong@navivision.net",
                links: [
                  { href: "/real-estate", label: focusLabels.realEstate },
                  { href: "/talent-hiring", label: focusLabels.talent },
                ],
              },
              {
                name: "Greg William",
                initials: "GW",
                role: focusLabels.talent,
                focusAreas: [focusLabels.talent],
                body: c(copy.about.memberGregBody, locale),
                email: "greg.william@navivision.net",
                links: [{ href: "/talent-hiring", label: focusLabels.talent }],
              },
              {
                name: "Corey Somers",
                initials: "CS",
                role: focusLabels.software,
                focusAreas: [focusLabels.software],
                body: c(copy.about.memberCoreyBody, locale),
                email: "corey.somers@navivision.net",
                links: [{ href: "/custom-saas", label: focusLabels.software }],
              },
              {
                name: "Sam Patel",
                initials: "SP",
                role: focusLabels.investments,
                focusAreas: [focusLabels.investments],
                body: c(copy.about.memberSamBody, locale),
                email: "sam.patel@navivision.net",
                links: [{ href: "/investments", label: focusLabels.investments }],
              },
            ].map((person) => (
              <div key={person.name} className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-sm font-semibold text-foreground">
                    {person.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs font-medium text-muted">{person.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {person.focusAreas.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-border/70 bg-surface px-3 py-1 text-[11px] font-semibold text-foreground"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted">
                  {person.body}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {person.links.map((item) => (
                    <Link key={item.href} className="link" href={withLocale(locale, item.href)}>
                      {c(copy.about.linkExplore, locale)} {item.label}
                    </Link>
                  ))}
                  <a className="link" href={`mailto:${person.email}`} aria-label={person.email} title={person.email}>
                    {person.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
