import type { Category, SignalItem } from "./types";
import { weeks } from "./data";

export interface TopicMeta {
  slug: Category;
  title: string;
  blurb: string;
  /** 2–3 sentence definition of signal for this topic. */
  definition: string;
}

export const topics: TopicMeta[] = [
  {
    slug: "fundraising",
    title: "Fundraising",
    blurb: "Rounds, process, and who still gets capital when the feed is loud.",
    definition:
      "Fundraising signal changes how you raise, price, or sequence a round: investor behavior, process, or proof that moves a close. Mega-round headlines are noise.",
  },
  {
    slug: "hiring",
    title: "Hiring",
    blurb: "Team design, talent markets, and when headcount is the real bet.",
    definition:
      "Hiring signal changes who you hire next, how you compete for talent, or when you slow headcount: org design, comp, recruiting leverage. We skip culture posters.",
  },
  {
    slug: "product",
    title: "Product",
    blurb: "Build, package, and GTM choices that change what ships next.",
    definition:
      "Product signal changes what you ship, how you package it, or how you go to market. Roadmap cuts and retention proof make the list; feature theater does not.",
  },
  {
    slug: "leadership",
    title: "Leadership",
    blurb: "Judgment, pivots, boards, and hard calls under pressure.",
    definition:
      "Leadership signal sharpens judgment on pivots, boards, and culture under constraint. We pick pieces that show what a hard call cost and skip founder flattery.",
  },
  {
    slug: "market",
    title: "Market",
    blurb: "Capital as denominator, category shifts, and where attention is mispriced.",
    definition:
      "Market signal changes how you read the denominator: capital flows, category structure, mispriced attention. Macro cheerleading with no takeaway is noise.",
  },
];

export const topicSlugs = topics.map((t) => t.slug);

export function getTopic(slug: string): TopicMeta | undefined {
  return topics.find((t) => t.slug === slug);
}

export interface TopicSignal extends SignalItem {
  weekOf: string;
}

/** Newest weeks first; capped list of signal items for a category. */
export function getSignalsForTopic(
  slug: Category,
  limit = 15
): TopicSignal[] {
  const out: TopicSignal[] = [];
  for (const week of weeks) {
    for (const item of week.signal) {
      if (item.category === slug) {
        out.push({ ...item, weekOf: week.weekOf });
        if (out.length >= limit) return out;
      }
    }
  }
  return out;
}

export function applyCtaUrl(slug: Category): string {
  const params = new URLSearchParams({
    utm_source: "founderratio",
    utm_medium: "referral",
    utm_campaign: `topic-${slug}`,
    utm_content: "topic-hub",
  });
  return `https://platform.foundernexus.com/registration?${params.toString()}`;
}
