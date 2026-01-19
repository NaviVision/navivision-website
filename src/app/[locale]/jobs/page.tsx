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

  const roleGroups = [
    { key: "software", title: c(copy.jobs.groupSoftware, locale) },
    { key: "operations", title: c(copy.jobs.groupOperations, locale) },
    { key: "real-estate", title: c(copy.jobs.groupRealEstate, locale) },
    { key: "talent", title: c(copy.jobs.groupTalent, locale) },
  ] as const;

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
            <Link className="btn btn-secondary" href={withLocale(locale, "/talent-hiring/candidate-process")}>
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
          <div className="mt-10 grid gap-10">
            {roleGroups.map((group) => {
              const groupRoles = roles.filter((role) => role.category === group.key);
              if (groupRoles.length === 0) return null;

              return (
                <div key={group.key}>
                  <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    {groupRoles.map((role) => (
                      <div key={role.slug} className="card">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h4 className="text-base font-semibold">{role.title}</h4>
                            <p className="mt-1 text-sm text-muted">
                              {role.focus} • {role.type}
                            </p>
                          </div>
                          <p className="text-sm text-muted">{role.location}</p>
                        </div>
                        <p className="mt-4 text-sm text-muted">{role.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                          <Link className="link" href={withLocale(locale, `/jobs/${role.slug}`)}>
                            {c(copy.jobs.detailsLink, locale)}
                          </Link>
                          <a className="link" href="mailto:hello@navivision.net">
                            {c(copy.jobs.applyLink, locale)}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.jobs.expectTitle, locale)}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>{c(copy.jobs.expectLi1, locale)}</li>
                <li>{c(copy.jobs.expectLi2, locale)}</li>
                <li>{c(copy.jobs.expectLi3, locale)}</li>
                <li>{c(copy.jobs.expectLi4, locale)}</li>
              </ul>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/talent-hiring/candidate-process")}>
                  {c(copy.jobs.candidateProcessLink, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">{c(copy.jobs.hiringTitle, locale)}</h3>
              <p className="mt-2 text-sm text-muted">{c(copy.jobs.hiringBody, locale)}</p>
              <div className="mt-4">
                <Link className="link" href={withLocale(locale, "/for-companies")}>
                  {c(copy.jobs.hiringHelpLink, locale)}
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">hello@navivision.net</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
