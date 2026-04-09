import { Metadata } from "next";
import Script from "next/script";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import FAQ from "@/components/FAQ";
import {
  breadcrumbSchema,
  faqSchema,
  personSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "About | Jo Arellano & Brett Moore | The Brand Spine",
  description:
    "Jo Arellano and Brett Moore developed the Brand Spine methodology and built BrandOS. They work with leaders whose authority is growing faster than their structure can hold.",
  metadataBase: new URL("https://thebrandspine.com"),
  openGraph: {
    title: "About | Jo Arellano & Brett Moore | The Brand Spine",
    description:
      "Jo Arellano and Brett Moore developed the Brand Spine methodology and built BrandOS. They work with leaders whose authority is growing faster than their structure can hold.",
    url: "https://thebrandspine.com/about",
    type: "website",
  },
};

const aboutFAQs = [
  {
    question: "What makes the Brand Spine different from a brand refresh?",
    answer:
      "A brand refresh updates visual identity. The Brand Spine builds governance architecture--the decision framework that makes your authority compound instead of fracture. It defines how you think, decide, and protect what you stand for as you scale.",
  },
  {
    question: "Do I need to have a team to work with you?",
    answer:
      "No. The Brand Spine is built for leaders scaling into teams, leaders in transition, and professionals clarifying their authority. Some work with us solo; others bring their leadership team. The methodology adapts to your situation.",
  },
  {
    question:
      "Is this about my personal brand or my company brand?",
    answer:
      "Both. If you're a founder, executive, or thought leader, your authority IS your brand. The Brand Spine clarifies how you think, decide, and lead so that your team can execute at scale. BrandOS then encodes that into systems your team already uses.",
  },
  {
    question: "How long does this take?",
    answer:
      "Four to six weeks, depending on your availability. We move through four phases: GROUND (intake and preparation), MINE (extraction sessions), AIM (pressure testing), and LOCK (finalization and BrandOS deployment). Most work happens in guided sessions with us.",
  },
  {
    question: "What if my thinking changes?",
    answer:
      "That's the point. The Brand Spine captures how you think NOW and gives you the tools to evolve it deliberately. If priorities shift or you learn something new, the architecture is designed to integrate that without fracturing the system.",
  },
];

const joSchema = personSchema(
  "Jo Arellano",
  "Co-founder, Strategist",
  "Jo Arellano is the co-founder and strategist at The Brand Spine. Her career in strategy, positioning, communication, and brand architecture includes years as a Senior VP at McCann, where she learned the governance infrastructure that keeps Fortune 500 brands consistent at scale.",
  "https://thebrandspine.com/about"
);

const brettSchema = personSchema(
  "Brett Moore",
  "Co-founder, Strategic Partner",
  "Brett Moore is the co-founder and strategic partner at The Brand Spine. He brings expertise in leadership architecture, organizational design, and the translation of governance systems into operational practice.",
  "https://thebrandspine.com/about"
);

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://thebrandspine.com" },
  { name: "About", url: "https://thebrandspine.com/about" },
]);

const faqJsonLd = faqSchema(aboutFAQs);

const pageSchema = webPageSchema(
  "About | Jo Arellano & Brett Moore | The Brand Spine",
  "Jo Arellano and Brett Moore developed the Brand Spine methodology and built BrandOS. They work with leaders whose authority is growing faster than their structure can hold.",
  "https://thebrandspine.com/about"
);

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([joSchema, brettSchema, breadcrumbs, faqJsonLd, pageSchema]),
        }}
      />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

        <AnimatedSection className="relative z-10 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-cream mb-8 leading-tight">
            The People Behind the Architecture
          </h1>
          <p className="font-sans text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto">
            Jo Arellano and Brett Moore built the Brand Spine methodology after
            seeing the same gap from two different angles. Now they help leaders
            scale without fracturing.
          </p>
        </AnimatedSection>
      </section>

      {/* WHERE THIS CAME FROM - COMBINED NARRATIVE */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="Where This Came From"
              description="The Brand Spine started with a gap both of us kept seeing from different angles."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="space-y-6 mt-12">
            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              Jo spent years at McCann as a Senior VP, learning best practices
              for strategy, positioning, communication, and branding for Fortune
              500 companies. The infrastructure that keeps a global brand
              coherent across markets and leadership changes--decision frameworks,
              governance systems, positioning engines--existed, but only at
              enterprise scale.
            </p>

            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              Brett's experience brought a different lens. He saw leaders in
              transition: founders scaling their first company, professionals
              moving from one career into the next, people with real capability
              and no structural way to communicate what they stood for or how
              they made decisions.
            </p>

            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              The pattern was the same from both directions: leaders who needed
              the kind of decision governance that large companies build into
              their organizations, but who didn't have the teams, the budgets,
              or the infrastructure to access it. They were trying to scale on
              instinct, and instinct doesn't transfer to a team.
            </p>

            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              So we built a system that does.
            </p>

            <div className="border-l-2 border-brand-gold/30 pl-6 py-6">
              <p className="font-sans text-lg text-brand-cream leading-relaxed">
                The Brand Spine takes the strategic rigor of enterprise-level
                governance--the kind of decision rules that keep a global brand
                coherent across thousands of choices--and applies it to leaders
                who are scaling, clarifying what they stand for, or building a
                team that needs to understand their thinking. Not a simplified
                version. A purpose-built version for how scaling leaders
                actually operate.
              </p>
            </div>

            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              BrandOS is the evolution of that system into technology. An
              AI-powered operating system that puts the governance architecture
              to work across three tiers, deployed on the platforms leaders
              already use, so the structure doesn't just live in a document. It
              operates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="Facilitation, Not Prescription"
              description="We don't tell leaders what their brand should be. We surface what it already is and build the structure around it."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12">
            <GlassCard>
              <div className="space-y-6">
                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  We start by listening. Your voice, your decision patterns, your
                  actual priorities--not the ones you think you should have. We
                  extract the governance logic that already exists in how you
                  operate, then we pressure-test it against real scenarios.
                </p>

                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  If something doesn't hold, we find out in the process, not in
                  the market. If two priorities are in collision, we surface it
                  and resolve it. If you're avoiding a commitment, we name the
                  cost of inaction.
                </p>

                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  The output: a Brand Spine document (the complete governance
                  architecture), BrandOS in three tiers, and a printed Field
                  Guide for team reference. Four phases: GROUND, MINE, AIM, LOCK.
                  Four to six weeks, based on your availability. The
                  infrastructure that lets authority compound instead of
                  fracture.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT WE STAND ON */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="What We Stand On"
              description="Our standard for how we work with you is the same standard we hold for your systems."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="space-y-6 mt-12">
            <GlassCard gold>
              <p className="font-sans text-lg text-brand-cream leading-relaxed">
                We don't soften necessary truth to manage someone's comfort. If
                something isn't working, we'll name it directly. If a decision
                contradicts stated priorities, we'll surface the collision. If a
                leader is avoiding a commitment they know they need to make,
                we'll point to the cost of inaction.
              </p>
            </GlassCard>

            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              This isn't adversarial. It's what governance looks like in
              practice. The same standard we hold for our clients' systems, we
              hold for how we work: words match reality, commitments are kept,
              and tradeoffs are named, not managed around silently.
            </p>

            <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
              Not everyone wants to work this way. That's fine. This work
              requires leaders who are willing to have their assumptions
              examined, not just their brand refreshed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Jo Headshot + Brief */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-brand-gold/20 via-brand-charcoal to-brand-dark border border-brand-gold/10 flex items-center justify-center mb-6 overflow-hidden">
                  {/* Replace with <Image src="/images/jo-arellano.jpg" ... /> when headshot is available */}
                  <span className="font-serif text-5xl text-brand-gold/40">JA</span>
                </div>
                <h3 className="font-serif text-xl text-brand-cream">Jo Arellano</h3>
                <p className="font-sans text-sm text-brand-gold uppercase tracking-widest mt-1">
                  Co-Founder &amp; Strategist
                </p>
                <p className="font-sans text-sm text-brand-gray-300 mt-3 leading-relaxed">
                  Former Senior VP at McCann. Brings enterprise-level governance methodology to scaling leaders.
                </p>
              </div>

              {/* Brett Headshot + Brief */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-brand-gold/20 via-brand-charcoal to-brand-dark border border-brand-gold/10 flex items-center justify-center mb-6 overflow-hidden">
                  {/* Replace with <Image src="/images/brett-moore.jpg" ... /> when headshot is available */}
                  <span className="font-serif text-5xl text-brand-gold/40">BM</span>
                </div>
                <h3 className="font-serif text-xl text-brand-cream">Brett Moore</h3>
                <p className="font-sans text-sm text-brand-gold uppercase tracking-widest mt-1">
                  Co-Founder &amp; Strategic Partner
                </p>
                <p className="font-sans text-sm text-brand-gray-300 mt-3 leading-relaxed">
                  Sees scaling leaders from the inside out. Shapes how governance translates into operational practice.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-16">
            <GlassCard>
              <p className="font-sans text-lg text-brand-gray-300 leading-relaxed text-center">
                BrandOS -- the AI operating system that puts governance architecture to work across three operational tiers -- represents the evolution of the Brand Spine methodology into technology. Deployed across Claude, ChatGPT, and Gemini.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="mt-12 text-center">
            <p className="font-sans text-lg text-brand-gray-300">
              <span className="text-brand-cream font-semibold">Questions?</span>{" "}
              Reach out:{" "}
              <a
                href="mailto:jo@thebrandspine.com"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors"
              >
                jo@thebrandspine.com
              </a>{" "}
              &middot;{" "}
              <a
                href="mailto:brett@thebrandspine.com"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors"
              >
                brett@thebrandspine.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="Questions"
              description="What leaders ask us most."
              center
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12">
            <FAQ faqs={aboutFAQs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-6">
              Ready to Build Your Architecture?
            </h2>
            <p className="font-sans text-lg text-brand-gray-300 mb-10">
              The first step is understanding where you are. Let's start there.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assessment"
                className="px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors"
              >
                Take Assessment
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-brand-gold text-brand-gold font-semibold rounded-lg hover:bg-brand-gold/10 transition-colors"
              >
                Request Intro
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
