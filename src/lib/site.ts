export const siteConfig = {
  name: "NaviVision",
  shortName: "NaviVision",
  navBuckets: [
    {
      href: "/talent-hiring",
      labelKey: "nav.talent",
      items: [
        { href: "/talent-hiring", labelKey: "nav.overview" },
        { href: "/for-companies", labelKey: "nav.forCompanies" },
        { href: "/for-talent", labelKey: "nav.forTalent" },
        { href: "/jobs", labelKey: "nav.jobs" },
      ],
    },
    {
      href: "/custom-saas",
      labelKey: "nav.customSaas",
      items: [
        { href: "/custom-saas", labelKey: "nav.overview" },
        { href: "/portfolio#software", labelKey: "nav.portfolioSoftware" },
        { href: "/contact", labelKey: "nav.talkToUs" },
      ],
    },
    {
      href: "/real-estate",
      labelKey: "nav.realEstate",
      items: [
        { href: "/real-estate", labelKey: "nav.overview" },
        { href: "/portfolio#real-estate", labelKey: "nav.portfolioRealEstate" },
        { href: "/contact", labelKey: "nav.partnership" },
      ],
    },
    {
      href: "/investments",
      labelKey: "nav.investments",
      items: [
        { href: "/investments", labelKey: "nav.overview" },
        { href: "/portfolio#investing", labelKey: "nav.startupInvesting" },
        { href: "/portfolio", labelKey: "nav.portfolio" },
        { href: "/about", labelKey: "nav.about" },
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
