import { Metadata } from "next";
import Script from "next/script";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import {
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Process | Four Phases to Your Governance Architecture | The Brand Spine",
  description:
    "Four phases over four to six weeks: GROUND, MINE, AIM, LOCK. From intake to BrandOS deployment, every step builds the governance architecture that makes authority hold at scale.",
  metadataBase: new URL("https://thebrandspine.com"),
  openGraph: {
    title: "Process | Four Phases to Your Governance Architecture | The Brand Spine",
    description:
      "Four phases over four to six weeks: GROUND, MINE, AIM, LOCK. From intake to BrandOS deployment, every step builds the governance architecture that makes authority hold at scale.",
    url: "https://thebrandspine.com/process",
    type: "website",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://thebrandspine.com" },
  { name: "Process", url: "https://thebrandspine.com/process" },
]);

const pageSchema = webPageSchema(
  "Process | Four Phases to Your Governance Architecture | The Brand Spine",
  "Four phases over four to six weeks: GROUND, MINE, AIM, LOCK. From intake to BrandOS deployment, every step builds the governance architecture that makes authority hold at scale.",
  "https://thebrandspine.com/process"
);

export default function ProcessPage() {
  return (
    <>
      <Script
        id="process-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbs, pageSchema]),
        }}
      />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

        <AnimatedSection className="relative z-10 max-w-4xl text-center space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-cream leading-tight">
            Four Phases. One Architecture. One Operating System.
          </h1>
          <p className="font-sans text-xl text-brand-gray-300 max-w-2xl mx-auto">
            We don't start with what you want your brand to be. We start with
            how you actually think, decide, and lead.
          </p>
        </AnimatedSection>
      </section>

      {/* PROCESS OVERVIEW */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="How We Build Your Governance Architecture"
              description="The Brand Spine methodology is built on extraction, validation, and activation. We surface what you already know about how you lead, pressure-test it against reality, and build the systems that let that thinking scale."
              center
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12">
            <GlassCard>
              <div className="space-y-6 text-brand-gray-300 font-sans">
                <p className="text-lg leading-relaxed">
                  Your governance architecture exists. It lives in how you make
                  decisions, what you prioritize, what you say no to, and how
                  you handle pressure. Most leaders have never articulated it.
                  Their teams have to guess. When they scale, those guesses
                  fracture into a dozen different versions of what the leader
                  actually stands for.
                </p>

                <p className="text-lg leading-relaxed">
                  The Brand Spine makes that implicit governance explicit. We
                  extract it through guided work, pressure-test it until it
                  holds, lock it down, and then encode it into BrandOSâan
                  operating system that makes the architecture operational
                  across your team.
                </p>

                <p className="text-lg leading-relaxed">
                  This is not a document exercise. This is archaeology and
                  engineering. We dig down to find what's real, then we build
                  the structure that makes it scalable.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* FOUR PHASES */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* PHASE 01: GROUND */}
          <AnimatedSection delay={0.2} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="space-y-4">
                  <div className="text-7xl font-serif text-brand-gold/30">
                    01
                  </div>
                  <h3 className="font-serif text-3xl text-brand-cream">GROUND</h3>
                  <p className="font-sans text-sm text-brand-gold uppercase tracking-widest">
                    Getting Our Bearings
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <GlassCard hover>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What Happens
                      </h4>
                      <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                        You complete an intake and submit voice samples. We build
                        the factual landscape of your world before we go deeper.
                        We're gathering baseline data: your role, your
                        constraints, your aspirations, and the raw material of
                        how you communicate.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What It Produces
                      </h4>
                      <ul className="font-sans text-brand-gray-300 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Factual landscape mapping</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Voice sample analysis</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Preparation for extraction sessions</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/20">
                      <p className="font-sans text-sm text-brand-gold">
                        Duration: 1-2 weeks
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </AnimatedSection>

          {/* PHASE 02: MINE */}
          <AnimatedSection delay={0.3} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="space-y-4">
                  <div className="text-7xl font-serif text-brand-gold/30">
                    02
                  </div>
                  <h3 className="font-serif text-3xl text-brand-cream">MINE</h3>
                  <p className="font-sans text-sm text-brand-gold uppercase tracking-widest">
                    Mapped Identity & Narrative Extraction
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <GlassCard hover gold>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What Happens
                      </h4>
                      <p className="font-sans text-lg text-brand-cream leading-relaxed">
                        Our first guided session. We extract stories, patterns,
                        and decision signals from your lived experience. This is
                        where the raw material comes from. We're not asking what
                        you want to be; we're asking what you've built, what
                        you've chosen, what you've sacrificed for, and what that
                        tells us about how you actually think.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sans text-sm text-brand-gold/80 uppercase tracking-widest mb-3">
                        What It Produces
                      </h4>
                      <ul className="font-sans text-brand-cream space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Raw governance material</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Decision patterns and logic</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Priority signals and voice patterns</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/20">
                      <p className="font-sans text-sm text-brand-gold/80">
                        Duration: 1-2 weeks (includes 1-2 sessions with us)
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </AnimatedSection>

          {/* PHASE 03: AIM */}
          <AnimatedSection delay={0.4} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="space-y-4">
                  <div className="text-7xl font-serif text-brand-gold/30">
                    03
                  </div>
                  <h3 className="font-serif text-3xl text-brand-cream">AIM</h3>
                  <p className="font-sans text-sm text-brand-gold uppercase tracking-widest">
                    Adversarial Identity Mapping
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <GlassCard hover>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What Happens
                      </h4>
                      <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                        We take what was extracted and pressure-test it. Your
                        decision logic gets stress-tested against real scenarios
                        at escalating stakes. What happens when two priorities
                        collide? When opportunity contradicts principle? When you
                        have to choose between growth and integrity? This is
                        where we find out if the architecture holds.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What It Produces
                      </h4>
                      <ul className="font-sans text-brand-gray-300 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Validated governance architecture</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Stress-tested decision hierarchy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Identified drift vectors and edge cases</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/20">
                      <p className="font-sans text-sm text-brand-gold">
                        Duration: 1-2 weeks (includes 1-2 rigorous sessions with us)
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </AnimatedSection>

          {/* PHASE 04: LOCK */}
          <AnimatedSection delay={0.5} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="space-y-4">
                  <div className="text-7xl font-serif text-brand-gold/30">
                    04
                  </div>
                  <h3 className="font-serif text-3xl text-brand-cream">LOCK</h3>
                  <p className="font-sans text-sm text-brand-gold uppercase tracking-widest">
                    Leadership Operating Codex Key
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <GlassCard hover>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What Happens
                      </h4>
                      <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                        We deliver your completed Brand Spine for review and
                        finalization. You have the opportunity to refine,
                        challenge, and clarify. Once locked, your BrandOS is
                        built from the finalized Spine and deployed in three
                        tiers: Leader tier (your full operating system), Team
                        tier (what your team needs to execute), and Content tier
                        (what the market sees).
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-3">
                        What It Produces
                      </h4>
                      <ul className="font-sans text-brand-gray-300 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Finalized Brand Spine document</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>BrandOS deployed in three tiers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-gold">â</span>
                          <span>Printed Field Guide for team</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/20">
                      <p className="font-sans text-sm text-brand-gold">
                        Duration: 1-2 weeks (includes final review session)
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="What You Receive"
              description="At the end of the process, you have everything you need to scale your authority."
              center
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard gold hover>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-brand-cream">
                  The Brand Spine Document
                </h3>
                <p className="font-sans text-brand-gray-300 leading-relaxed">
                  Your complete governance architecture. This is the reference
                  document that defines how you think, decide, prioritize, and
                  lead. It becomes the foundation for all downstream decisions.
                </p>
              </div>
            </GlassCard>

            <GlassCard gold hover>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-brand-cream">
                  BrandOS in Three Tiers
                </h3>
                <p className="font-sans text-brand-gray-300 leading-relaxed">
                  Leader (your full system), Team (alignment and execution),
                  Content (market-facing). Deployed in the tools and platforms
                  you already use, so governance becomes operational, not
                  ceremonial.
                </p>
              </div>
            </GlassCard>

            <GlassCard gold hover>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-brand-cream">
                  Printed Field Guide
                </h3>
                <p className="font-sans text-brand-gray-300 leading-relaxed">
                  A beautiful reference guide for your team. Shows decision
                  frameworks, priority hierarchy, voice rules, and operational
                  principles. Designed for onboarding and ongoing alignment.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="Timeline"
              center
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12">
            <GlassCard>
              <div className="space-y-6">
                <p className="font-sans text-lg text-brand-cream">
                  <span className="font-semibold">Onboarding to final delivery:</span>{" "}
                  approximately <span className="text-brand-gold">4 to 6 weeks</span>, based on your
                  availability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-brand-gold/20">
                  <div>
                    <p className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-2">
                      Week 1-2
                    </p>
                    <p className="font-sans text-brand-gray-300">GROUND</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-2">
                      Week 2-3
                    </p>
                    <p className="font-sans text-brand-gray-300">MINE</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-2">
                      Week 3-4
                    </p>
                    <p className="font-sans text-brand-gray-300">AIM</p>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-brand-gold uppercase tracking-widest mb-2">
                      Week 4-6
                    </p>
                    <p className="font-sans text-brand-gray-300">LOCK</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-6">
              Ready to Begin?
            </h2>
            <p className="font-sans text-lg text-brand-gray-300 mb-10">
              The first conversation is about understanding where you are and
              what you're trying to build. Let's start there.
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
