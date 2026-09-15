import type { MetadataRoute } from "next";
import { topicSlugs } from "@/lib/topics";
import { conceptSlugs } from "@/lib/concepts";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const topicEntries: MetadataRoute.Sitemap = topicSlugs.map((slug) => ({
    url: absoluteUrl(`/topics/${slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const conceptEntries: MetadataRoute.Sitemap = conceptSlugs.map((slug) => ({
    url: absoluteUrl(`/concepts/${slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/archive"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/topics"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/concepts"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...topicEntries,
    ...conceptEntries,
  ];
}
