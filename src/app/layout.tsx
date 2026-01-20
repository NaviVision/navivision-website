import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { defaultLocale, normalizeLocale, t, type Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    template: "%s | NaviVision",
    default: "NaviVision",
  },
  description:
    "NaviVision is a diversified operating and investment company spanning talent, software/SaaS, real estate, and startup investing.",
  keywords: [
    "NaviVision",
    "talent and hiring",
    "custom SaaS",
    "software",
    "real estate",
    "investments",
    "startup investing",
  ],
  applicationName: "NaviVision",
  metadataBase: new URL("https://navivision.net"),
  openGraph: {
    type: "website",
    title: "NaviVision",
    description:
      "NaviVision builds, operates, and invests across talent, software/SaaS, real estate, and startups.",
    url: "https://navivision.net",
    siteName: "NaviVision",
    images: [
      {
        url: "/api/og?title=NaviVision&subtitle=Build%2C%20operate%2C%20and%20invest%20across%20talent%2C%20software%2C%20real%20estate%2C%20and%20startups.",
        width: 1200,
        height: 630,
        alt: "NaviVision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NaviVision",
    description:
      "NaviVision builds, operates, and invests across talent, software/SaaS, real estate, and startups.",
    images: [
      "/api/og?title=NaviVision&subtitle=Build%2C%20operate%2C%20and%20invest%20across%20talent%2C%20software%2C%20real%20estate%2C%20and%20startups.",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const localeHeader = (headerStore.get("x-nv-locale") ?? defaultLocale) as string;
  const locale: Locale = normalizeLocale(localeHeader);
  const pathHeader = headerStore.get("x-nv-path") ?? "/";

  const segments = pathHeader.split("/").filter(Boolean);
  const topLevelKeyBySegment: Record<string, string> = {
    "talent-hiring": "nav.talent",
    "custom-saas": "nav.customSaas",
    "real-estate": "nav.realEstate",
    investments: "nav.investments",
    about: "nav.about",
    "for-companies": "nav.forCompanies",
    "for-talent": "nav.forTalent",
    jobs: "nav.jobs",
    contact: "nav.contact",
    privacy: "nav.privacy",
    terms: "nav.terms",
  };

  const secondLevelKeyBySegment: Record<string, Record<string, string>> = {
    "talent-hiring": {
      "candidate-process": "nav.candidateProcess",
    },
  };

  const crumbs: Array<{ name: string; path: string }> = [{ name: t(locale, "nav.home"), path: "/" }];
  let currentPath = "";

  const first = segments[0];
  if (first && topLevelKeyBySegment[first]) {
    currentPath += `/${first}`;
    crumbs.push({ name: t(locale, topLevelKeyBySegment[first]), path: currentPath });
  }

  const second = segments[1];
  const secondKey = first ? secondLevelKeyBySegment[first]?.[second ?? ""] : undefined;
  if (second && secondKey) {
    currentPath += `/${second}`;
    crumbs.push({ name: t(locale, secondKey), path: currentPath });
  }

  const breadcrumbJsonLd =
    crumbs.length > 1
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `https://navivision.net${withLocale(locale, crumb.path)}`,
          })),
        }
      : null;

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var root=document.documentElement;
              var themeKey="nv_theme";
              var theme=localStorage.getItem(themeKey);
              var prefersDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
              var resolvedTheme=(theme==="light"||theme==="dark")?theme:(prefersDark?"dark":"light");
              root.setAttribute("data-theme",resolvedTheme);
              root.style.colorScheme=resolvedTheme;
            }catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NaviVision",
              url: "https://navivision.net",
              logo: "https://navivision.net/navivision-logo.png",
              sameAs: ["https://www.linkedin.com/company/navivision/"],
              email: "hello@navivision.net",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "hello@navivision.net",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NaviVision",
              url: "https://navivision.net",
              inLanguage: ["en-US", "en-GB", "es", "fr", "de"],
            }),
          }}
        />
        {breadcrumbJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
        ) : null}
      </head>
      <body className="min-h-full antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
