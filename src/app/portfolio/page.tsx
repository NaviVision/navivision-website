import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "An overview of NaviVision’s operating focus across software, real estate, and investments.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Portfolio</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Businesses we build, operate, and support.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            NaviVision has expansive ownership across a range of companies. We
            also operate a real estate portfolio and invest in early-stage
            startups.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Partnership inquiries
            </Link>
            <Link className="btn btn-secondary" href="/about">
              About NaviVision
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="software">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Software & SaaS"
            subtitle="Products that solve real operational problems."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Operating systems</h3>
              <p className="mt-2 text-sm text-muted">
                Internal and customer-facing software designed to automate
                workflow and improve visibility.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">SaaS products</h3>
              <p className="mt-2 text-sm text-muted">
                Subscription businesses with a focus on retention, reliability,
                and measurable outcomes.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Services-to-software</h3>
              <p className="mt-2 text-sm text-muted">
                We turn repeatable service playbooks into software products when
                the economics and user demand align.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface" id="real-estate">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Real Estate"
            subtitle="Long-term ownership with an operator’s discipline."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Acquisition</h3>
              <p className="mt-2 text-sm text-muted">
                Conservative underwriting with a preference for stable demand
                drivers and clear path-to-improvement.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Operations</h3>
              <p className="mt-2 text-sm text-muted">
                Reliable maintenance, responsive communication, and a proactive
                approach to preserving value.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Portfolio management</h3>
              <p className="mt-2 text-sm text-muted">
                A long-term mindset paired with clear reporting and risk
                controls.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70" id="investing">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="Startup Investing"
            subtitle="We invest selectively and support founders who ship."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">What we look for</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>Clear customer pain and strong founder-market fit</li>
                <li>Ability to iterate quickly and learn from the market</li>
                <li>Durable unit economics and responsible growth</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">How we help</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>Go-to-market feedback loops and positioning</li>
                <li>Hiring support for early key roles</li>
                <li>Operator perspective on execution and systems</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
