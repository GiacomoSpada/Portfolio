export const projectsData = [
  {
    id: 'emerald',
    title: 'EMERALD',
    image: '/Gemini_Generated_Image_l7x53bl7x53bl7x5.jpg',
    summary: 'A privacy-first, on-premise AI health coach for chronic disease patients, built to prove that AI coaching can be both empathetic and reliably bounded.',
    tags: ['RAG Pipeline', 'LLM', 'Safety Layer', 'On-Premise', 'Python', 'Healthcare'],
    category: 'Engineering',
    year: '2026/2027',
    caseStudy: {
      introduction: {
        status: "🚧 In Active Development",
        summary: "A privacy-first, on-premise AI health coach for chronic disease patients, built to prove that AI coaching can be both empathetic and reliably bounded.",
        metadata: { role: "Product Owner / Lead Developer", context: "Clinical Healthcare, Chronic Disease Management (OA, T2D, CVD)", timeline: "1 year, currently in development", team: "Solo execution, guided by 2 academic supervisors, within a wider (non-active) research consortium" },
        credibilityTag: "Designing a product that has to say no as often as it says yes, and making that feel like care, not a wall."
      },
      context: {
        description: "Patients managing chronic conditions need continuous behavioral coaching between doctor visits, but clinicians don't have the bandwidth, and a generic AI chatbot is both a privacy risk and a liability risk the moment it starts sounding like it's giving medical advice. The product had to run entirely on institutional infrastructure, no third-party APIs, no patient data leaving the organisation, and stay strictly within lifestyle coaching under MDR: never diagnosing, never prescribing.",
        constraints: [
          "No third-party AI services, all inference runs on institutional hardware, patient data never leaves it",
          "Strict scope boundary, lifestyle coaching only, hard line against anything resembling diagnosis or treatment",
          "One-year build, solo execution, with light-touch academic supervision rather than a full product team"
        ]
      },
      methodology: {
        title: "Managing Scope on a 1-Year Solo Build",
        description: "With one year, no dedicated product team, and supervision that's more advisory than hands-on, most of the real work has been deciding what not to build yet. Early on I cut anything that wasn't essential to proving the core safety-first thesis, no multi-condition personalization in v1, no clinician dashboard yet, no integrations. The consortium around this project is large but not actively steering day-to-day decisions, which means most product calls, what ships in v1, what gets deferred, where the line on \"safe enough\" actually sits, have been mine to make and defend to the two supervisors directly involved."
      },
      problem: {
        howMightWe: "How do we build an AI health coach that's warm and genuinely helpful, while being structurally incapable of crossing into medical advice, without the safety layer making the product feel like talking to a liability disclaimer?",
        observations: [
          "What I observed: patients need consistent support, but AI health coaches tend to fail in one of two directions, over-restrict and they feel cold and useless, under-restrict and they risk giving dangerous advice. The interesting product problem sits in between: making strict feel like caring.",
          "Who's affected: chronic disease patients who need support between visits, and the healthcare systems that would carry the liability if the AI got something wrong.",
          "Why existing tools fail: they're built as general-purpose chatbots first, safety-patched second, which means the safety layer is always fighting the product experience instead of being part of it."
        ],
        impact: ""
      },
      users: {
        goals: [
          "Patients want personalized coaching that feels human, without being made to feel judged or unsafe.",
          "Providers need confidence that the tool can't wander into clinical territory it has no business in."
        ],
        painPoints: [
          "Both groups need to trust the system before they'll actually use it."
        ]
      },
      insights: [
        { reframe: "Safety and warmth aren't in tension if you separate what the AI is allowed to say from how it says it.", explanation: "Rather than trying to make one model be careful and empathetic at the same time, I split the system: a fast layer decides what's safe to respond to at all, and only then does the conversational layer get to be warm. The product decision, where exactly to draw that line, and how invisible to make it to the user, mattered more than any model choice underneath it." }
      ],
      solution: {
        steps: [
          { title: "Safety & Scope Screening", description: "Every message is screened for safety and scope before it ever reaches the conversational AI." },
          { title: "Patient Memory Layer", description: "A separate memory layer keeps track of each patient's context over time, all running on institutional infrastructure." },
          { title: "Hard-Coded Safety Boundaries", description: "The highest-stakes boundaries, crisis detection, medication advice, aren't enforced by instructing the model. They're enforced in code the model can't override, because testing showed instruction-based rules weren't reliable enough to trust." }
        ]
      },
      visuals: [
        { image: "/EmerladFlowOverview.jpg", caption: "Runtime request lifecycle diagram: message safety triage → retrieval → response → memory update." }
      ],
      deeperArchitecture: {
        label: "Technical sight: routing architecture, memory system, and model stack",
        image: "/EmeraldDeepArchitecture.jpg",
        caption: "Full system architecture: data pipeline, training phases, and runtime engine, for technical reviewers who want the deeper detail."
      },
      outcome: {
        metrics: [
          { label: "Status", value: "In Validation" }
        ],
        description: "Core architecture is built and running end-to-end, and is currently in safety validation with real clinicians testing it unscripted. One decision from that process is representative: early on, medication questions were answered by the conversational model, so refusals would sound natural rather than canned. In testing it produced correct-sounding but genuinely unsafe output, reasoning about medication risks, and in one case actual dosing guidance. Getting the right answer by luck isn't a safe boundary, so I reverted it: medication questions now return a fixed response the model never touches. Less elegant, unambiguously safer, and the trade-off I'd defend to any clinician in the room."
      },
      reflection: {
        lessons: [
          "What I learned: on safety-critical boundaries, instructing a model to behave has a ceiling. When it genuinely matters, you don't write a better instruction, you remove the model's ability to get it wrong. Nearly every serious issue we found came from something being left to the model's judgment that should have been enforced in code.",
          "What I'd improve: expand edge-case coverage in safety testing, the most valuable failures were found by humans talking to it naturally, not by test scripts, and build lighter-weight tooling so supervisors can review decisions without going deep into the technical layer.",
          "Trade-offs: chose on-premise inference over cloud APIs, accepting a real hardware and performance cost, because for this product the privacy guarantee wasn't negotiable."
        ]
      }
    }
  },
  {
    id: 'nutrichat',
    title: 'NutriChat',
    image: '/Nutrichatthumbnail.jpg',
    summary: 'Redesigned a rigid nutrition questionnaire into a conversational experience to reduce cognitive load, improve engagement, and support honest self-reporting.',
    tags: ['UX/UI', 'AI', 'Healthcare', 'Research'],
    category: 'Product Design',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "Redesigned a rigid nutrition questionnaire into a conversational experience to reduce cognitive load, improve engagement, and support honest self-reporting.",
        metadata: { role: "Researcher & Product Designer", context: "MSc Thesis (Interaction Technology)", timeline: "~6 months", team: "Solo (with academic supervisors)" },
        credibilityTag: "Studied why traditional nutrition questionnaires fail users, prototyped a conversational alternative, and evaluated how engagement strategies and autonomy affect user experience."
      },
      context: {
        description: "Dietary self-assessment tools are used in healthcare and research, where users are asked to report eating habits accurately. Nutrition data is widely used for prevention and intervention, but existing tools often cause fatigue, confusion, and drop-off, leading to low-quality data.",
        constraints: ["Existing validated questionnaire (Nutri+) could not be altered semantically", "Limited participant pool and study duration", "No custom model training (used off-the-shelf LLMs)", "Ethical constraints: no judgment, no health advice"],
        comparisonTable: {
          title: "Existing Solutions Comparison",
          headers: ["System", "Approach", "Gap"],
          rows: [
            ["Nutri+ (baseline)", "Static, clinically validated questionnaire", "No conversational interaction, high cognitive load"],
            ["FRANI", "Chatbot-based nutrition assistant", "Focused on recommendations, not structured self-assessment"],
            ["Purrfessor", "Gamified nutrition coaching bot", "Prioritizes engagement mechanics over data validity"],
            ["MyndFood", "AI meal-logging assistant", "Logging-focused, doesn't address validated self-report questionnaires"],
            ["NutriChat (this project)", "Conversational reformatting of a validated questionnaire", "First to combine conversational UX with a clinically validated instrument without altering its data integrity"]
          ]
        }
      },
      methodology: {
        description: "A 3-phase mixed-methods study that progressively narrowed from qualitative baseline testing to a controlled factorial experiment.",
        stats: [
          { label: "Final Sample", value: "N=33" },
          { label: "Age Range", value: "21–71" },
          { label: "Gender Split", value: "60.6% women / 39.4% men" },
          { label: "Study Design", value: "2×2 factorial: Personalized/Adaptive × Gamified/Nudged" }
        ],
        phases: [
          { title: "Phase 1: Baseline (N=6)", description: "Qualitative testing of the existing Nutri+ questionnaire to surface friction points." },
          { title: "Phase 2: Strategy Testing (N=24)", description: "Compared gamification vs. nudging engagement strategies on the conversational prototype." },
          { title: "Phase 3: Final Study (N=33)", description: "2×2 factorial study crossing personalization (user-chosen vs. system-assigned tone) with engagement strategy (gamified vs. nudged)." }
        ]
      },
      problem: {
        howMightWe: "How might we redesign a validated nutrition questionnaire to reduce cognitive burden and social pressure while maintaining data integrity?",
        observations: ["Users struggled to interpret serving sizes and quantities", "Long, scroll-heavy pages increased cognitive fatigue", "Participants felt judged when reflecting on their diet", "Engagement dropped over time, leading to rushed or less thoughtful answers"],
        impact: "The questionnaire was optimized for data collection, not human interaction. This affects patients, research participants, clinicians, and researchers relying on self-reported data."
      },
      beforeAfter: {
        before: { image: "/Screenshot 2025-11-25 at 16.39.24.jpg", caption: "“I’m not sure what counts as a big or small portion.” “There are too many questions on one page.”" },
        after: { image: "/Screenshot 2025-11-25 at 16.33.44.jpg", caption: "Conversational format with targeted clarification." }
      },
      users: {
        goals: ["Complete the assessment efficiently", "Feel safe and not judged", "Understand questions without extra effort"],
        painPoints: ["Ambiguous food quantities", "Fatigue from repetitive questions", "Lack of engagement throughout the interaction", "Feeling evaluated rather than supported"]
      },
      insights: [
        { reframe: "This was not a UI problem, it was an interaction problem.", explanation: "Friction came more from interpretation than from question count." },
        { reframe: "Perceived personalization didn't require real personalization.", explanation: "The strongest and most counterintuitive result: the placebo condition (a randomly, system-assigned tone) was perceived as more tailored than the condition where users actually chose their own tone. 41% of system-adaptive users described the experience as tailored to them, vs. only 19% of users who personalized it themselves." },
        { reframe: "Engagement is emotional, not just behavioral.", explanation: "No behavioral metric (response time, message length, completion time) significantly correlated with engagement or usability (p>0.28). Time spent does not equal engagement." },
        { reframe: "Tone strongly shapes honesty.", explanation: "Neutral can feel cold, playful can feel too childish." },
        { reframe: "Usability, not engagement, was what differed between conditions.", explanation: "Usability was significantly different between the personalized and system-adaptive conditions (p<0.05); engagement was not (p>0.233)." }
      ],
      solution: {
        steps: [
          { title: "Conversational Flow", description: "Translated the questionnaire into a conversational flow. One question at a time reduced cognitive load, and conversational clarification replaced guesswork." },
          { title: "Engagement Strategies", description: "Introduced two engagement strategies: nudging (supportive, low-pressure) and gamification (progress cues, encouragement)." },
          { title: "Autonomy Testing", description: "Tested autonomy by letting users choose the conversational tone vs. placebo system-assigned tone. Tone adapted the experience without altering the data." }
        ],
        diagram: {
          image: "/ConversationalLogic.jpg",
          caption: "Conversation logic: Personalized/System-Adaptive → tone selection → Nudged/Gamified branching, mapping directly to the 2×2 factorial study design."
        },
        progressionTable: {
          title: "Design Progression",
          headers: ["Phase", "Friction Point", "Resolution"],
          rows: [
            ["Phase 1 → 2", "Ambiguous serving sizes; cold, clinical tone", "Introduced conversational clarification and a warmer, adaptive tone"],
            ["Phase 2 → 3", "Unclear whether gamification mechanics actually beat plain nudging", "Ran a controlled 2×2 comparison to isolate strategy effects from personalization effects"],
            ["Phase 3", "Needed to confirm gains weren't just behavioral (time-on-task)", "Correlated behavioral metrics against UES/CUQ scores to confirm subjective experience, not interaction time, was the real driver"]
          ]
        }
      },
      visuals: [
        { image: "/DesignProgressionNutriChat.png", caption: "Design progression across Phase 1 → 2 → 3, showing how each round of testing resolved the previous phase's friction points." }
      ],
      deeperArchitecture: {
        label: "System Architecture",
        image: "/ChatbotArchitectureBG.png",
        caption: "Full system architecture: User Device → Backend Server → OpenAI API → Firebase."
      },
      outcome: {
        chart: {
          title: "RQ1: Usability Engagement Scale (UES)",
          items: [
            { label: "Nutri+ (Baseline)", value: 2.82, max: 3.22 },
            { label: "Conversational Chatbot", value: 3.22 }
          ]
        },
        metrics: [
          { label: "RQ1: UES Score", value: "2.82 → 3.22", detail: "+14% vs. Nutri+, d=0.76" },
          { label: "RQ1: Usability (CUQ)", value: "70.6/100" },
          { label: "RQ2: Strategy Comparison", value: "No difference", detail: "Gamification vs. Nudging: p>0.215 (engagement), p>0.241 (usability)" },
          { label: "RQ4: Behavioral Correlation", value: "None found", detail: "Response time, message length, completion time: p>0.28" }
        ],
        description: "A 14% improvement in usability/engagement (UES score 2.82 → 3.22 vs. Nutri+, d=0.76) with a CUQ usability score of 70.6/100. Gamification and nudging performed equivalently, no strategy outperformed the other. No behavioral metric significantly predicted engagement or usability, meaning high interaction time doesn't equal high satisfaction. Users completing the overall assessment felt supported, not evaluated, without compromising data validity."
      },
      reflection: {
        lessons: [
          "Engagement design is about restraint, not stimulation.",
          "Autonomy can be perceived without true adaptivity.",
          "Mixing strategies increases cognitive load faster than expected.",
          "Limitation: The sample skewed young, limiting how confidently the findings generalize across the full 21–71 age range.",
          "Limitation: Results may be partly driven by a novelty effect, since the study didn't test engagement over repeated, long-term use.",
          "What I'd improve: Test adaptive tone switching mid-conversation, and validate findings with a larger, clinical population.",
          "Trade-offs: Chose speed and clarity over technical sophistication, and prioritized perceived experience over algorithmic complexity."
        ]
      }
    }
  },
  {
    id: 'purchaseorder',
    title: 'Purchase Order Approval Automation',
    image: '/Frame 1.jpg',
    summary: 'Redesigned a slow, failure-prone purchase order approval process by embedding one-click approvals into Microsoft Teams, cutting approval time from up to a week down to minutes.',
    tags: ['Enterprise', 'B2B', 'Automation', 'Microsoft 365'],
    category: 'Enterprise Design',
    year: '2023',
    caseStudy: {
      introduction: {
        summary: "Redesigned a slow, failure-prone purchase order approval process by embedding one-click approvals into Microsoft Teams, cutting approval time from up to a week down to minutes.",
        metadata: { role: "Business Analyst (IT)", context: "Full-time work project", timeline: "1 month", team: "Solo execution, cross-functional stakeholders" },
        credibilityTag: "Company-wide process, real users, production rollout."
      },
      context: {
        description: "The company operated fully within the Microsoft ecosystem (Dynamics 365, Teams, Microsoft 365). Purchase orders were approved directly in Dynamics 365, which was time-consuming, easy to forget, and lacked effective notifications. Approvals affected finance operations and supplier payments, making delays costly.",
        constraints: ["Could not change the core ERP (Dynamics 365)", "Solution had to stay within Microsoft tools", "Limited timeline (1 month)", "Multiple senior stakeholders involved (CEO, CTO, department heads, managers)"]
      },
      problem: {
        howMightWe: "How might we reduce approval delays and missed purchase orders by embedding approvals into a tool that approvers already use daily, without changing the existing ERP system?",
        observations: ["Senior approvers (CEO, CTO, R&D heads, other department leads) had to manually log into Dynamics to approve requests", "No real-time notifications, so approvals were often missed or delayed, sometimes for up to a week", "Approval was treated as a task instead of a decision"],
        impact: "Dynamics was not part of users' daily workflow. Email-based reminders were unreliable and easy to ignore. Delays created operational friction across departments, with time-sensitive purchase orders stuck waiting on senior approvers who simply didn't have time to log into the ERP."
      },
      users: {
        goals: ["Approve requests quickly", "Avoid forgetting pending approvals", "Trust that approvals are correctly registered in the system"],
        painPoints: ["Too many systems to check", "No immediate feedback after approval", "Risk of approving the same request twice"]
      },
      insights: [
        { reframe: "Approval is a decision, not a task.", explanation: "The main friction was not the approval interface itself, but timing and context. Approvers were already active in Microsoft Teams all day, forcing them to switch to Dynamics added unnecessary cognitive and time costs." }
      ],
      solution: {
        steps: [
          { title: "Power Automate Integration", description: "Introduced a Power Automate flow that sends purchase order approval requests directly to Microsoft Teams." },
          { title: "Real-time Sync", description: "Approver approves/rejects directly in Teams, and the decision is synced back to Dynamics automatically." },
          { title: "Feedback Loop", description: "Added email notifications as a fallback, prevented duplicate approvals, and closed the feedback loop by notifying requesters when their purchase order was approved." }
        ]
      },
      visuals: [
        { image: "/Screenshot 2026-01-14 at 14.59.56.png", caption: "Purchase Order in Microsoft Teams" },
        { image: "/Screenshot 2026-01-14 at 15.00.15.png", caption: "Request Approval in Teams (automatically syncs with D365)" },
        { image: "/Screenshot 2026-01-14 at 15.00.37.png", caption: "Purchase Order Approved in Teams (requester gets notified)" },
        { image: "/FigJam.jpg", caption: "Process Flow Diagram" }
      ],
      outcome: {
        metrics: [
          { label: "Approvers Onboarded", value: "~20" },
          { label: "Approval Time", value: "Week to Minutes" }
        ],
        description: "Before, a single purchase order approval could take up to a week: senior approvers simply didn't have time to log into Dynamics 365, and requests sat unread. After the Teams integration, approval became a matter of minutes once the approver had a moment to read the message, with the entire ERP interaction happening automatically in the background. Rolled out to roughly 20 senior approvers across departments (CEO, CTO, R&D heads, and other department leads), replacing what had been the single biggest bottleneck in the purchase order process. Iterated post-launch based on real user feedback."
      },
      reflection: {
        lessons: [
          "Small workflow changes can unlock large operational improvements.",
          "Embedding actions into existing habits is more effective than training users on new tools.",
          "What I'd improve: Add lightweight analytics to track approval time reduction, and explore escalation logic for long-pending approvals.",
          "Trade-offs: Optimized for speed and adoption over deep customization, and stayed within Microsoft constraints to ensure scalability and maintainability."
        ]
      }
    }
  },
  {
    id: 'titsystem',
    title: 'Student House Ledger System',
    image: '/HouseLedgerSystemthumbnail.jpg',
    summary: 'A full stack web application that automates household expense splitting and daily dinner rosters, rebuilt from a bloated, confusing predecessor into something new roommates could use without explanation.',
    tags: ['Next.js', 'Supabase', 'Full stack', 'UX'],
    category: 'Engineering',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "A full stack web application that automates household expense splitting and daily dinner rosters, rebuilt from a bloated, confusing predecessor into something new roommates could use without explanation.",
        metadata: { role: "Product Designer and Engineer", context: "Co living Household Management", timeline: "Ongoing (Live)", team: "Individual Contributor" },
        credibilityTag: "Real users, production rollout, resolving daily expense friction and trust friction in a live household."
      },
      context: {
        description: "The house already had an app before this one, but every time someone new joined, they needed a walkthrough. Most of its features went unused; only a couple actually mattered day to day. On top of that, nobody understood how the splitting logic worked behind the scenes, so amounts constantly got questioned. Shared expenses are constant in co living environments, but tracking them fairly means nothing if people do not trust or understand the number they are being asked to pay.",
        constraints: [
          "Frictionless UX: roommates would not use it if it took longer than sending a WhatsApp message, and had to be simple enough that new roommates could use it without explanation.",
          "Complex edge cases: the system had to mathematically handle vacations, guests, permanent opt outs, and new roommates moving in mid lease, transparently.",
          "Performance: required instant, real time feedback so users feel confident their inputs were registered.",
          "Scalability: designed with an eye toward extending the same system to other houses on campus, if validated over time."
        ]
      },
      methodology: {
        title: "Security Hardening",
        description: "A later review pass surfaced three real issues, each fixed before they mattered: a missing authorization check that would have let any user record a fake settlement on someone else's behalf, hardcoded demo credentials sitting in a production code path, and a CSV export vulnerable to formula injection. Finding and closing these wasn't part of the original build, it came from going back and actually trying to break the thing after it was already working."
      },
      problem: {
        howMightWe: "How might we simplify a cluttered household tool down to only what people actually use, and make the splitting logic visible enough that people trust their bill, while automatically tracking expenses based on dynamic daily participation rather than static division?",
        observations: [
          "What I observed: new roommates had to be walked through the existing app every single time, for a small set of features they would actually use. Beyond onboarding, there was a constant undercurrent of complaints about why someone owed a specific amount, because the reasoning behind a split was invisible.",
          "Who is affected: everyone living in the shared house, particularly whoever ended up fielding complaints about the numbers, and every new person joining who needed the app re explained to them.",
          "Why the current solution failed: it had every possible feature rather than only the ones people needed, and it never showed its work, so disputes came up regardless of whether the math was actually correct."
        ],
        impact: ""
      },
      beforeAfter: {
        before: {
          groups: [
            {
              images: ["/dashboardmobile.jpg", "/insertexpensemobile.jpg", "/loginmobile.jpg"],
              caption: "The previous house app — functional, but cluttered enough that every new roommate needed a walkthrough."
            }
          ]
        },
        after: {
          groups: [
            { images: ["/dashboard sketch.jpg", "/Full Dashboard MobileFinalDesign.png"], caption: "Dashboard — early sketch (left) to shipped design (right)." },
            { images: ["/debtssketch.jpg", "/Debts Mobile-FinalDesign.png"], caption: "Debts — early sketch (left) to shipped design (right)." },
            { images: ["/insertexpensesketch.jpg", "/Ledger Entry MobileFinalDesign.png"], caption: "Ledger entry — early sketch (left) to shipped design (right)." },
            { images: ["/ledgersketch.jpg", "/Ledger MobileFinalDesign.png"], caption: "Ledger — early sketch (left) to shipped design (right)." },
            { images: ["/loginsketch.jpg", "/Login MobileFinalDesign.png"], caption: "Login — early sketch (left) to shipped design (right)." },
            { images: ["/profilesketch.jpg", "/Profile MobileFinalDesign.png"], caption: "Profile — early sketch (left) to shipped design (right)." },
            { images: ["/Registration MobileFinalDesign.png"], caption: "Registration — the finished, shipped product." }
          ]
        }
      },
      users: {
        goals: ["Understand the app without being taught", "See why they owe what they owe", "Know exactly who is cooking or eating tonight", "Quickly log a grocery receipt"],
        painPoints: ["Repeated onboarding overhead for every new roommate", "Not being able to see how a split was calculated", "Doing math for complex edge cases (a guest, a roommate on vacation, and a new roommate all overlapping)"]
      },
      insights: [
        { reframe: "The core problem was not the math, it was comprehension and trust.", explanation: "A tool that requires a human to explain it every time is not actually usable, and a split people cannot inspect will always feel unfair even when it is correct. Simplifying down to only the features people used, and surfacing the reasoning behind each split, mattered more than adding capability." },
        { reframe: "Expense splitting itself is not just division, it is conditional logic based on physical presence and category.", explanation: "Rules had to be separated into Dinner Logic and Pantry Logic, while globally tracking who was currently out of town." }
      ],
      solution: {
        summary: "Stripped the interface down to only the features people actually used, and made splits inspectable rather than a black box: the ledger shows exactly who was included in each expense, with a Manual Edit badge whenever someone overrode the default split, so a disputed amount can be checked in a couple of taps instead of a conversation.",
        steps: [
          { title: "The Roster", description: "Users set a Standard Week default schedule or manually toggle their daily RSVPs." },
          { title: "The Purchase", description: "A housemate buys groceries and logs the receipt as either a Dinner or Common expense." },
          { title: "The Engine", description: "The system checks Vacation Mode statuses, applies the Newcomer Rule (historical exclusion), and calculates the fractional debt for every participant, with the reasoning visible in the ledger." },
          { title: "Instant Feel", description: "RSVP toggles update immediately through optimistic UI, updating the local view before the server confirms, with rollback if it fails. Separately, a realtime Supabase subscription (Smart Sync) refetches data in the background whenever anyone else's changes come in, so every roommate's screen stays current without a manual refresh." },
          { title: "Onboarding", description: "A QR code invite link (found under House Invite in Profile settings) lets a new roommate join in seconds, no explanation required." },
          { title: "Key Design Decisions", description: "Next.js (App Router) for routing, Supabase (PostgreSQL) for database relationships, authentication, and Row Level Security, Tailwind for a responsive layout that adapts down to a mobile bottom nav." }
        ]
      },
      visuals: [],
      outcome: {
        description: "The app replaced spreadsheets and WhatsApp coordination as the household's only system for managing shared expenses. Onboarding a new roommate now takes a scanned QR code instead of a walkthrough, and a disputed amount can be checked against the ledger directly instead of becoming a conversation."
      },
      reflection: {
        lessons: [
          "What I learned: the hardest part of the rebuild was not the splitting logic, it was deciding what to remove, and making the remaining logic visible enough that people could trust it without needing it explained. Going back to actively try to break my own app after it was \"done\" surfaced real security gaps I would not have found otherwise.",
          "What I would improve: integrate OCR receipt scanning to reduce the friction of logging large grocery hauls, and add offline support so the app keeps working with no connection.",
          "Trade offs: built as a responsive web app rather than a native mobile app, which meant faster development and cross platform reach for all roommates, at the cost of native push notifications and (for now) offline support."
        ]
      }
    }
  }
];
