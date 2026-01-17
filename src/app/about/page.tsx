import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NaviVision LLC—our operating focus across talent, software, real estate, and startup investing.",
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
            NaviVision LLC is a diversified operating and investment company.
            We build and support businesses that can compound over time—through
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
              <h3 className="text-base font-semibold">Software &amp; SaaS</h3>
              <p className="mt-2 text-sm text-muted">
                We build products and operate software businesses, prioritizing
                customer value, reliability, and steady improvements.
              </p>
              <div className="mt-4">
                <Link className="link" href="/portfolio">
                  Explore the portfolio
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
                <Link className="link" href="/portfolio#real-estate">
                  Operating principles
                </Link>
              </div>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Startup Investing</h3>
              <p className="mt-2 text-sm text-muted">
                We invest selectively in founders building durable businesses
                and provide support where we have earned experience.
              </p>
              <div className="mt-4">
                <Link className="link" href="/portfolio#investing">
                  Our thesis
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
