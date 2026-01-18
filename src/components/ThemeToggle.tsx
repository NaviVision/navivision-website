"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeMode = "system" | "light" | "dark";

const STORAGE_KEY = "nv_theme";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;

  if (mode === "system") {
    root.removeAttribute("data-theme");
    localStorage.removeItem(STORAGE_KEY);
    const isDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    root.style.colorScheme = isDark ? "dark" : "light";
    return;
  }

  root.setAttribute("data-theme", mode);
  localStorage.setItem(STORAGE_KEY, mode);
  root.style.colorScheme = mode;
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "system";
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "system") return;
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return;

    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode]);

  const label = useMemo(() => {
    if (mode === "dark") return "Dark";
    if (mode === "light") return "Light";
    return "System";
  }, [mode]);

  return (
    <div className="relative hidden sm:block">
      <details className="group">
        <summary className="list-none cursor-pointer rounded-full border border-border/80 bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
          Theme: {label}
        </summary>
        <div className="absolute right-0 top-full z-50 hidden w-44 pt-2 group-open:block">
          <div className="rounded-2xl border border-border/70 bg-background shadow-lg">
            <div className="p-2">
              {(["system", "light", "dark"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setMode(value);
                    (document.activeElement as HTMLElement | null)?.blur?.();
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-muted hover:bg-surface hover:text-foreground transition-colors"
                >
                  <span className="capitalize">{value}</span>
                  {mode === value ? (
                    <span className="text-primary">●</span>
                  ) : (
                    <span className="text-muted"> </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
