import type { MetadataRoute } from "next";

const SITE = "https://suprabhatkarmakar.is-a.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/projects`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
