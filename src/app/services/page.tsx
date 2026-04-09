'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import FAQ from '@/components/FAQ';
import { faqSchema, serviceSchema, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import Script from 'next/script'

const servicesFaqData = [
  {
    question: 'How is The Brand Spine different from a traditional brand guide?',
    answer:
      'Brand guides prescribe visual and verbal outputs. The Brand Spine captures the decision logic that generates appropriate outputs in any context, including ones you haven\'t anticipated. Guidelines tell people what to do. Governance tells them how to think.',
  },
  {
    question: 'What happens during The Brand Spine facilitation process?',
    answer:
      'We conduct facilitated sessions designed to extract your actual decision patterns under real pressure. This isn\'t self-assessment or aspirationit\'s evidence-based. We observe how you lead, what trade-offs you make, and where your real priorities sit.',
  },
  {
    question: 'Can BrandOS work with multiple AI platforms?',
    answer:
      'Yes. BrandOS is designed to work across Claude, ChatGPT, and Gemini. Your governance architecture stays consistent wherever your team uses AI, whether that\'s on one platform or many.',
  },
  {
    question: 'Does BrandOS replace our current content and communications infrastructure?',
    answer:
      'No. BrandOS augments what you have. It doesn\'t replace your branding agency, marketing team, content strategy, or visual identity. It gives them all a governing logic to operate from.',
  },
  {
    question: 'How long does it take to build a Brand Spine?',
    answer:
      'The full process typically takes 4-6 weeks, including three facilitated sessions, internal synthesis, and refinement. The timeline depends on the complexity of your decision hierarchy and your team\'s availability.',
  },
];

const spineFeaturesData = [
  {
    title: 'Point of View',
    description:
      'What you believe, made concrete. What you stand for, what you reject, and the tensions you\'re willing to hold. This is the foundation everything else rests on.',
  },
  {
    title: 'Decision Hierarchy',
    description:
      'Your priorities, ranked. When two of them collide, you know which one wins. No ambiguity. No splitting the difference.',
  },
  {
    title: 'Authority Posture',
    description:
      'How you show up and hold your position when stakes are high. Your tone, consistency, and escalation patterns. This defines not just what you say, but how your identity shows up under pressure.',
  },
  {
    title: 'Risk Tolerance',
    description:
      'Where you lean in and where you pull back. Every strategic choice has a cost. This is where you get clear about what you\'re willing to give up and what you\'re not.',
  },
];

const brandOsChangesData = [
  {
    title: 'Your team finally understands how you think.',
    description:
      'When your governance architecture is explicit, your team stops guessing. They see the decision logic, the priority ranking, and the authority posture that shape your leadership. No more reverting work because it didn\'t match your thinking.',
  },
  {
    title: 'Your time goes back to what only you can decide.',
    description:
      'BrandOS handles the work that requires your voice and your judgment. Your team uses it for the thousands of daily decisions that should be consistent with your authority and priorities but don\'t all need your attention.',
  },
  {
    title: 'Content sounds like you without costing you.',
    description:
      'Your voice is encoded into the system. Content generated through BrandOS carries your tone, your perspective, and your decision logic. Quality is consistent. Time investment is minimal.',
  },
  {
    title: 'Drift is caught before damage becomes visible.',
    description:
      'BrandOS flags when decisions or content drift from your governance architecture. You see it immediately, not after the damage compounds or the market reacts.',
  },
];

const tierData = [
  {
    tier: 'Leader Tier',
    subtitle: 'The Full System',
    description:
      'Access to decision support, drift detection, challenge capability, and voice execution. Everything.',
  },
  {
    tier: 'Team Tier',
    subtitle: 'The Rules, Not the Internals',
    description:
      'Your team gets the decision framework and voice patterns without seeing the underlying reasoning or full context.',
  },
  {
    tier: 'Content Tier',
    subtitle: 'Voice Only',
    description:
      'For writers, creators, and agencies: access to your voice patterns and tone without decision-making authority.',
  },
];

export default function ServicesPage() {
  const faqSchema_data = faqSchema(servicesFaqData);
  const spineSchema = serviceSchema(
    'The Brand Spine: Your Governance Architecture',
    'A governance document that captures how you actually think, decide, and lead, extracted from real behavior under real pressure.'
  );
  const brandosSchema = serviceSchema(
    'BrandOS: Your AI-Powered Operating System',
    'An AI-powered operating system that encodes your governance architecture into decision support, drift detection, and voice execution across Claude, ChatGPT, and Gemini.'
  );
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: 'https://thebrandspine.com' },
    { name: 'Services', url: 'https://thebrandspine.com/services' },
  ]);
  const webPageData = webPageSchema(
    'Services | The Brand Spine',
    'Identity governance services for scaling leaders. We build the architecture that defines how your brand thinks, decides, and communicates.',
    'https://thebrandspine.com/services'
  );

  return (
    <>
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema_data) }} />
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(spineSchema) }} />
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandosSchema) }} />
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />

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
                Two Deliverables. One Governing System.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans text-lg md:text-xl text-brand-gray-300 max-w-3xl mx-auto"
              >
                Everything we build serves one outcome: authority that holds under pressure and compounds over time. The Brand Spine defines the architecture. BrandOS puts it to work.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* Service 01: The Brand Spine */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                eyebrow="SERVICE 01"
                title="The Brand Spine: Your Governance Architecture"
                className="mb-12"
              />

              <div className="space-y-8 mb-16">
                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  The Brand Spine is a governance document. Not a brand guide. Not a positioning deck. It captures how you actually think, decide, and lead: extracted from real behavior under real pressure. Not from self-assessment. Not from aspiration. From evidence.
                </p>

                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  It's the product of facilitated sessions that surface the decision patterns, priority hierarchy, and authority posture that already exist in how you operate. We don't invent your governance. We extract it, formalize it, and make it something others can follow.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {spineFeaturesData.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard hover className="h-full">
                      <h3 className="font-serif text-xl text-brand-gold mb-3">{feature.title}</h3>
                      <p className="font-sans text-brand-gray-300">{feature.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              {/* How This Differs */}
              <GlassCard gold>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-brand-cream">How This Differs from Brand Guidelines</h3>
                  <p className="font-sans text-brand-gray-300 leading-relaxed">
                    Brand guidelines prescribe outputs: use this logo, this color, this font. The Brand Spine defines the decision logic that generates appropriate outputs in any context, including ones the guidelines never anticipated. Guidelines tell people what to do. Governance tells them how to think. One works for predictable situations. The other works everywhere.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>

        {/* Service 02: BrandOS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                eyebrow="SERVICE 02"
                title="BrandOS: Your AI-Powered Operating System"
                className="mb-12"
              />

              <div className="space-y-8 mb-16">
                <p className="font-sans text-lg text-brand-gray-300 leading-relaxed">
                  BrandOS puts your Brand Spine governance architecture to work as an AI operating system deployed across the platforms you already use: Claude, ChatGPT, Gemini. It's not a separate tool to manage. It's your decision rules, how your priorities rank, and the way you actually talk and write, made operational.
                </p>
              </div>

              {/* What Changes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {brandOsChangesData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-2 border-brand-gold pl-6"
                  >
                    <h3 className="font-serif text-lg text-brand-cream mb-3">{item.title}</h3>
                    <p className="font-sans text-brand-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Three Tiers */}
              <div>
                <h3 className="font-serif text-2xl text-brand-cream mb-8 text-center">Three Tiers</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {tierData.map((tier, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard hover>
                        <h4 className="font-serif text-lg text-brand-gold mb-2">{tier.tier}</h4>
                        <p className="font-sans text-sm text-brand-gray-400 mb-4">{tier.subtitle}</p>
                        <p className="font-sans text-brand-gray-300">{tier.description}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <Link
                    href="/brandos"
                    className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-cream transition-colors duration-300 font-sans font-medium"
                  >
                    Explore all three tiers <span className="inline-block ml-1">&rarr;</span>
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What We Replace / What We Define */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <SectionHeading
                title="What This Won't Replace and What It Will Define"
                center
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-serif text-lg text-brand-gold mb-4">What We Won't Replace</h3>
                  <ul className="space-y-3 font-sans text-brand-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>Your branding agency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>Your marketing team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>Your content strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>Your visual identity</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-brand-gold mb-4">What It Will Define</h3>
                  <ul className="space-y-3 font-sans text-brand-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>The rules your team follows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>The logic behind your decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>The drift signals worth watching for</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold mt-1"></span>
                      <span>The governance architecture that makes all of that work</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="font-sans text-lg text-brand-gray-300 text-center mt-12">
                We don't replace what you've built. We give it a governing logic to operate from.
              </p>
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
              <FAQ faqs={servicesFaqData} />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/20">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection className="space-y-8">
              <SectionHeading
                title="Ready to Build Your Governance Architecture?"
                center
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:jo@thebrandspine.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-brand-gold text-brand-black rounded-lg font-sans font-semibold hover:bg-brand-gold/90 transition-colors duration-300"
                >
                  Get Started
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-brand-gold text-brand-gold rounded-lg font-sans font-semibold hover:bg-brand-gold/10 transition-colors duration-300"
                >
                  Schedule a Conversation
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
