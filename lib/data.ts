import type { NoiseWeek, Dilemma, BenchmarkStage, NoiseSource } from "./types";

export const weeks: NoiseWeek[] = [
  {
    weekOf: "2026-09-21",
    noiseCount: 528,
    signalCount: 5,
    ratio: 105.6,
    note: "Unicorn AEO and AI-factory mega-rounds flooded the timeline while the useful reads were about GTM systems, founder-led sales with agents, and raises that separate primary capital from tender theater.",
    signal: [
      {
        id: "s30-1",
        title:
          "AEO startup Profound hits unicorn valuation, raises $180M Series D 7 months after last round",
        url: "https://techcrunch.com/2026/09/15/aeo-startup-profound-hits-unicorn-valuation-raises-180m-series-d-7-months-after-last-round/",
        source: "TechCrunch",
        whyItMatters:
          "If buyers find you through AI answers, SEO covers only part of your GTM surface, and answer-engine visibility becomes a product and sales problem. Read this if you still treat discovery as a content side project: the models that recommend you now sit on the buying committee.",
        category: "product",
        position: 1,
      },
      {
        id: "s30-2",
        title: "Scaling your growth engines",
        url: "https://www.lennysnewsletter.com/p/scaling-your-b2b-growth-engine",
        source: "Lenny's Newsletter",
        whyItMatters:
          "An operator's map of the six B2B growth channels, with the rule that most of your growth comes from one of the top three. Use it as a checklist for GTM as a system: pick your primary motion and staff it. Paid, outbound, and partnerships can't all be strategy one.",
        category: "leadership",
        position: 2,
      },
      {
        id: "s30-3",
        title: "How a16z speedrun Founders Are Using AI Tools for GTM",
        url: "https://speedrun.substack.com/p/ai-tools-for-gtm-and-sales",
        source: "a16z speedrun",
        whyItMatters:
          "Founder-led sales now means directing agents through prospecting, enrichment, and sequencing instead of typing each email yourself. Read it before you hire a VP Sales: extend your own capacity with a stack, and hire once the motion is documented, however busy you feel.",
        category: "hiring",
        position: 3,
      },
      {
        id: "s30-4",
        title:
          "Y Combinator insurance tech alum Angle Health hits $2.7B valuation",
        url: "https://techcrunch.com/2026/09/18/y-combinator-insurance-tech-alum-angle-health-hits-2-7b-valuation/",
        source: "TechCrunch",
        whyItMatters:
          "A $200M Series C plus a $400M tender, with claimed profitability and 5,000+ SMB employers. Learn to separate primary capital, which funds the company, from tender liquidity for employees. Investors still write large checks into painful, expensive workflow markets without any agent theater.",
        category: "fundraising",
        position: 4,
      },
      {
        id: "s30-5",
        title:
          "Crusoe raises $3.9B to build massive data centers and small modular AI factories",
        url: "https://techcrunch.com/2026/09/17/crusoe-raises-3-9b-to-build-massive-data-centers-and-small-modular-ai-factories/",
        source: "TechCrunch",
        whyItMatters:
          "This week's denominator. Investors are still writing multi-billion checks into AI infrastructure (this one at a ~$31B valuation) while most app-layer founders fight for scraps. Price your round against your own market and ignore the headlines from companies building AI factories.",
        category: "market",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n30-1",
        title: "I ranked #1 in ChatGPT for our category in 11 days (framework inside)",
        url: "#",
        source: "LinkedIn",
        offense:
          "The framework was three screenshots and a CTA, with no query set, retention data, or revenue tied to the answers.",
      },
      {
        id: "n30-2",
        title: "We fired the sales team and our agents closed more pipeline overnight",
        url: "#",
        source: "Twitter/X",
        offense:
          "Pipeline meant calendar holds. Nobody owned the deal when the agent hallucinated the ICP.",
      },
      {
        id: "n30-3",
        title: "Congrats to every founder who raised this week — the market is clearly back",
        url: "#",
        source: "Substack",
        offense:
          "The post treated one $3.9B infra round as a macro signal for seed SaaS. The comments called it a tide that lifts all boats.",
      },
    ],
  },


  {
    weekOf: "2026-09-14",
    noiseCount: 462,
    signalCount: 5,
    ratio: 92.4,
    note: "Infra mega-rounds and agent-security theater crowded the feed. The useful operator stories covered pivots, hiring after cuts, and who still gets to raise.",
    signal: [
      {
        id: "s29-1",
        title:
          "Investing in Lightfield: $47M Series A after the hardest founder move — the pivot",
        url: "https://a16z.com/announcement/investing-in-lightfield/",
        source: "Andreessen Horowitz",
        whyItMatters:
          "For founders mid-pivot, this is the hard path: shrink to a core team, rename the company, and raise into a new thesis. Read it as a case study in when to cut and what it costs to find product-market fit a second time.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s29-2",
        title:
          "Sequoia doubles down on Cymphony as AI agents create new enterprise security risks",
        url: "https://techcrunch.com/2026/09/09/sequoia-doubles-down-on-cymphony-as-ai-agents-create-new-enterprise-security-risks/",
        source: "TechCrunch",
        whyItMatters:
          "If you ship agents into customer environments, security is part of the product surface. If you sell to IT buyers, expect more people on the buying committee.",
        category: "product",
        position: 2,
      },
      {
        id: "s29-3",
        title:
          "How This Doctor-Turned-Startup-Founder Decided To Fix The Healthcare Staffing Crunch: Make Employers Apply",
        url: "https://news.crunchbase.com/venture/doctor-turned-startup-founder-healthcare-staffing-crunch-abuzeid-incredible/",
        source: "Crunchbase News",
        whyItMatters:
          "A non-technical founder raised ~$97M by getting selective about investors after talking to ~70 for seed. If you're raising now, borrow the filter: favor marketplace experience and operator partners over logo collecting.",
        category: "hiring",
        position: 3,
      },
      {
        id: "s29-4",
        title: "Poseidon Aerospace lands $60M ahead of first pilotless test flight",
        url: "https://techcrunch.com/2026/09/08/poseidon-aerospace-lands-60m-ahead-of-first-pilotless-test-flight/",
        source: "TechCrunch",
        whyItMatters:
          "A hard-tech Series A tied to a near-term flight milestone and an explicit hiring spree. Software founders should compare raising when the metrics look good with raising against a proof point nobody can fake.",
        category: "fundraising",
        position: 4,
      },
      {
        id: "s29-5",
        title:
          "Temporal raises $550M at a $12.55B valuation as demand grows for reliable AI infrastructure",
        url: "https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai",
        source: "Temporal",
        whyItMatters:
          "This week's denominator. Investors keep pouring money into reliable AI infrastructure while most app-layer founders fight for scraps. Price your round against your own market, whatever companies processing trillions of actions can raise.",
        category: "market",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n29-1",
        title: "We pivoted without firing anyone and culture has never been stronger",
        url: "#",
        source: "LinkedIn",
        offense:
          "Burn stayed flat, and the only strategy update was a new adjective on the roadmap.",
      },
      {
        id: "n29-2",
        title: "Our agents are full teammates now (org chart attached)",
        url: "#",
        source: "Twitter/X",
        offense:
          "Nobody listed an owner for when the agent deleted the CRM field. The post framed accountability as a vibe.",
      },
      {
        id: "n29-3",
        title: "Congrats to every founder who raised this week — proof the market is back",
        url: "#",
        source: "Substack",
        offense:
          "The post showed twelve logos and no cohort retention. The comments still called it a macro signal.",
      },
    ],
  },

  {
    weekOf: "2026-04-20",
    noiseCount: 221,
    signalCount: 5,
    ratio: 44.2,
    note: 'Mega-rounds and "physical AI" ate the timeline while the rest of the feed argued about whether defense tech counts as infrastructure.',
    signal: [
      {
        id: "s8-1",
        title:
          "Q1 2026 Shatters Venture Funding Records As AI Boom Pushes Startup Investment To $300B",
        url: "https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/",
        source: "Crunchbase News",
        whyItMatters:
          "Whether or not you're raising for AI, investors price your round against this denominator. The piece puts hard numbers on how concentrated the money has become.",
        category: "market",
        position: 1,
      },
      {
        id: "s8-2",
        title: "Hermeus raises $350M to build autonomous hypersonic fighters",
        url: "https://techcrunch.com/2026/04/07/hermeus-raises-350m-to-build-autonomous-hypersonic-fighters/",
        source: "TechCrunch",
        whyItMatters:
          'An extreme case: investors still write nine-figure checks for frontier hardware and defense while software multiples look noisy. Use it as a reality check on "small" SaaS comps.',
        category: "fundraising",
        position: 2,
      },
      {
        id: "s8-3",
        title:
          "VC Eclipse has a new $1.3B fund to back — and build — 'physical AI' startups",
        url: "https://techcrunch.com/2026/04/07/vc-eclipse-has-a-new-1-3b-to-back-and-build-physical-ai-startups/",
        source: "TechCrunch",
        whyItMatters:
          "While pure-software GTM feels crowded, allocators are backing teams that can ship atoms as well as prompts.",
        category: "market",
        position: 3,
      },
      {
        id: "s8-4",
        title:
          "Cognichip wants AI to design the chips that power AI, and just raised $60M to try",
        url: "https://techcrunch.com/2026/04/01/cognichip-wants-ai-to-design-the-chips-that-power-ai-and-just-raised-60m-to-try/",
        source: "TechCrunch",
        whyItMatters:
          "The stack keeps compressing upward. If you build on GPUs, the companies automating the silicon layer affect how fast your unit economics can move.",
        category: "product",
        position: 4,
      },
      {
        id: "s8-5",
        title: "Nvidia-backed SiFive hits $3.65B valuation for open AI chips",
        url: "https://techcrunch.com/2026/04/11/nvidia-backed-sifive-hits-3-65-billion-valuation-for-open-ai-chips/",
        source: "TechCrunch",
        whyItMatters:
          "Enterprise buyers and hyperscalers negotiate leverage around open RISC-V and AI accelerators. App founders should know where the IP fights are too.",
        category: "market",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n8-1",
        title: "We went physical AI before we had a physical product",
        url: "#",
        source: "LinkedIn",
        offense:
          "The post mistook a deck theme for a supply chain. The author tagged investors anyway.",
      },
      {
        id: "n8-2",
        title:
          "Why your cap table needs a narrative arc before your customers do",
        url: "#",
        source: "Substack",
        offense:
          "Twelve hundred words on storytelling and none on retention cohorts.",
      },
      {
        id: "n8-3",
        title:
          "I replaced our weekly business review with an agent that only speaks in OKRs",
        url: "#",
        source: "Twitter/X",
        offense:
          "The meeting got shorter because nobody could decode the output, and the author called that a win.",
      },
    ],
  },

  {
    weekOf: "2026-04-13",
    noiseCount: 218,
    signalCount: 5,
    ratio: 43.6,
    note: "Investors kept concentrating capital at the top while the founder feed swung between AI certainty, layoff realism, and recycled GTM posturing.",
    signal: [
      {
        id: "s7-1",
        title:
          "These 3 Charts Show How Venture Capital Has Concentrated At The Top In 2026",
        url: "https://news.crunchbase.com/venture/capital-concentrated-ai-global-q1-2026/",
        source: "Crunchbase News",
        whyItMatters:
          "If you're raising outside the frontier-model slipstream, this is your market. The charts make it plain: investors are putting more dollars into fewer companies.",
        category: "market",
        position: 1,
      },
      {
        id: "s7-2",
        title: "The Crunchbase Tech Layoffs Tracker",
        url: "https://news.crunchbase.com/startups/tech-layoffs/",
        source: "Crunchbase News",
        whyItMatters:
          "A read on hiring conditions without the optimism theater. You can see where teams are still contracting, which functions are losing people, and how cautious hiring remains.",
        category: "hiring",
        position: 2,
      },
      {
        id: "s7-3",
        title:
          "Exclusive: GetWhys Raises $5.2M To Help Companies Like Intel And Verizon Better Understand Their Customers",
        url: "https://news.crunchbase.com/venture/customer-intelligence-ai-getwhys-raises-more-seed-boutros/",
        source: "Crunchbase News",
        whyItMatters:
          "Skip the round size and look at the model: humans run proprietary customer interviews, and AI compresses them into reusable GTM intelligence.",
        category: "product",
        position: 3,
      },
      {
        id: "s7-4",
        title: "Wealth.com Nabs $65M Series B Round",
        url: "https://vcnewsdaily.com/wealth.com/venture-capital-funding/wycmfbtjts",
        source: "VC News Daily",
        whyItMatters:
          "Investors still fund companies that solve expensive, workflow-heavy problems in traditional industries. If the pain in a market is big enough, you can still raise into it.",
        category: "fundraising",
        position: 4,
      },
      {
        id: "s7-5",
        title: "Founder retreats",
        url: "https://www.highsignal.io/founder-retreats/",
        source: "High Signal",
        whyItMatters:
          "Read it for the behavior behind the retreat trend: founders are looking for smaller, higher-trust rooms, away from the usual timeline noise.",
        category: "leadership",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n7-1",
        title:
          "We replaced standups with AI agents and instantly got 10x faster",
        url: "#",
        source: "LinkedIn",
        offense:
          "The company stopped writing things down and renamed the confusion as speed.",
      },
      {
        id: "n7-2",
        title:
          "Why every founder should post their operating system before they have PMF",
        url: "#",
        source: "Substack",
        offense:
          "A productivity stack presented as strategy, with no customer interviews or product insight behind it.",
      },
      {
        id: "n7-3",
        title: "The agentic org chart is here and middle management is over",
        url: "#",
        source: "Medium",
        offense:
          "The author declared a revolution in the headline and backed it with three examples, none from a company you'd want to copy yet.",
      },
    ],
  },

  {
    weekOf: "2026-03-30",
    noiseCount: 1247,
    signalCount: 5,
    ratio: 249.4,
    note: 'Q1 retrospective season arrived early, and founders flooded LinkedIn with "what I learned building in public" posts.',
    signal: [
      {
        id: "s5-1",
        title: "The Seed Round Is Dead. Here's What Replaced It.",
        url: "https://www.nfx.com/post/seed-round-evolution",
        source: "NFX",
        whyItMatters:
          "Pre-seed and pre-product capital has changed shape. If you still pitch a seed round like it's 2021, you're speaking a language investors stopped using.",
        category: "fundraising",
        position: 1,
      },
      {
        id: "s5-2",
        title: "What Stripe Taught Us About Hiring Without a Job Description",
        url: "https://review.firstround.com/stripe-hiring-patterns",
        source:
          "mes. This piece reverse-engineers what they were actually selecting for — and why most startups optimize for the wrong signals entirely.Stripe's early hiring had almost nothing to do with resu",
        whyItMatters:
          "Stripe's early hiring had almost nothing to do with resumes. The piece reverse-engineers what Stripe selected for and why most startups screen for the wrong signals.",
        category: "hiring",
        position: 2,
      },
      {
        id: "s5-3",
        title: "Why Most Products Die in the Gap Between MVP and Scale",
        url: "https://www.reforge.com/blog/mvp-to-scale-gap",
        source: "Reforge",
        whyItMatters:
          "Founders celebrate reaching MVP and rarely discuss the brutal middle phase, when the product works but doesn't grow. The piece names the traps in that phase.",
        category: "product",
        position: 3,
      },
      {
        id: "s5-4",
        title: "The CEO Who Runs the Company Without Being in Every Room",
        url: "https://www.lennysnewsletter.com/p/ceo-leverage-without-control",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Scaling leadership is the hardest part of founder life and the least discussed. The piece shows, with specifics, how operators create leverage without becoming the bottleneck.",
        category: "leadership",
        position: 4,
      },
      {
        id: "s5-5",
        title: "The Quiet Collapse of the VC-Backed B2B Playbook",
        url: "https://www.thegeneralist.co/briefing/b2b-playbook-collapse",
        source: "The Generalist",
        whyItMatters:
          "The raise-big, hire-fast, sell-your-way-to-growth playbook is unwinding. The piece looks at what replaces it and why founders who ignore the shift are in trouble.",
        category: "market",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n5-1",
        title:
          "I Left a $400K Job to Build in Public and Here's Everything I Learned in Q1",
        url: "#",
        source: "LinkedIn",
        offense:
          "Of twelve bullet points, three were about mindset. The salary figure held up the rest.",
      },
      {
        id: "n5-2",
        title: "We Hit $1K MRR — Here Are the 17 Lessons That Got Us Here",
        url: "#",
        source: "Substack",
        offense:
          "Seventeen lessons is fourteen too many. Lesson one was 'charge more,' and the other sixteen restated it.",
      },
      {
        id: "n5-3",
        title:
          "Why AI Will Replace 80% of Your Team (And Why That Is Actually Great)",
        url: "#",
        source: "Medium",
        offense:
          "The post cited no research or data. The 80% figure appeared in paragraph one and never came up again.",
      },
    ],
  },

  {
    weekOf: "2025-03-24",
    noiseCount: 1284,
    signalCount: 5,
    ratio: 256.8,
    note: "AI wrapper season hit full swing, with 312 launches on Product Hunt alone.",
    signal: [
      {
        id: "s1-1",
        title: "The Founder Loneliness Problem Nobody Talks About",
        url: "https://review.firstround.com/founder-loneliness",
        source: "First Round Review",
        whyItMatters:
          "The most honest piece on isolation at the top in years, built on interviews with founders who've been through it. Read it slowly.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s1-2",
        title: "How to Know When Your Positioning Is Actually Working",
        url: "https://lenny.substack.com/p/positioning",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Most positioning advice stops at the framework. This piece shows what working positioning looks like in the market, and the signals are subtler than you'd expect.",
        category: "market",
        position: 2,
      },
      {
        id: "s1-3",
        title: "Why Your Series B Is Harder Than Your Series A",
        url: "https://a16z.com/series-b-harder",
        source: "a16z",
        whyItMatters:
          "A clear-eyed breakdown of why the metrics that got you an A won't get you a B. Most founders don't see the shift in investor narrative coming, so start with that section.",
        category: "fundraising",
        position: 3,
      },
      {
        id: "s1-4",
        title: "The Hire That Almost Broke My Company",
        url: "https://www.lennyrachitsky.com/p/bad-hire",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Most founders have one of these stories. This is the first I've read that dissects what went wrong in the room where the team made the hire, instead of only the aftermath.",
        category: "hiring",
        position: 4,
      },
      {
        id: "s1-5",
        title: "What Crunchbase Data Actually Says About Startup Survival",
        url: "https://techcrunch.com/startup-survival-data",
        source: "TechCrunch",
        whyItMatters:
          "Skip the headline and go to the survival curve by sector in the middle of the piece. Bookmark it before your next board meeting.",
        category: "market",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n1-1",
        title: "10 AI Tools Every Founder Needs in 2025 (You Won't Believe #7)",
        url: "#",
        source: "LinkedIn",
        offense:
          "A numbered list of tools the author has never used, written by an AI, promoted by a newsletter about AI productivity.",
      },
      {
        id: "n1-2",
        title: "Why I Quit My $500K Job to Build My Dream Startup",
        url: "#",
        source: "Medium",
        offense:
          "3,200 words with no product information, eight mentions of 'purpose,' and one affiliate link to a productivity app.",
      },
      {
        id: "n1-3",
        title: "The Founder's Guide to Authentic Storytelling in the Age of AI",
        url: "#",
        source: "Substack",
        offense:
          "ChatGPT wrote all of it. Nobody edited it, and it went live in 4 minutes.",
      },
    ],
  },
  {
    weekOf: "2025-03-17",
    noiseCount: 1197,
    signalCount: 5,
    ratio: 239.4,
    note: "Three major 'State of Startups' reports dropped at once, and each contradicted the others.",
    signal: [
      {
        id: "s2-1",
        title: "What I Learned Firing My First VP",
        url: "https://review.firstround.com/firing-vp",
        source: "First Round Review",
        whyItMatters:
          "The tactical detail is more honest than most. I've lived the part about what the board said vs. what it meant.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s2-2",
        title: "How Figma Kept Product Quality as It Scaled",
        url: "https://coda.io/figma-quality",
        source: "Coda",
        whyItMatters:
          "Figma's process changes and the tradeoffs behind them, without the culture-deck gloss. You can copy the section on design review cadence.",
        category: "product",
        position: 2,
      },
      {
        id: "s2-3",
        title: "The Quiet Signals Your Investors Are Losing Confidence",
        url: "https://a16z.com/investor-signals",
        source: "a16z",
        whyItMatters:
          "You can catch most of these signals early if you know what to look for. Most founders catch them too late.",
        category: "fundraising",
        position: 3,
      },
      {
        id: "s2-4",
        title: "The Contrarian Case for Slowing Down Before Series A",
        url: "https://www.nfx.com/post/slow-down",
        source: "NFX",
        whyItMatters:
          "It argues against most of what you'll hear in SF right now. Read the argument and decide for yourself.",
        category: "fundraising",
        position: 4,
      },
      {
        id: "s2-5",
        title: "Rethinking the All-Hands Meeting",
        url: "https://www.notion.com/all-hands",
        source: "Notion",
        whyItMatters:
          "More practical than I expected. Separating information-sharing from alignment-building changed how I think about the format.",
        category: "leadership",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n2-1",
        title: "I Talked to 1,000 Founders and Here's What They All Said",
        url: "#",
        source: "Substack",
        offense:
          "A survey of 23 unnamed founders from a newsletter with 400 subscribers. The headline still says 1,000.",
      },
      {
        id: "n2-2",
        title: "The Future of Startups Is Community-Led Growth",
        url: "#",
        source: "LinkedIn",
        offense:
          "Fourth post this month about community-led growth by someone who has never built a community.",
      },
      {
        id: "n2-3",
        title: "How to Get 10,000 Followers in 30 Days as a Founder",
        url: "#",
        source: "Twitter/X thread",
        offense:
          "The strategy is 'post every day.' The author has 847 followers.",
      },
    ],
  },
  {
    weekOf: "2025-03-10",
    noiseCount: 1143,
    signalCount: 5,
    ratio: 228.6,
    note: "South by Southwest week brought a take from every newsletter, and most were identical.",
    signal: [
      {
        id: "s3-1",
        title: "What Board Members Actually Think During Your Presentation",
        url: "https://review.firstround.com/board-presentation",
        source: "First Round Review",
        whyItMatters:
          "Read this before your next board meeting. The gap between what founders present and what boards evaluate is wider than you'd guess.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s3-2",
        title: "The Market Map Nobody Wants to Show You",
        url: "https://a16z.com/market-map",
        source: "a16z",
        whyItMatters:
          "Data on how market positioning affects fundraising outcomes. The category creation vs. category entry analysis is the strongest section.",
        category: "market",
        position: 2,
      },
      {
        id: "s3-3",
        title: "Your Reference Checks Are Probably Useless",
        url: "https://www.lennyrachitsky.com/p/reference-checks",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Most founders inherit this process failure without questioning it. Test the alternative in section three on your next hire.",
        category: "hiring",
        position: 3,
      },
      {
        id: "s3-4",
        title: "Stripe's First 10 Hires and What They Got Wrong",
        url: "https://www.stripe.com/blog/first-hires",
        source: "Stripe Blog",
        whyItMatters:
          "More honest than most company blog posts. Read the part about the hires that didn't work out.",
        category: "hiring",
        position: 4,
      },
      {
        id: "s3-5",
        title: "When to Pivot and When to Persist",
        url: "https://www.ycombinator.com/library/pivot",
        source: "Y Combinator",
        whyItMatters:
          "Most pivot frameworks are vague. This one gives you specific signals and a decision tree you can use in the room when you have to decide.",
        category: "product",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n3-1",
        title: "SXSW 2025: The 47 Biggest Takeaways for Founders",
        url: "#",
        source: "Newsletter",
        offense:
          "The author wrote it from home without attending SXSW and cited other newsletters that didn't attend either.",
      },
      {
        id: "n3-2",
        title: "Why Every Startup Needs a Chief AI Officer in 2025",
        url: "#",
        source: "Forbes",
        offense:
          "Sponsored content. The CAIO in the interview runs a firm that helps companies hire CAIOs.",
      },
      {
        id: "n3-3",
        title: "The Morning Routine That Helped Me Build a $10M ARR Business",
        url: "#",
        source: "Medium",
        offense:
          "Cold plunge, journaling, and a 4 AM wake-up. The $10M ARR figure appears once, in the headline.",
      },
    ],
  },
  {
    weekOf: "2025-03-03",
    noiseCount: 1089,
    signalCount: 5,
    ratio: 217.8,
    note: "In the first week of March, Q1 pressure showed up in founder content as anxiety and listicles.",
    signal: [
      {
        id: "s4-1",
        title: "The Honest Post-Mortem: What We Got Wrong at $5M ARR",
        url: "https://www.lennyrachitsky.com/p/post-mortem",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Founders usually write post-mortems after a company dies. This one followed a near-miss, and the section on the decisions that almost ended the company is candid.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s4-2",
        title: "The Hidden Cost of Your Investor Composition",
        url: "https://a16z.com/investor-composition",
        source: "a16z",
        whyItMatters:
          "Your cap table's composition matters more than the valuation. The piece quantifies why, and what the wrong mix costs you.",
        category: "fundraising",
        position: 2,
      },
      {
        id: "s4-3",
        title: "Sequoia's Framework for Evaluating Market Timing",
        url: "https://www.sequoiacap.com/article/market-timing",
        source: "Sequoia",
        whyItMatters:
          "Every pitch room has a timing question, and founders rarely answer it well. The framework gives you language for that conversation.",
        category: "market",
        position: 3,
      },
      {
        id: "s4-4",
        title: "What Happens to Your Team When You Raise Too Much",
        url: "https://review.firstround.com/raise-too-much",
        source: "First Round Review",
        whyItMatters:
          "Raising too much changes a team's culture, and few writers cover it. This is the first piece I've read that takes it seriously.",
        category: "leadership",
        position: 4,
      },
      {
        id: "s4-5",
        title: "The Art of the Async Update",
        url: "https://www.notion.com/async-update",
        source: "Notion",
        whyItMatters:
          "The piece isn't a Notion ad. I've started using its format for weekly investor updates from section two.",
        category: "product",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n4-1",
        title:
          "I Used AI to Automate My Entire Business and Here's What Happened",
        url: "#",
        source: "LinkedIn",
        offense:
          "The business is a newsletter, and the automation is a tool that reposts his own tweets. It got 84,000 views.",
      },
      {
        id: "n4-2",
        title: "Growth Hacking Is Dead. Long Live Authentic Growth.",
        url: "#",
        source: "Substack",
        offense:
          "The author's definition of authentic growth includes buying newsletter swaps and cold DM sequences.",
      },
      {
        id: "n4-3",
        title: "Why I Turned Down $10M to Stay True to My Vision",
        url: "#",
        source: "Twitter/X thread",
        offense:
          "Nobody made an offer. The '$10M' is a hypothetical the author poses in paragraph four.",
      },
    ],
  },
];

export function getCurrentWeek(): NoiseWeek {
  return weeks[0];
}

export function getRatioHistory(): { week: string; ratio: number }[] {
  return [...weeks].reverse().map((w) => ({
    week: w.weekOf,
    ratio: w.ratio,
  }));
}

export function getWeekByDate(date: string): NoiseWeek | undefined {
  return weeks.find((w) => w.weekOf === date);
}

// ── Weekly Dilemma ────────────────────────────────────────────────────────────

export const dilemmas: Dilemma[] = [
  {
    id: "d2026-09-14",
    weekOf: "2026-09-14",
    context:
      "We are a 28-person B2B SaaS team at $2.4M ARR, flat for two quarters. We raised $18M at a $90M post 20 months ago. Two enterprise logos drive 40% of revenue and both renewals are soft. A growth fund will lead a $12M extension at a flat round if we keep headcount and ship an AI agent packaging story. Our gut says we need to cut to ~14, rebuild GTM around one ICP, and raise smaller later — Lightfield-style — but the board wants the extension closed this month.",
    decision:
      "Take the flat extension and keep the team, or cut hard now and risk the board fight / fundraising gap?",
    stakes:
      "The extension buys runway into a story we do not believe. The cut buys honesty and may strand us without a lead for 6–9 months.",
    submittedBy: "Series A founder, B2B SaaS",
  },
  {
    id: "d2026-04-20",
    weekOf: "2026-04-20",
    context:
      "We're a 12-person team building devtools. A strategic wants to lead at a $45M pre with a $15M check. They expect a board seat and want us to prioritize an integration with their cloud marketplace before two enterprise pilots close. Our last round was $6M on a $24M cap 14 months ago. We're at $1.1M ARR, roughly flat quarter-over-quarter but NRR is 118%.",
    decision:
      "Take the strategic-led round now, or raise a smaller insider extension and keep the roadmap customer-led?",
    stakes:
      "The strategic money could open distribution—or turn us into a feature team with a cap table we can't unwind.",
    submittedBy: "Seed founder, developer tools",
  },
  {
    id: "d2026-03-30",
    weekOf: "2026-03-30",
    context:
      "We have a term sheet from a brand-name fund at a $28M pre-money. Our existing lead says they'll follow but won't re-lead. The new investor wants to install an outside CFO as a condition of closing. We're at $1.8M ARR, growing 15% month-over-month. We don't think we need a CFO yet, but the capital extends runway from 8 months to 26.",
    decision:
      "Take the money on their terms, or keep looking with 8 months of runway left?",
    stakes:
      "If we pass, we may not find another lead in time. If we take it, we're committing to a CFO hire we didn't choose and may not need.",
    submittedBy: "Series A founder, enterprise SaaS",
  },
];

export function getCurrentDilemma(): Dilemma {
  return dilemmas[0];
}

// ── Honest Benchmarks ─────────────────────────────────────────────────────────

export const benchmarks: BenchmarkStage[] = [
  {
    stage: "Pre-Seed",
    period: "Q1 2026",
    raised: "$750K–$1.2M",
    arr: "Pre-revenue or <$50K",
    growth: "N/A",
    runway: "12–15 mo",
    teamSize: "2–4",
    note: "Most deals are founder-led, friends-and-family, or angel syndicates. Deck-stage is still possible but increasingly rare without a working prototype.",
  },
  {
    stage: "Seed",
    period: "Q1 2026",
    raised: "$2M–$4M",
    arr: "$150K–$600K",
    growth: "3–5x YoY",
    runway: "18–24 mo",
    teamSize: "6–12",
    note: "Bar has moved up significantly. Investors want real signal — paying customers, not just pilots. $0 ARR seed rounds are the exception, not the rule.",
  },
  {
    stage: "Series A",
    period: "Q1 2026",
    raised: "$8M–$15M",
    arr: "$1M–$2.5M",
    growth: "2.5–4x YoY",
    runway: "18–24 mo",
    teamSize: "15–30",
    note: "The A is a bet on repeatability. Investors want to see the GTM motion working — not just that you closed deals, but that you can close them again without the founder in every call.",
  },
  {
    stage: "Series B",
    period: "Q1 2026",
    raised: "$25M–$50M",
    arr: "$6M–$15M",
    growth: "2–3x YoY",
    runway: "24–30 mo",
    teamSize: "40–80",
    note: "Scale mode. You're hiring ahead of the curve. Investors are pricing the path to $100M ARR. If you can't show how you get there in 3–4 years, the conversation stalls.",
  },
];

// ── Noise Leaderboard ─────────────────────────────────────────────────────────

export const noiseSources: NoiseSource[] = [
  {
    rank: 1,
    name: "LinkedIn (founder content)",
    noiseScore: 94,
    verdict:
      "The world's largest performance venue for founders who haven't shipped yet.",
    tier: "high",
  },
  {
    rank: 2,
    name: "Medium (startup category)",
    noiseScore: 83,
    verdict:
      "Where frameworks go to retire. Every post ends with a call to follow the author.",
    tier: "high",
  },
  {
    rank: 3,
    name: "Twitter/X (startup discourse)",
    noiseScore: 77,
    verdict:
      "Hot takes with the shelf life of a news cycle. The ratio of assertion to evidence is historic.",
    tier: "high",
  },
  {
    rank: 4,
    name: "Generic VC blogs",
    noiseScore: 68,
    verdict:
      "Portfolio updates dressed as market insight. Useful for knowing what they've already funded.",
    tier: "high",
  },
  {
    rank: 5,
    name: "TechCrunch",
    noiseScore: 57,
    verdict:
      "Funding announcements are news. The surrounding content is mostly noise at speed.",
    tier: "medium",
  },
  {
    rank: 6,
    name: "Substack (avg)",
    noiseScore: 44,
    verdict:
      "Wide variance. The best are excellent. The rest are LinkedIn posts with paragraph breaks.",
    tier: "medium",
  },
  {
    rank: 7,
    name: "Y Combinator (content)",
    noiseScore: 31,
    verdict:
      "Founder-tested heuristics. Ages reasonably well. Occasionally overfits to the YC archetype.",
    tier: "medium",
  },
  {
    rank: 8,
    name: "NFX",
    noiseScore: 22,
    verdict:
      "Network effects as a lens on everything. Works more often than it should.",
    tier: "low",
  },
  {
    rank: 9,
    name: "Lenny's Newsletter",
    noiseScore: 19,
    verdict:
      "The rare practitioner voice that doesn't overstay its welcome. Consistently worth opening.",
    tier: "low",
  },
  {
    rank: 10,
    name: "First Round Review",
    noiseScore: 16,
    verdict:
      "The gold standard for operator-sourced insight. Slow cadence, high signal.",
    tier: "low",
  },
];
