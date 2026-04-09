'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import FAQ from '@/components/FAQ';
import { faqSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import Script from 'next/script'

const brandosFaqData = [
  {
    question: 'What exactly is BrandOS? Is it a chatbot?',
    answer:
      'BrandOS is not a chatbot or a content generator. It\'s an AI operating system built from your Brand Spine. It encodes your decision rules, how your priorities rank, and your voice into the AI platforms you already use. It\'s your governance architecture made usable.',
  },
  {
    question: 'How does BrandOS work across multiple AI platforms?',
    answer:
      'Your governance architecture is platform-agnostic. Once defined in your Brand Spine, BrandOS creates specific implementations for each platform you useÃ¢ÂÂClaude, ChatGPT, GeminiÃ¢ÂÂso your decision logic and voice remain consistent everywhere.',
  },
  {
    question: 'What is drift detection and why does it matter?',
    answer:
      'Drift detection monitors decisions and content to flag when they diverge from your governance architecture. You catch inconsistency before it compounds. This is critical for leaders because small inconsistencies compound into perception problems.',
  },
  {
    question: 'Can we give different teams different levels of access?',
    answer:
      'Yes. That\'s why we built three tiers. Your leadership team gets full decision support. Your team gets the rules without the internals. Content creators get voice patterns without authority. Each tier sees what they need.',
  },
  {
    question: 'What happens to our Brand Spine governance if we update our strategy?',
    answer:
      'Your Brand Spine is a living document. As your strategy evolves, your governance architecture should evolve with it. We work with you to refresh it when needed, and BrandOS adapts accordingly.',
  },
  {
    question: 'How do you measure the impact of BrandOS?',
    answer:
      'We track several metrics: consistency of voice across channels, reduction in content rework, decision speed, and alignment scoring from your team. The most important measure is whether your authority holds under pressure.',
  },
];

const leaderCapabilitiesData = [
  {
    title: 'Decision Support',
    description:
      'When you face a decision, BrandOS evaluates it against your governance architecture. It shows you what your priorities suggest, where risks sit, and what trade-offs you\'re making. It\'s not telling you what to do. It\'s amplifying your thinking.',
  },
  {
    title: 'Drift Detection',
    description:
      'Every decision, every piece of content, every communication gets evaluated against your governance architecture. If something drifts from what you stand for, you see it immediately. Inconsistency gets caught before it becomes a problem.',
  },
  {
    title: 'Challenge Capability',
    description:
      'BrandOS can push back. It can tell you when a decision might violate your stated priorities or when you\'re moving toward risk you said you wouldn\'t take. A thinking partner, not an echo chamber.',
  },
  {
    title: 'Voice Execution',
    description:
      'Your voice, your thinking, your priorities translated into action. BrandOS generates communications that sound like you, reflect your decision logic, and carry your authority.',
  },
];

const teamCapabilitiesData = [
  {
    title: 'Alignment Evaluation',
    description:
      'Your team submits decisions or content. BrandOS evaluates whether they align with your governance architecture. Clear yes/no. No guessing about what the leader thinks.',
  },
  {
    title: 'Opportunity Screening',
    description:
      'When new initiatives or partnerships come up, your team runs them through the framework. Does this fit with our priorities? Does it align with our risk tolerance? Does it strengthen or weaken our position?',
  },
  {
    title: 'Voice-Consistent Content Generation',
    description:
      'Your team generates content that carries your voice without requiring your presence. Tone, perspective, priority rankingÃ¢ÂÂall baked in. Quality is consistent. The leader\'s voice doesn\'t fade when they\'re not in the room.',
  },
];

const contentCapabilitiesData = [
  {
    title: 'Voice Pattern Execution',
    description:
      'Writers and creators use your voice patterns to generate content. Not a mad lib. Real understanding of how you talk, what you emphasize, what you leave out.',
  },
  {
    title: 'Context-Specific Calibration',
    description:
      'The same governance principle can be expressed different ways depending on the audience. BrandOS handles that. Your voice stays consistent. The context adapts.',
  },
  {
    title: 'Quality Checking',
    description:
      'Before content goes out, it gets checked against your voice and your governance architecture. Does this sound like you? Does it reflect your priorities? Does it fit?',
  },
];

const differenciatorsData = [
  {
    title: 'Built on Evidence, Not Aspiration',
    description:
      'Your Brand Spine isn\'t built from what you think you should do. It\'s extracted from what you actually do under pressure. BrandOS operates from that foundation of reality.',
  },
  {
    title: 'Governance, Not Compliance',
    description:
      'We\'re not monitoring whether you followed rules. We\'re encoding how you actually think and making that thinking available to your team. This creates alignment, not restriction.',
  },
  {
    title: 'Three Distinct Tiers',
    description:
      'Each tier knows what it needs to know. Your leader sees everything. Your team sees the decision framework. Your writers see the voice. No unnecessary exposure. Full utility.',
  },
  {
    title: 'Integrated with Your Existing Platforms',
    description:
      'BrandOS doesn\'t ask you to switch tools. It works inside Claude, ChatGPT, and Gemini. It\'s an operating system for the platforms you already use.',
  },
  {
    title: 'Catches Drift Before It Scales',
    description:
      'Small inconsistencies compound. Most systems only catch drift after damage is done. BrandOS flags it immediately, when it\'s still a decision, not a crisis.',
  },
];

export default function BrandosPage() {
  const faqSchema_data = faqSchema(brandosFaqData);
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: 'https://thebrandspine.com' },
    { name: 'Services', url: 'https://thebrandspine.com/services' },
    { name: 'BrandOS', url: 'https://thebrandspine.com/brandos' },
  ]);
  const webPageData = webPageSchema(
    metadataContent.title,
    metadataContent.description,
    'https://thebrandspine.com/brandos'
  );

  return (
    <>
      <Script id="brandos-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema_data) }} />
      <Script id="brandos-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Script id="brandos-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />

      <div className="min-h-screen bg-brand-black text-brand-cream">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-cream leading-tight"
              >
                BrandOS: The Operating System for Your Identity
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans text-lg md:text-xl text-brand-gray-300 max-w-3xl mx-auto"
              >
                The complete set of rules behind how you lead and decide, put to work in AI. Three tiers that keep decisions aligned, catch drift before it compounds, and execute your voice without requiring you in the room.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* What BrandOS Actually Is */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="What Is BrandOS?"
                center
                className="mb-12"
              />

              <div className="space-y-8">
                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  BrandOS is an AI-powered operating system built from your Brand Spine. It takes your decision rules, how your priorities rank, how you show up under pressure, and the way you actually communicate, and puts them to work across the AI platforms you already use: Claude, ChatGPT, Gemini.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border-l-2 border-brand-gold pl-6">
                    <p className="font-sans font-semibold text-brand-cream mb-2">It's not a chatbot.</p>
                    <p className="font-sans text-brand-gray-300 text-sm">No conversational interface. No content generation for its own sake.</p>
                  </div>

                  <div className="border-l-2 border-brand-gold pl-6">
                    <p className="font-sans font-semibold text-brand-cream mb-2">It's not a content generator.</p>
                    <p className="font-sans text-brand-gray-300 text-sm">It doesn't mass-produce output. It amplifies your thinking and execution.</p>
                  </div>

                  <div className="border-l-2 border-brand-gold pl-6">
                    <p className="font-sans font-semibold text-brand-cream mb-2">It's not a monitoring platform.</p>
                    <p className="font-sans text-brand-gray-300 text-sm">It's not watching what you do. It's enabling what you do.</p>
                  </div>
                </div>

                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  It's your decision logic, made usable. The way you think in your clearest moments, available on demand for you, your team, and the people who create on your behalf.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Three Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="Three Tiers. One Architecture. Deliberate Hierarchy."
                center
                className="mb-12"
              />

              <div className="space-y-8">
                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  Your governance architecture is complete and unified. But not everyone needs to see all of it. The three tiers are designed so each group sees what they need, understands what they're supposed to do, and can execute with confidence.
                </p>

                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  The leader tier sees everything: decision support, drift detection, challenge capability, voice execution. The team tier sees the rules and the framework without seeing the underlying reasoning or full context. The content tier sees voice patterns and tone without decision-making authority. Each level of the organization gets what they need to be effective.</p>

                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  This isn't restriction. It's clarity. It's the difference between telling people what to think and helping them understand how to think.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Leader Tier */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="Leader Tier: Everything"
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {leaderCapabilitiesData.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard hover className="h-full">
                      <h3 className="font-serif text-xl text-brand-gold mb-3">{capability.title}</h3>
                      <p className="font-sans text-brand-gray-300">{capability.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                As the leader, you get full access to BrandOS. You see the decision support, the drift alerts, the challenge capability, and the voice execution. You're not managing a tool. You're working with a thinking partner that understands your priorities and holds you to your principles.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Team Tier */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="Team Tier: Confidence Without Presence"
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {teamCapabilitiesData.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard hover className="h-full">
                      <h3 className="font-serif text-lg text-brand-gold mb-3">{capability.title}</h3>
                      <p className="font-sans text-brand-gray-300 text-sm">{capability.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              <div className="bg-brand-dark/20 border border-brand-gold/20 rounded-lg p-8 mb-8">
                <h3 className="font-serif text-lg text-brand-gold mb-4">What the Team Tier Doesn't See</h3>
                <p className="font-sans text-brand-gray-300">
                  Your team doesn't see the full reasoning behind the architecture. They don't see the pressures you respond to or the trade-offs you're managing. They see the output: the framework, the voice, the decision criteria. They can apply it with confidence without needing access to everything.
                </p>
              </div>

              <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                Your team stops waiting for you to weigh in on every decision. They understand how you think. They can evaluate options against your priorities. They generate content that sounds like you. They can do their work with confidence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content Tier */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="Content Tier: Voice Without Access"
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contentCapabilitiesData.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard hover className="h-full">
                      <h3 className="font-serif text-lg text-brand-gold mb-3">{capability.title}</h3>
                      <p className="font-sans text-brand-gray-300 text-sm">{capability.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              <GlassCard gold>
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-brand-cream">The Hard Boundary</h3>
                  <p className="font-sans text-brand-gray-300">
                    Content creators don't get decision-making authority. They can't evaluate strategic choices or set priorities. They're not part of the governance. They're the execution layer. They have full access to your voice. Zero access to your decision architecture.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>

        {/* How It's Different */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="How BrandOS Differs from What You've Seen Before"
                center
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {differenciatorsData.map((differentiator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard hover className="h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <h3 className="font-serif text-lg text-brand-cream">{differentiator.title}</h3>
                      </div>
                      <p className="font-sans text-brand-gray-300 text-sm flex-grow">{differentiator.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="Questions"
                center
                className="mb-12"
              />
              <FAQ faqs={brandosFaqData} />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection className="space-y-8">
              <SectionHeading
                title="Ready to Encode Your Governance?"
                center
              />

              <div className="space-y-4">
                <p className="font-sans text-brand-gray-300">
                  BrandOS starts with your Brand Spine. If you haven't built it yet, we can guide you through that process. If you have, we move directly to implementation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:jo@thebrandspine.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-brand-gold text-brand-black rounded-lg font-sans font-semibold hover:bg-brand-gold/90 transition-colors duration-300"
                  >
                    Start Building
                  </motion.a>

                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-brand-gold text-brand-gold rounded-lg font-sans font-semibold hover:bg-brand-gold/10 transition-colors duration-300"
                  >
                    Learn About The Brand Spine
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
