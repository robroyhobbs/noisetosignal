import type { Category } from "./types";

const BIBLE = "https://startup-bible-theta.vercel.app";

export interface ConceptMeta {
  slug: string;
  title: string;
  /** One-line index blurb. */
  blurb: string;
  /** 2–4 sentence FR definition — why care this week. */
  definition: string;
  /** Where founders get this wrong — max 3. */
  wrong: string[];
  /** Outbound Startup Bible links when a path exists. Empty = FR-only. */
  bibleLinks: { label: string; href: string }[];
  relatedTopics: Category[];
}

export const concepts: ConceptMeta[] = [
  {
    slug: "safe",
    title: "SAFE",
    blurb: "Simple Agreement for Future Equity — speed with real dilution math.",
    definition:
      "A SAFE converts into equity later, usually at a priced round. Cap, discount, and MFN set the table you sell from later — not paperwork trivia. Stacking SAFEs without modeling conversion is negotiating blind.",
    wrong: [
      "Treating the valuation cap as a vanity number instead of a dilution scenario.",
      "Stacking SAFEs with mismatched terms and no pro forma of the next priced round.",
      "Skipping counsel because 'everyone uses YC's post-money SAFE' — small edits still move ownership.",
    ],
    bibleLinks: [
      {
        label: "SAFE (concept)",
        href: `${BIBLE}/concepts/safe/`,
      },
      {
        label: "SAFEs, notes & priced rounds",
        href: `${BIBLE}/raising-money/safes-notes-priced-rounds/`,
      },
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "liquidation-preference",
    title: "Liquidation preference",
    blurb: "Who gets paid first on exit — and what 1x non-participating actually means.",
    definition:
      "Liquidation preference decides order and amount investors get before common on a sale or liquidation. A 'standard' term can erase upside in a soft exit. Model the stack against realistic outcomes — not the unicorn case.",
    wrong: [
      "Assuming 1x non-participating is always harmless without checking seniority and multiples in the stack.",
      "Ignoring participating preferred or stacked prefs that quietly wipe common in mid outcomes.",
      "Negotiating valuation while leaving preference language unread until counsel's redline.",
    ],
    bibleLinks: [
      {
        label: "Liquidation preference (concept)",
        href: `${BIBLE}/concepts/liquidation-preference/`,
      },
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "founder-led-sales",
    title: "Founder-led sales",
    blurb: "You run discovery and close until the motion is repeatable.",
    definition:
      "Founder-led sales means you own discovery, demo, and close until pitch, proof, and pricing are handoff-ready. Hiring AEs before you can win deals burns runway. If you cannot explain the last five wins, you do not have a sales-hire problem yet.",
    wrong: [
      "Hiring AEs to 'scale' before the founder has closed enough deals to teach the motion.",
      "Confusing activity (demos booked) with learning (why buyers say yes or no).",
      "Handing off before ICP, objection map, and proof points are written down.",
    ],
    bibleLinks: [
      {
        label: "Founder-led sales (concept)",
        href: `${BIBLE}/concepts/founder-led-sales/`,
      },
    ],
    relatedTopics: ["product", "leadership"],
  },
  {
    slug: "pilot-vs-paid-contract",
    title: "Pilot vs paid contract",
    blurb: "Free pilots teach; paid contracts prove. Know which you are running.",
    definition:
      "A pilot is a bounded fit test; a paid contract has price, scope, and renewal risk. Many 'pilots' are unpaid science projects that never convert. Free trials with no conversion criteria fund the customer's discovery, not yours.",
    wrong: [
      "Running open-ended free pilots with no success criteria, owner, or end date.",
      "Calling something a pilot when the buyer already needs a paid SOW — and discounting anyway.",
      "Treating a logo as traction without a path to paid expansion.",
    ],
    bibleLinks: [
      {
        label: "Pilot vs paid contract (concept)",
        href: `${BIBLE}/concepts/pilot-vs-paid-contract/`,
      },
      {
        label: "Pilots that convert",
        href: `${BIBLE}/getting-customers/pilots-that-convert/`,
      },
    ],
    relatedTopics: ["product"],
  },
  {
    slug: "runway",
    title: "Runway",
    blurb: "Months of cash left — and what attention should protect first.",
    definition:
      "Runway is months of operating cash at current burn — the clock that forces cuts. It is not only a finance metric; it decides which bets get founder attention. If you cannot state runway, burn, and the lever that extends both, you are managing by hope.",
    wrong: [
      "Tracking runway in a spreadsheet nobody updates while hiring and tooling keep ramping.",
      "Burning months on 'brand' or speculative features while pipeline and cash collection slip.",
      "Raising too late because 'we still have six months' — without a realistic close timeline.",
    ],
    bibleLinks: [],
    relatedTopics: ["fundraising", "leadership"],
  },
  {
    slug: "term-sheet-red-flags",
    title: "Term sheet red flags",
    blurb: "Clauses that look standard and quietly reprice control or upside.",
    definition:
      "Term sheet red flags shift economics, control, or optionality beyond the headline valuation. Preference stacks, board seats, protective provisions, and option-pool shuffle often matter more than the first-page number. Read for the second close — not the press release.",
    wrong: [
      "Celebrating valuation while skimming preference, participation, and seniority language.",
      "Accepting an option-pool increase that dilutes founders pre-money without modeling it.",
      "Agreeing to broad protective provisions that turn every hire and pivot into a board event.",
    ],
    bibleLinks: [
      {
        label: "Term sheets red flags",
        href: `${BIBLE}/raising-money/term-sheets-red-flags/`,
      },
    ],
    relatedTopics: ["fundraising"],
  },
];

export const conceptSlugs = concepts.map((c) => c.slug);

export function getConcept(slug: string): ConceptMeta | undefined {
  return concepts.find((c) => c.slug === slug);
}

/** Concepts linked to a topic hub — capped for UI. */
export function getConceptsForTopic(
  topic: Category,
  limit = 3
): ConceptMeta[] {
  return concepts
    .filter((c) => c.relatedTopics.includes(topic))
    .slice(0, limit);
}

export function applyConceptCtaUrl(slug: string): string {
  const params = new URLSearchParams({
    utm_source: "founderratio",
    utm_medium: "referral",
    utm_campaign: `concept-${slug}`,
    utm_content: "concept-page",
  });
  return `https://platform.foundernexus.com/registration?${params.toString()}`;
}
