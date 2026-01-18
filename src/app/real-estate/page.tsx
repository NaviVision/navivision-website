import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Real Estate",
  description:
    "NaviVision operates a long-term real estate portfolio with disciplined underwriting and operations.",
};

export default function RealEstatePage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Real Estate</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Long-term ownership, operated with care.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            We take an operator’s approach to real estate: conservative
            underwriting, proactive maintenance, and a commitment to the
            neighborhoods we’re part of.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Partnership inquiries
            </Link>
            <Link className="btn btn-secondary" href="/portfolio#real-estate">
              Real estate portfolio
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="How we operate"
            subtitle="Disciplined management that prioritizes durability."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Acquisition</h3>
              <p className="mt-2 text-sm text-muted">
                Conservative assumptions and clear improvement plans when we
                buy.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Operations</h3>
              <p className="mt-2 text-sm text-muted">
                Reliable maintenance, responsive communication, and proactive
                risk management.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Reporting</h3>
              <p className="mt-2 text-sm text-muted">
                Clear metrics and straightforward updates to support long-term
                decisions.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

