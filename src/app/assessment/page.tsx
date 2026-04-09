'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import { useRouter } from 'next/navigation';

type GovernancePosition = 'Sovereign' | 'Partner' | 'Influencer' | 'Subordinate' | null;
type FrictionType = 'friction' | 'aligned' | 'coaching' | 'avoidant' | 'leak' | 'overreach' | 'appropriate' | 'compliant' | 'calibrated' | 'mismatch' | 'under' | 'efficiency' | 'shared' | 'indirect' | 'delegation' | 'overcorrecting' | 'strategic' | 'drift-risk' | 'self-correction' | 'co-creation' | 'seeking' | 'no-response';

interface Answer {
  position: GovernancePosition;
  friction: FrictionType;
}

interface Question {
  id: number;
  text: string;
  section: 'diagnostic' | 'context' | 'contact';
  options?: Array<{ label: string; value: string }>;
  answers?: Answer[];
  allowMultiple?: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    section: 'diagnostic',
    text: 'Your business partner makes a major decision without consulting you. It is not a bad decision, but you were not involved. What do you do?',
    options: [
      { label: 'Tell them directly that decisions of this magnitude require your input. Set a clear expectation going forward.', value: 'A' },
      { label: 'Raise it as a concern but frame it as a conversation about process, not a correction.', value: 'B' },
      { label: 'Share your perspective on the decision and let them know you would appreciate being included next time.', value: 'C' },
      { label: 'Note it internally but let it go unless it becomes a pattern. The decision was fine.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'friction' },
      { position: 'Partner', friction: 'aligned' },
      { position: 'Influencer', friction: 'under' },
      { position: 'Subordinate', friction: 'under' },
    ],
  },
  {
    id: 2,
    section: 'diagnostic',
    text: 'A direct report keeps coming to you for approval on decisions you believe they should be making on their own. How do you handle it?',
    options: [
      { label: 'Tell them clearly which decisions are theirs and which require your input. Draw the line once.', value: 'A' },
      { label: 'Ask them what they would decide if you were not available, then affirm or adjust their thinking.', value: 'B' },
      { label: 'Gradually stop responding to those requests, hoping they will take the initiative.', value: 'C' },
      { label: 'Continue approving. It is faster than training them and you can ensure quality.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'aligned' },
      { position: 'Partner', friction: 'coaching' },
      { position: 'Influencer', friction: 'avoidant' },
      { position: 'Sovereign', friction: 'overreach' },
    ],
  },
  {
    id: 3,
    section: 'diagnostic',
    text: 'You are in a meeting where someone with more organizational authority than you is about to make a decision you believe is wrong. What do you do?',
    options: [
      { label: 'State your objection clearly. The decision is wrong and they need to hear it regardless of hierarchy.', value: 'A' },
      { label: 'Present your concerns as questions. Help them see the issue without directly challenging their authority.', value: 'B' },
      { label: 'Share your perspective privately after the meeting rather than in front of the group.', value: 'C' },
      { label: 'Let it play out. It is their call and you do not have enough standing to change it.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'friction' },
      { position: 'Influencer', friction: 'calibrated' },
      { position: 'Partner', friction: 'appropriate' },
      { position: 'Subordinate', friction: 'compliant' },
    ],
  },
  {
    id: 4,
    section: 'diagnostic',
    text: 'Your team is struggling with a project. You know exactly what needs to happen, but you also know they need to develop their own problem-solving capability. What do you do?',
    options: [
      { label: 'Give them the answer. Time is limited and the project matters more than the learning moment.', value: 'A' },
      { label: 'Walk them through your thinking process so they can see how you would approach it, then let them execute.', value: 'B' },
      { label: 'Ask guiding questions that lead them toward the solution without giving it directly.', value: 'C' },
      { label: 'Step back entirely. Let them struggle through it. They will learn more from the difficulty.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'efficiency' },
      { position: 'Partner', friction: 'shared' },
      { position: 'Influencer', friction: 'indirect' },
      { position: 'Subordinate', friction: 'delegation' },
    ],
  },
  {
    id: 5,
    section: 'diagnostic',
    text: 'Your spouse or closest personal partner disagrees with a major life decision you want to make. They have valid concerns. What do you do?',
    options: [
      { label: 'Explain your reasoning thoroughly. If they understand your logic, they will see why this is the right move.', value: 'A' },
      { label: 'Treat it as a joint decision. Neither of you moves forward until you both agree on the path.', value: 'B' },
      { label: 'Listen to their concerns, share yours, and ultimately make the call you believe is right.', value: 'C' },
      { label: 'Defer to their judgment. If they feel that strongly, it is not worth the conflict.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'friction' },
      { position: 'Partner', friction: 'aligned' },
      { position: 'Influencer', friction: 'mismatch' },
      { position: 'Subordinate', friction: 'under' },
    ],
  },
  {
    id: 6,
    section: 'diagnostic',
    text: 'A client or customer pushes back on your recommendation. You are confident you are right. How do you handle it?',
    options: [
      { label: 'Hold firm. You were hired for your expertise. If they want to ignore it, that is their prerogative, but you will not change your position.', value: 'A' },
      { label: 'Revisit your recommendation together. Maybe they are seeing something you are not.', value: 'B' },
      { label: 'Reframe your recommendation with different evidence. Give them the information to make the decision themselves.', value: 'C' },
      { label: 'Adjust your recommendation to incorporate their concerns. Maintaining the relationship matters more than being right.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'friction' },
      { position: 'Partner', friction: 'overcorrecting' },
      { position: 'Influencer', friction: 'aligned' },
      { position: 'Subordinate', friction: 'compliance' },
    ],
  },
  {
    id: 7,
    section: 'diagnostic',
    text: 'You sit on a board or advisory committee. The group is moving toward a decision you believe is mediocre but not harmful. It will take significant political capital to redirect. What do you do?',
    options: [
      { label: 'Make your case forcefully. Mediocrity is not acceptable just because it is not harmful.', value: 'A' },
      { label: 'Propose a specific alternative and let the group decide between the two options.', value: 'B' },
      { label: 'Raise your concerns clearly but accept the outcome. This is not the hill to take a stand on.', value: 'C' },
      { label: 'Stay quiet. Save your influence for decisions where the stakes are higher.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'friction' },
      { position: 'Partner', friction: 'effective' },
      { position: 'Influencer', friction: 'calibrated' },
      { position: 'Subordinate', friction: 'strategic' },
    ],
  },
  {
    id: 8,
    section: 'diagnostic',
    text: 'You realize your leadership style that worked when your company was small is creating problems now that you have scaled. Something needs to change. What is your instinct?',
    options: [
      { label: 'Identify the specific behaviors that no longer serve you and replace them with clear new rules.', value: 'A' },
      { label: 'Bring your team into the conversation and co-create the new operating norms together.', value: 'B' },
      { label: 'Hire someone (coach, advisor, consultant) who can see what you cannot and guide the transition.', value: 'C' },
      { label: 'Trust that your instincts will naturally adapt as the context requires. You have always figured it out.', value: 'D' },
    ],
    answers: [
      { position: 'Sovereign', friction: 'self-correction' },
      { position: 'Partner', friction: 'co-creation' },
      { position: 'Influencer', friction: 'seeking' },
      { position: 'Subordinate', friction: 'no-response' },
    ],
  },
  {
    id: 9,
    section: 'context',
    text: 'Which of these best describes your current situation?',
    options: [
      { label: 'I am a founder or CEO leading a growing company (10+ people or $1M+ revenue).', value: 'A' },
      { label: 'I am a senior executive or partner in an organization where I share decision-making authority.', value: 'B' },
      { label: 'I lead a team, practice, or division within a larger organization.', value: 'C' },
      { label: 'I am building something new (consulting practice, coaching business, advisory role) and establishing my authority in the market.', value: 'D' },
    ],
  },
  {
    id: 10,
    section: 'context',
    text: 'Have you previously invested in any of the following to improve your leadership clarity or effectiveness? (Select all that apply.)',
    options: [
      { label: 'Executive coaching ($5,000+)', value: 'A' },
      { label: 'Leadership development program or executive education', value: 'B' },
      { label: 'Personal branding or brand strategy engagement', value: 'C' },
      { label: 'None of the above', value: 'D' },
    ],
    allowMultiple: true,
  },
  {
    id: 11,
    section: 'context',
    text: 'If a solution existed that could make your decision-making architecture explicit, transferable to your team, and encoded into an AI system that operates on your behalf, how valuable would that be to your leadership?',
    options: [
      { label: 'Extremely valuable. This would change how I operate.', value: 'A' },
      { label: 'Very valuable. I can see specific situations where this would help.', value: 'B' },
      { label: 'Somewhat valuable. Interesting concept but I would need to understand it better.', value: 'C' },
      { label: 'Not sure. I would need to see it in practice.', value: 'D' },
    ],
  },
  {
    id: 12,
    section: 'contact',
    text: 'Let us know where to send your Governance Friction Report.',
  },
];

export default function AssessmentPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string | string[]>>({});
  const [contactData, setContactData] = useState({ firstName: '', lastName: '', email: '', company: '' });
  const [isStarted, setIsStarted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const question = QUESTIONS[currentQuestion];
  const isContact = question.section === 'contact';
  const isDiagnostic = question.section === 'diagnostic';
  const isLast = currentQuestion === QUESTIONS.length - 1;
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const handleStartAssessment = () => {
    setIsStarted(true);
  };

  const handleSelectOption = (value: string) => {
    if (question.allowMultiple) {
      const current = responses[question.id] as string[] || [];
      const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
      setResponses({ ...responses, [question.id]: updated });
    } else {
      setResponses({ ...responses, [question.id]: value });
    }
    setShowErrors(false);
  };

  const handleNext = () => {
    if (isContact) {
      if (!contactData.firstName || !contactData.lastName || !contactData.email) {
        setShowErrors(true);
        return;
      }
    } else if (!responses[question.id]) {
      setShowErrors(true);
      return;
    }

    if (isLast) {
      handleSubmit();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = async () => {
    // Calculate governance posture
    const diagnosticAnswers: { position: GovernancePosition; friction: FrictionType }[] = [];
    for (let i = 1; i <= 8; i++) {
      const answer = responses[i] as string;
      if (answer) {
        const q = QUESTIONS.find(qu => qu.id === i);
        if (q?.answers) {
          const optionIndex = q.options?.findIndex(opt => opt.value === answer) || 0;
          diagnosticAnswers.push(q.answers[optionIndex]);
        }
      }
    }

    const postureCounts = { Sovereign: 0, Partner: 0, Influencer: 0, Subordinate: 0 };
    diagnosticAnswers.forEach(ans => {
      if (ans.position) postureCounts[ans.position]++;
    });

    const dominantPosture = (Object.entries(postureCounts).sort((a, b) => b[1] - a[1])[0][0] || 'Partner') as GovernancePosition;

    const resultData = {
      dominantPosture,
      diagnosticAnswers,
      q9: responses[9],
      q10: responses[10],
      q11: responses[11],
      contact: contactData,
    };

    // Store in localStorage for results page
    if (typeof window !== 'undefined') {
      localStorage.setItem('assessmentResults', JSON.stringify(resultData));
    }

    router.push('/assessment/results');
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-16 sm:py-24">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <SectionHeading>Where Is Your Governance Leaking?</SectionHeading>
              <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                Most leaders enforce the same way in every relationship. That works until it doesn't. This 6-minute assessment shows you where the friction lives.
              </p>
            </div>

            {/* Authority Gradient Visualization */}
            <GlassCard className="mb-16 p-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#c9a96e]"></div>
                  <div>
                    <h3 className="text-lg font-semibold">Sovereign</h3>
                    <p className="text-sm text-gray-400">You make final decisions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#c9a96e]"></div>
                  <div>
                    <h3 className="text-lg font-semibold">Partner</h3>
                    <p className="text-sm text-gray-400">Authority is shared</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#c9a96e]"></div>
                  <div>
                    <h3 className="text-lg font-semibold">Influencer</h3>
                    <p className="text-sm text-gray-400">You shape without deciding</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#c9a96e]"></div>
                  <div>
                    <h3 className="text-lg font-semibold">Subordinate</h3>
                    <p className="text-sm text-gray-400">Others have final authority</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Credibility */}
            <div className="mb-12">
              <p className="text-sm text-gray-400 leading-relaxed italic">
                Built on a proprietary extraction methodology that uses behavioral analysis and logical stress-testing to surface how your governance actually operates under pressure. Not a personality test. Not a self-report framework.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleStartAssessment}
              className="w-full sm:w-auto px-8 py-4 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors"
            >
              Take the Assessment
            </button>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#c9a96e]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">{Math.round(progress)}%</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`question-${question.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isContact ? (
              // Contact Form
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">{question.text}</h2>
                <GlassCard className="p-8 space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      value={contactData.firstName}
                      onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={contactData.lastName}
                      onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="Last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company or Organization (optional)</label>
                    <input
                      type="text"
                      value={contactData.company}
                      onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]"
                      placeholder="Your company"
                    />
                  </div>
                  {showErrors && (
                    <p className="text-sm text-red-400">Please fill in all required fields.</p>
                  )}
                </GlassCard>
              </div>
            ) : (
              // Multiple Choice
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">{question.text}</h2>
                <div className="space-y-4">
                  {question.options?.map((option) => {
                    const isSelected = question.allowMultiple
                      ? (responses[question.id] as string[])?.includes(option.value)
                      : responses[question.id] === option.value;

                    return (
                      <motion.button
                        key={option.value}
                        onClick={() => handleSelectOption(option.value)}
                        className={`w-full text-left p-5 rounded-lg transition-all border ${
                          isSelected
                            ? 'bg-[#c9a96e]/20 border-[#c9a96e] text-white'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <p className="font-medium">{option.label}</p>
                      </motion.button>
                    );
                  })}
                </div>
                {showErrors && !responses[question.id] && (
                  <p className="text-sm text-red-400 mt-4">Please select an option to continue.</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion === 0}
            className="px-6 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="ml-auto px-6 py-2 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors"
          >
            {isLast ? 'Get Your Governance Friction Report' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
