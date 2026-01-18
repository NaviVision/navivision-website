export const siteConfig = {
  name: "NaviVision",
  shortName: "NaviVision",
  navBuckets: [
    {
      href: "/talent-hiring",
      label: "Talent & Hiring",
      items: [
        { href: "/talent-hiring", label: "Overview" },
        { href: "/for-companies", label: "For Companies" },
        { href: "/for-talent", label: "For Talent" },
        { href: "/jobs", label: "Jobs" },
      ],
    },
    {
      href: "/custom-saas",
      label: "Custom SaaS",
      items: [
        { href: "/custom-saas", label: "Overview" },
        { href: "/portfolio#software", label: "Portfolio: Software & SaaS" },
        { href: "/contact", label: "Talk to us" },
      ],
    },
    {
      href: "/real-estate",
      label: "Real Estate",
      items: [
        { href: "/real-estate", label: "Overview" },
        { href: "/portfolio#real-estate", label: "Portfolio: Real Estate" },
        { href: "/contact", label: "Partnership inquiries" },
      ],
    },
    {
      href: "/investments",
      label: "Investments",
      items: [
        { href: "/investments", label: "Overview" },
        { href: "/portfolio#investing", label: "Startup investing" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/about", label: "About" },
      ],
    },
  ],
  footerLinks: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export type NavBucket = (typeof siteConfig.navBuckets)[number];
export type NavBucketItem = NavBucket["items"][number];
