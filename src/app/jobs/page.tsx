import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Browse open roles across NaviVision’s portfolio and hiring partners.",
};

const roles = [
  {
    title: "Software Engineer (Full-Stack)",
    location: "Remote / Hybrid",
    type: "Full-time",
    focus: "SaaS",
  },
  {
    title: "Operations Manager",
    location: "On-site / Hybrid",
    type: "Full-time",
    focus: "Portfolio Ops",
  },
  {
    title: "Real Estate Analyst",
    location: "Hybrid",
    type: "Full-time",
    focus: "Real Estate",
  },
  {
    title: "Recruiter / Talent Partner",
    location: "Remote",
    type: "Contract",
    focus: "Talent",
  },
] as const;

export default function JobsPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Jobs</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Open roles across our portfolio.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            This page is a lightweight starting point. If you don’t see a perfect
            match, reach out. Strong candidates are often considered for upcoming
            roles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Submit interest
            </Link>
            <Link className="btn btn-secondary" href="/for-talent">
              Candidate process
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Current openings"
            subtitle="Example roles to illustrate the kinds of teams we support."
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
                  <Link className="link" href="/contact">
                    Apply / inquire
                  </Link>
                  <Link className="link" href="/for-companies">
                    Hiring help
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
