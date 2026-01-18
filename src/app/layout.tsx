import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ClientLocale } from "@/components/ClientLocale";

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
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en-US",
      "en-GB": "/?lang=en-GB",
      es: "/?lang=es",
      fr: "/?lang=fr",
      de: "/?lang=de",
    },
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k="nv_theme";var m=localStorage.getItem(k);var r=document.documentElement;var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;if(m==="light"||m==="dark"){r.setAttribute("data-theme",m);r.style.colorScheme=m;}else{r.removeAttribute("data-theme");r.style.colorScheme=d?"dark":"light";}}catch(e){}})();`,
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
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <ClientLocale />
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
