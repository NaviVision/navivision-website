import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "NaviVision invests selectively across startups and long-term operating assets.",
};

export default function InvestmentsPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Investments</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Targeted bets, backed by operators.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            We invest with a long-term mindset and a preference for teams who
            ship. When it’s a fit, we contribute operational support—especially
            around product, hiring, and go-to-market clarity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/contact">
              Share your deck
            </Link>
            <Link className="btn btn-secondary" href="/portfolio#investing">
              Investing approach
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="What we look for"
            subtitle="A simple filter: integrity, speed, and customer pull."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold">Team</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>Founder-market fit and high ownership</li>
                <li>Speed of iteration and learning loops</li>
                <li>Clear communication and integrity</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Business</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted">
                <li>Strong customer pain and willingness to pay</li>
                <li>Durable unit economics and thoughtful growth</li>
                <li>Room to build defensibility over time</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

