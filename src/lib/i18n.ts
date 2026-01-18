export const LOCALE_COOKIE = "nv_locale" as const;

export const locales = ["en-US", "en-GB", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-US";

export function normalizeLocale(value: string | undefined | null): Locale {
  if (value && (locales as readonly string[]).includes(value)) return value as Locale;
  return defaultLocale;
}

export const localeLabels: Record<Locale, string> = {
  "en-US": "English (US)",
  "en-GB": "English (UK)",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

type Messages = Record<string, string>;

const messages: Record<Locale, Messages> = {
  "en-US": {
    "nav.talent": "Talent & Hiring",
    "nav.customSaas": "Custom SaaS",
    "nav.realEstate": "Real Estate",
    "nav.investments": "Investments",
    "nav.overview": "Overview",
    "nav.forCompanies": "For Companies",
    "nav.forTalent": "For Talent",
    "nav.jobs": "Jobs",
    "nav.portfolioSoftware": "Portfolio: Software & SaaS",
    "nav.talkToUs": "Talk to us",
    "nav.portfolioRealEstate": "Portfolio: Real Estate",
    "nav.partnership": "Partnership inquiries",
    "nav.startupInvesting": "Startup investing",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "header.viewJobs": "View jobs",
    "header.contact": "Contact",
    "header.language": "Language",
  },
  "en-GB": {
    "nav.talent": "Talent & Hiring",
    "nav.customSaas": "Custom SaaS",
    "nav.realEstate": "Real Estate",
    "nav.investments": "Investments",
    "nav.overview": "Overview",
    "nav.forCompanies": "For Companies",
    "nav.forTalent": "For Talent",
    "nav.jobs": "Jobs",
    "nav.portfolioSoftware": "Portfolio: Software & SaaS",
    "nav.talkToUs": "Talk to us",
    "nav.portfolioRealEstate": "Portfolio: Real Estate",
    "nav.partnership": "Partnership enquiries",
    "nav.startupInvesting": "Startup investing",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "header.viewJobs": "View jobs",
    "header.contact": "Contact",
    "header.language": "Language",
  },
  es: {
    "nav.talent": "Talento y contratación",
    "nav.customSaas": "SaaS a medida",
    "nav.realEstate": "Bienes raíces",
    "nav.investments": "Inversiones",
    "nav.overview": "Resumen",
    "nav.forCompanies": "Para empresas",
    "nav.forTalent": "Para talento",
    "nav.jobs": "Empleos",
    "nav.portfolioSoftware": "Portafolio: Software y SaaS",
    "nav.talkToUs": "Hable con nosotros",
    "nav.portfolioRealEstate": "Portafolio: Bienes raíces",
    "nav.partnership": "Consultas de colaboración",
    "nav.startupInvesting": "Inversión en startups",
    "nav.portfolio": "Portafolio",
    "nav.about": "Acerca de",
    "header.viewJobs": "Ver empleos",
    "header.contact": "Contacto",
    "header.language": "Idioma",
  },
  fr: {
    "nav.talent": "Talent et recrutement",
    "nav.customSaas": "SaaS sur mesure",
    "nav.realEstate": "Immobilier",
    "nav.investments": "Investissements",
    "nav.overview": "Aperçu",
    "nav.forCompanies": "Pour les entreprises",
    "nav.forTalent": "Pour les talents",
    "nav.jobs": "Offres",
    "nav.portfolioSoftware": "Portefeuille : logiciel et SaaS",
    "nav.talkToUs": "Parlons-en",
    "nav.portfolioRealEstate": "Portefeuille : immobilier",
    "nav.partnership": "Demandes de partenariat",
    "nav.startupInvesting": "Investissement startups",
    "nav.portfolio": "Portefeuille",
    "nav.about": "À propos",
    "header.viewJobs": "Voir les offres",
    "header.contact": "Contact",
    "header.language": "Langue",
  },
  de: {
    "nav.talent": "Talent & Recruiting",
    "nav.customSaas": "Individuelles SaaS",
    "nav.realEstate": "Immobilien",
    "nav.investments": "Investments",
    "nav.overview": "Übersicht",
    "nav.forCompanies": "Für Unternehmen",
    "nav.forTalent": "Für Talente",
    "nav.jobs": "Jobs",
    "nav.portfolioSoftware": "Portfolio: Software & SaaS",
    "nav.talkToUs": "Kontakt",
    "nav.portfolioRealEstate": "Portfolio: Immobilien",
    "nav.partnership": "Kooperationsanfragen",
    "nav.startupInvesting": "Startup-Investing",
    "nav.portfolio": "Portfolio",
    "nav.about": "Über uns",
    "header.viewJobs": "Jobs ansehen",
    "header.contact": "Kontakt",
    "header.language": "Sprache",
  },
};

export function t(locale: Locale, key: string): string {
  return messages[locale]?.[key] ?? messages[defaultLocale][key] ?? key;
}
