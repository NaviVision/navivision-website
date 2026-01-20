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
                focus: c(copy.about.verticalTalentTitle, locale),
                body: c(copy.about.memberAnnieBody, locale),
                href: "/talent-hiring",
              },
              {
                name: "Greg William",
                initials: "GW",
                focus: c(copy.about.verticalSoftwareTitle, locale),
                body: c(copy.about.memberGregBody, locale),
                href: "/custom-saas",
              },
              {
                name: "Corey Somers",
                initials: "CS",
                focus: c(copy.about.verticalRealEstateTitle, locale),
                body: c(copy.about.memberCoreyBody, locale),
                href: "/real-estate",
              },
              {
                name: "Sam Patel",
                initials: "SP",
                focus: c(copy.about.verticalInvestTitle, locale),
                body: c(copy.about.memberSamBody, locale),
                href: "/investments",
              },
            ].map((person) => (
              <div key={person.name} className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-sm font-semibold text-foreground">
                    {person.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs font-medium text-muted">{person.focus}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">
                  {person.body}
                </p>
                <div className="mt-4">
                  <Link className="link" href={withLocale(locale, person.href)}>
                    {c(copy.about.linkExplore, locale)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
