import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://navivision.net";

  const routes = [
    "",
    "/about",
    "/talent-hiring",
    "/for-companies",
    "/for-talent",
    "/jobs",
    "/custom-saas",
    "/real-estate",
    "/investments",
    "/portfolio",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => {
    const url = `${baseUrl}${path}`;
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${url}?lang=${locale}`]),
    );

    return {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages,
      },
    };
  });
}
