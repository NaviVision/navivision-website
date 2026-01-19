"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

const legacyHashTargets: Record<string, string> = {
  "#software": "/custom-saas#what-we-build",
  "#real-estate": "/real-estate#locations",
  "#investing": "/investments#startup-investing",
};

export function PortfolioRedirector({ locale }: { locale: Locale }) {
  useEffect(() => {
    const hash = window.location.hash;
    const target = legacyHashTargets[hash] ?? "/";
    window.location.replace(withLocale(locale, target));
  }, [locale]);

  return null;
}
