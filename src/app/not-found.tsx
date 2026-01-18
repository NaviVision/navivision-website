import Link from "next/link";
import { Container } from "@/components/Container";
import { getServerLocale } from "@/lib/locale";
import { c, copy } from "@/content/copy";

export default async function NotFound() {
  const locale = await getServerLocale();
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
          <Link className="btn btn-primary" href="/">
            {c(copy.notFound.ctaHome, locale)}
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            {c(copy.notFound.ctaContact, locale)}
          </Link>
        </div>
      </div>
    </Container>
  );
}
