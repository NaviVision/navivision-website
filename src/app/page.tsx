import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getServerLocale } from "@/lib/locale";
import { c, copy } from "@/content/copy";

export default async function Home({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = await getServerLocale(searchParams);
  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(90rem_50rem_at_10%_-10%,rgba(32,160,224,0.26),transparent),radial-gradient(80rem_40rem_at_110%_10%,rgba(64,160,64,0.18),transparent)]">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-muted">
              {c(copy.home.heroKicker, locale)}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {c(copy.home.heroTitle, locale)}
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted">
              {c(copy.home.heroSubtitle, locale)}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className="btn btn-primary" href="/contact">
                {c(copy.home.ctaPrimary, locale)}
              </Link>
              <Link className="btn btn-secondary" href="/portfolio">
                {c(copy.home.ctaSecondary, locale)}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title={c(copy.home.whatWeDoTitle, locale)}
            subtitle={c(copy.home.whatWeDoSubtitle, locale)}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.home.cardTalentTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.home.cardTalentBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href="/talent-hiring">
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.home.cardSoftwareTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.home.cardSoftwareBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href="/custom-saas">
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.home.cardRealEstateTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.home.cardRealEstateBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href="/real-estate">
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">
                {c(copy.home.cardInvestmentsTitle, locale)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {c(copy.home.cardInvestmentsBody, locale)}
              </p>
              <div className="mt-4">
                <Link className="link" href="/investments">
                  {c(copy.home.cardExplore, locale)}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                title={c(copy.home.holdingTitle, locale)}
                subtitle={c(copy.home.holdingSubtitle, locale)}
              />
              <ul className="mt-8 grid gap-4">
                <li className="card">
                  <p className="text-sm font-semibold">{c(copy.home.buildTitle, locale)}</p>
                  <p className="mt-2 text-sm text-muted">
                    {c(copy.home.buildBody, locale)}
                  </p>
                </li>
                <li className="card">
                  <p className="text-sm font-semibold">{c(copy.home.operateTitle, locale)}</p>
                  <p className="mt-2 text-sm text-muted">
                    {c(copy.home.operateBody, locale)}
                  </p>
                </li>
                <li className="card">
                  <p className="text-sm font-semibold">{c(copy.home.investTitle, locale)}</p>
                  <p className="mt-2 text-sm text-muted">
                    {c(copy.home.investBody, locale)}
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="card bg-[linear-gradient(135deg,rgba(99,102,241,0.10),rgba(16,185,129,0.10))]">
                <h3 className="text-base font-semibold">
                  {c(copy.home.workWithTitle, locale)}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {c(copy.home.workWithBody, locale)}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link className="btn btn-primary" href="/jobs">
                    {c(copy.home.workWithCtaJobs, locale)}
                  </Link>
                  <Link className="btn btn-secondary" href="/contact">
                    {c(copy.home.workWithCtaContact, locale)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
