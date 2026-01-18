import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {siteConfig.navBuckets.map((bucket) => (
            <div key={bucket.href} className="group relative">
              <Link
                href={bucket.href}
                className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {bucket.label}
              </Link>
              <div className="absolute left-0 top-full z-50 hidden w-72 pt-2 group-hover:block group-focus-within:block">
                <div className="rounded-2xl border border-border/70 bg-background shadow-lg">
                  <div className="p-2">
                    {bucket.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link className="btn btn-secondary hidden sm:inline-flex" href="/jobs">
            View jobs
          </Link>
          <Link className="btn btn-primary" href="/contact">
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
