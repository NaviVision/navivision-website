import type { MetadataRoute } from "next";

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

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
