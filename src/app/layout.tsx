import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { defaultLocale, normalizeLocale, type Locale } from "@/lib/i18n";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "NaviVision",
    description:
      "NaviVision builds, operates, and invests across talent, software/SaaS, real estate, and startups.",
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
