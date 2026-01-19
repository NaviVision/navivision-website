import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy, jobRolesByLocale } from "@/content/copy";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { alternatesFor } from "@/lib/seo";
import { withLocale } from "@/lib/urls";

export const dynamicParams = false;

export function generateStaticParams() {
  return jobRolesByLocale["en-US"].map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const role = jobRolesByLocale[locale].find((item) => item.slug === slug);
  if (!role) return {};

  return {
    title: role.title,
    description: role.summary,
    alternates: alternatesFor(locale, `/jobs/${role.slug}`),
  };
}

export default async function JobRolePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const role = jobRolesByLocale[locale].find((item) => item.slug === slug);
  if (!role) notFound();

  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">{c(copy.jobs.detailKicker, locale)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {role.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {role.focus} • {role.type} • {role.location}
          </p>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">{role.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href="mailto:hello@navivision.net">
              {c(copy.jobs.detailCtaPrimary, locale)}
            </a>
            <Link className="btn btn-secondary" href={withLocale(locale, "/jobs")}>
              {c(copy.jobs.detailCtaSecondary, locale)}
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted">hello@navivision.net</p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="grid gap-10">
                <div>
                  <SectionHeading
                    title={c(copy.jobs.responsibilitiesTitle, locale)}
                    subtitle={c(copy.jobs.responsibilitiesSubtitle, locale)}
                  />
                  <ul className="mt-6 grid gap-2 text-sm text-muted">
                    {role.responsibilities.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading
                    title={c(copy.jobs.requirementsTitle, locale)}
                    subtitle={c(copy.jobs.requirementsSubtitle, locale)}
                  />
                  <ul className="mt-6 grid gap-2 text-sm text-muted">
                    {role.requirements.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {role.niceToHave.length ? (
                  <div>
                    <SectionHeading
                      title={c(copy.jobs.niceToHaveTitle, locale)}
                      subtitle={c(copy.jobs.niceToHaveSubtitle, locale)}
                    />
                    <ul className="mt-6 grid gap-2 text-sm text-muted">
                      {role.niceToHave.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div>
                  <SectionHeading
                    title={c(copy.jobs.successTitle, locale)}
                    subtitle={c(copy.jobs.successSubtitle, locale)}
                  />
                  <ul className="mt-6 grid gap-2 text-sm text-muted">
                    {role.success.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="card">
                <h2 className="text-base font-semibold">{c(copy.jobs.detailSidebarTitle, locale)}</h2>
                <dl className="mt-4 grid gap-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">{c(copy.jobs.detailSidebarLocation, locale)}</dt>
                    <dd className="font-medium text-foreground">{role.location}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">{c(copy.jobs.detailSidebarType, locale)}</dt>
                    <dd className="font-medium text-foreground">{role.type}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">{c(copy.jobs.detailSidebarFocus, locale)}</dt>
                    <dd className="font-medium text-foreground">{role.focus}</dd>
                  </div>
                </dl>
                <div className="mt-6 grid gap-3">
                  <a className="btn btn-primary w-full justify-center" href="mailto:hello@navivision.net">
                    {c(copy.jobs.detailSidebarCtaPrimary, locale)}
                  </a>
                  <Link className="btn btn-secondary w-full justify-center" href={withLocale(locale, "/contact")}>
                    {c(copy.jobs.detailSidebarCtaSecondary, locale)}
                  </Link>
                </div>
                <p className="mt-3 text-xs text-muted">hello@navivision.net</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

