import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { c, copy } from "@/content/copy";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { alternatesFor, ogImageUrl } from "@/lib/seo";
import { submitContact } from "./actions";
import { ContactSuccessTracker } from "./ContactSuccessTracker";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const title = c(copy.contact.metaTitle, locale);
  const description = c(copy.contact.metaDescription, locale);
  const imageUrl = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    alternates: alternatesFor(locale, "/contact"),
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  const query = (await searchParams) ?? {};
  const status = typeof query.status === "string" ? query.status : undefined;

  return (
    <div>
      <ContactSuccessTracker status={status} />
      <section className="bg-surface">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-medium text-muted">
            {c(copy.contact.kicker, locale)}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {c(copy.contact.title, locale)}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted sm:text-lg">
            {c(copy.contact.intro, locale)}
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm shadow-sm">
            <p className="font-medium text-foreground">{c(copy.contact.directEmailTitle, locale)}</p>
            <a
              className="link"
              href="mailto:hello@navivision.net"
              aria-label={c(copy.contact.directEmailBody, locale)}
            >
              hello@navivision.net
            </a>
          </div>
        </Container>
      </section>

      <section className="border-t border-border/70">
        <Container className="py-14 sm:py-20">
          {status === "sent" ? (
            <div
              className="mb-10 rounded-2xl border border-border/70 bg-surface px-5 py-4"
              role="status"
              aria-live="polite"
            >
              <p className="text-sm font-semibold text-foreground">
                {c(copy.contact.statusSentTitle, locale)}
              </p>
              <p className="mt-1 text-sm text-muted">{c(copy.contact.statusSentBody, locale)}</p>
            </div>
          ) : null}
          {status === "invalid" ? (
            <div
              className="mb-10 rounded-2xl border border-border/70 bg-surface px-5 py-4"
              role="alert"
              aria-live="assertive"
            >
              <p className="text-sm font-semibold text-foreground">
                {c(copy.contact.statusInvalidTitle, locale)}
              </p>
              <p className="mt-1 text-sm text-muted">{c(copy.contact.statusInvalidBody, locale)}</p>
            </div>
          ) : null}
          {status === "error" ? (
            <div
              className="mb-10 rounded-2xl border border-border/70 bg-surface px-5 py-4"
              role="alert"
              aria-live="assertive"
            >
              <p className="text-sm font-semibold text-foreground">
                {c(copy.contact.statusErrorTitle, locale)}
              </p>
              <p className="mt-1 text-sm text-muted">{c(copy.contact.statusErrorBody, locale)}</p>
            </div>
          ) : null}

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                title={c(copy.contact.includeTitle, locale)}
                subtitle={c(copy.contact.includeSubtitle, locale)}
              />
              <ul className="mt-8 grid gap-3 text-sm text-muted">
                <li>
                  <span className="font-semibold text-foreground">
                    {c(copy.contact.bulletTopicLabel, locale)}
                  </span>{" "}
                  {c(copy.contact.bulletTopicValue, locale)}
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    {c(copy.contact.bulletTimelineLabel, locale)}
                  </span>{" "}
                  {c(copy.contact.bulletTimelineValue, locale)}
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    {c(copy.contact.bulletContextLabel, locale)}
                  </span>{" "}
                  {c(copy.contact.bulletContextValue, locale)}
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
              <form className="card grid gap-4" action={submitContact}>
                <input type="hidden" name="locale" value={locale} />
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">{c(copy.contact.formName, locale)}</span>
                    <input
                      className="h-11 rounded-xl border border-border/80 bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40"
                      name="name"
                      autoComplete="name"
                      placeholder={c(copy.contact.placeholderName, locale)}
                      required
                      maxLength={120}
                    />
                  </label>
                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">{c(copy.contact.formEmail, locale)}</span>
                    <input
                      className="h-11 rounded-xl border border-border/80 bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={c(copy.contact.placeholderEmail, locale)}
                      required
                      maxLength={160}
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
                    <option value="hiring">{c(copy.contact.topicHiring, locale)}</option>
                    <option value="talent">{c(copy.contact.topicTalent, locale)}</option>
                    <option value="software">{c(copy.contact.topicSoftware, locale)}</option>
                    <option value="real-estate">{c(copy.contact.topicRealEstate, locale)}</option>
                    <option value="investing">{c(copy.contact.topicInvesting, locale)}</option>
                    <option value="other">{c(copy.contact.topicOther, locale)}</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="font-medium">{c(copy.contact.formMessage, locale)}</span>
                  <textarea
                    className="min-h-32 rounded-xl border border-border/80 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    name="message"
                    placeholder={c(copy.contact.placeholderMessage, locale)}
                    required
                    minLength={10}
                    maxLength={5000}
                  />
                </label>
                <button className="btn btn-primary justify-center" type="submit">
                  {c(copy.contact.formSend, locale)}
                </button>
                <p className="text-xs text-muted">
                  {c(copy.contact.formNote, locale)}
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
