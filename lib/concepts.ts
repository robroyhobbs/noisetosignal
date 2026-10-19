import type { Category } from "./types";

export interface ConceptMeta {
  slug: string;
  title: string;
  /** One-line index blurb. */
  blurb: string;
  /** 2–4 sentence FR definition — why care this week. */
  definition: string;
  /** Where founders get this wrong — max 3. */
  wrong: string[];
  relatedTopics: Category[];
}

export const concepts: ConceptMeta[] = [
  {
    slug: "safe",
    title: "SAFE",
    blurb: "Simple Agreement for Future Equity: fast to sign, with dilution you still have to model.",
    definition:
      "A SAFE converts into equity later, usually at the next priced round. The cap, discount, and MFN terms decide how much of the company you sell when it converts. If you stack SAFEs without modeling conversion, you are negotiating blind.",
    wrong: [
      "Treating the valuation cap as a vanity number and never modeling it as dilution.",
      "Stacking SAFEs with mismatched terms and no pro forma of the next priced round.",
      "Skipping counsel because 'everyone uses YC's post-money SAFE.' Small edits to the standard form still move ownership.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "liquidation-preference",
    title: "Liquidation preference",
    blurb: "Who gets paid first on exit, and what 1x non-participating means for common.",
    definition:
      "A liquidation preference sets how much investors collect, and in what order, before common gets paid in a sale or liquidation. A 'standard' term can erase your upside in a soft exit. Model the stack against the outcomes you are likely to get, well short of the unicorn case.",
    wrong: [
      "Assuming 1x non-participating is harmless without checking seniority and multiples in the stack.",
      "Ignoring participating preferred or stacked prefs that wipe out common in mid-size exits.",
      "Negotiating valuation while leaving preference language unread until counsel's redline.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "founder-led-sales",
    title: "Founder-led sales",
    blurb: "You run discovery and close until the motion is repeatable.",
    definition:
      "Founder-led sales means you run discovery, demos, and the close yourself until the pitch, proof, and pricing are ready to hand off. Hire AEs before you can win deals and you burn runway. If you can't explain your last five wins, you aren't ready to hire sales.",
    wrong: [
      "Hiring AEs to 'scale' before the founder has closed enough deals to teach the motion.",
      "Confusing activity (demos booked) with learning (why buyers say yes or no).",
      "Handing off before you have written down the ICP, objection map, and proof points.",
    ],
    relatedTopics: ["product", "leadership"],
  },
  {
    slug: "pilot-vs-paid-contract",
    title: "Pilot vs paid contract",
    blurb: "Know whether you are running a free fit test or a paid contract with renewal risk.",
    definition:
      "A pilot is a bounded fit test. A paid contract has a price, a scope, and renewal risk. Many 'pilots' turn into unpaid science projects that never convert. Run a free trial with no conversion criteria and you pay for the customer's discovery.",
    wrong: [
      "Running open-ended free pilots with no success criteria, owner, or end date.",
      "Calling it a pilot when the buyer already needs a paid SOW, then discounting anyway.",
      "Treating a logo as traction without a path to paid expansion.",
    ],
    relatedTopics: ["product"],
  },
  {
    slug: "runway",
    title: "Runway",
    blurb: "Months of cash left, and what your attention should protect first.",
    definition:
      "Runway is the number of months your operating cash lasts at current burn. It is the clock that forces cuts, and it should decide which bets get your attention. If you can't state your runway, your burn, and the lever that extends both, you are managing by hope.",
    wrong: [
      "Tracking runway in a spreadsheet nobody updates while hiring and tooling keep ramping.",
      "Burning months on 'brand' or speculative features while pipeline and cash collection slip.",
      "Raising too late because 'we still have six months,' with no realistic timeline to close.",
    ],
    relatedTopics: ["fundraising", "leadership"],
  },
  {
    slug: "term-sheet-red-flags",
    title: "Term sheet red flags",
    blurb: "Clauses that look standard and reprice your control or upside.",
    definition:
      "Term sheet red flags are clauses that shift economics, control, or optionality beyond the headline valuation. Preference stacks, board seats, protective provisions, and the option-pool shuffle often matter more than the first-page number. Model each clause against your next round before you sign.",
    wrong: [
      "Celebrating valuation while skimming preference, participation, and seniority language.",
      "Accepting an option-pool increase that dilutes founders pre-money without modeling it.",
      "Agreeing to broad protective provisions that turn every hire and pivot into a board event.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "pre-money-vs-post-money",
    title: "Pre-money vs post-money",
    blurb: "Same round, different ownership. Know which number you are negotiating.",
    definition:
      "Pre-money is the company's value before new capital. Post-money is pre-money plus the check, and investor ownership equals the investment divided by post-money. Mix the two up and you can celebrate a headline while giving away an extra third of the company.",
    wrong: [
      "Treating a '$90M valuation' as interchangeable when pre vs post changes ownership by a full slice.",
      "Pitching in post-money terms while investors model dilution on pre-money, and missing the mismatch.",
      "Skipping a simple ownership table before agreeing to the number in the room.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "valuation-cap",
    title: "Valuation cap",
    blurb: "The SAFE ceiling that sets how much equity early checks buy later.",
    definition:
      "A valuation cap is the maximum price at which a SAFE converts in a priced round. If the round prices above the cap, early money buys more ownership per dollar than new investors. Below it, SAFE holders convert at the round price (or a discount). Model the cap as future dilution before you treat it as a badge.",
    wrong: [
      "Raising the cap to close faster without modeling conversion at a realistic next round.",
      "Stacking caps and discounts across SAFEs with no single ownership pro forma.",
      "Explaining the cap as 'our valuation today' instead of a conversion floor for future equity.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "founder-vesting",
    title: "Founder vesting",
    blurb: "The company can claw back unvested founder stock. The standard is four years with a cliff.",
    definition:
      "Founder vesting lets the company repurchase unvested shares at cost until they vest. The market default is four years, vesting monthly, with a one-year cliff. It protects co-founders and later investors if someone leaves early, and investors expect to see it on the cap table.",
    wrong: [
      "Skipping vesting between co-founders 'because we trust each other' and then fighting over a departure.",
      "Assuming acceleration, cliffs, and repurchase price are boilerplate you can ignore until counsel asks.",
      "Leaving unvested stock undocumented while you raise. Investors will force the cleanup mid-process.",
    ],
    relatedTopics: ["leadership", "hiring"],
  },
  {
    slug: "83b-election",
    title: "83(b) election",
    blurb: "File within 30 days of the grant, or pay tax on each vest at future FMV.",
    definition:
      "An 83(b) election tells the IRS to tax restricted stock on the grant date instead of as each tranche vests. For early founder stock near zero FMV, that timing difference is your tax bill. Miss the 30-day window and you get no do-over.",
    wrong: [
      "Treating 83(b) as optional paperwork you can file 'when you get to it.'",
      "Receiving vesting stock and never confirming whether counsel filed, or for whom.",
      "Focusing on strike price while ignoring the election deadline that locks the tax treatment.",
    ],
    relatedTopics: ["leadership", "hiring"],
  },
  {
    slug: "option-pool",
    title: "Option pool",
    blurb: "Equity reserved for hires and advisors, often expanded pre-money at your expense.",
    definition:
      "The option pool is equity reserved for employees and advisors. Investors often require a larger pool before the round closes, which dilutes founders on a pre-money basis. Size the pool from a real hiring plan and ignore round numbers that look 'market.'",
    wrong: [
      "Accepting a pre-money pool shuffle without modeling founder ownership after the refresh.",
      "Building a 20% pool with no 18-month hiring plan to spend it.",
      "Granting advisor and early-hire equity ad hoc outside pool bands and vesting norms.",
    ],
    relatedTopics: ["hiring", "fundraising"],
  },
  {
    slug: "venture-debt",
    title: "Venture debt",
    blurb: "A senior, secured loan with warrants, underwritten on investor follow-on instead of profits.",
    definition:
      "Venture debt is a loan to a venture-backed company that is usually still burning cash. Lenders underwrite the odds of your next equity round instead of EBITDA. The loan is senior and secured, does not convert, and usually comes with a small warrant. It buys useful runway if your equity story still holds.",
    wrong: [
      "Treating venture debt as 'cheap capital' without modeling covenants, security, and warrant dilution.",
      "Drawing debt when the next equity round is unclear. Lenders price that risk into control terms.",
      "Ignoring how debt sits ahead of common on a soft exit or restructuring.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "default-alive",
    title: "Default alive",
    blurb: "The company can live on its own cash flow with no new round, which is a higher bar than longer runway.",
    definition:
      "Default alive means the company can survive indefinitely without new outside capital. Six more months of runway doesn't qualify; you have to stop needing a round to exist. Founders usually pay for that with headcount, ambition, or the story the next investor wanted to hear.",
    wrong: [
      "Calling yourself default alive when you still need a bridge to make payroll next quarter.",
      "Cutting to default alive without deciding which product bets and key people survive the cut.",
      "Raising as if nothing changed after a default-alive reset that rewrote the growth narrative.",
    ],
    relatedTopics: ["fundraising", "leadership"],
  },
  {
    slug: "ltv-cac",
    title: "LTV:CAC",
    blurb: "Lifetime value over acquisition cost, the unit-economics gate investors look at.",
    definition:
      "LTV:CAC is lifetime value divided by customer acquisition cost. Investors use it as a gate: roughly 3:1 is the bare minimum and 4:1 is more comfortable. If your CAC is high, LTV has to clear payback or investors will read your growth story as a burn story.",
    wrong: [
      "Reporting LTV with heroic retention and CAC that ignores fully loaded sales and marketing.",
      "Optimizing the ratio while the payback period stretches past your runway.",
      "Using blended CAC to hide a channel that will never pay back at scale.",
    ],
    relatedTopics: ["product", "market"],
  },
];

export const conceptSlugs = concepts.map((c) => c.slug);

export function getConcept(slug: string): ConceptMeta | undefined {
  return concepts.find((c) => c.slug === slug);
}

/** Concepts linked to a topic hub — capped for UI. */
export function getConceptsForTopic(
  topic: Category,
  limit = 5
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
