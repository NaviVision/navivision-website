import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Custom SaaS",
  description:
    "NaviVision builds and operates custom software and SaaS products with an operator’s focus on durability and outcomes.",
};

export default function CustomSaasPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Custom SaaS</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Build software that compounds.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            We design and build custom software, often as a path from internal
            tools to product. Our approach is pragmatic: ship quickly, measure
            impact, and invest in reliability.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Discuss a build
            </Link>
            <Link className="btn btn-secondary" href="/portfolio#software">
              Software portfolio
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="What we build"
            subtitle="From internal tooling to customer-facing products."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Internal operating tools</h3>
              <p className="mt-2 text-sm text-muted">
                Dashboards, automations, and systems that remove manual work and
                improve visibility.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Customer portals</h3>
              <p className="mt-2 text-sm text-muted">
                Secure, modern experiences that make your service feel like
                product.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">SaaS products</h3>
              <p className="mt-2 text-sm text-muted">
                Subscription software designed for retention, reliability, and
                measurable outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="How we engage"
            subtitle="A focused, operator-led process."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Discovery sprint</h3>
              <p className="mt-2 text-sm text-muted">
                Align on users, workflows, constraints, and success metrics.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Build + ship</h3>
              <p className="mt-2 text-sm text-muted">
                Deliver in small increments, validate quickly, and keep scope
                honest.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Operate</h3>
              <p className="mt-2 text-sm text-muted">
                Reliability, monitoring, security basics, and a plan to reduce
                support load.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
