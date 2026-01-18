import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getServerLocale } from "@/lib/locale";
import { c, copy } from "@/content/copy";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = await getServerLocale(searchParams);
  return {
    title: c(copy.investments.metaTitle, locale),
    description: c(copy.investments.metaDescription, locale),
  };
}

export default async function InvestmentsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = await getServerLocale(searchParams);
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
            <Link className="btn btn-primary" href="/contact">
              {c(copy.investments.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href="/portfolio#investing">
              {c(copy.investments.ctaSecondary, locale)}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
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
    </div>
  );
}
