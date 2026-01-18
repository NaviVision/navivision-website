import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy, jobRolesByLocale } from "@/content/copy";
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
    title: c(copy.jobs.metaTitle, locale),
    description: c(copy.jobs.metaDescription, locale),
    alternates: alternatesFor(locale, "/jobs"),
  };
}

export default async function JobsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const roles = jobRolesByLocale[locale];

  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">{c(copy.jobs.kicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.jobs.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.jobs.intro, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href={withLocale(locale, "/contact")}>
              {c(copy.jobs.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href={withLocale(locale, "/for-talent")}>
              {c(copy.jobs.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.jobs.sectionTitle, locale)}
            subtitle={c(copy.jobs.sectionSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{role.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {role.focus} • {role.type}
                    </p>
                  </div>
                  <p className="text-sm text-muted">{role.location}</p>
                </div>
                <div className="mt-5 flex gap-4">
                  <Link className="link" href={withLocale(locale, "/contact")}>
                    {c(copy.jobs.applyLink, locale)}
                  </Link>
                  <Link className="link" href={withLocale(locale, "/for-companies")}>
                    {c(copy.jobs.hiringHelpLink, locale)}
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
