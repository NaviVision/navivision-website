import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NaviVision for hiring support, partnerships, real estate, or investment inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Contact</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s talk.
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            Use the form below to reach our team. If you’re a company looking to
            hire, a candidate exploring roles, or a founder seeking partnership,
            include the basics and we’ll follow up.
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                title="What should you include?"
                subtitle="A few details help us route your message quickly."
              />
              <ul className="mt-8 grid gap-3 text-sm text-muted">
                <li>
                  <span className="font-semibold text-foreground">Topic:</span>{" "}
                  hiring, talent, software, real estate, or investing
                </li>
                <li>
                  <span className="font-semibold text-foreground">Timeline:</span>{" "}
                  when you need help or want to connect
                </li>
                <li>
                  <span className="font-semibold text-foreground">Context:</span>{" "}
                  links, role descriptions, or a short overview
                </li>
              </ul>
              <div className="mt-8 card">
                <p className="text-sm font-semibold">Prefer a quick start?</p>
                <p className="mt-2 text-sm text-muted">
                  For hiring requests, share your role requirements on{" "}
                  <span className="font-medium text-foreground">
                    For Companies
                  </span>
                  . For candidates, browse{" "}
                  <span className="font-medium text-foreground">Jobs</span>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="card grid gap-4" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">Name</span>
                    <input
                      className="h-11 rounded-xl border border-border/80 bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">Email</span>
                    <input
                      className="h-11 rounded-xl border border-border/80 bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-sm">
                  <span className="font-medium">Topic</span>
                  <select
                    className="h-11 rounded-xl border border-border/80 bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40"
                    name="topic"
                    defaultValue="hiring"
                  >
                    <option value="hiring">Hiring / Companies</option>
                    <option value="talent">Talent / Candidates</option>
                    <option value="software">Software / SaaS</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="investing">Investing</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="font-medium">Message</span>
                  <textarea
                    className="min-h-32 rounded-xl border border-border/80 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    name="message"
                    placeholder="Tell us what you're working on and how we can help."
                  />
                </label>
                <button className="btn btn-primary justify-center" type="submit">
                  Send message
                </button>
                <p className="text-xs text-muted">
                  This form is currently in preview mode and doesn’t submit
                  anywhere yet.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
