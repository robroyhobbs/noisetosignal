import type { MetadataRoute } from "next";
import { topicSlugs } from "@/lib/topics";

const siteUrl = "https://founderratio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const topicEntries: MetadataRoute.Sitemap = topicSlugs.map((slug) => ({
    url: `${siteUrl}/topics/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/topics`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...topicEntries,
  ];
}
