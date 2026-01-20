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
        { href: "/talent-hiring/candidate-process", labelKey: "nav.candidateProcess" },
      ],
    },
    {
      href: "/custom-saas",
      labelKey: "nav.customSaas",
      items: [
        { href: "/custom-saas", labelKey: "nav.overview" },
        { href: "/custom-saas#what-we-build", labelKey: "nav.whatWeBuild" },
        { href: "/custom-saas#how-we-engage", labelKey: "nav.howWeEngage" },
        { href: "/contact", labelKey: "nav.talkToUs" },
      ],
    },
    {
      href: "/real-estate",
      labelKey: "nav.realEstate",
      items: [
        { href: "/real-estate", labelKey: "nav.overview" },
        { href: "/real-estate#how-we-operate", labelKey: "nav.howWeOperate" },
        { href: "/real-estate#locations", labelKey: "nav.locations" },
        { href: "/contact", labelKey: "nav.partnership" },
      ],
    },
    {
      href: "/investments",
      labelKey: "nav.investments",
      items: [
        { href: "/investments", labelKey: "nav.overview" },
        { href: "/investments#startup-investing", labelKey: "nav.startupInvesting" },
      ],
    },
  ],
  footerLinks: [
    { href: "/jobs", label: "Jobs" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "https://www.linkedin.com/company/navivision/", label: "LinkedIn" },
  ],
} as const;

export type NavBucket = (typeof siteConfig.navBuckets)[number];
export type NavBucketItem = NavBucket["items"][number];
