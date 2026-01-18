import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for NaviVision.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Terms</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            These terms are a simple placeholder for a marketing site. Update
            them to reflect your actual services, policies, and legal
            requirements.
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-lg font-semibold">Use of site</h2>
            <p className="mt-3 text-sm text-muted">
              You may use this site for informational purposes. Do not misuse
              the site or attempt to disrupt its operation.
            </p>

            <h2 className="mt-8 text-lg font-semibold">No warranty</h2>
            <p className="mt-3 text-sm text-muted">
              The site is provided “as is” without warranties of any kind.
            </p>

            <h2 className="mt-8 text-lg font-semibold">Contact</h2>
            <p className="mt-3 text-sm text-muted">
              For questions, use the{" "}
              <a
                className="font-semibold text-foreground hover:text-primary"
                href="/contact"
              >
                contact page
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
