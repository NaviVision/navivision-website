import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NaviVision",
    short_name: "NaviVision",
    description:
      "NaviVision is a diversified operating and investment company spanning talent, software/SaaS, real estate, and startup investing.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#20A0E0",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
