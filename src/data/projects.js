export const projectsData = [
  {
    id: 'emerald',
    title: 'EMERALD',
    image: '/Gemini_Generated_Image_l7x53bl7x53bl7x5.jpg',
    summary: 'A privacy-first, on-premise behavioral AI health coaching system designed for adult patients with chronic conditions.',
    tags: ['RAG Pipeline', 'LLM', 'Python', 'Healthcare'],
    category: 'Engineering',
    year: '2026/2027',
    caseStudy: {
      introduction: {
        status: "🚧 In Active Development",
        summary: "A privacy-first, on-premise behavioral AI health coaching system designed for adult patients with chronic conditions.",
        metadata: { role: "Lead Developer / Product Designer", context: "Clinical Healthcare / Chronic Disease Management (OA, T2D, CVD)", timeline: "Ongoing: Targeting TRL 5", team: "Individual Contributor" },
        credibilityTag: "Architecture built and running end-to-end, designed to prioritize patient privacy through local hosting and anonymization, targeting TRL 5 clinical validation."
      },
      context: {
        description: "Private, self-hosted environments designed to keep sensitive user data strictly local and anonymized. Chronic conditions require continuous behavioral coaching and lifestyle direction, but standard cloud-based AI systems present privacy concerns and lack deterministic longitudinal memory.",
        constraints: [
          "Privacy First: Zero external API calls or outbound telemetry to ensure data remains completely local and anonymized.",
          "Safety Guardrails: Focused exclusively on lifestyle coaching, with strict boundaries to avoid any diagnosing or prescribing, prioritizing user safety.",
          "Performance & Hardware: Required 100% local, full-precision inference."
        ]
      },
      problem: {
        howMightWe: "How might we build a highly capable, locally-hosted AI health coach that maintains longitudinal patient memory and strict safety guardrails without ever transmitting data externally?",
        observations: [
          "Existing AI tools rely heavily on cloud APIs (introducing privacy risks) and generic prompts (creating hallucination risks and a lack of clinical adherence).",
          "Adult patients managing chronic conditions (like Type 2 Diabetes or Osteoarthritis) and the healthcare systems exploring tools for their continuous care are affected.",
          "Cloud-based LLMs pose risks of exposing sensitive data and suffer from 'goldfish memory' over long-term treatment. They also lack strict semantic routing to prevent off-label, dangerous medical advice."
        ]
      },
      users: {
        goals: ["Patients need personalized behavioral coaching and empathy", "Providers need to ensure safe and thoroughly documented interactions."],
        painPoints: ["Forgetting previous conversations", "Receiving generic or potentially unsafe advice from standard AI", "Concerns about sensitive health data being exposed to third parties."]
      },
      insights: [
        { reframe: "Safe AI isn't just about text generation, it's about semantic routing, deterministic memory, and strict adherence to behavioral change techniques (BCTs).", explanation: "To build a truly safe system, we couldn't just rely on a raw LLM. We had to engineer a multi-intent 'Traffic Cop' router to immediately quarantine unsafe or emergency requests, and a Pydantic-based 'GoldenProfile' to track patient state deterministically over time." }
      ],
      solution: {
        steps: [
          { title: "Semantic Routing", description: "A local Llama 3.2 3B 'TrafficCop' instantly categorizes user intent (Safe, Emergency, Out-of-Bounds) with sub-2s latency." },
          { title: "Memory & Retrieval", description: "The system uses ChromaDB and BAAI/bge-base for strict knowledge retrieval (k=5), alongside an asynchronous profile extractor to maintain a longitudinal 'GoldenProfile' of the anonymized patient." },
          { title: "Safe Generation", description: "A local Llama 3.1 8B Instruct model generates coaching responses based solely on the retrieved context and the patient's state." },
          { title: "Why it addressed the problem", description: "By running entirely locally and utilizing anonymized profiles, it mitigated the privacy risks of cloud APIs while programmatically enforcing safety guardrails and maintaining long-term conversational context." },
          { title: "Key design decisions", description: "Utilized Ollama with Llama 3.1 8B Instruct for zero-quantization, local inference. Implemented FastAPI for robust backend orchestration and ChromaDB for persistent vector storage. Engineered a Next.js (App Router) frontend for a chat UI featuring true token-streaming simulation." }
        ]
      },
      visuals: [
        { image: "/EmerladFlowOverview.jpg", caption: "The runtime request lifecycle: message safety triage (emergency & scope checks), profile and knowledge retrieval, prompt assembly, and memory updates on every turn." }
      ],
      deeperArchitecture: {
        label: "Deeper Architecture",
        image: "/EmeraldDeepArchitecture.jpg",
        caption: "Full system architecture: the synthetic data generation pipeline (Data Factory), the five-phase training pipeline, and the live runtime engine underpinning EMERALD."
      },
      outcome: {
        metrics: [
          { label: "Status", value: "In Validation" }
        ],
        description: "Core architecture is built and running end-to-end: TrafficCop routing, RAG retrieval, and GoldenProfile memory are implemented. Currently in the safety validation phase, testing against emergency detection, out-of-scope refusal, and hallucination resistance, targeting TRL 5 clinical validation."
      },
      reflection: {
        lessons: [
          "Engineering a deterministic 'Semantic Traffic Cop' and managing asynchronous state extraction are technically demanding but absolutely necessary to tame non-deterministic LLMs in high-stakes environments.",
          "I would love to expand the synthetic bootstrapping pipeline to cover more esoteric edge cases and further optimize VRAM allocation for concurrent sessions.",
          "I chose to mandate local, full-precision inference over cloud APIs. This required significant upfront hardware investment and optimization, but it was a deliberate trade-off to ensure maximum data privacy and system control."
        ]
      }
    }
  },
  {
    id: 'nutrichat',
    title: 'NutriChat',
    image: '/Gemini_Generated_Image_704lrx704lrx704l.jpg',
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
        summary: "Redesigned a slow, failure-prone purchase order approval process by embedding one-click approvals into Microsoft Teams, reducing delays and missed approvals across the company.",
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
    summary: 'A full-stack web application that automates household expense splitting and daily dinner rosters using dynamic, conditional logic.',
    tags: ['Next.js', 'Supabase', 'Full-stack', 'UX'],
    category: 'Engineering',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "TIT House System — a production-grade app that automates shared expense splitting and dinner tracking for a co-living household, rebuilt from a bloated, confusing predecessor into something new roommates could use without explanation.",
        metadata: { role: "Lead Developer / Product Designer", context: "Co-living household management", timeline: "Ongoing (Live)", team: "Individual Contributor" },
        credibilityTag: "Real users, production rollout, resolving daily expense friction in a live household."
      },
      context: {
        description: "The house already had an app before this one — but every time someone new joined, they needed a walkthrough. Most of its features went unused; only a couple actually mattered day-to-day.",
        constraints: [
          "Feature Discipline: Had to simplify aggressively while keeping every feature that was actually used.",
          "Autonomous Use: Had to work without supervision or repeated explanation.",
          "Real Edge Cases: Had to correctly handle vacations, guests, and new roommates joining mid-lease.",
          "Built to Scale: Needed to be built with an eye toward scaling to other houses on campus, not just this one."
        ]
      },
      methodology: {
        title: "Security Hardening",
        description: "A later review pass surfaced three real issues, each fixed before they mattered: a missing authorization check that would have let any user record a fake settlement on someone else's behalf, hardcoded demo credentials sitting in a production code path, and a CSV export vulnerable to formula injection. Finding and closing these wasn't part of the original build, it came from going back and actually trying to break the thing after it was already working."
      },
      problem: {
        howMightWe: "How might we simplify a cluttered household tool down to only what people actually use, so a new roommate can understand it without being taught — while keeping the underlying logic robust enough to handle real edge cases and, eventually, scale to other houses?",
        observations: [
          "New roommates had to be walked through the existing app every single time, for a small set of features they'd actually use — the rest of the interface was dead weight nobody touched.",
          "Every new person joining the house is affected, along with whoever kept having to explain the app to them.",
          "The old app was built to have every possible feature, not to have only the ones people needed — so onboarding never got easier no matter how many times someone explained it."
        ],
        impact: "It prevents roommate arguments over money, eliminates the need for complex, easily broken spreadsheets, and builds a transparent, fair system."
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
        goals: ["Understand the app without being taught", "Know who's cooking/eating tonight", "Log a receipt in seconds", "See fair debt balances instantly"],
        painPoints: ["Repeated onboarding overhead", "Feature clutter", "Unfair splits during vacations, guests, or new move-ins"]
      },
      insights: [
        { reframe: "The core problem wasn't the math — it was comprehension.", explanation: "A tool that requires a human to explain it every time isn't actually usable, no matter how powerful its logic is underneath. Simplifying down to only the features people actually used mattered more than adding capability." },
        { reframe: "Expense splitting itself isn't just division — it's conditional logic based on presence, category, and time.", explanation: "Which is why the underlying system still needed real rigor (Dinner Logic, Pantry Logic, the Newcomer Rule) even after the interface was stripped down." }
      ],
      solution: {
        steps: [
          { title: "Stripping the Interface", description: "Removed everything that required explanation, keeping only the features that were actually used day-to-day." },
          { title: "Dinner Logic", description: "Split among whoever signed up that day, auto-excluding anyone marked 'Away' unless they explicitly opt back in." },
          { title: "Pantry Logic", description: "Common expenses split evenly across active members, with automatic vacation exemption and a permanent opt-out toggle." },
          { title: "The Newcomer Rule", description: "Expenses are checked against each member's join date, so new roommates never inherit historical debt." },
          { title: "Onboarding", description: "A QR code invite link (found under House Invite in Profile settings) lets a new roommate join in seconds, no explanation required." },
          { title: "Key design decisions", description: "Built on Next.js (App Router) and Supabase (PostgreSQL, auth, Row Level Security), with a custom 'Smart Sync' layer for optimistic, real-time UI updates. Designed with scalability in mind — if validated over time in this house, the same system could extend to other houses on campus." }
        ]
      },
      visuals: [],
      outcome: {
        metrics: [
          { label: "Shared Expenses Managed", value: "100%" }
        ],
        description: "In daily use managing 100% of shared expenses, with the onboarding friction that plagued the old app eliminated — new roommates no longer need a walkthrough. The Newcomer Rule and vacation logic removed the two most common sources of dispute."
      },
      reflection: {
        lessons: [
          "The hardest part of this rebuild wasn't the splitting logic, it was deciding what to remove — comprehension problems are often solved by subtraction, not addition. Going back to actively try to break my own app after it was 'done' surfaced real security gaps I wouldn't have found otherwise.",
          "What I'd improve next: receipt scanning for full financial transparency, and offline support so the app keeps working with no connection.",
          "Trade-offs: chose a responsive PWA over native for faster development and cross-platform reach, at the cost of native push notifications and, for now, offline support."
        ]
      }
    }
  }
];
