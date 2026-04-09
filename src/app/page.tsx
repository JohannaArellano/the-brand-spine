import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Script from 'next/script'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import MarqueeTicker from '@/components/MarqueeTicker'
import FAQ from '@/components/FAQ'
import SpineVisual from '@/components/SpineVisual'
import { professionalServiceSchema, faqSchema, webPageSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'The Brand Spine | Identity Governance for Scaling Leaders',
  description: 'We build the governance architecture that defines how you think, decide, and protect authority, then encode it into an AI-powered operating system called BrandOS.',
};

const faqData = [
  {
    question: 'What is identity infrastructure?',
    answer: 'Identity infrastructure is the strategic layer beneath branding and marketing. It includes your point of view, how your priorities rank, how you show up under pressure, what risks you\'ll take, and what you\'re willing to give up versus what you\'re not. It\'s the decision logic that keeps choices aligned across every context and team member.',
  },
  {
    question: 'How is this different from branding?',
    answer: 'Branding defines how you look. Messaging defines what you say. We define the decision rules that sit underneath both. When your branding and messaging operate from a coherent set of rules, they work better because they\'re grounded in logic instead of improvisation.',
  },
  {
    question: 'What is BrandOS?',
    answer: 'BrandOS is an AI-powered operating system that puts your governance architecture to work across three tiers. The Leader tier contains everything: full governance access, decision support, drift detection, and challenge capability. The Team tier scales that down for the people who work with you. The Content tier scales down further for external creators: voice execution only, no access to governance or strategy.',
  },
  {
    question: 'Who is this for?',
    answer: 'Leaders, founders, and teams navigating increasing complexity as they scale. If your authority is fragmenting Ã¢ÂÂ misaligned commitments, inconsistent positioning, team members improvising your brand Ã¢ÂÂ this is the infrastructure that prevents it.',
  },
  {
    question: 'What does the engagement look like?',
    answer: 'Four phases: GROUND (intake and voice samples), MINE (facilitated extraction of governance patterns), AIM (pressure-testing your decision logic against real scenarios), and LOCK (finalization and BrandOS deployment). You receive your Brand Spine document, three tiers of BrandOS, and a printed Field Guide for team reference. Four to six weeks, based on your availability.',
  },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    professionalServiceSchema(),
    faqSchema(faqData),
    webPageSchema(
      "The Brand Spine | Identity Governance for Scaling Leaders",
      "We build the governance architecture that defines how you think, decide, and protect authority.",
      "https://thebrandspine.com"
    ),
    breadcrumbSchema([{ name: "Home", url: "https://thebrandspine.com" }]),
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
      />


      <AnimatedSection className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-display-xl font-serif leading-tight mb-8">
                Your Authority Should{' '}
                <span className="italic bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
                  Compound
                </span>
                . Not Fracture.
              </h1>

              <p className="text-lg text-neutral-300 leading-relaxed mb-12 max-w-xl">
                We build governance architecture: the decision rules, priority hierarchy, and authority
                posture that define how you lead. Then we encode it into an AI operating system that keeps
                your identity intact as you scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 text-neutral-950 font-semibold transition-colors duration-200"
                >
                  Request an Intro Conversation
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gold/50 hover:border-gold text-gold hover:bg-gold/5 font-semibold transition-colors duration-200"
                >
                  Take the Governance Assessment Ã¢ÂÂ
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <SpineVisual className="w-full h-full max-w-md" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="border-t border-gold/30 border-b">
        <MarqueeTicker
          items={[
            'IDENTITY INFRASTRUCTURE',
            'BRAND GOVERNANCE',
            'DECISION ARCHITECTURE',
            'AUTHORITY COMPOUNDING',
            'BrandOS',
            'DRIFT PREVENTION',
          ]}
        />
      </div>

      <AnimatedSection className="section-container section-spacing">
        <div className="max-w-4xl">
          <SectionHeading eyebrow="THE FOUNDATION" title=""Identity Infrastructure Is the Governing Logic Behind How You Lead" />

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              Identity infrastructure is the strategic foundation beneath everything visible about your
              leadership and brand. It defines your point of view, how your priorities are ranked, how you
              show up when stakes are high, what you're willing to risk, and what you'll give up versus
              what you won't. It's the logic that governs how you and your team make decisions under
              pressure.
            </p>

            <p>
              Most leaders have a visual brand. The ones whose authority endures have something deeper: a
              governance architecture. That's the complete set of decision rules and leadership logic that
              define how you operate. It keeps every decision, every communication, and every commitment
              aligned to what actually matters, even when circumstances change, teams grow, and you can't
              be in every room.
            </p>

            <p className="text-gold font-medium pt-4">
              We don't build brands. We build the governing logic that makes leadership hold at scale.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-950/50 pointer-events-none -mx-container-padding" />

        <div className="relative z-10 max-w-4xl">
          <SectionHeading eyebrow="THE PROBLEM" title=""Drift Is the Silent Cost of Scaling Without Structure" />

          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <p>
              Drift is what happens when your ambition expands faster than your decision rules can hold.
              It's the slow, invisible slide away from who you actually are and how you actually lead. It
              doesn't announce itself. It shows up as messaging that shifts depending on who's speaking.
              Commitments that contradict each other. Teams improvising because no one ever wrote down the
              logic behind the brand.
            </p>

            <p>
              No single instance is catastrophic. But cumulatively, drift erodes the consistency that makes
              authority compound. Every inconsistent touchpoint doesn't just fail to add value; it resets
              the trust clock.
            </p>

            <p className="text-gold font-medium pt-4">The fix isn't more rules. It's better infrastructure.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container section-spacing">
        <SectionHeading eyebrow="THE SYSTEM" title=""How We Build It" className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-8 flex flex-col h-full">
            <div className="text-4xl font-light text-gold mb-6">01</div>
            <h3 className="text-2xl font-serif mb-4">Strategy</h3>
            <p className="text-neutral-300 leading-relaxed flex-grow">
              Defines where your authority competes. We map the positioning terrain and establish the
              point of view that everything else follows.
            </p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col h-full">
            <div className="text-4xl font-light text-gold mb-6">02</div>
            <h3 className="text-2xl font-serif mb-4">Governance</h3>
            <p className="text-neutral-300 leading-relaxed flex-grow">
              Defines how your authority operates. We build the decision rules: how your priorities rank,
              what wins when two of them collide, how much risk you'll take on, how you show up under
              pressure, and when to push harder. This is what prevents drift. It's the load-bearing layer.
            </p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col h-full">
            <div className="text-4xl font-light text-gold mb-6">03</div>
            <h3 className="text-2xl font-serif mb-4">
              Brand<span className="text-gold">OS</span>Ã¢ÂÂ¢
            </h3>
            <p className="text-neutral-300 leading-relaxed flex-grow mb-6">
              An AI-powered operating system that puts your governance architecture to work in real time.
              Three tiers (Leader, Team, and Content) keep decisions aligned at every level of your
              organization. BrandOS drafts from your decision logic, catches drift before it compounds,
              and flags priority conflicts before they reach your inbox.
            </p>
            <Link href="/brandos" className="text-gold hover:text-gold/80 font-medium transition-colors">
              Learn more about BrandOS Ã¢ÂÂ
            </Link>
          </GlassCard>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container section-spacing">
        <SectionHeading
          eyebrow="THE PROCESS"
          title=""Four Phases. One Governing Document. One Operating System."
          className="mb-12"
        />

        <p className="text-lg text-neutral-300 mb-16 max-w-3xl">
          We don't start with what you want your brand to be. We start with how you actually think,
          decide, and lead, then build the infrastructure around it.
        </p>

        <div className="space-y-12 max-w-3xl">
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gold" />
              <div className="w-0.5 h-32 bg-gradient-to-b from-gold to-gold/20 mt-4" />
            </div>
            <div className="pb-8">
              <h4 className="text-xl font-serif text-gold mb-2">GROUND</h4>
              <p className="text-neutral-300 leading-relaxed">
                You complete an intake and submit voice samples. We build the factual landscape of your
                world before we go deeper.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gold" />
              <div className="w-0.5 h-32 bg-gradient-to-b from-gold to-gold/20 mt-4" />
            </div>
            <div className="pb-8">
              <h4 className="text-xl font-serif text-gold mb-2">MINE</h4>
              <p className="text-sm text-neutral-400 mb-2">Mapped Identity and Narrative Extraction</p>
              <p className="text-neutral-300 leading-relaxed">
                Our first guided session. We extract stories, patterns, and decision signals from your
                lived experience. This is where the raw material comes from.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gold" />
              <div className="w-0.5 h-32 bg-gradient-to-b from-gold to-gold/20 mt-4" />
            </div>
            <div className="pb-8">
              <h4 className="text-xl font-serif text-gold mb-2">AIM</h4>
              <p className="text-sm text-neutral-400 mb-2">Adversarial Identity Mapping</p>
              <p className="text-neutral-300 leading-relaxed">
                We take what was extracted and pressure-test it. Your decision logic gets stress-tested
                against real scenarios at escalating stakes. This is where we find out if the architecture
                holds.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gold" />
            </div>
            <div>
              <h4 className="text-xl font-serif text-gold mb-2">LOCK</h4>
              <p className="text-sm text-neutral-400 mb-2">Leadership Operating Codex Key</p>
              <p className="text-neutral-300 leading-relaxed mb-4">
                We deliver your completed Brand Spine for review and finalization. Once locked, your
                BrandOS is built from the finalized Spine and deployed in three tiers: Leader (your full
                system), Team (alignment tools for your people), and Content (voice execution for external
                creators). You also receive a printed Field Guide for team reference and onboarding.
              </p>
              <p className="text-sm text-neutral-400 italic">
                Onboarding to final delivery: approximately 4 to 6 weeks, based on your availability.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Link href="/process" className="text-gold hover:text-gold/80 font-medium transition-colors text-lg">
            See the full process Ã¢ÂÂ
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container section-spacing py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <span className="text-6xl text-gold/40 font-serif">"</span>
          </div>

          <p className="text-4xl font-serif italic text-neutral-100 leading-relaxed mb-8">
            Governance defines the decision rules identity must follow. Focus stabilizes. Reputation
            strengthens. Authority compounds.
          </p>

          <div className="flex justify-center">
            <span className="text-6xl text-gold/40 font-serif">"</span>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container section-spacing">
        <h2 className="text-4xl font-serif mb-16 text-center">This Work Isn't for Everyone</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border-l-2 border-gold pl-8">
            <h3 className="text-2xl font-serif text-gold mb-8">For You If</h3>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You're scaling visibility or influence and feeling things start to pull apart</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You're navigating decisions where multiple priorities collide</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You're open to being challenged on how you think, not just what you produce</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You value structure over aesthetics and direction over decoration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You want your authority to hold under pressure, not just in calm</span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-neutral-700 pl-8">
            <h3 className="text-2xl font-serif text-neutral-400 mb-8">Not For You If</h3>
            <ul className="space-y-4 text-neutral-500">
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You want faster growth without governance constraints</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You're looking for content strategy or social media management</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You want branding that optimizes for attention, not alignment</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You prioritize expansion speed over decision discipline</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 mt-1">Ã¢ÂÂ¢</span>
                <span>You're not ready to have your assumptions examined</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container section-spacing">
        <h2 className="text-4xl font-serif mb-16">Frequently Asked Questions</h2>
        <FAQ faqs={faqData} />
      </AnimatedSection>

      <AnimatedSection className="relative section-container section-spacing py-24">
        <div className="absolute inset-0 bg-radial-gold opacity-15 pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Ready to Define Your Governing Logic?</h2>

          <p className="text-neutral-300 mb-12 text-lg">
            Not a sales call. A mutual decision about fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 text-neutral-950 font-semibold transition-colors duration-200"
            >
              Request an Intro Conversation
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold/50 hover:border-gold text-gold hover:bg-gold/5 font-semibold transition-colors duration-200"
            >
              Take the Governance Assessment
            </Link>
          </div>

          <p className="text-neutral-400">
            jo@thebrandspine.com
          </p>
        </div>
      </AnimatedSection>
    </>
  )
};
