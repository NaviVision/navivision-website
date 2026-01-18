import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted">
              Talent &amp; Hiring • Custom SaaS • Real Estate • Investments
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {siteConfig.footerLinks.map((item) => (
              <Link
                key={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border/70 pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
