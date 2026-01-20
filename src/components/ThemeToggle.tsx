"use client";

import { useEffect, useMemo, useState } from "react";
import { t, type Locale } from "@/lib/i18n";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "nv_theme";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;

  root.setAttribute("data-theme", mode);
  localStorage.setItem(STORAGE_KEY, mode);
  root.style.colorScheme = mode;
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  const isDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return isDark ? "dark" : "light";
}

export function ThemeToggle({ locale, className }: { locale: Locale; className?: string }) {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const label = useMemo(() => {
    if (mode === "dark") return t(locale, "theme.dark");
    return t(locale, "theme.light");
  }, [mode, locale]);

  return (
    <button
      type="button"
      onClick={() => setMode((prev) => (prev === "dark" ? "light" : "dark"))}
      className={[
        "inline-flex items-center rounded-full border border-border/80 bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${t(locale, "theme.toggle")}: ${label}`}
      title={`${t(locale, "theme.toggle")}: ${label}`}
      aria-pressed={mode === "dark"}
    >
      {mode === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.9 4.9l1.4 1.4" />
          <path d="M17.7 17.7l1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.9 19.1l1.4-1.4" />
          <path d="M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}
