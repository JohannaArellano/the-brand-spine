'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';

type GovernancePosition = 'Sovereign' | 'Partner' | 'Influencer' | 'Subordinate' | null;
type FrictionType = string;

interface ResultData {
  dominantPosture: GovernancePosition;
  diagnosticAnswers: Array<{ position: GovernancePosition; friction: FrictionType }>;
  q9: string;
  q10: string | string[];
  q11: string;
}

// ── Light Results: Posture Descriptions ─────────────────────────────────────

const POSTURE_DESCRIPTIONS: Record<string, string> = {
  Sovereign:
    'You lead through direct authority. When a decision needs to be made, you make it. You take ownership of outcomes, set the direction, and expect the people around you to execute. You don\u2019t wait for consensus because you\u2019ve already run the analysis. Speed and clarity are how you build momentum.',
  Partner:
    'You lead through collaboration. Shared decision-making, mutual input, and co-creation are your default operating mode. You build buy-in before you build momentum. You believe the best outcomes come from bringing the right people into the process, not from making the call alone.',
  Influencer:
    'You lead through shaping. You guide outcomes without needing to own them. You ask the question that reframes the room. You create the conditions for the right decision to happen rather than making it yourself. Your authority comes from insight, not position.',
  Subordinate:
    'You lead through execution and trust. You respect the chain. When someone has earned authority, you give them the room to exercise it. You do your best work inside clear structures with defined accountability. You don\u2019t need to be the one making the call. You need to know the call was made well.',
};

// ── Light Results: Friction Summaries ───────────────────────────────────────

const FRICTION_NARRATIVES: Record<string, string> = {
  Sovereign:
    'In relationships where you hold final authority, your governance works. The problem shows up in the spaces where you don\u2019t.\n\nWhen you operate as a Sovereign in a partnership where authority is shared, the other person feels overridden, not led. When you make the call in a room where your role is to influence, not decide, people experience your clarity as control. The friction isn\u2019t your decisiveness. It\u2019s that you enforce the same way regardless of where you sit on the authority gradient.\n\nThe cost adds up quietly. Partners stop bringing you into decisions early. Collaborators edit themselves around you instead of engaging directly. You start hearing about disagreements after the fact instead of during the conversation. None of this looks like a crisis. It looks like people deferring to you. But deference and alignment are not the same thing, and the gap between them is where governance breaks down.',
  Partner:
    'In partnership contexts where authority is shared, your governance works. The problem shows up in the spaces where it shouldn\u2019t.\n\nWhen you operate as a Partner in relationships where you actually have final authority, decisions slow down. You build consensus for calls that should have been made three meetings ago. When you\u2019re in an advisory role where your job is to influence without deciding, you over-invest in the outcome because your instinct is to co-own it. The friction isn\u2019t your collaborative nature. It\u2019s that you lead with collaboration even when the relationship structure doesn\u2019t call for it.\n\nThe cost shows up as speed. Opportunities that required a fast call got the full buy-in process instead. Team members who needed direction got a collaborative conversation that felt like ambiguity. You\u2019ve probably had the experience of someone saying \u201Cjust tell me what to do\u201D and feeling like they were missing the point. They weren\u2019t missing the point. They were telling you that in that moment, they needed a directive, not a dialogue.',
  Influencer:
    'In advisory and influence contexts, your governance works. The problem shows up when the situation demands something more direct.\n\nWhen you\u2019re in a position of final authority and you default to shaping rather than deciding, the people around you don\u2019t know where you stand. When you guide a conversation toward the right answer instead of stating it, your team may experience that as uncertainty rather than empowerment. When a direct report needs to be corrected, influence mode softens the message enough that it doesn\u2019t land. The friction isn\u2019t your insight. It\u2019s that you apply influence in contexts that require enforcement.\n\nThe cost shows up as accountability gaps. The decision you shaped but didn\u2019t own gets reversed when you leave the room. The correction you implied but didn\u2019t state gets treated as optional. You\u2019ve probably had the experience of a team executing something differently than you intended and wondering how they missed it. They didn\u2019t miss it. You influenced when the moment required directing.',
  Subordinate:
    'In contexts where someone else holds legitimate authority, your governance works. The problem shows up when the structure shifts and you don\u2019t shift with it.\n\nWhen you hold final authority but default to deferring upward or seeking validation, decisions stall waiting for approval that was already yours to give. When you\u2019re in a partnership where authority is shared but you habitually yield, your perspective gets underweighted and the partnership becomes lopsided. When the moment calls for you to step in directly and you wait for permission or consensus first, the window closes. The friction isn\u2019t your respect for structure. It\u2019s that you defer even when the structure has placed you in charge.\n\nThe cost shows up as missed authority moments. The room looked to you for direction and you looked to someone else. The decision that needed your conviction got your compliance instead. You\u2019ve probably had the experience of knowing exactly what should happen but waiting for someone else to say it first. That gap between knowing and acting is where governance breaks down.',
};

// ── Email Gate Copy ─────────────────────────────────────────────────────────

const EMAIL_GATE_COPY: Record<string, string> = {
  Sovereign:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates resistance, and the one structural pattern behind the friction you\u2019re already sensing.',
  Partner:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates decision bottlenecks, and the one structural pattern behind the friction you\u2019re already sensing.',
  Influencer:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates ambiguity, and the one structural pattern behind the friction you\u2019re already sensing.',
  Subordinate:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates passivity, and the one structural pattern behind the friction you\u2019re already sensing.',
};

// ── Full Report Content ─────────────────────────────────────────────────────

interface ReportSection {
  heading: string;
  content: string[];
}

interface FullReport {
  postureIntro: string[];
  whereItWorks: string[];
  frictionPattern: {
    sovereign: { label: string; content: string[] };
    partner: { label: string; content: string[] };
    influencer: { label: string; content: string[] };
    subordinate: { label: string; content: string[] };
  };
  patternUnderneath: string[];
  selfAssessment: string[];
}

const FULL_REPORTS: Record<string, FullReport> = {
  Sovereign: {
    postureIntro: [
      'You lead from authority. When a decision needs to be made, you make it. When a direction needs to be set, you set it. You don\u2019t wait for consensus, you don\u2019t hedge with committees, and you don\u2019t defer to other people\u2019s comfort when the stakes are clear. You trust your own judgment \u2014 and in most cases, you should.',
      'This isn\u2019t arrogance. It\u2019s a posture you\u2019ve developed because it works. You\u2019ve been in enough rooms where waiting for agreement cost everyone the window. You\u2019ve watched leaders waffle while the people around them lost confidence. You decided, probably early, that clarity and ownership were more valuable than collective buy-in. And for a long time \u2014 maybe most of the time \u2014 that decision has served you.',
      'The Sovereign posture means you hold authority as your default. You enter relationships, rooms, and decisions from the position of: I will make the call. That instinct is real. It\u2019s earned. And it has a cost you may not be tracking.',
    ],
    whereItWorks: [
      'Sovereign governance is the right tool when the situation genuinely requires someone to own the outcome. Startups in early chaos. Teams without direction. Crises where speed matters more than process. Moments where the group is circling and someone needs to plant a flag.',
      'You\u2019re the person people look at when the room goes quiet. When nobody wants to name the hard truth, you name it. When everyone is optimizing for comfort, you optimize for the actual outcome. That capacity is rare, and in the right context, it\u2019s exactly what\u2019s needed.',
      'The Sovereign posture works when the authority is legitimate \u2014 when it\u2019s actually your call, your risk, your domain. It works when others need clarity more than they need participation. It works when the cost of indecision is higher than the cost of being wrong.',
      'The friction starts when you apply this posture in contexts where the authority isn\u2019t yours alone.',
    ],
    frictionPattern: {
      sovereign: {
        label: 'Sovereign Position \u2014 Your decisions. Your domain. Your call.',
        content: [
          'This is where the posture fits. When you\u2019re making decisions about your own business, your own direction, your own non-negotiables, the Sovereign posture is doing exactly what it\u2019s designed to do. You assess the situation, you trust your synthesis, you move. The people around you may not always agree, but they know where you stand. That clarity creates trust \u2014 because even when people disagree with the decision, they can work with someone who makes clear ones.',
          'The friction here is minor and manageable: you occasionally move faster than the people around you can absorb. But that\u2019s a pacing issue, not a governance breakdown.',
        ],
      },
      partner: {
        label: 'Partner Position \u2014 Shared stakes. Mutual investment. Co-ownership.',
        content: [
          'Here\u2019s where it starts to cost you.',
          'You\u2019re co-leading a strategic initiative with someone you respect. They bring different expertise, different instincts, maybe a different risk tolerance. The situation calls for genuine co-ownership \u2014 not one person driving and another person advising. But your default governance is Sovereign. So you listen, you nod, and then you make the call. Not because you\u2019re dismissing them. Because that\u2019s how you process decisions. You synthesize, you land on a direction, and you move.',
          'Your partner experiences this differently. They experience someone who asks for input but has already decided. Someone who creates the form of partnership without the actual mechanics of shared authority. Over time, this erodes the relationship \u2014 not through conflict, but through disengagement. Your partner stops bringing their real thinking because they\u2019ve learned it doesn\u2019t shift the outcome. You lose access to the very perspective that made the partnership valuable.',
          'What this costs you: the partnership becomes a performance. You\u2019re operating alone while maintaining the appearance of collaboration. Your blind spots stay blind.',
          'What would be different: governance that genuinely shares decision authority in the domains where your partner holds real expertise \u2014 not as a courtesy, but as a structural commitment.',
        ],
      },
      influencer: {
        label: 'Influencer Position \u2014 Advisory authority. Guidance without mandate.',
        content: [
          'You\u2019re advising a team member, a client, or a peer. They\u2019ve come to you for perspective. The appropriate governance here is influence \u2014 you offer what you see, they decide what to do with it. But Sovereign governance doesn\u2019t have a \u201Csuggest\u201D gear. So your guidance comes through as direction. Your perspective comes through as mandate.',
          'The person on the receiving end feels the weight of your certainty. If they\u2019re junior, they comply. They stop developing their own judgment because yours is so clearly available. If they\u2019re a peer, they push back \u2014 and now a conversation that should have been collaborative becomes a power struggle. Not because either of you wanted it, but because your governance posture turned advice into authority.',
          'What this costs you: the people you influence stop thinking for themselves. Or they stop coming to you. Either way, you lose the relationship you were trying to serve.',
          'What would be different: offering your observation clearly while genuinely holding space for the other person to reach a different conclusion \u2014 and not experiencing that as a failure.',
        ],
      },
      subordinate: {
        label: 'Subordinate Position \u2014 Someone else holds the expertise. You\u2019re the learner.',
        content: [
          'This is where the friction gets structural. You\u2019re working with an attorney, a financial advisor, a technical expert in a domain where you\u2019re not the authority. The Sovereign posture says: I make the call. But in this context, you don\u2019t have the information to make a good one. So one of two things happens.',
          'Either you override the expertise \u2014 you take the input, filter it through your own judgment, and make a decision that ignores what the expert was actually telling you. This looks like confidence from the outside, but it\u2019s governance failure. You\u2019re applying Sovereign authority in a domain where it doesn\u2019t belong.',
          'Or you comply on the surface while internally resisting. You follow the recommendation, but you don\u2019t actually integrate the expertise. The decision looks informed, but it\u2019s hollow.',
          'What this costs you: you make preventable mistakes in domains where better governance would protect you. And the experts around you learn to give you simplified answers instead of real ones \u2014 because the real ones don\u2019t change your behavior.',
          'What would be different: a governance structure where you genuinely defer to expertise in domains where it\u2019s warranted \u2014 not as weakness, but as architectural integrity. Trusting someone else\u2019s authority in their domain the way you trust your own in yours.',
        ],
      },
    },
    patternUnderneath: [
      'Here\u2019s what the friction pattern is actually showing you: you have one governance mode, and you\u2019re applying it everywhere.',
      'This isn\u2019t a character flaw. It\u2019s a structural gap. Most leaders develop their strongest governance instinct through experience \u2014 you learned that owning the decision works, so you own every decision. The instinct is sound. The architecture is incomplete.',
      'Governance friction doesn\u2019t come from being too much of anything. It comes from applying one mode of authority across relationships that require different modes. The Sovereign posture is excellent governance when the authority is legitimately yours. It creates friction when it overrides contexts that need partnership, influence, or genuine deference.',
      'The reason this pattern persists isn\u2019t lack of self-awareness. Most leaders at your level can identify the friction when they see it. The reason it persists is that nobody mapped the architecture. You have governance instincts \u2014 strong ones. What you don\u2019t have is governance infrastructure: the structural system that tells you which posture belongs in which relationship, what the decision rules are for each, and what the early warning signals look like when you\u2019ve defaulted to the wrong one.',
      'That infrastructure doesn\u2019t build itself. And it doesn\u2019t come from reading about it.',
    ],
    selfAssessment: [
      'This assessment did something specific: it identified your default governance posture and showed you where it creates friction. That\u2019s the diagnostic. It\u2019s accurate. And it\u2019s the limit of what a self-assessment can do.',
      'What it can\u2019t do is rebuild the architecture. Resolution requires mapping your actual decision patterns under pressure \u2014 not what you believe you\u2019d do, but what you actually do when the stakes are real and the timeline is short. It requires understanding your full authority gradient: which relationships need Sovereign governance, which need Partner, which need Influencer, which need Subordinate. It requires identifying your specific drift patterns, your escalation triggers, and the moments where your default posture overrides the one the situation actually needs.',
      'That\u2019s not a worksheet exercise. It\u2019s a facilitated process that pressure-tests your governance in real scenarios \u2014 because the architecture that matters is the one that holds when things get hard, not the one that looks good on paper.',
    ],
  },
  Partner: {
    postureIntro: [
      'You lead through collaboration. When a decision needs to be made, your instinct is to bring people in \u2014 not because you can\u2019t decide alone, but because you believe better outcomes come from shared thinking. You build consensus. You check for alignment. You make sure the people with stakes in the outcome have a voice in shaping it.',
      'This isn\u2019t indecisiveness. It\u2019s a philosophy. You\u2019ve seen what happens when leaders bulldoze through decisions without buy-in: the team complies, but they don\u2019t commit. The decision might be fast, but the execution is hollow. You decided \u2014 maybe through experience, maybe through values \u2014 that real commitment comes from real participation. And in many contexts, that\u2019s exactly right.',
      'The Partner posture means you enter relationships, rooms, and decisions from the position of: We should figure this out together. You share authority naturally. You invite input genuinely. And you hold space for perspectives that differ from your own. That\u2019s a real skill. It has a cost you may not be tracking.',
    ],
    whereItWorks: [
      'Partner governance is the right tool when the stakes are genuinely shared. Co-founder relationships. Strategic alliances where both parties carry real risk. Joint ventures where the outcome depends on mutual commitment. Long-term collaborations where trust compounds over time.',
      'You\u2019re the person people want to build with. Where others create followers, you create partners. Your relationships tend to be deeper, more transparent, more resilient \u2014 because the people around you know their thinking actually matters to you. That\u2019s not common, and in the right context, it creates outcomes that top-down leadership can\u2019t touch.',
      'The Partner posture works when the authority genuinely needs to be shared, when the other person\u2019s contribution is essential to the outcome, and when the timeline allows for the conversation that real partnership requires.',
      'The friction starts when you apply this posture in contexts that need a different kind of authority.',
    ],
    frictionPattern: {
      partner: {
        label: 'Partner Position \u2014 Shared stakes. Mutual investment. Co-ownership.',
        content: [
          'This is where the posture fits. When you\u2019re working with a true co-equal \u2014 someone who carries comparable stakes, comparable expertise, and comparable responsibility \u2014 the Partner posture creates the conditions for real collaboration. You don\u2019t dominate. You don\u2019t defer. You think together, and the outcome is better for it.',
          'The friction here is manageable: sometimes the collaborative process takes longer than it needs to. But in genuine partnerships, that investment in shared thinking pays for itself in execution quality.',
        ],
      },
      sovereign: {
        label: 'Sovereign Position \u2014 Your decisions. Your domain. Your call.',
        content: [
          'This is where the Partner posture becomes expensive.',
          'You need to make a decision about your own business \u2014 pricing, positioning, a direction that affects nobody\u2019s livelihood but yours. The situation calls for Sovereign governance: assess the options, trust your judgment, move. But your default is Partner. So you bring people in. You ask for input. You check for alignment with people who don\u2019t actually carry the risk.',
          'This looks like humility. It functions as avoidance. Not always \u2014 sometimes external input is genuinely useful. But when you consistently seek partnership on decisions that are yours alone, the pattern reveals itself: you\u2019re distributing the weight of the decision because carrying it alone feels wrong.',
          'What this costs you: speed, certainly. But more importantly, it costs you trust in your own authority. Every time you seek consensus on a Sovereign decision, you reinforce the belief that your judgment alone isn\u2019t sufficient. Over time, that belief becomes structural. You stop being able to tell the difference between a decision that genuinely needs input and one where you\u2019re outsourcing the discomfort of ownership.',
          'What would be different: a clear map of which decisions are yours alone \u2014 and the willingness to make them without needing anyone else to validate the call.',
        ],
      },
      influencer: {
        label: 'Influencer Position \u2014 Advisory authority. Guidance without mandate.',
        content: [
          'Someone comes to you \u2014 a team member, a mentee, a client \u2014 asking for your perspective. They need guidance. They need you to tell them what you see. The Influencer posture is clear: offer your observation, let them decide.',
          'But your default is Partner. So instead of offering guidance, you open a dialogue. Instead of telling them what you see, you ask what they see. Instead of naming the pattern, you explore it together. This feels respectful. And sometimes it is. But for the person who came to you specifically because they\u2019re stuck, your partnership feels like another version of the confusion they walked in with.',
          'The person who needs guidance doesn\u2019t need a co-thinker. They need someone willing to say: \u201CHere\u2019s what I see. Here\u2019s what the pattern is telling me. Here\u2019s what I think you should do.\u201D That kind of directness requires a posture you\u2019re not defaulting to.',
          'What this costs you: the people who need your clarity don\u2019t get it. They leave the conversation feeling heard but not helped. Your influence diminishes \u2014 not because your thinking is wrong, but because it never arrives as a clear signal.',
          'What would be different: the ability to shift into advisory authority when the situation calls for it \u2014 offering your perspective with the weight it deserves, even when that means being more directive than feels comfortable.',
        ],
      },
      subordinate: {
        label: 'Subordinate Position \u2014 Someone else holds the expertise. You\u2019re the learner.',
        content: [
          'You\u2019re meeting with someone who has real expertise in a domain you don\u2019t \u2014 a lawyer, a financial advisor, a specialist in a domain where your expertise is limited. The appropriate governance is Subordinate: listen, ask smart questions, integrate the expertise into your decision-making.',
          'But the Partner posture creates a subtle distortion here. You treat the conversation as a collaboration between equals when it isn\u2019t one. You bring your perspective into domains where your perspective isn\u2019t the relevant input. Not aggressively \u2014 you\u2019d never dismiss the expert. But you negotiate. You offer alternatives. You engage the expertise as though it\u2019s one perspective among equals.',
          'The expert experiences this as someone who isn\u2019t fully receiving the input. They soften their recommendations because you\u2019re engaging them as a peer, not a specialist. The critical information gets diluted because the dynamic invites negotiation instead of clarity.',
          'What this costs you: the expertise you\u2019re paying for doesn\u2019t land at full strength. You get the collaborative version of the guidance instead of the direct version. And in domains like legal risk, financial strategy, or health, the direct version is the one that protects you.',
          'What would be different: the ability to genuinely receive expertise without needing to participate as an equal in the analysis \u2014 trusting the expert\u2019s authority in their domain the way you\u2019d want them to trust yours.',
        ],
      },
    },
    patternUnderneath: [
      'The friction pattern shows one thing clearly: you have a governance mode that values shared authority, and you\u2019re applying it in contexts where shared authority isn\u2019t what\u2019s needed.',
      'This isn\u2019t a weakness. It\u2019s an architectural gap. You developed the Partner posture because it works \u2014 it creates real collaboration, real buy-in, real trust. But governance architecture requires more than one mode. It requires knowing when to hold full authority, when to share it, when to advise from it, and when to defer to someone else\u2019s.',
      'Most leaders enforce the same way in every relationship because nobody ever mapped the architecture. The friction isn\u2019t that you\u2019re too collaborative. It\u2019s that collaboration is your only structural response. When a situation needs you to own the decision alone, you share it. When it needs you to be direct, you explore. When it needs you to receive expertise, you negotiate.',
      'The instincts are good. The infrastructure is incomplete. You have governance instincts \u2014 strong ones. What you don\u2019t have is the structural system that tells you which posture fits which relationship, what the decision rules are for each domain, and how to recognize when you\u2019ve defaulted to partnership in a context that needs something different.',
    ],
    selfAssessment: [
      'This assessment identified your default governance posture and showed you where it creates friction. That\u2019s the diagnostic. It\u2019s useful. And it\u2019s the boundary of what a self-assessment can accomplish.',
      'Resolving governance friction requires a different kind of work. It requires mapping your actual decision patterns under pressure \u2014 not the version you believe in, but the version that shows up when the timeline is tight and the stakes are personal. It requires building a full authority gradient: which relationships need Partnership, which need Sovereign authority, which need advisory clarity, which need genuine deference. It requires identifying the specific moments where your default overrides the posture the situation actually needs \u2014 and building the structural awareness to catch that in real time.',
      'That doesn\u2019t happen through reflection. It happens through a facilitated process that pressure-tests your governance against real scenarios \u2014 because the architecture that matters isn\u2019t the one you\u2019d choose in calm conditions. It\u2019s the one that holds when things get hard.',
    ],
  },
  Influencer: {
    postureIntro: [
      'You lead through insight. Your natural mode is to observe, synthesize, and offer perspective. You see patterns other people miss. You name dynamics that everyone is feeling but nobody is saying. And you do it in a way that feels like a gift \u2014 because your guidance comes through as clarity, not as command.',
      'This isn\u2019t passivity. It\u2019s a specific kind of power. You\u2019ve learned that the best way to move people isn\u2019t to tell them what to do \u2014 it\u2019s to help them see what\u2019s actually happening. Once they see it, they make better decisions. You trust the process of illumination over the process of control. And in many contexts, that trust is well-placed.',
      'The Influencer posture means you enter relationships, rooms, and decisions from the position of: Let me show you what I see. You offer perspective. You name what\u2019s underneath. You guide without demanding. That capacity is valuable \u2014 and it has a cost you may not be tracking.',
    ],
    whereItWorks: [
      'Influencer governance is the right tool when the situation calls for insight without ownership. Advisory relationships. Coaching. Consulting. Mentoring. Board service. Any context where your job is to make others think more clearly \u2014 not to make the decision for them.',
      'You\u2019re the person people seek out when they\u2019re stuck. Not because you\u2019ll take the problem off their hands, but because after talking with you, they can see the problem differently. You change the quality of other people\u2019s decisions without needing to own those decisions. That\u2019s a rare and legitimate form of leadership.',
      'The Influencer posture works when someone else genuinely holds the authority, when the decision is theirs to make, and when the most valuable thing you can offer is perspective. It works in rooms where the power isn\u2019t yours but the insight is.',
      'The friction starts when you apply this posture in contexts that need you to do more than observe and advise.',
    ],
    frictionPattern: {
      influencer: {
        label: 'Influencer Position \u2014 Advisory authority. Guidance without mandate.',
        content: [
          'This is where the posture fits. When you\u2019re advising \u2014 truly advising \u2014 the Influencer mode is doing exactly what it should. You see the pattern, you name it, the other person integrates it into their own decision-making. Your authority is the authority of clarity, not position. And in genuine advisory relationships, that\u2019s the most valuable thing you can offer.',
          'The friction here is minor: occasionally your insight is so clear that the other person treats it as a directive when you intended it as an observation. But that\u2019s a calibration issue, not a governance breakdown.',
        ],
      },
      sovereign: {
        label: 'Sovereign Position \u2014 Your decisions. Your domain. Your call.',
        content: [
          'Here\u2019s where the Influencer posture starts to cost you structurally.',
          'You\u2019re facing a decision that\u2019s entirely yours \u2014 your business model, your pricing, your next strategic move. Nobody else carries the risk. Nobody else owns the outcome. The situation calls for Sovereign governance: assess, decide, commit, move.',
          'But your default is Influencer. So you do what you do best: you analyze. You see the options. You name the tradeoffs. You hold all the perspectives simultaneously. And then \u2014 you don\u2019t decide. Because the Influencer posture doesn\u2019t include a decision mechanism. It includes an insight mechanism. You can see the right move with extraordinary clarity. What you don\u2019t have is the structural gear that says: This is mine. I\u2019m making the call.',
          'From the outside, this looks like overthinking. From the inside, it feels like thoroughness. But the pattern is consistent: you can advise someone else through this exact decision with confidence. When it\u2019s your own, the clarity you offer others doesn\u2019t translate into action for yourself.',
          'What this costs you: decisions get delayed. Opportunities pass. And the gap between what you see and what you do widens \u2014 which creates a particular kind of internal friction that compounds over time.',
          'What would be different: a governance structure that distinguishes between decisions that need your insight and decisions that need your authority \u2014 and the capacity to step into ownership when the decision is actually yours.',
        ],
      },
      partner: {
        label: 'Partner Position \u2014 Shared stakes. Mutual investment. Co-ownership.',
        content: [
          'You\u2019re in a genuine partnership \u2014 a co-founder relationship, a strategic alliance, a collaboration with shared stakes. The Partner posture calls for mutual ownership: you bring your authority, they bring theirs, and together you navigate the decision.',
          'But the Influencer posture shifts you into a different role. Instead of co-owning, you advise. Instead of bringing your authority to the table as an equal, you offer perspective from a half-step back. You\u2019re the partner who always has the clearest read on the situation \u2014 and who somehow isn\u2019t driving the outcome.',
          'Your partner experiences this as being in a relationship with someone who sees everything but commits to nothing. They carry more than their share of the decision weight, not because you\u2019re incapable, but because your governance posture positions you as the one who illuminates rather than the one who acts.',
          'What this costs you: the partnership becomes lopsided. Your partner makes the calls. You provide the analysis. Over time, you lose equal standing \u2014 not because anyone intended it, but because your governance posture gave up the authority that genuine partnership requires.',
          'What would be different: showing up with your own position, not your analysis of everyone else\u2019s position. Bringing a recommendation, not an observation. Committing to an outcome, not a perspective.',
        ],
      },
      subordinate: {
        label: 'Subordinate Position \u2014 Someone else holds the expertise. You\u2019re the learner.',
        content: [
          'You\u2019re working with an expert \u2014 a lawyer, a financial advisor, a specialist in a domain where your expertise is limited. The Subordinate posture calls for genuine reception: listen, ask questions, integrate the expertise into your decision-making.',
          'The Influencer posture creates an interesting distortion here. You can\u2019t stop analyzing. Even in contexts where the appropriate governance is to receive expertise, your instinct is to synthesize it, reframe it, and offer your own perspective on it. You process the expert\u2019s input through your own pattern-recognition engine and come back with observations about their recommendations.',
          'The expert experiences this as someone who can\u2019t simply receive. The guidance they\u2019re offering gets refracted through your analytical lens before it lands, and sometimes what arrives looks different from what was sent. Not because you\u2019re dismissing them \u2014 but because your governance posture doesn\u2019t have a mode for simply taking in what someone else knows without adding your own layer of interpretation.',
          'What this costs you: expertise gets diluted. The clean, direct guidance gets complicated by your analytical overlay. In domains where precision matters \u2014 legal, medical, financial \u2014 that dilution has real consequences.',
          'What would be different: the ability to receive expertise as a learner, not an analyst. Trusting that some domains require you to take the input straight, without your interpretive layer, because the expert\u2019s clarity is the point.',
        ],
      },
    },
    patternUnderneath: [
      'The friction pattern reveals a structural reality: you have a powerful governance mode built on insight, and you\u2019re applying it in contexts that need something other than insight.',
      'This isn\u2019t a flaw. It\u2019s a gap in the architecture. You developed the Influencer posture because it works \u2014 your ability to see patterns and name dynamics is genuinely valuable. But governance isn\u2019t just about seeing clearly. It\u2019s about knowing when to see, when to own, when to share ownership, and when to receive.',
      'Most leaders default to their strongest mode because nobody ever built the larger structure around it. You can see the right move in almost any situation. The governance gap isn\u2019t in your perception \u2014 it\u2019s in the mechanism that connects perception to action, ownership, and authority. You have governance instincts. What you don\u2019t have is governance infrastructure: the structural system that tells you when insight is the right response and when something else is.',
      'The reason this pattern persists isn\u2019t lack of capability. You\u2019re not someone who can\u2019t make decisions or can\u2019t commit. The reason it persists is that the Influencer mode is so effective in its domain that it became the default across every domain. And without a structural map showing which posture belongs where, the default wins every time.',
    ],
    selfAssessment: [
      'This assessment identified your default governance posture and showed you where the friction lives. That diagnostic is real. The pattern it described is accurate. And that\u2019s the limit of what a self-assessment can do.',
      'Resolution requires something different. It requires understanding your full authority gradient \u2014 not which posture you\u2019re best at, but which posture each relationship actually needs. It requires mapping the decision architecture beneath the pattern: what triggers the Influencer default, where the governance shifts should happen, what it looks like when you\u2019re in the right posture versus the comfortable one. And it requires pressure-testing that architecture against real scenarios \u2014 because the governance that matters is the one that holds when things are moving fast and the stakes are personal.',
      'A self-assessment can show you the pattern. It can\u2019t build the infrastructure that changes it. That requires a facilitated process \u2014 one that tests what you actually do under pressure, not what you believe you\u2019d do.',
    ],
  },
  Subordinate: {
    postureIntro: [
      'You lead through responsiveness. Your instinct is to understand what\u2019s needed and deliver it. You pay attention to the people above you, the systems around you, and the expectations in the room \u2014 and you meet them. You\u2019re reliable, adaptive, and willing to defer to authority when the situation calls for it.',
      'This isn\u2019t weakness. It\u2019s a governance posture rooted in something real: the belief that good leadership includes knowing when you\u2019re not the most important voice in the room. You\u2019ve seen what happens when leaders who don\u2019t have the full picture try to drive outcomes \u2014 wasted resources, damaged relationships, decisions that have to be unwound. You\u2019ve learned that listening and adapting often produces better results than asserting and controlling.',
      'The Subordinate posture means you enter relationships, rooms, and decisions from the position of: What do you need from me? You orient toward the authority in the room. You\u2019re responsive to direction. And you\u2019re skilled at executing within someone else\u2019s framework. That capacity is genuinely valuable \u2014 and it has a cost you may not be tracking.',
    ],
    whereItWorks: [
      'Subordinate governance is the right tool when someone else legitimately holds the expertise or authority. Working with legal counsel on a complex matter. Following medical guidance in a domain you don\u2019t understand. Executing within a well-designed organizational structure where the leadership above you has earned your trust.',
      'You\u2019re the person people trust to carry the ball. Not because you can\u2019t think for yourself, but because when the authority structure is sound, you make it work. You don\u2019t fight productive hierarchy. You don\u2019t burn political capital on ego. You focus your energy on execution and responsiveness, and that focus produces results that self-appointed leaders can\u2019t match.',
      'The Subordinate posture works when the authority you\u2019re deferring to is legitimate, when the framework you\u2019re operating within is sound, and when the most valuable thing you can do is execute within someone else\u2019s strategic direction.',
      'The friction starts when you apply this posture in contexts where you actually hold the authority \u2014 or should.',
    ],
    frictionPattern: {
      subordinate: {
        label: 'Subordinate Position \u2014 Someone else holds the expertise. You\u2019re the learner.',
        content: [
          'This is where the posture fits. When you\u2019re working within a domain where someone else genuinely knows more \u2014 legal, technical, medical, specialized \u2014 the Subordinate posture produces clean governance. You listen. You integrate the expertise. You make better decisions because you\u2019re not fighting the input. Your willingness to defer to legitimate authority is a structural advantage.',
          'The friction here is manageable: you occasionally defer too quickly before asking the clarifying questions that would make the guidance more useful. But that\u2019s a calibration issue, not a governance failure.',
        ],
      },
      sovereign: {
        label: 'Sovereign Position \u2014 Your decisions. Your domain. Your call.',
        content: [
          'This is where the Subordinate posture creates the deepest friction.',
          'You\u2019re facing a decision that is entirely yours \u2014 your career move, your business direction, your personal boundary. Nobody else owns this. Nobody else carries the consequence. The Sovereign posture would say: assess, trust your judgment, decide.',
          'But your default is Subordinate. So you look for authority to orient toward. You seek input not because you lack judgment, but because making the call without external validation feels structurally wrong to you. You consult people. You gather opinions. You wait for someone to confirm that the direction you\u2019re already leaning toward is the right one.',
          'The pattern is specific: you often know what you want to do. You can articulate it clearly when asked. What you can\u2019t do \u2014 or what your governance doesn\u2019t support \u2014 is owning that decision as yours without someone else\u2019s endorsement.',
          'What this costs you: the decisions that should move fastest \u2014 the ones where you\u2019re the only relevant authority \u2014 are the ones that stall. Your own life, your own business, your own boundaries become the domains with the weakest governance. And every time you seek external authority for a Sovereign decision, you reinforce a structural belief that your judgment isn\u2019t sufficient. Over time, that belief becomes load-bearing.',
          'What would be different: a governance architecture that gives you clear permission to hold Sovereign authority in your own domain \u2014 not as an act of rebellion, but as the structurally appropriate response to decisions that are yours alone.',
        ],
      },
      partner: {
        label: 'Partner Position \u2014 Shared stakes. Mutual investment. Co-ownership.',
        content: [
          'You\u2019re in a genuine partnership \u2014 someone you\u2019re building with, collaborating with, sharing risk with. The Partner posture calls for mutual authority: you bring your position, they bring theirs, and together you negotiate the best path.',
          'But the Subordinate posture reshapes the dynamic. Instead of showing up as a co-equal, you orient toward your partner\u2019s authority. You adapt to their framework. You prioritize their preferences. Not because they demand it \u2014 but because your governance instinct positions you as the responsive one.',
          'Your partner experiences this as being in a relationship with someone who won\u2019t push back. They make a proposal, you adapt. They set direction, you execute. Over time, the partnership becomes something else: a leader-follower dynamic wearing partnership clothes. Your partner may not even want this arrangement \u2014 but your governance posture keeps creating it.',
          'What this costs you: you lose your seat at the table. Not literally \u2014 you\u2019re still there. But your authority in the partnership erodes because you keep giving it away. The perspectives and instincts that would make the partnership genuinely better stay unspoken, not because they\u2019re absent, but because your governance doesn\u2019t have a mode for asserting them as an equal.',
          'What would be different: showing up with a position, not a response. Offering your perspective with the same structural weight as your partner\u2019s. Treating your authority in the relationship as non-negotiable, not as something that exists at the other person\u2019s discretion.',
        ],
      },
      influencer: {
        label: 'Influencer Position \u2014 Advisory authority. Guidance without mandate.',
        content: [
          'Someone comes to you for guidance. A team member, a friend, a colleague. They want to know what you see. The Influencer posture calls for clear perspective: name the pattern, offer the observation, let them decide.',
          'But the Subordinate posture inverts the dynamic. Instead of offering guidance from a position of authority, you offer it tentatively. You soften your observations. You frame your perspective as optional rather than substantive. You say \u201CI might be wrong, but...\u201D before stating something you\u2019re not wrong about.',
          'The person seeking guidance experiences this as uncertain advice. They came to you because they trust your thinking, but the delivery undermines the content. Your actual observation is sharp and useful \u2014 but it arrives wrapped in so much deference that its impact gets diluted.',
          'What this costs you: your influence doesn\u2019t match your capability. People who could benefit from your perspective don\u2019t get the full version. And over time, you develop a reputation for being helpful but not authoritative \u2014 which limits the advisory relationships available to you.',
          'What would be different: the ability to offer your perspective with the weight it deserves. Not arrogance \u2014 clarity. Trusting that the person came to you for a reason, and delivering your guidance at full strength.',
        ],
      },
    },
    patternUnderneath: [
      'The friction pattern shows something structural: you have a governance posture designed for receptivity, and you\u2019re applying it in every domain \u2014 including the ones where you\u2019re supposed to be the authority.',
      'This isn\u2019t a confidence issue, even though it might feel like one. It\u2019s an architectural gap. You developed the Subordinate posture because it works \u2014 responsiveness and adaptability are genuine leadership capabilities. But governance architecture requires more than one mode. It requires knowing when to defer, when to share authority, when to advise clearly, and when to hold full ownership.',
      'Most leaders enforce the same way in every relationship because nobody ever mapped the architecture. Your pattern isn\u2019t that you lack authority. It\u2019s that your governance infrastructure doesn\u2019t have a mechanism for claiming it. The instinct to orient toward external authority runs in every context \u2014 even the contexts where you are the external authority.',
      'The reason this persists isn\u2019t that you need more confidence. Confidence doesn\u2019t fix a structural gap. What fixes it is building the infrastructure \u2014 the system that tells you which posture belongs in which relationship, what the decision rules are for each domain, and how to recognize when you\u2019ve defaulted to deference in a context that needs you to lead.',
    ],
    selfAssessment: [
      'This assessment identified your default governance posture and showed you where it creates friction. That diagnostic is real. The pattern it described is accurate. And that\u2019s the limit of what a self-assessment can accomplish.',
      'Resolution requires a different kind of work. It requires mapping the full authority gradient \u2014 not just understanding that you default to Subordinate, but building the structural architecture that supports you in claiming Sovereign, Partner, and Influencer authority when those postures are appropriate. It requires pressure-testing your governance in real scenarios, because the pattern that needs to change is the one that shows up under pressure \u2014 not the one you identify in calm reflection.',
      'Building governance infrastructure isn\u2019t a mindset shift. It\u2019s not something you can journal your way into. It requires a facilitated process that examines what you actually do in high-stakes moments, maps the decision rules you\u2019re actually operating on, and builds the alternative architecture that gives you access to the full range of authority your leadership requires.',
      'A self-assessment can show you the pattern. It can\u2019t build the infrastructure that changes it.',
    ],
  },
};

// ── Helper: get friction sections in correct order ──────────────────────────

function getOrderedFrictionSections(posture: string) {
  const report = FULL_REPORTS[posture];
  if (!report) return [];
  const fp = report.frictionPattern;
  const order: (keyof typeof fp)[] = posture === 'Sovereign'
    ? ['sovereign', 'partner', 'influencer', 'subordinate']
    : posture === 'Partner'
    ? ['partner', 'sovereign', 'influencer', 'subordinate']
    : posture === 'Influencer'
    ? ['influencer', 'sovereign', 'partner', 'subordinate']
    : ['subordinate', 'sovereign', 'partner', 'influencer'];
  return order.map(key => fp[key]);
}

// ── Component ───────────────────────────────────────────────────────────────

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<ResultData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emailForReport, setEmailForReport] = useState('');
  const [firstNameForReport, setFirstNameForReport] = useState('');
  const [reportRequested, setReportRequested] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [reportRevealed, setReportRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('assessmentResults');
    if (!stored) {
      router.push('/assessment');
      return;
    }

    const data = JSON.parse(stored) as ResultData;
    setResults(data);
    setIsLoading(false);
  }, [router]);

  const handleReportRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setReportRequested(true);

    // Send lead data to Google Sheets webhook
    const posture = results?.dominantPosture || '';
    const investmentSignal = results?.q11 || '';
    fetch('https://script.google.com/macros/s/AKfycbz_GMuN1TWgiPPv5dAoGaW1AQs7NrRisXlhOsUBDBguZDi5ZY2ibyzo4Hy4hJKtKHzVjA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstNameForReport,
        email: emailForReport,
        posture,
        investmentSignal,
      }),
    }).catch(() => {
      // Silently fail — don't block the user experience
    });

    setTimeout(() => {
      setReportReady(true);
    }, 2000);
  };

  const handleDownloadReport = () => {
    setReportRevealed(true);
  };

  if (isLoading || !results) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="animate-pulse">Loading your results...</div>
      </div>
    );
  }

  const posture = results.dominantPosture || 'Sovereign';
  const fullReport = FULL_REPORTS[posture];
  const frictionSections = getOrderedFrictionSections(posture);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-16 sm:py-24">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">

          {/* ── LIGHT RESULTS: Posture Label + Description ────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-8 sm:p-12 mb-12 border-l-4 border-[#c9a96e]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Your Governance Posture
              </h2>
              <h3 className="text-2xl font-semibold text-[#c9a96e] mb-6">
                {posture}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {POSTURE_DESCRIPTIONS[posture]}
              </p>
            </GlassCard>
          </motion.div>

          {/* ── LIGHT RESULTS: Where Your Friction Lives ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8">
                Where Your Friction Lives
              </h2>
              <GlassCard className="p-8 sm:p-12">
                {FRICTION_NARRATIVES[posture].split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-300 leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </GlassCard>
            </div>
          </motion.div>

          {/* ── LIGHT RESULTS: Diagnostic Question ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-8 sm:p-12 mb-12 bg-white/5 border-white/10">
              <p className="text-lg text-gray-300 italic leading-relaxed">
                The question is not whether your values are right. The question
                is whether the way you enforce them changes when your authority
                position changes. Most leaders enforce the same way everywhere.
                That is where governance friction lives.
              </p>
            </GlassCard>
          </motion.div>

          {/* ── EMAIL GATE ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-[#c9a96e]/20 to-transparent p-8 sm:p-12 rounded-lg border border-[#c9a96e]/30 mb-12">
              <h3 className="text-2xl font-bold mb-4">
                See how this plays out across all four authority positions.
              </h3>
              <p className="text-gray-300 mb-8">
                {EMAIL_GATE_COPY[posture]}
              </p>

              {!reportRequested ? (
                <form onSubmit={handleReportRequest} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstNameForReport}
                    onChange={(e) => setFirstNameForReport(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]/60"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={emailForReport}
                    onChange={(e) => setEmailForReport(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]/60"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors whitespace-nowrap"
                  >
                    Get Full Report
                  </button>
                </form>
              ) : !reportReady ? (
                <div className="text-center py-8">
                  <div className="animate-pulse text-[#c9a96e] text-lg">
                    Preparing your Governance Friction Report...
                  </div>
                </div>
              ) : !reportRevealed ? (
                <div className="text-center py-6">
                  {/* Fake PDF card */}
                  <div className="inline-block bg-white/5 border border-white/20 rounded-lg p-8 mb-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <svg className="w-12 h-12 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-white font-semibold">Governance Friction Report</p>
                        <p className="text-gray-400 text-sm">{posture} Posture &middot; PDF</p>
                      </div>
                    </div>
                    <button
                      onClick={handleDownloadReport}
                      className="px-10 py-3 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors"
                    >
                      Download Now
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm">
                    A copy has also been sent to {emailForReport}
                  </p>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-[#c9a96e] font-semibold">
                    Your full report is below.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* ── FULL REPORT (revealed after download) ─────────────────── */}
          {reportRevealed && fullReport && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Report Header */}
              <div className="border-t-2 border-[#c9a96e] pt-12 mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  Governance Friction Report
                </h2>
                <p className="text-[#c9a96e] text-lg font-semibold mb-2">
                  {posture}
                </p>
                <p className="text-gray-400 italic">
                  Where your leadership governance works &mdash; and where it stops working.
                </p>
                <p className="text-gray-500 text-sm mt-4">The Brand Spine LLC</p>
              </div>

              {/* Your Governance Posture (full) */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-[#c9a96e]">Your Governance Posture</h3>
                {fullReport.postureIntro.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-5">{p}</p>
                ))}
              </div>

              {/* Where It Works */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Where It Works</h3>
                {fullReport.whereItWorks.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-5">{p}</p>
                ))}
              </div>

              {/* The Friction Pattern */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8">The Friction Pattern</h3>
                {frictionSections.map((section, idx) => (
                  <GlassCard key={idx} className="p-8 sm:p-10 mb-8">
                    <h4 className="text-lg font-semibold text-[#c9a96e] mb-6">
                      {section.label}
                    </h4>
                    {section.content.map((p, i) => (
                      <p key={i} className="text-gray-300 leading-relaxed mb-5 last:mb-0">{p}</p>
                    ))}
                  </GlassCard>
                ))}
              </div>

              {/* The Pattern Underneath */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">The Pattern Underneath</h3>
                {fullReport.patternUnderneath.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-5">{p}</p>
                ))}
              </div>

              {/* What a Self-Assessment Can and Can't Tell You */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">What a Self-Assessment Can and Can&apos;t Tell You</h3>
                {fullReport.selfAssessment.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-5">{p}</p>
                ))}
              </div>

              {/* ── CTA ──────────────────────────────────────────────── */}
              <div className="border-t border-white/10 pt-12 mb-12">
                <GlassCard className="p-8 sm:p-12 text-center">
                  <h3 className="text-2xl font-bold mb-4">Next Step</h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    If this described something you recognize, the conversation is
                    about whether it&apos;s worth building the structure to address it.
                  </p>
                  <a
                    href="https://calendly.com/the-brand-spine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors text-lg"
                  >
                    Schedule a Conversation
                  </a>
                  <p className="text-gray-500 text-sm mt-4">
                    20 minutes. No pitch. Mutual fit assessment.
                  </p>
                </GlassCard>
              </div>

              {/* Footer */}
              <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10">
                <p>The Brand Spine LLC &middot; thebrandspine.com</p>
              </div>
            </motion.div>
          )}

          {/* ── Light CTA (visible before full report, below email gate) */}
          {!reportRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <div className="mb-12 text-center">
                <p className="text-gray-400 mb-6">
                  If this described something you recognize, the conversation is
                  about whether it&apos;s worth building the structure to fix it.
                </p>
                <a
                  href="https://calendly.com/the-brand-spine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-[#c9a96e]/40 text-[#c9a96e] font-semibold rounded-lg hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all"
                >
                  Schedule a Conversation
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
