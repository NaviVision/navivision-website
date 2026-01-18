import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { withLocale } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://navivision.net";

  const routes = [
    "/",
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

  return routes.flatMap((path) => {
    return locales.map((locale) => {
      const urlPath = withLocale(locale, path);
      const url = `${baseUrl}${urlPath}`;
      const languages = Object.fromEntries(locales.map((tag) => [tag, `${baseUrl}${withLocale(tag, path)}`]));

      return {
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.7,
        alternates: {
          languages,
        },
      };
    });
  });
}
