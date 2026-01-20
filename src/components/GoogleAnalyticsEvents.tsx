"use client";

import { useEffect } from "react";

function isOutboundUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function safeText(value: string | null) {
  return (value ?? "").trim().slice(0, 120);
}

export function GoogleAnalyticsEvents({ gaId }: { gaId: string }) {
  useEffect(() => {
    if (!gaId) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (!href) return;

      const linkText = safeText(anchor.textContent);

      if (href.startsWith("mailto:")) {
        const email = href.replace(/^mailto:/i, "");
        window.gtag?.("event", "nv_mailto_click", {
          send_to: gaId,
          email,
          link_text: linkText,
          page_path: window.location.pathname,
        });
        return;
      }

      const absolute = anchor.href;
      if (!absolute || !absolute.startsWith("http")) return;

      if (!isOutboundUrl(absolute)) {
        if (anchor.pathname.endsWith("/contact")) {
          window.gtag?.("event", "nv_contact_click", {
            send_to: gaId,
            location: anchor.dataset.nvLocation ?? "site",
            link_url: absolute,
            link_text: linkText,
            page_path: window.location.pathname,
          });
        }
        return;
      }

      if (isOutboundUrl(absolute)) {
        const domain = (() => {
          try {
            return new URL(absolute).hostname;
          } catch {
            return "";
          }
        })();

        window.gtag?.("event", "nv_outbound_click", {
          send_to: gaId,
          link_url: absolute,
          link_domain: domain,
          link_text: linkText,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, [gaId]);

  return null;
}
