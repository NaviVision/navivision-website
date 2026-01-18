import type { Locale } from "@/lib/i18n";

type CopyByLocale<T> = Record<Locale, T>;

export const copy = {
  home: {
    heroKicker: {
      "en-US": "Diversified operating + investment company",
      "en-GB": "Diversified operating + investment company",
      es: "Compañía operadora e inversora diversificada",
      fr: "Société d’exploitation et d’investissement diversifiée",
      de: "Diversifizierte Betriebs- und Investmentgesellschaft",
    },
    heroTitle: {
      "en-US": "NaviVision builds, operates, and invests across talent, software, real estate, and startups.",
      "en-GB": "NaviVision builds, operates, and invests across talent, software, real estate, and startups.",
      es: "NaviVision construye, opera e invierte en talento, software, bienes raíces y startups.",
      fr: "NaviVision conçoit, exploite et investit dans les talents, les logiciels, l’immobilier et les startups.",
      de: "NaviVision entwickelt, betreibt und investiert in Talent, Software, Immobilien und Start-ups.",
    },
    heroSubtitle: {
      "en-US":
        "We partner with teams to hire exceptional people, launch products, scale SaaS businesses, and operate a disciplined real estate portfolio, while investing in founders we believe in.",
      "en-GB":
        "We partner with teams to hire exceptional people, launch products, scale SaaS businesses, and operate a disciplined real estate portfolio, while investing in founders we believe in.",
      es: "Trabajamos con equipos para contratar talento excepcional, lanzar productos, escalar negocios SaaS y operar una cartera inmobiliaria disciplinada, mientras invertimos en fundadores en los que creemos.",
      fr: "Nous aidons les équipes à recruter des talents, lancer des produits, développer des activités SaaS et gérer un portefeuille immobilier avec discipline, tout en investissant dans des fondateurs en qui nous croyons.",
      de: "Wir unterstützen Teams dabei, herausragende Talente einzustellen, Produkte zu launchen, SaaS-Unternehmen zu skalieren und ein diszipliniertes Immobilienportfolio zu betreiben – und investieren zugleich in Gründer, an die wir glauben.",
    },
    ctaPrimary: {
      "en-US": "Start a conversation",
      "en-GB": "Start a conversation",
      es: "Iniciar una conversación",
      fr: "Engager la conversation",
      de: "Kontakt aufnehmen",
    },
    ctaSecondary: {
      "en-US": "Explore our portfolio",
      "en-GB": "Explore our portfolio",
      es: "Explorar nuestro portafolio",
      fr: "Découvrir notre portefeuille",
      de: "Portfolio ansehen",
    },
  } satisfies Record<string, CopyByLocale<string>>,

  about: {
    kicker: {
      "en-US": "About",
      "en-GB": "About",
      es: "Acerca de",
      fr: "À propos",
      de: "Über uns",
    },
    title: {
      "en-US": "We’re a hands-on operator with a long-term view.",
      "en-GB": "We’re a hands-on operator with a long-term view.",
      es: "Somos operadores prácticos con una visión de largo plazo.",
      fr: "Nous sommes des opérateurs de terrain, avec une vision long terme.",
      de: "Wir sind Betreiber aus der Praxis – mit langfristigem Blick.",
    },
    intro: {
      "en-US":
        "NaviVision is a diversified operating and investment company. We build and support businesses that can compound over time through great teams, sound economics, and disciplined execution.",
      "en-GB":
        "NaviVision is a diversified operating and investment company. We build and support businesses that can compound over time through great teams, sound economics, and disciplined execution.",
      es: "NaviVision es una compañía operadora e inversora diversificada. Construimos y apoyamos negocios que pueden crecer con el tiempo a través de grandes equipos, una economía sólida y una ejecución disciplinada.",
      fr: "NaviVision est une société d’exploitation et d’investissement diversifiée. Nous construisons et accompagnons des entreprises capables de croître durablement grâce à de grandes équipes, une économie saine et une exécution disciplinée.",
      de: "NaviVision ist eine diversifizierte Betriebs- und Investmentgesellschaft. Wir bauen Unternehmen auf und unterstützen sie dabei, langfristig zu wachsen – mit starken Teams, solider Wirtschaftlichkeit und disziplinierter Umsetzung.",
    },
    focusTitle: {
      "en-US": "Our focus",
      "en-GB": "Our focus",
      es: "Nuestro enfoque",
      fr: "Nos priorités",
      de: "Unser Fokus",
    },
    focusSubtitle: {
      "en-US":
        "Each vertical stands on its own, but we share playbooks across all of them.",
      "en-GB":
        "Each vertical stands on its own, but we share playbooks across all of them.",
      es: "Cada vertical se sostiene por sí mismo, pero compartimos prácticas entre todos.",
      fr: "Chaque verticale est autonome, mais nous partageons des méthodes entre elles.",
      de: "Jede Sparte steht für sich, doch wir teilen Playbooks über alle Bereiche hinweg.",
    },
    teamTitle: {
      "en-US": "Team",
      "en-GB": "Team",
      es: "Equipo",
      fr: "Équipe",
      de: "Team",
    },
    teamSubtitle: {
      "en-US": "Operator-led and built for long-term compounding.",
      "en-GB": "Operator-led and built for long-term compounding.",
      es: "Liderado por operadores y diseñado para el crecimiento a largo plazo.",
      fr: "Portée par des opérateurs, conçue pour une croissance durable.",
      de: "Operator-led und auf langfristiges Wachstum ausgelegt.",
    },
    profileSoon: {
      "en-US": "Profile coming soon.",
      "en-GB": "Profile coming soon.",
      es: "Perfil próximamente.",
      fr: "Profil à venir.",
      de: "Profil folgt in Kürze.",
    },
    metaTitle: {
      "en-US": "About",
      "en-GB": "About",
      es: "Acerca de",
      fr: "À propos",
      de: "Über uns",
    },
    metaDescription: {
      "en-US": "Learn about NaviVision and our operating focus across talent, software, real estate, and investments.",
      "en-GB": "Learn about NaviVision and our operating focus across talent, software, real estate, and investments.",
      es: "Conozca NaviVision y nuestro enfoque operativo en talento, software, bienes raíces e inversiones.",
      fr: "Découvrez NaviVision et notre approche opérationnelle autour des talents, des logiciels, de l’immobilier et des investissements.",
      de: "Erfahren Sie mehr über NaviVision und unseren operativen Fokus auf Talent, Software, Immobilien und Investments.",
    },
  } satisfies Record<string, CopyByLocale<string>>,

  contact: {
    title: {
      "en-US": "Let’s talk.",
      "en-GB": "Let’s talk.",
      es: "Hablemos.",
      fr: "Discutons.",
      de: "Lassen Sie uns sprechen.",
    },
    intro: {
      "en-US":
        "Use the form below to reach our team. If you’re a company looking to hire, a candidate exploring roles, or a founder seeking partnership, include the basics and we’ll follow up.",
      "en-GB":
        "Use the form below to reach our team. If you’re a company looking to hire, a candidate exploring roles, or a founder seeking partnership, include the basics and we’ll follow up.",
      es: "Use el formulario para contactar con nuestro equipo. Si es una empresa que busca contratar, una persona explorando oportunidades o un fundador buscando colaboración, comparta lo básico y le responderemos.",
      fr: "Utilisez le formulaire pour contacter notre équipe. Que vous recrutiez, que vous recherchiez un poste ou que vous souhaitiez un partenariat, partagez l’essentiel et nous reviendrons vers vous.",
      de: "Nutzen Sie das Formular, um unser Team zu erreichen. Ob Sie einstellen möchten, eine Rolle suchen oder eine Partnerschaft anfragen – teilen Sie die wichtigsten Informationen, und wir melden uns.",
    },
    includeTitle: {
      "en-US": "What should you include?",
      "en-GB": "What should you include?",
      es: "¿Qué debería incluir?",
      fr: "Que faut-il inclure ?",
      de: "Was sollten Sie angeben?",
    },
    includeSubtitle: {
      "en-US": "A few details help us route your message quickly.",
      "en-GB": "A few details help us route your message quickly.",
      es: "Algunos detalles nos ayudan a dirigir su mensaje rápidamente.",
      fr: "Quelques détails nous aident à orienter votre message rapidement.",
      de: "Ein paar Details helfen uns, Ihre Nachricht schnell einzuordnen.",
    },
    hintTitle: {
      "en-US": "Prefer a quick start?",
      "en-GB": "Prefer a quick start?",
      es: "¿Prefiere empezar rápido?",
      fr: "Vous préférez aller vite ?",
      de: "Lieber direkt starten?",
    },
    hintBody: {
      "en-US":
        "For hiring requests, share your role requirements on For Companies. For candidates, browse Jobs.",
      "en-GB":
        "For hiring requests, share your role requirements on For Companies. For candidates, browse Jobs.",
      es: "Para solicitudes de contratación, comparta los requisitos del puesto en Para empresas. Para candidatos, consulte Empleos.",
      fr: "Pour une demande de recrutement, partagez vos besoins sur Pour les entreprises. Pour les candidats, consultez Offres.",
      de: "Für Hiring-Anfragen: teilen Sie Ihre Anforderungen unter Für Unternehmen. Für Kandidaten: sehen Sie sich Jobs an.",
    },
    formName: {
      "en-US": "Name",
      "en-GB": "Name",
      es: "Nombre",
      fr: "Nom",
      de: "Name",
    },
    formEmail: {
      "en-US": "Email",
      "en-GB": "Email",
      es: "Correo electrónico",
      fr: "E-mail",
      de: "E-Mail",
    },
    formTopic: {
      "en-US": "Topic",
      "en-GB": "Topic",
      es: "Tema",
      fr: "Sujet",
      de: "Thema",
    },
    formMessage: {
      "en-US": "Message",
      "en-GB": "Message",
      es: "Mensaje",
      fr: "Message",
      de: "Nachricht",
    },
    formSend: {
      "en-US": "Send message",
      "en-GB": "Send message",
      es: "Enviar mensaje",
      fr: "Envoyer le message",
      de: "Nachricht senden",
    },
    formPreview: {
      "en-US": "This form is currently in preview mode and doesn’t submit anywhere yet.",
      "en-GB": "This form is currently in preview mode and doesn’t submit anywhere yet.",
      es: "Este formulario está en modo de vista previa y todavía no envía a ningún lugar.",
      fr: "Ce formulaire est en mode aperçu et n’envoie rien pour le moment.",
      de: "Dieses Formular ist derzeit im Vorschaumodus und sendet noch nichts ab.",
    },
    metaTitle: {
      "en-US": "Contact",
      "en-GB": "Contact",
      es: "Contacto",
      fr: "Contact",
      de: "Kontakt",
    },
    metaDescription: {
      "en-US": "Contact NaviVision for hiring support, software partnerships, real estate, or investment inquiries.",
      "en-GB": "Contact NaviVision for hiring support, software partnerships, real estate, or investment enquiries.",
      es: "Contacte a NaviVision para apoyo de contratación, alianzas de software, bienes raíces o consultas de inversión.",
      fr: "Contactez NaviVision pour le recrutement, des partenariats logiciels, l’immobilier ou des questions d’investissement.",
      de: "Kontaktieren Sie NaviVision für Hiring-Support, Software-Partnerschaften, Immobilien oder Investment-Anfragen.",
    },
  } satisfies Record<string, CopyByLocale<string>>,
} as const;

export function c<T extends Record<Locale, string>>(value: T, locale: Locale): string {
  return value[locale] ?? value["en-US"];
}
