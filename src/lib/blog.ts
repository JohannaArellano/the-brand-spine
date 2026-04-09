export interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  category: string
  readTime: number
  featured: boolean
  content: string
}

const posts: BlogPost[] = [
  {
    slug: 'identity-infrastructure-vs-branding',
    title: 'Identity Infrastructure vs. Branding: Why the Distinction Matters',
    description: 'Branding defines how you look. Identity infrastructure defines how you decide. Understanding the difference is the first step toward governance that scales.',
    author: 'Jo Arellano',
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    category: 'Governance',
    readTime: 7,
    featured: true,
    content: `## The Gap Between Looking Right and Being Right

Most leaders invest in branding long before they invest in the decision logic underneath it. That makes sense early on. You need to be visible. You need to look credible. You need a story people can repeat.

But as you scale, something shifts. The visual identity holds, the messaging stays polished, and yet the decisions start to fracture. One team member says yes to something you would have declined. A partnership gets approved that contradicts your positioning. A piece of content goes out that sounds like you but makes a commitment you never authorized.

**This is the gap between branding and identity infrastructure.** Branding tells the world what you look like. Identity infrastructure tells your organization how you think.

## What Identity Infrastructure Actually Contains

Identity infrastructure includes your point of view, how your priorities rank under pressure, what risks you will take, what you are willing to give up, and what you are not. It is the decision logic that keeps choices aligned across every context and team member.

When your branding and messaging operate from a coherent set of rules, they work better because they are grounded in logic instead of improvisation.

## Why This Matters at Scale

A founder can hold governance in their head when the team is small. Every decision passes through one brain, so consistency is automatic. But the moment you add team members, contractors, agencies, or partners, that governance needs to live somewhere other than your intuition.

**The Brand Spine methodology extracts that governance logic and makes it explicit.** Not a mission statement. Not a brand book. A decision framework that defines how you think, how your priorities rank, and what you will protect when pressure forces a choice.

## FAQ

**Q: Is identity infrastructure the same as brand strategy?**
**A: No. Brand strategy defines positioning and messaging. Identity infrastructure defines the decision rules that sit underneath both.**

**Q: Can I build identity infrastructure without changing my existing branding?**
**A: Yes. Identity infrastructure operates beneath your branding. It strengthens what you already have by giving it a coherent decision foundation.**`,
  },
  {
    slug: 'drift-silent-cost-of-scaling',
    title: 'Drift: The Silent Cost of Scaling Without Structure',
    description: 'When authority fragments across team members and contexts, drift happens. Understanding how to detect and prevent it is essential for leaders who are scaling.',
    author: 'Jo Arellano',
    datePublished: '2025-02-10',
    dateModified: '2025-02-10',
    category: 'Leadership',
    readTime: 6,
    featured: false,
    content: `## What Drift Looks Like

Drift does not announce itself. It accumulates. A team member makes a commitment you would not have made. A piece of content shifts your positioning by two degrees. A partnership gets approved because nobody had a clear rule for what to decline.

None of these are catastrophic on their own. But compounded over months, they reshape your brand into something you did not authorize.

**Drift is what happens when authority scales faster than the structure that governs it.**

## The Three Vectors of Drift

Drift typically moves along three vectors: voice, commitment, and positioning.

**Voice drift** means your team sounds like you on the surface but makes different tonal choices under pressure. They soften where you would hold firm, or they escalate where you would stay measured.

**Commitment drift** means people in your organization say yes to things that contradict your priorities. They take on projects, partnerships, or obligations that fragment your focus.

**Positioning drift** means your place in the market shifts gradually because no one has a clear framework for what you stand for when it is tested.

## How Governance Prevents Drift

The Brand Spine methodology builds a governance architecture that makes drift detectable and correctable. Your decision rules are explicit. Your team operates from the same framework. When something drifts, the system surfaces it before it compounds.

## FAQ

**Q: How do I know if my brand is drifting?**
**A: If team members are making decisions about your brand that you would not have made, drift is already happening.**

**Q: Can drift be fixed after the fact?**
**A: Yes, but prevention is more efficient than correction. Governance architecture prevents drift by giving your team clear decision rules.**`,
  },
  {
    slug: 'brandos-ai-governance-system',
    title: 'BrandOS: How AI Makes Governance Operational',
    description: 'BrandOS is an AI-powered operating system that puts your governance architecture to work across three tiers. Here is how it works and why it matters.',
    author: 'Jo Arellano',
    datePublished: '2025-03-05',
    dateModified: '2025-03-05',
    category: 'BrandOS',
    readTime: 8,
    featured: false,
    content: `## From Document to Operating System

A governance architecture that lives in a PDF is better than no governance at all. But documents get filed. They get forgotten. They do not push back when someone makes a decision that contradicts the framework.

**BrandOS changes this by making governance operational.** It takes the decision rules, voice patterns, and priority frameworks from your Brand Spine and deploys them as an AI-powered operating system that your team actually uses.

## The Three Tiers

BrandOS operates across three tiers, each designed for a different level of access.

**The Leader tier** contains everything. Full governance access, decision support, drift detection, and challenge capability. This is the complete system, designed for the leader whose identity it encodes.

**The Team tier** scales that down for the people who work with you. They get alignment checking, voice-consistent content generation, and opportunity screening. They do not get access to your full governance architecture or strategic decision-making framework.

**The Content tier** scales down further for external creators. Speechwriters, agencies, and content producers get voice execution only. No access to governance or strategy. They can write in your voice without seeing the decision logic behind it.

## Why Tiered Access Matters

Not everyone who touches your brand should have access to your complete governance architecture. A social media contractor does not need to know your strategic priorities. But they do need to write in your voice consistently.

**Tiered access solves this by giving each person exactly the level of access their role requires.** Nothing more, nothing less.

## FAQ

**Q: What platforms does BrandOS deploy on?**
**A: BrandOS deploys across Claude, ChatGPT, and Gemini. It operates on the platforms your team already uses.**

**Q: Can I control what each tier can access?**
**A: Yes. The tiers are architected during the LOCK phase of the Brand Spine engagement. You define what each level can and cannot access.**`,
  },
  {
    slug: 'four-phases-brand-spine',
    title: 'The Four Phases: How the Brand Spine Gets Built',
    description: 'GROUND, MINE, AIM, LOCK. Four phases that take you from intake to a fully deployed governance architecture. Here is what happens in each one.',
    author: 'Jo Arellano',
    datePublished: '2025-03-20',
    dateModified: '2025-03-20',
    category: 'Process',
    readTime: 5,
    featured: false,
    content: `## A System, Not a Workshop

The Brand Spine is not a one-day branding workshop. It is a four-phase engagement that extracts your governance logic, pressure-tests it, and deploys it as operational infrastructure.

Each phase builds on the previous one. You cannot skip ahead because each step requires the foundation that the previous step creates.

## GROUND: Intake and Preparation

The first phase establishes the raw material. We collect voice samples, decision patterns, and the context that shapes how you operate. This is not a questionnaire. It is a structured intake designed to capture how you actually think, not how you think you think.

## MINE: Facilitated Extraction

The second phase is where the governance architecture begins to take shape. Through facilitated sessions, we extract the decision rules that already exist in how you operate. Your point of view, your priority hierarchy, your pressure responses, your non-negotiables.

**Most leaders have governance logic. They just have not made it explicit.** MINE makes it visible and testable.

## AIM: Pressure Testing

The third phase puts your governance architecture under pressure. We run real scenarios against your decision rules to see where they hold and where they break. If two priorities are in collision, we surface it here. If a commitment contradicts a stated value, we find it here.

## LOCK: Finalization and Deployment

The final phase locks the governance architecture into its operational form. You receive your Brand Spine document, three tiers of BrandOS, and a printed Field Guide for team reference. Four to six weeks from start to deployment.

## FAQ

**Q: How much of my time does this require?**
**A: Most of the work happens in guided sessions with us. Expect three to four sessions of 90 minutes each, plus intake preparation time.**

**Q: What if we discover something uncomfortable during the process?**
**A: That is the point. Better to discover a governance gap in our sessions than in the market.**`,
  },
]

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((post) => post.category === category)
}

export function getCategories(): string[] {
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories).sort()
}
