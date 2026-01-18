import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getServerLocale } from "@/lib/locale";
import { c, copy } from "@/content/copy";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = await getServerLocale(searchParams);
  return {
    title: c(copy.contact.metaTitle, locale),
    description: c(copy.contact.metaDescription, locale),
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const locale = await getServerLocale(searchParams);
  return (
    <div>
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">Contact</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.contact.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.contact.intro, locale)}
          </p>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                title={c(copy.contact.includeTitle, locale)}
                subtitle={c(copy.contact.includeSubtitle, locale)}
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
                <p className="text-sm font-semibold">{c(copy.contact.hintTitle, locale)}</p>
                <p className="mt-2 text-sm text-muted">
                  {c(copy.contact.hintBody, locale)}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="card grid gap-4" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">{c(copy.contact.formName, locale)}</span>
                    <input
                      className="h-11 rounded-xl border border-border/80 bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">{c(copy.contact.formEmail, locale)}</span>
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
                  <span className="font-medium">{c(copy.contact.formTopic, locale)}</span>
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
                  <span className="font-medium">{c(copy.contact.formMessage, locale)}</span>
                  <textarea
                    className="min-h-32 rounded-xl border border-border/80 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    name="message"
                    placeholder="Tell us what you're working on and how we can help."
                  />
                </label>
                <button className="btn btn-primary justify-center" type="submit">
                  {c(copy.contact.formSend, locale)}
                </button>
                <p className="text-xs text-muted">
                  {c(copy.contact.formPreview, locale)}
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
