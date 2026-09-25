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
    blurb: "Simple Agreement for Future Equity — speed with real dilution math.",
    definition:
      "A SAFE converts into equity later, usually at a priced round. Cap, discount, and MFN set the table you sell from later — not paperwork trivia. Stacking SAFEs without modeling conversion is negotiating blind.",
    wrong: [
      "Treating the valuation cap as a vanity number instead of a dilution scenario.",
      "Stacking SAFEs with mismatched terms and no pro forma of the next priced round.",
      "Skipping counsel because 'everyone uses YC's post-money SAFE' — small edits still move ownership.",
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
    blurb: "Free pilots teach; paid contracts prove. Know which you are running.",
    definition:
      "A pilot is a bounded fit test; a paid contract has price, scope, and renewal risk. Many 'pilots' are unpaid science projects that never convert. Free trials with no conversion criteria fund the customer's discovery, not yours.",
    wrong: [
      "Running open-ended free pilots with no success criteria, owner, or end date.",
      "Calling something a pilot when the buyer already needs a paid SOW — and discounting anyway.",
      "Treating a logo as traction without a path to paid expansion.",
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
    relatedTopics: ["fundraising"],
  },
  {
    slug: "pre-money-vs-post-money",
    title: "Pre-money vs post-money",
    blurb: "Same round, different ownership — know which number you are negotiating.",
    definition:
      "Pre-money is company value before new capital; post-money is pre-money plus the check. Ownership is investment divided by post-money. Confusing the two is how founders celebrate a headline and give away an extra third of the company.",
    wrong: [
      "Treating a '$90M valuation' as interchangeable when pre vs post changes ownership by a full slice.",
      "Pitching post-money language while investors model dilution on pre-money — and not catching the mismatch.",
      "Skipping a simple ownership table before agreeing to the number in the room.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "valuation-cap",
    title: "Valuation cap",
    blurb: "The SAFE ceiling that sets how much equity early checks buy later.",
    definition:
      "A valuation cap is the maximum price at which a SAFE converts in a priced round. Above the cap, early money buys more ownership than new investors; below it, they convert at the round (or a discount). The cap is a dilution scenario — not a badge.",
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
    blurb: "Unvested founder stock can be clawed back — standard is four years with a cliff.",
    definition:
      "Founder vesting means the company can repurchase unvested shares at cost until they vest. Four years monthly with a one-year cliff is the market default. It protects co-founders and later investors if someone leaves early — and it is what investors expect on the cap table.",
    wrong: [
      "Skipping vesting between co-founders 'because we trust each other' and then fighting over a departure.",
      "Assuming acceleration, cliffs, and repurchase price are boilerplate you can ignore until counsel asks.",
      "Leaving unvested stock undocumented while raising — investors will force the cleanup mid-process.",
    ],
    relatedTopics: ["leadership", "hiring"],
  },
  {
    slug: "83b-election",
    title: "83(b) election",
    blurb: "File within 30 days of the grant — or tax every vest at future FMV.",
    definition:
      "An 83(b) election tells the IRS to tax restricted stock on the grant date instead of as each tranche vests. For early founder stock near zero FMV, that difference is the tax bill. Miss the 30-day window and you do not get a do-over.",
    wrong: [
      "Treating 83(b) as optional paperwork you can file 'when you get to it.'",
      "Receiving vesting stock and never confirming whether counsel filed — and for whom.",
      "Focusing on strike price while ignoring the election deadline that locks the tax treatment.",
    ],
    relatedTopics: ["leadership", "hiring"],
  },
  {
    slug: "option-pool",
    title: "Option pool",
    blurb: "Reserved equity for hires and advisors — often expanded pre-money at your expense.",
    definition:
      "The option pool is equity reserved for employees and advisors. Investors often require a larger pool before the round closes, which dilutes founders on a pre-money basis. Size the pool to a real hiring plan — not a round number that looks 'market.'",
    wrong: [
      "Accepting a pre-money pool shuffle without modeling founder ownership after the refresh.",
      "Building a 20% pool with no 18-month hiring plan that actually spends it.",
      "Granting advisor and early-hire equity ad hoc outside pool bands and vesting norms.",
    ],
    relatedTopics: ["hiring", "fundraising"],
  },
  {
    slug: "venture-debt",
    title: "Venture debt",
    blurb: "Loan underwritten on investor follow-on — not profits. Senior, secured, with warrants.",
    definition:
      "Venture debt is a loan to a venture-backed company that is usually still burning cash. Lenders underwrite the probability of the next equity round, not EBITDA. It is senior and secured, does not convert, and usually includes a small warrant — useful runway if the equity story still holds.",
    wrong: [
      "Treating venture debt as 'cheap capital' without modeling covenants, security, and warrant dilution.",
      "Drawing debt when the next equity round is unclear — lenders price that risk into control terms.",
      "Ignoring how debt sits ahead of common on a soft exit or restructuring.",
    ],
    relatedTopics: ["fundraising"],
  },
  {
    slug: "default-alive",
    title: "Default alive",
    blurb: "Cash flow keeps the company alive without a new round — not just longer runway.",
    definition:
      "Default alive means the company can survive indefinitely without new outside capital. It is not 'we bought six more months.' It is 'we no longer need a round to exist' — usually paid for with headcount, ambition, or the story the next investor wanted to hear.",
    wrong: [
      "Calling yourself default alive when you still need a bridge to make payroll next quarter.",
      "Cutting to default alive without deciding which product bets and key people survive the cut.",
      "Raising as if nothing changed after a default-alive reset that rewrote the growth narrative.",
    ],
    relatedTopics: ["fundraising", "leadership"],
  },
  {
    slug: "buying-committee",
    title: "Buying committee",
    blurb: "The multi-stakeholder group that actually has to say yes before a B2B deal closes.",
    definition:
      "A buying committee is the set of people — economic buyer, champion, users, security, legal — who must align before a contract signs. One enthusiastic champion is not a deal. Map who can block, who can fund, and what proof each needs, or you will keep winning demos and losing closes.",
    wrong: [
      "Treating the champion as the buyer and discovering procurement, security, or the VP late in the cycle.",
      "Running the same pitch for every stakeholder instead of mapping budget, risk, and user jobs separately.",
      "Calling a verbal 'yes' from one person pipeline when the committee has not seen a shared success criteria.",
    ],
    relatedTopics: ["product", "leadership"],
  },
  {
    slug: "vitamin-vs-painkiller",
    title: "Vitamin vs painkiller",
    blurb: "Nice-to-have versus must-have — the urgency test that decides if buyers will pay and stay.",
    definition:
      "A painkiller solves a problem buyers already budget for and feel weekly; a vitamin is a nice improvement they will defer. Founders confuse polite interest with urgency. If the buyer can wait a quarter without consequence, you are selling a vitamin — and vitamins lose to whatever is on fire.",
    wrong: [
      "Reading 'interesting' demos and soft pipeline as proof the product is a must-have.",
      "Pricing and packaging like a painkiller while buyers treat renewal as optional.",
      "Adding features to raise urgency instead of narrowing to the job that is already painful and funded.",
    ],
    relatedTopics: ["product", "market"],
  },
  {
    slug: "ltv-cac",
    title: "LTV:CAC",
    blurb: "Lifetime value over acquisition cost — the unit-economics gate investors actually read.",
    definition:
      "LTV:CAC is lifetime value divided by customer acquisition cost. In the room it is a ratio gate: roughly 3:1 is bare minimum, 4:1 is more comfortable. If CAC is high, LTV has to clear payback or the growth story is a burn story.",
    wrong: [
      "Reporting LTV with heroic retention and CAC that ignores fully loaded sales and marketing.",
      "Optimizing the ratio while payback period quietly stretches past runway.",
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
