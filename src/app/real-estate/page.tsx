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
    title: c(copy.realEstate.metaTitle, locale),
    description: c(copy.realEstate.metaDescription, locale),
  };
}

export default async function RealEstatePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = await getServerLocale(searchParams);
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
            <Link className="btn btn-primary" href="/contact">
              {c(copy.realEstate.ctaPrimary, locale)}
            </Link>
            <Link className="btn btn-secondary" href="/portfolio#real-estate">
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
    </div>
  );
}
