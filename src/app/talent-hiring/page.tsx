import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Talent & Hiring",
  description:
    "NaviVision supports hiring for companies and helps talent find roles across our portfolio and partners.",
};

export default function TalentHiringPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Talent &amp; Hiring</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Hiring support for teams—and opportunities for talent.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            We run a high-signal process designed to move quickly without
            sacrificing quality. Whether you’re building a team or looking for
            your next role, we’ll meet you with clarity and follow-through.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Talk to us
            </Link>
            <Link className="btn btn-secondary" href="/jobs">
              View open roles
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Built for speed and signal"
            subtitle="Structured screening and a human candidate experience."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Clear scorecards</h3>
              <p className="mt-2 text-sm text-muted">
                We align on what “great” looks like and evaluate consistently.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Fast iteration</h3>
              <p className="mt-2 text-sm text-muted">
                Weekly reporting, calibration, and message testing to improve
                response rates.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Respect for time</h3>
              <p className="mt-2 text-sm text-muted">
                Fewer steps, better context, and timely communication.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading title="Explore" subtitle="Choose your path." />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">For Companies</h3>
              <p className="mt-2 text-sm text-muted">
                Role-based search, pipeline building, and hiring support.
              </p>
              <div className="mt-4">
                <Link className="link" href="/for-companies">
                  Hiring support
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">For Talent</h3>
              <p className="mt-2 text-sm text-muted">
                Browse roles and connect with teams we support.
              </p>
              <div className="mt-4">
                <Link className="link" href="/for-talent">
                  Candidate process
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Jobs</h3>
              <p className="mt-2 text-sm text-muted">
                Open roles across our portfolio and partners.
              </p>
              <div className="mt-4">
                <Link className="link" href="/jobs">
                  View open roles
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

