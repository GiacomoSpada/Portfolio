export const projectsData = [
  {
    id: 'emerald',
    title: 'EMERALD',
    image: '/Gemini_Generated_Image_l7x53bl7x53bl7x5.png',
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
        { image: "/EmerladFlowOverview.png", caption: "The runtime request lifecycle: message safety triage (emergency & scope checks), profile and knowledge retrieval, prompt assembly, and memory updates on every turn." }
      ],
      deeperArchitecture: {
        label: "Deeper Architecture",
        image: "/EmeraldDeepArchitecture.png",
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
    image: '/Gemini_Generated_Image_704lrx704lrx704l.png',
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
        before: { image: "/Screenshot 2025-11-25 at 16.39.24.png", caption: "“I’m not sure what counts as a big or small portion.” “There are too many questions on one page.”" },
        after: { image: "/Screenshot 2025-11-25 at 16.33.44.png", caption: "Conversational format with targeted clarification." }
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
          image: "/ConversationalLogic.png",
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
    image: '/Frame 1.png',
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
        { image: "/FigJam.png", caption: "Process Flow Diagram" }
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
    id: 'plantmonitor',
    title: 'Smart Plant Monitor',
    image: '/Gemini_Generated_Image_j4naodj4naodj4na.png',
    summary: 'Designed and built a modular IoT system that makes plant health data understandable and actionable, from small apartments to scalable agricultural use cases.',
    tags: ['IoT', 'Hardware', 'UX/UI', 'System Design'],
    category: 'Product Design',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "Designed and built a modular IoT system that makes plant health data understandable and actionable, from small apartments to scalable agricultural use cases.",
        metadata: { role: "UX / Product Designer", context: "Personal project", timeline: "~3–4 weeks", team: "Solo" },
        credibilityTag: "A modular plant-monitoring system that bridges raw sensor data and human decision-making, designed to scale beyond a single use case."
      },
      context: {
        description: "Initially designed for urban apartments but architected to be sensor-agnostic and scalable, making it applicable to greenhouses, small-scale agriculture, and research setups. Plants fail due to lack of interpretable feedback, not lack of data.",
        constraints: ["Low-cost, modular hardware", "Must support multiple sensor types", "Designed for future expansion", "Limited physical interface on-device (RGB LED only)"]
      },
      problem: {
        howMightWe: "How might we design a modular plant-monitoring system that translates environmental data into clear, actionable feedback across different scales and contexts?",
        observations: ["Environmental data is collected but not translated into decisions", "Systems are often tightly coupled to a single use case", "Scaling usually breaks usability rather than improving it"],
        impact: "Dashboards show values, not meaning. Systems are built for engineers, not end users, leading to slow or unclear feedback loops."
      },
      beforeAfter: {
        before: { image: "", caption: "Current solutions: Dashboards show values, not meaning, overwhelming users with raw data." },
        after: { image: "", caption: "Smart Plant Monitor: Focuses on trends and states, translating environmental data into actionable feedback." }
      },
      users: {
        goals: ["Understand plant conditions quickly", "Act at the right moment", "Scale monitoring without increasing cognitive load"],
        painPoints: ["Context-switching between sensors and apps", "Difficulty interpreting thresholds", "Systems that don’t adapt as needs grow"]
      },
      insights: [
        { reframe: "The real challenge wasn't sensing, it was interpretation at scale.", explanation: "As the number of plants or sensors increases, raw data becomes overwhelming and manual checking impossible. Feedback must become more abstract, not more detailed." },
        { reframe: "Sensors can change, but meaning stays consistent.", explanation: "This insight shaped the modular architecture." }
      ],
      solution: {
        steps: [
          { title: "Modular Architecture", description: "Built a system with interchangeable sensors (soil, light, temp, humidity), local interpretation logic, and a backend API." },
          { title: "Adaptive Feedback", description: "Sensors act as inputs, and feedback adapts to scale: LED for immediate local feedback, Dashboard for reflective comparative insights." },
          { title: "Data Translation", description: "Device interprets data locally into plant states, sends to a centralized API, and frontend visualizes trends and insights." }
        ]
      },
      visuals: [],
      outcome: {
        metrics: [
          { label: "Usability", value: "High" },
          { label: "Cognitive Load", value: "Reduced" }
        ],
        description: "Successfully validated with real-world testing. Threshold logic matched intuitive expectations, and the architecture supported adding new sensors without redesign. Created a working, extensible foundation suitable for both domestic and professional use."
      },
      reflection: {
        lessons: [
          "Scalability is a UX problem, not just a technical one.",
          "Modular systems demand clearer abstractions.",
          "Good feedback reduces the need for constant attention.",
          "What I'd improve next: Multi-plant comparison views, role-based dashboards (home vs grower), and predictive insights based on trends.",
          "Trade-offs: Chose generalizability over hyper-optimization, kept UI minimal to preserve clarity at scale, and accepted technical simplicity to protect UX integrity."
        ]
      }
    }
  },
  {
    id: 'titsystem',
    title: 'Student House Ledger System',
    summary: 'A full-stack web application that automates household expense splitting and daily dinner rosters using dynamic, conditional logic.',
    tags: ['Next.js', 'Supabase', 'Full-stack', 'UX'],
    category: 'Engineering',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "A full-stack web application that automates household expense splitting and daily dinner rosters using dynamic, conditional logic.",
        metadata: { role: "Lead Developer / Product Designer", context: "Co-living Household Management", timeline: "Ongoing (Live)", team: "Individual Contributor" },
        credibilityTag: "Real users, production rollout, resolving daily expense friction in a live household."
      },
      context: {
        description: "Co-living environments (shared houses, student housing) where shared expenses (groceries, pantry items) are constant, but tracking them fairly is tedious.",
        constraints: [
          "Frictionless UX: Roommates won't use it if it takes longer than sending a WhatsApp message.",
          "Complex Edge Cases: The system had to mathematically handle vacations, guests, permanent opt-outs, and new roommates moving in mid-lease.",
          "Performance: Required instant, real-time feedback (optimistic UI) so users feel confident their inputs were registered."
        ]
      },
      problem: {
        howMightWe: "How might we create a zero-friction system that automatically tracks and splits household expenses based on dynamic, daily participation rather than static division?",
        observations: [
          "Roommates were using chaotic WhatsApp groups to announce dinners and disjointed apps (like Splitwise) or spreadsheets to settle debts, requiring constant manual math.",
          "Everyone living in a shared house is affected, particularly those who end up doing the administrative work of splitting receipts.",
          "Standard expense-splitting apps don't account for physical presence. They divide evenly by default, which is unfair to new roommates inheriting old debts, or people on vacation paying for toilet paper they didn't use."
        ],
        impact: "It prevents roommate arguments over money, eliminates the need for complex, easily broken spreadsheets, and builds a transparent, fair system."
      },
      beforeAfter: {
        before: { image: "", caption: "Frustrating spreadsheets requiring manual updates, arguments over who owes what, and constantly texting to figure out who is home for dinner." },
        after: { image: "", caption: "Automated daily rosters, one-tap sign-ups, and an algorithmic ledger that instantly calculates fair, fraction-based debts." }
      },
      users: {
        goals: ["Know exactly who is cooking/eating tonight", "Quickly log a grocery receipt", "See exact debt balances at a glance"],
        painPoints: ["Doing math for complex edge cases (e.g., 'I had a guest, but roommate B was on vacation, and roommate C moved in yesterday')", "Forgetting to log expenses", "Feeling like the split is unfair"]
      },
      insights: [
        { reframe: "Expense splitting isn't just division, it's conditional logic based on physical presence and category.", explanation: "To build a truly fair system, we couldn't just divide costs by the number of housemates. We had to separate the rules into 'Dinner Logic' (based on daily RSVPs) and 'Pantry Logic' (based on active residency), while globally tracking who was currently out of town." }
      ],
      solution: {
        steps: [
          { title: "The Roster", description: "Users set a 'Standard Week' default schedule or manually toggle their daily RSVPs." },
          { title: "The Purchase", description: "A housemate buys groceries and logs the receipt as either a 'Dinner' or 'Common' expense." },
          { title: "The Engine", description: "The system queries active profiles, checks 'Vacation Mode' statuses, applies the 'Newcomer Rule' (historical exclusion), and calculates the precise fractional debt for every participant." },
          { title: "Why it addressed the problem", description: "It automated the edge cases. No one has to remember to exclude the roommate on vacation or calculate guest multipliers, the system does it silently." },
          { title: "Key design decisions", description: "Utilized Next.js (App Router) for speed and modern routing. Implemented Supabase (PostgreSQL) for robust database relationships, authentication, and Row Level Security. Engineered a 'Smart Sync' approach with optimistic UI updates, ensuring that toggling a dinner RSVP feels instantaneous even on poor connections." }
        ]
      },
      visuals: [],
      outcome: {
        metrics: [
          { label: "Shared Expenses Managed", value: "100%" }
        ],
        description: "Complete elimination of manual expense math and the social friction that comes with collecting money from roommates. High adoption in internal tools is only possible when the app's UX is drastically faster and easier than the 'hacky' solution it's replacing."
      },
      reflection: {
        lessons: [
          "Managing complex state and building optimistic UI updates (Smart Sync) is technically challenging but absolutely essential for a premium, native-feeling user experience.",
          "I would love to integrate OCR receipt scanning in the future to further reduce the friction of logging large grocery hauls.",
          "I chose to build a responsive progressive web app (PWA) rather than a native mobile application. This ensured rapid development and cross-platform compatibility for all roommates, though it meant sacrificing native push notifications."
        ]
      }
    }
  },
  {
    id: 'money',
    title: 'MONEY',
    image: '/Thumbnail.png',
    summary: 'A mobile finance app UI/UX exploration, designed end-to-end from onboarding to daily use, built to practice interaction and visual design in Figma.',
    tags: ['Fintech', 'Mobile app', 'UX/UI'],
    category: 'Product Design',
    year: '2022',
    caseStudy: {
      introduction: {
        summary: "A mobile finance app UI/UX exploration, designed end-to-end from onboarding to daily use, built to practice interaction and visual design in Figma.",
        metadata: { role: "UX/UI Designer", context: "Personal design exercise", timeline: "1 week", team: "Solo" },
        credibilityTag: ""
      },
      context: {
        description: "Personal finance apps often bury simple tasks under dense data and cluttered charts. Designed within standard iOS/Android UI conventions, balancing high information density (balances, transactions, cards) against a calm, low-anxiety visual feel.",
        constraints: []
      },
      problem: {
        howMightWe: "How might we design a mobile finance experience that feels calm and simple, without hiding the information users actually need?",
        observations: [
          "Financial apps tend to present raw data (spreadsheet-style transaction lists, dense charts) without helping users feel in control.",
          "The goal was a flow where checking your finances feels manageable, not stressful."
        ],
        impact: ""
      },
      beforeAfter: {
        before: { image: "", caption: "Dense, list-heavy transaction views typical of most finance apps." },
        after: { image: "", caption: "High-level overview cards (balance, spending by category) with detail available on drill-down, full flow from cards to transactions (detailed) to transfer to confirmation." }
      },
      users: {
        goals: ["Everyday users managing personal budgets", "Needing quick balance checks, easy transfers, and category-level spending visibility"],
        painPoints: ["Feeling like they're reading a spreadsheet"]
      },
      insights: [
        { reframe: "Progressive disclosure reduces financial anxiety.", explanation: "Surfacing a simple balance and category breakdown up front, with detailed transactions one tap away, makes the app feel manageable rather than overwhelming." }
      ],
      solution: {
        steps: [
          { title: "Designed the complete flow in Figma", description: "Onboarding (3 screens), sign-up/sign-in with inline validation, OTP verification, profile creation, homepage (balance overview + spend chart), cards, transactions (summary and detailed), transfer, confirmation, notifications, profile." },
          { title: "Prototyped for click-through functionality", description: "Tested the flow end-to-end." }
        ]
      },
      visuals: [],
      outcome: {
        metrics: [],
        description: "A complete, prototyped mobile finance flow covering the full user journey from onboarding to transaction management, used as a design practice project to sharpen UI systems thinking (color, hierarchy, component consistency) across a real end-to-end flow."
      },
      reflection: {
        lessons: [
          "Designing for financial data means every simplification has to preserve trust, even a 'clean' card needs to feel accurate, not vague.",
          "The flow was built for practice rather than tested with real users, next step would be usability testing to see if progressive disclosure actually reduces anxiety for real users, not just in theory.",
          "Prioritized visual polish and flow completeness over user validation, since this was a self-directed design exercise rather than a shipped product."
        ]
      }
    }
  }
];
