import type { Category, SignalItem } from "./types";
import { weeks } from "./data";

export interface TopicMeta {
  slug: Category;
  title: string;
  blurb: string;
  /** Short doctrine pointer — name a Bible section; do not paste playbook body. */
  bibleHint: string;
  bibleLinks: { label: string; href: string }[];
  /** 2–3 sentence definition of signal for this topic. */
  definition: string;
}

const BIBLE = "https://startup-bible-theta.vercel.app";

export const topics: TopicMeta[] = [
  {
    slug: "fundraising",
    title: "Fundraising",
    blurb: "Rounds, process, and who still gets capital when the feed is loud.",
    bibleHint:
      "Doctrine boost from FounderNexus Startup Bible playbooks on raising money — SAFEs, notes, priced rounds, and data rooms.",
    bibleLinks: [
      {
        label: "SAFEs, notes & priced rounds",
        href: `${BIBLE}/raising-money/safes-notes-priced-rounds/`,
      },
      {
        label: "Data rooms",
        href: `${BIBLE}/raising-money/data-rooms/`,
      },
    ],
    definition:
      "For venture-backed founders, fundraising signal is anything that changes how you raise, price, or sequence a round — not another mega-round headline. It clarifies investor behavior, process discipline, or proof points that actually move a close. Vanity announcements without operator takeaway stay noise.",
  },
  {
    slug: "hiring",
    title: "Hiring",
    blurb: "Team design, talent markets, and when headcount is the real bet.",
    bibleHint:
      "Doctrine boost from FounderNexus Startup Bible playbooks on building the company — especially executive team and equity structure.",
    bibleLinks: [
      {
        label: "Executive team",
        href: `${BIBLE}/building-the-company/executive-team/`,
      },
      {
        label: "Options pools & advisor equity",
        href: `${BIBLE}/equity-legal/options-pools-advisor-equity/`,
      },
    ],
    definition:
      "Hiring signal helps a venture-backed founder decide who to hire next, how to compete for talent, or when to slow headcount. It is stake-oriented: org design, comp, and recruiting leverage — not culture-poster content. If it does not change a people decision this quarter, it is noise.",
  },
  {
    slug: "product",
    title: "Product",
    blurb: "Build, package, and GTM choices that change what ships next.",
    bibleHint:
      "Doctrine boost from FounderNexus Startup Bible playbooks on getting customers — packaging, pilots, and validate-before-you-build.",
    bibleLinks: [
      {
        label: "Pricing and packaging",
        href: `${BIBLE}/getting-customers/pricing-and-packaging/`,
      },
      {
        label: "Validate before you build",
        href: `${BIBLE}/getting-customers/validate-before-you-build/`,
      },
    ],
    definition:
      "Product signal changes what you ship, how you package it, or how you go to market — including GTM and packaging tradeoffs. For venture-backed founders, that means roadmap cuts, buyer surfaces, and proof of retention or conversion. Feature theater and launch-day LinkedIn posts are noise.",
  },
  {
    slug: "leadership",
    title: "Leadership",
    blurb: "Founder judgment, pivots, boards, and hard calls under pressure.",
    bibleHint:
      "Doctrine boost from FounderNexus Startup Bible playbooks on company-building judgment — executive team and founder equity/vesting realities.",
    bibleLinks: [
      {
        label: "Executive team",
        href: `${BIBLE}/building-the-company/executive-team/`,
      },
      {
        label: "Founder stock vesting & 83(b)",
        href: `${BIBLE}/equity-legal/founder-stock-vesting-83b/`,
      },
    ],
    definition:
      "Leadership signal sharpens founder judgment — pivots, board dynamics, culture under constraint, and personal operating cadence. It is useful when it shows the cost of a hard call, not when it flatters the founder brand. Motivational noise without a decision surface does not make this list.",
  },
  {
    slug: "market",
    title: "Market",
    blurb: "Capital as denominator, category shifts, and where attention is mispriced.",
    bibleHint:
      "Doctrine boost from FounderNexus Startup Bible reference benchmarks and raising-money context for reading the capital landscape.",
    bibleLinks: [
      {
        label: "Benchmarks",
        href: `${BIBLE}/reference/benchmarks/`,
      },
      {
        label: "Raising money (Startup Bible)",
        href: `${BIBLE}/raising-money/safes-notes-priced-rounds/`,
      },
    ],
    definition:
      "Market signal reframes the denominator: capital flows, category structure, and where attention is mispriced relative to your stage. It helps venture-backed founders price rounds and roadmap bets against the market they are actually in. Macro cheerleading without a capital or competitive takeaway is noise.",
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
