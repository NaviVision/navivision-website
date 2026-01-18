import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for NaviVision.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Privacy</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            This site is a marketing experience for NaviVision. We keep data
            collection minimal and use it to operate and improve the site.
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="card">
            <h2 className="text-lg font-semibold">Information we collect</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>Information you provide via contact forms (if enabled).</li>
              <li>Basic, aggregated usage metrics (if analytics are enabled).</li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold">How we use information</h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>To respond to requests and inquiries.</li>
              <li>To operate, secure, and improve our services.</li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold">Contact</h2>
            <p className="mt-3 text-sm text-muted">
              Questions about this policy can be sent through the{" "}
              <a className="font-semibold text-foreground hover:text-primary" href="/contact">
                contact page
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-muted">
              This policy is a starting template and should be reviewed by
              counsel before production use.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
