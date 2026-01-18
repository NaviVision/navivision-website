import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(90rem_50rem_at_10%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(80rem_40rem_at_110%_10%,rgba(16,185,129,0.20),transparent)]">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-muted">
              Diversified operating + investment company
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              NaviVision builds, operates, and invests across talent, software,
              real estate, and startups.
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted">
              We partner with teams to hire exceptional people, launch products,
              scale SaaS businesses, and operate a disciplined real estate
              portfolio, while investing in founders we believe in.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className="btn btn-primary" href="/contact">
                Start a conversation
              </Link>
              <Link className="btn btn-secondary" href="/portfolio">
                Explore our portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="What we do"
            subtitle="Four verticals, one operating mindset."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <h3 className="text-base font-semibold">Talent &amp; Hiring</h3>
              <p className="mt-2 text-sm text-muted">
                Hiring support for companies and career opportunities for
                technical and operational talent.
              </p>
              <div className="mt-4">
                <Link className="link" href="/talent-hiring">
                  Explore
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Custom SaaS</h3>
              <p className="mt-2 text-sm text-muted">
                We build and operate software with a focus on durability and
                customer outcomes.
              </p>
              <div className="mt-4">
                <Link className="link" href="/custom-saas">
                  Explore
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Real Estate</h3>
              <p className="mt-2 text-sm text-muted">
                Long-term ownership with an operator’s attention to maintenance,
                tenants, and neighborhoods.
              </p>
              <div className="mt-4">
                <Link className="link" href="/real-estate">
                  Explore
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Investments</h3>
              <p className="mt-2 text-sm text-muted">
                Targeted bets in early-stage teams, with a preference for
                founders who ship.
              </p>
              <div className="mt-4">
                <Link className="link" href="/investments">
                  Explore
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
                title="A modern holding company"
                subtitle="We’re operators first, built for compounding."
              />
              <ul className="mt-8 grid gap-4">
                <li className="card">
                  <p className="text-sm font-semibold">Build</p>
                  <p className="mt-2 text-sm text-muted">
                    Launch products and internal tools, then iterate with
                    measurable feedback loops.
                  </p>
                </li>
                <li className="card">
                  <p className="text-sm font-semibold">Operate</p>
                  <p className="mt-2 text-sm text-muted">
                    Stable processes, reliable systems, and attention to unit
                    economics across businesses.
                  </p>
                </li>
                <li className="card">
                  <p className="text-sm font-semibold">Invest</p>
                  <p className="mt-2 text-sm text-muted">
                    Capital and support for businesses with durable advantages
                    and high-integrity teams.
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="card bg-[linear-gradient(135deg,rgba(99,102,241,0.10),rgba(16,185,129,0.10))]">
                <h3 className="text-base font-semibold">Work with NaviVision</h3>
                <p className="mt-2 text-sm text-muted">
                  Whether you’re hiring, looking for your next role, or exploring
                  partnerships, start here.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link className="btn btn-primary" href="/jobs">
                    View open roles
                  </Link>
                  <Link className="btn btn-secondary" href="/contact">
                    Contact us
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
