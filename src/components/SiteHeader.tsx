import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
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

