export const siteConfig = {
  name: "NaviVision LLC",
  shortName: "NaviVision",
  nav: [
    { href: "/about", label: "About" },
    { href: "/for-companies", label: "For Companies" },
    { href: "/for-talent", label: "For Talent" },
    { href: "/jobs", label: "Jobs" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  footerLinks: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
