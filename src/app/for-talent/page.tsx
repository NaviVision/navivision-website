import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "For Talent",
  description:
    "Find your next role. NaviVision connects talented people with teams building meaningful products and operations.",
};

export default function ForTalentPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">For Talent</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Work that respects craft, clarity, and growth.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            We partner with teams that value strong communication and ownership.
            If you’re looking for your next opportunity, browse open roles or
            reach out to share what you’re looking for.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-primary" href="/jobs">
              Browse open roles
            </Link>
            <Link className="btn btn-secondary" href="/contact">
              Introduce yourself
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            title="How we work with candidates"
            subtitle="A straightforward process designed to minimize back-and-forth."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-semibold">Clarity up front</h3>
              <p className="mt-2 text-sm text-muted">
                You’ll know the role expectations, compensation range, and
                interview steps early.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Signal over noise</h3>
              <p className="mt-2 text-sm text-muted">
                Structured screening that focuses on real work, not trivia or
                endless rounds.
              </p>
            </div>
            <div className="card">
              <h3 className="text-base font-semibold">Respectful follow-through</h3>
              <p className="mt-2 text-sm text-muted">
                Timely feedback, clear next steps, and a process that treats your
                time as valuable.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
