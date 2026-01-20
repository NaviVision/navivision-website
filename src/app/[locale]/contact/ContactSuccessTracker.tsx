"use client";

import { useEffect, useRef } from "react";

export function ContactSuccessTracker({ status }: { status?: string }) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    if (status !== "sent") return;
    tracked.current = true;

    window.gtag?.("event", "generate_lead", {
      method: "contact_form",
      page_path: window.location.pathname,
    });
  }, [status]);

  return null;
}

