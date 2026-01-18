import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

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
            __html: `(function(){try{
              var root=document.documentElement;
              var themeKey="nv_theme";
              var theme=localStorage.getItem(themeKey);
              var prefersDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
              var resolvedTheme=(theme==="light"||theme==="dark")?theme:(prefersDark?"dark":"light");
              root.setAttribute("data-theme",resolvedTheme);
              root.style.colorScheme=resolvedTheme;

              var localeKey="nv_locale";
              var allowed={"en-US":1,"en-GB":1,"es":1,"fr":1,"de":1};
              var params=new URLSearchParams(window.location.search);
              var lang=params.get("lang");
              if(lang && allowed[lang]){
                document.cookie=localeKey+"="+encodeURIComponent(lang)+"; Path=/; Max-Age=31536000; SameSite=Lax";
                root.lang=lang;
              } else {
                var match=document.cookie.match(new RegExp("(?:^|; )"+localeKey.replace(/[-.$?*|{}()\\[\\]\\\\\\/\\+^]/g,"\\\\$&")+"=([^;]*)"));
                var cookieLang=match?decodeURIComponent(match[1]):"";
                if(cookieLang && allowed[cookieLang]) root.lang=cookieLang;
              }
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
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <div className="flex min-h-dvh flex-col">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
