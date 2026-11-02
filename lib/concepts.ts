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
    blurb: "Simple Agreement for Future Equity: fast to sign, with real dilution math.",
    definition:
      "A SAFE converts into equity later, usually at a priced round. Cap, discount, and MFN set the cap table you sell from later, so treat them as economics. If you stack SAFEs without modeling conversion, you negotiate blind.",
    wrong: [
      "Treating the valuation cap as a vanity number instead of a dilution scenario.",
      "Stacking SAFEs with mismatched terms and no pro forma of the next priced round.",
      "Skipping counsel because 'everyone uses YC's post-money SAFE', when small edits still move ownership.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "liquidation-preference",
    title: "Liquidation preference",
    blurb: "Who gets paid first on exit, and what 1x non-participating means for you.",
    definition:
      "Liquidation preference sets the order and amount investors collect before common on a sale or liquidation. A 'standard' term can erase your upside in a soft exit. Model the stack against realistic outcomes instead of the unicorn case.",
    wrong: [
      "Assuming 1x non-participating is always harmless without checking seniority and multiples in the stack.",
      "Ignoring participating preferred or stacked prefs that wipe out common in mid outcomes.",
      "Negotiating valuation while leaving preference language unread until counsel's redline.",
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
    relatedTopics: ["product", "leadership"],
  },
  {
    slug: "pilot-vs-paid-contract",
    title: "Pilot vs paid contract",
    blurb: "A free pilot tests fit and a paid contract proves demand. Know which one you are running.",
    definition:
      "A pilot is a bounded fit test; a paid contract has price, scope, and renewal risk. Many 'pilots' are unpaid science projects that never convert. A free trial with no conversion criteria pays for the customer's discovery at your expense.",
    wrong: [
      "Running open-ended free pilots with no success criteria, owner, or end date.",
      "Calling something a pilot when the buyer already needs a paid SOW, then discounting anyway.",
      "Treating a logo as traction without a path to paid expansion.",
    ],
    relatedTopics: ["product"],
  },
  {
    slug: "runway",
    title: "Runway",
    blurb: "Months of cash left, and what your attention should protect first.",
    definition:
      "Runway is months of operating cash at current burn, the clock that forces cuts. It also sets which bets get your attention. If you cannot state runway, burn, and the lever that extends both, you are managing by hope.",
    wrong: [
      "Tracking runway in a spreadsheet nobody updates while hiring and tooling keep ramping.",
      "Burning months on 'brand' or speculative features while pipeline and cash collection slip.",
      "Raising too late because 'we still have six months', with no realistic close timeline.",
    ],
    relatedTopics: ["fundraising", "leadership"],
  },
  {
    slug: "term-sheet-red-flags",
    title: "Term sheet red flags",
    blurb: "Clauses that look standard and still reprice control or upside.",
    definition:
      "Term sheet red flags shift economics, control, or optionality beyond the headline valuation. Preference stacks, board seats, protective provisions, and option-pool shuffle often matter more than the first-page number. Read it for the second close instead of the press release.",
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
      "Pre-money is company value before new capital; post-money is pre-money plus the check. Ownership is investment divided by post-money. Confusing the two is how founders celebrate a headline and give away an extra third of the company.",
    wrong: [
      "Treating a '$90M valuation' as interchangeable when pre vs post changes ownership by a full slice.",
      "Pitching in post-money terms while investors model dilution on pre-money, and missing the mismatch.",
      "Skipping a simple ownership table before agreeing to the number in the meeting.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "valuation-cap",
    title: "Valuation cap",
    blurb: "The SAFE ceiling that sets how much equity early checks buy later.",
    definition:
      "A valuation cap is the maximum price at which a SAFE converts in a priced round. Above the cap, early money buys more ownership than new investors; below it, they convert at the round (or a discount). Treat the cap as a dilution scenario rather than a badge.",
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
    blurb: "The company can claw back unvested founder stock. Standard is four years with a cliff.",
    definition:
      "Founder vesting means the company can repurchase unvested shares at cost until they vest. Four years monthly with a one-year cliff is the market default. It protects co-founders and later investors if someone leaves early, and investors expect it on the cap table.",
    wrong: [
      "Skipping vesting between co-founders 'because we trust each other' and then fighting over a departure.",
      "Assuming acceleration, cliffs, and repurchase price are boilerplate you can ignore until counsel asks.",
      "Leaving unvested stock undocumented while raising. Investors will force the cleanup mid-process.",
    ],
    relatedTopics: ["leadership", "hiring"],
  },
  {
    slug: "83b-election",
    title: "83(b) election",
    blurb: "File within 30 days of the grant, or pay tax on every vest at future FMV.",
    definition:
      "An 83(b) election tells the IRS to tax restricted stock on the grant date instead of as each tranche vests. For early founder stock near zero FMV, that difference is the tax bill. Miss the 30-day window and you do not get a do-over.",
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
      "The option pool is equity reserved for employees and advisors. Investors often require a larger pool before the round closes, which dilutes founders on a pre-money basis. Size the pool to a real hiring plan instead of a round number that looks 'market.'",
    wrong: [
      "Accepting a pre-money pool shuffle without modeling founder ownership after the refresh.",
      "Building a 20% pool with no 18-month hiring plan that spends it.",
      "Granting advisor and early-hire equity ad hoc outside pool bands and vesting norms.",
    ],
    relatedTopics: ["hiring", "fundraising"],
  },
  {
    slug: "venture-debt",
    title: "Venture debt",
    blurb: "A loan underwritten on investor follow-on rather than profits. Senior, secured, with warrants.",
    definition:
      "Venture debt is a loan to a venture-backed company that is usually still burning cash. Lenders underwrite the probability of the next equity round, not EBITDA. It is senior and secured, does not convert, and usually includes a small warrant. It buys useful runway if the equity story still holds.",
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
    blurb: "Cash flow keeps the company alive without a new round. Longer runway alone does not count.",
    definition:
      "Default alive means the company can survive indefinitely without new outside capital. 'We bought six more months' does not qualify; 'we no longer need a round to exist' does. Founders usually pay for it with headcount, ambition, or the story the next investor wanted to hear.",
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
    blurb: "Lifetime value over acquisition cost: the unit-economics gate investors check.",
    definition:
      "LTV:CAC is lifetime value divided by customer acquisition cost. In investor meetings it works as a ratio gate: roughly 3:1 is the bare minimum, 4:1 is more comfortable. If CAC is high, LTV has to clear payback or the growth story is a burn story.",
    wrong: [
      "Reporting LTV with heroic retention and CAC that ignores fully loaded sales and marketing.",
      "Optimizing the ratio while the payback period stretches past runway.",
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
