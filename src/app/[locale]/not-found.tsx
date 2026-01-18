import Link from "next/link";
import { Container } from "@/components/Container";
import { c, copy } from "@/content/copy";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = normalizeLocale(localeParam);
  return (
    <Container className="py-20">
      <div className="card">
        <p className="text-sm font-medium text-muted">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          {c(copy.notFound.title, locale)}
        </h1>
        <p className="mt-3 text-sm text-muted">
          {c(copy.notFound.body, locale)}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link className="btn btn-primary" href={withLocale(locale, "/")}>
            {c(copy.notFound.ctaHome, locale)}
          </Link>
          <Link className="btn btn-secondary" href={withLocale(locale, "/contact")}>
            {c(copy.notFound.ctaContact, locale)}
          </Link>
        </div>
      </div>
    </Container>
  );
}
