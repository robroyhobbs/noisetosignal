import type { NoiseWeek } from "./types";

export const weeks: NoiseWeek[] = [
  {
    weekOf: "2026-03-30",
    noiseCount: 1247,
    signalCount: 5,
    ratio: 249.4,
    note: "Q1 retrospective season arrived early. Founder LinkedIn flooded with \"what I learned building in public\" posts.",
    signal: [
      {
        id: "s5-1",
        title: "The Seed Round Is Dead. Here's What Replaced It.",
        url: "https://www.nfx.com/post/seed-round-evolution",
        source: "NFX",
        whyItMatters: "Pre-seed and pre-product capital has fundamentally changed shape. If you're still pitching a seed round like it's 2021, you're speaking a language investors quietly stopped using.",
        category: "fundraising",
        position: 1,
      },
      {
        id: "s5-2",
        title: "What Stripe Taught Us About Hiring Without a Job Description",
        url: "https://review.firstround.com/stripe-hiring-patterns",
        source: "mes. This piece reverse-engineers what they were actually selecting for — and why most startups optimize for the wrong signals entirely.Stripe's early hiring had almost nothing to do with resu",
        whyItMatters: "Stripe's early hiring had almost nothing to do with resumes. This piece reverse-engineers what they actually selected for and why most startups optimize for the wrong signals entirely.",
        category: "hiring",
        position: 2,
      },
      {
        id: "s5-3",
        title: "Why Most Products Die in the Gap Between MVP and Scale",
        url: "https://www.reforge.com/blog/mvp-to-scale-gap",
        source: "Reforge",
        whyItMatters: "Everyone celebrates getting to MVP. Nobody talks about the brutal middle phase where the thing works but doesn't grow. This names the traps clearly.",
        category: "product",
        position: 3,
      },
      {
        id: "s5-4",
        title: "The CEO Who Runs the Company Without Being in Every Room",
        url: "https://www.lennysnewsletter.com/p/ceo-leverage-without-control",
        source: "Lenny's Newsletter",
        whyItMatters: "Scaling leadership is the hardest part of founder life and the least discussed. This is a concrete look at how operators create leverage without becoming the bottleneck.",
        category: "leadership",
        position: 4,
      },
      {
        id: "s5-5",
        title: "The Quiet Collapse of the VC-Backed B2B Playbook",
        url: "https://www.thegeneralist.co/briefing/b2b-playbook-collapse",
        source: "The Generalist",
        whyItMatters: "The playbook of raise big, hire fast, grow through sales motion is unwinding. This is a sober look at what is replacing it and why founders who ignore the shift are in trouble.",
        category: "market",
        position: 5,
      }
    ],
    noise: [
      {
        id: "n5-1",
        title: "I Left a $400K Job to Build in Public and Here's Everything I Learned in Q1",
        url: "#",
        source: "LinkedIn",
        offense: "Twelve bullet points. Three were about mindset. The salary figure was load-bearing.",
      },
      {
        id: "n5-2",
        title: "We Hit $1K MRR — Here Are the 17 Lessons That Got Us Here",
        url: "#",
        source: "Substack",
        offense: "Seventeen lessons is fourteen too many. Lesson one was charge more. The other sixteen were variations on the theme.",
      },
      {
        id: "n5-3",
        title: "Why AI Will Replace 80% of Your Team (And Why That Is Actually Great)",
        url: "#",
        source: "Medium",
        offense: "No cited research. No actual data. The 80% figure appeared in paragraph one and was never mentioned again.",
      }
    ],
  },

  {
    weekOf: "2025-03-24",
    noiseCount: 1284,
    signalCount: 5,
    ratio: 256.8,
    note: "AI wrapper season in full swing. Product Hunt alone logged 312 launches.",
    signal: [
      {
        id: "s1-1",
        title: "The Founder Loneliness Problem Nobody Talks About",
        url: "https://review.firstround.com/founder-loneliness",
        source: "First Round Review",
        whyItMatters:
          "This is the most honest piece on isolation at the top in years. Not a listicle, not a hot take — actual interviews with founders who've been through it. Worth reading slowly.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s1-2",
        title: "How to Know When Your Positioning Is Actually Working",
        url: "https://lenny.substack.com/p/positioning",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Most positioning advice stops at the framework. This one shows you what working positioning looks like in the market — the signals are subtler than you'd think.",
        category: "market",
        position: 2,
      },
      {
        id: "s1-3",
        title: "Why Your Series B Is Harder Than Your Series A",
        url: "https://a16z.com/series-b-harder",
        source: "a16z",
        whyItMatters:
          "Clear-eyed breakdown of why the metrics that got you funded at A won't get you funded at B. The part about investor narrative shift is something most founders don't see coming.",
        category: "fundraising",
        position: 3,
      },
      {
        id: "s1-4",
        title: "The Hire That Almost Broke My Company",
        url: "https://www.lennyrachitsky.com/p/bad-hire",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Every founder has one of these stories. This is the first one I've read that actually dissects what went wrong in the room where the hire was decided — not just the aftermath.",
        category: "hiring",
        position: 4,
      },
      {
        id: "s1-5",
        title: "What Crunchbase Data Actually Says About Startup Survival",
        url: "https://techcrunch.com/startup-survival-data",
        source: "TechCrunch",
        whyItMatters:
          "Skip the headline. The survival curve by sector in the middle of this piece is the part that matters. Bookmark it before your next board meeting.",
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
          "3,200 words. Zero product information. Eight mentions of 'purpose.' One affiliate link to a productivity app.",
      },
      {
        id: "n1-3",
        title: "The Founder's Guide to Authentic Storytelling in the Age of AI",
        url: "#",
        source: "Substack",
        offense: "Written entirely by ChatGPT. No edits. Published in 4 minutes.",
      },
    ],
  },
  {
    weekOf: "2025-03-17",
    noiseCount: 1197,
    signalCount: 5,
    ratio: 239.4,
    note: "Three major 'State of Startups' reports dropped simultaneously. Each contradicted the others.",
    signal: [
      {
        id: "s2-1",
        title: "What I Learned Firing My First VP",
        url: "https://review.firstround.com/firing-vp",
        source: "First Round Review",
        whyItMatters:
          "The tactical detail here is unusually honest. The part about what the board said vs. what they meant is something I've lived personally.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s2-2",
        title: "How Figma Kept Product Quality as It Scaled",
        url: "https://coda.io/figma-quality",
        source: "Coda",
        whyItMatters:
          "Not a 'culture deck' piece. Actual process changes, actual tradeoffs they made. The section on design review cadence is replicable.",
        category: "product",
        position: 2,
      },
      {
        id: "s2-3",
        title: "The Quiet Signals Your Investors Are Losing Confidence",
        url: "https://a16z.com/investor-signals",
        source: "a16z",
        whyItMatters:
          "Most of these signals are things you can catch early if you know what you're looking for. Most founders catch them too late.",
        category: "fundraising",
        position: 3,
      },
      {
        id: "s2-4",
        title: "The Contrarian Case for Slowing Down Before Series A",
        url: "https://www.nfx.com/post/slow-down",
        source: "NFX",
        whyItMatters:
          "Goes against almost everything you'll hear in SF right now. Read it and decide for yourself — but at least read the argument.",
        category: "fundraising",
        position: 4,
      },
      {
        id: "s2-5",
        title: "Rethinking the All-Hands Meeting",
        url: "https://www.notion.com/all-hands",
        source: "Notion",
        whyItMatters:
          "Surprisingly practical. The bit about separating information-sharing from alignment-building changed how I think about the format.",
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
          "Survey of 23 founders, none of whom are named, from a newsletter with 400 subscribers. '1,000' is in the headline.",
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
    note: "South by Southwest week. Every newsletter had a take. Most were identical.",
    signal: [
      {
        id: "s3-1",
        title: "What Board Members Actually Think During Your Presentation",
        url: "https://review.firstround.com/board-presentation",
        source: "First Round Review",
        whyItMatters:
          "Read this before your next board meeting. The gap between what founders present and what boards actually evaluate is wider than most people think.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s3-2",
        title: "The Market Map Nobody Wants to Show You",
        url: "https://a16z.com/market-map",
        source: "a16z",
        whyItMatters:
          "Useful data on how market positioning actually affects fundraising outcomes. The category creation vs. category entry analysis is particularly good.",
        category: "market",
        position: 2,
      },
      {
        id: "s3-3",
        title: "Your Reference Checks Are Probably Useless",
        url: "https://www.lennyrachitsky.com/p/reference-checks",
        source: "Lenny's Newsletter",
        whyItMatters:
          "This is a process failure most founders inherit without questioning. The alternative approach in section three is worth testing on your next hire.",
        category: "hiring",
        position: 3,
      },
      {
        id: "s3-4",
        title: "Stripe's First 10 Hires and What They Got Wrong",
        url: "https://www.stripe.com/blog/first-hires",
        source: "Stripe Blog",
        whyItMatters:
          "More honest than most company blog posts. The part about the hires that didn't work out is the part worth reading.",
        category: "hiring",
        position: 4,
      },
      {
        id: "s3-5",
        title: "When to Pivot and When to Persist",
        url: "https://www.ycombinator.com/library/pivot",
        source: "Y Combinator",
        whyItMatters:
          "Most pivot frameworks are vague. This one has specific signals and a decision tree that's actually usable in the room where the decision has to get made.",
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
          "Written from home. Author did not attend SXSW. Sources: other newsletters that also did not attend.",
      },
      {
        id: "n3-2",
        title: "Why Every Startup Needs a Chief AI Officer in 2025",
        url: "#",
        source: "Forbes",
        offense:
          "Sponsored content. The CAIO being interviewed runs a firm that helps companies hire CAIOs.",
      },
      {
        id: "n3-3",
        title: "The Morning Routine That Helped Me Build a $10M ARR Business",
        url: "#",
        source: "Medium",
        offense:
          "Cold plunge, journaling, 4 AM wake-up. The $10M ARR figure appears once, in the headline, and is never mentioned again.",
      },
    ],
  },
  {
    weekOf: "2025-03-03",
    noiseCount: 1089,
    signalCount: 5,
    ratio: 217.8,
    note: "First week of March. Q1 pressure starting to show in founder content — more anxiety, more listicles.",
    signal: [
      {
        id: "s4-1",
        title: "The Honest Post-Mortem: What We Got Wrong at $5M ARR",
        url: "https://www.lennyrachitsky.com/p/post-mortem",
        source: "Lenny's Newsletter",
        whyItMatters:
          "Post-mortems usually come after a company dies. This one came after a near-miss. The section on the decisions that almost ended them is unusually candid.",
        category: "leadership",
        position: 1,
      },
      {
        id: "s4-2",
        title: "The Hidden Cost of Your Investor Composition",
        url: "https://a16z.com/investor-composition",
        source: "a16z",
        whyItMatters:
          "Who is on your cap table matters more than the valuation. This piece finally quantifies why — and what it costs when the composition is wrong.",
        category: "fundraising",
        position: 2,
      },
      {
        id: "s4-3",
        title: "Sequoia's Framework for Evaluating Market Timing",
        url: "https://www.sequoiacap.com/article/market-timing",
        source: "Sequoia",
        whyItMatters:
          "The timing question is always there in the room and almost never answered well. This framework at least gives you a language for the conversation.",
        category: "market",
        position: 3,
      },
      {
        id: "s4-4",
        title: "What Happens to Your Team When You Raise Too Much",
        url: "https://review.firstround.com/raise-too-much",
        source: "First Round Review",
        whyItMatters:
          "The cultural effects of overcapitalization are real and underreported. This is the first piece I've read that treats it seriously.",
        category: "leadership",
        position: 4,
      },
      {
        id: "s4-5",
        title: "The Art of the Async Update",
        url: "https://www.notion.com/async-update",
        source: "Notion",
        whyItMatters:
          "Not about Notion. Actually useful. The format for weekly investor updates in section two is something I've started using.",
        category: "product",
        position: 5,
      },
    ],
    noise: [
      {
        id: "n4-1",
        title: "I Used AI to Automate My Entire Business and Here's What Happened",
        url: "#",
        source: "LinkedIn",
        offense:
          "The business is a newsletter. The automation is a tool that reposts his own tweets. Views: 84,000.",
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
          "No offer was received. The '$10M' is a hypothetical posed in paragraph four.",
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
