import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NaviVision, our operating focus across talent, software, real estate, and startup investing.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">About</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            We’re a hands-on operator with a long-term view.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            NaviVision is a diversified operating and investment company. We
            build and support businesses that can compound over time through
            great teams, sound economics, and disciplined execution.
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Our focus"
            subtitle="Each vertical stands on its own, but we share playbooks across all of them."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">Talent &amp; Hiring</h3>
              <p className="mt-2 text-sm text-muted">
                We help companies build capable teams and connect candidates with
                roles where they can do their best work.
              </p>
              <div className="mt-4 flex gap-4">
                <Link className="link" href="/for-companies">
                  For companies
                </Link>
                <Link className="link" href="/for-talent">
                  For talent
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Custom SaaS</h3>
              <p className="mt-2 text-sm text-muted">
                We build products and operate software businesses, prioritizing
                customer value, reliability, and steady improvements.
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
                We own and operate real estate with a focus on healthy tenant
                relationships and well-maintained assets.
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
                We invest selectively in founders building durable businesses
                and provide support where we have earned experience.
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

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Team"
            subtitle="Operator-led and built for long-term compounding."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Annie Truong", initials: "AT" },
              { name: "Greg William", initials: "GW" },
              { name: "Corey Somers", initials: "CS" },
              { name: "Sam Patel", initials: "SP" },
            ].map((person) => (
              <div key={person.name} className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-sm font-semibold text-foreground">
                    {person.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs text-muted">NaviVision</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Profile coming soon.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
