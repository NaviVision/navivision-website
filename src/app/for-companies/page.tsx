import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "For Companies",
  description:
    "Hire with confidence—NaviVision supports sourcing, screening, and hiring for teams that need execution-ready talent.",
};

export default function ForCompaniesPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">For Companies</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Hiring support that’s built for speed and signal.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            NaviVision helps organizations find and hire people who can execute.
            We focus on clarity, structured screening, and a high-touch process
            that respects both your time and the candidate experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Request hiring support
            </Link>
            <Link className="btn btn-secondary" href="/portfolio">
              Learn about our operators
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Engagement options"
            subtitle="Flexible models—from urgent searches to ongoing pipelines."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Role-based search</h3>
              <p className="mt-2 text-sm text-muted">
                Targeted sourcing and screening for a specific role with clear
                scorecards and weekly updates.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Pipeline build</h3>
              <p className="mt-2 text-sm text-muted">
                Build a bench of pre-vetted candidates for recurring roles and
                forecasted hiring plans.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Team augmentation</h3>
              <p className="mt-2 text-sm text-muted">
                Support short-term capacity needs with candidates who can start
                quickly and ramp fast.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to hire?
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm text-muted sm:text-base">
              Tell us what you’re building, what “great” looks like for the role,
              and your timeline. We’ll respond with the next best step.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="btn btn-primary" href="/contact">
                Contact us
              </Link>
              <Link className="btn btn-secondary" href="/jobs">
                View roles we’re hiring for
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
