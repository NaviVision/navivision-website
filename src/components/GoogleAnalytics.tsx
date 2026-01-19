import Script from "next/script";
import { GoogleAnalyticsTracker } from "@/components/GoogleAnalyticsTracker";

const DEFAULT_GA_ID = "G-5D4F5HY1TJ";

export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? DEFAULT_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="nv-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');
          `.trim(),
        }}
      />
      <GoogleAnalyticsTracker gaId={gaId} />
    </>
  );
}
