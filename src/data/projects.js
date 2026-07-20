export const projectsData = [
  {
    id: 'emerald',
    title: 'EMERALD',
    summary: 'An intelligent healthcare assistant that transforms complex medical guidelines into accessible, conversational support.',
    tags: ['RAG Pipeline', 'LLM', 'Python', 'Healthcare'],
    category: 'Engineering',
    year: '2026',
    caseStudy: {
      introduction: {
        summary: "EMERALD is a healthcare AI assistant designed to make complex medical guidelines accessible through natural conversation.",
        metadata: { role: "AI Product Engineer", context: "Academic Research", timeline: "6 Months", team: "Solo" },
        credibilityTag: "Built with a sophisticated RAG pipeline compliant with strict clinical safety guardrails."
      },
      context: {
        description: "Medical professionals often face information overload and time constraints when referencing clinical guidelines. Finding specific recommendations across hundreds of pages of documentation during patient consultations is challenging.",
        constraints: ["Must adhere to EU AI Act", "Zero-tolerance for hallucinations", "Data privacy requirements"]
      },
      problem: {
        howMightWe: "How might we make complex medical guidelines instantly accessible and reliable through natural conversation?",
        observations: ["Doctors spend too much time searching documents", "Standard keyword search often misses semantic nuances in medical queries"],
        impact: "Reduces cognitive load and allows doctors to focus on the patient."
      },
      beforeAfter: {
        before: { image: "", caption: "Previous manual lookup process across fragmented PDFs" },
        after: { image: "", caption: "Automated RAG pipeline delivering synthesized answers with citations" }
      },
      users: {
        goals: ["Quick access to specific guidelines", "Trustworthy source citations", "Intuitive conversational interface"],
        painPoints: ["Information overload", "Complex medical jargon parsing", "Slow search systems"]
      },
      insights: [
        { reframe: "Accuracy isn't enough; transparency is required.", explanation: "Every AI response must be traceable back to the exact source document and section for a clinician to trust it." }
      ],
      solution: {
        steps: [
          { title: "Hybrid Retrieval", description: "Combined dense and sparse retrieval to handle both semantic and keyword-based medical queries." },
          { title: "Traffic Cop Router", description: "Implemented an intent router to classify queries before retrieval, significantly reducing hallucination rates." },
          { title: "Full Stack Build", description: "Built on Python, LangChain, and FastAPI, using ChromaDB. Frontend built with React and Framer Motion." }
        ]
      },
      visuals: [
        { image: "", caption: "Architecture diagram showing the hybrid retrieval flow" }
      ],
      outcome: {
        metrics: [
          { label: "Retrieval Accuracy", value: "94%" },
          { label: "Latency", value: "<1.2s" }
        ],
        description: "Successfully built a TRL-5 clinical AI health coach prototype."
      },
      reflection: {
        lessons: ["Semantic chunking of medical documents requires specialized parsing strategies compared to general text.", "Evaluation frameworks (like RAGAS) were critical to iteratively improve the pipeline."]
      }
    }
  },
  {
    id: 'nutrichat',
    title: 'NutriChat',
    summary: 'Designing a Nutrition Assessment AI Chatbot.',
    tags: ['UX/UI', 'AI', 'Healthcare'],
    category: 'Product Design',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "NutriChat focuses on simplifying nutrition assessment through conversational AI.",
        metadata: { role: "Product Designer", context: "Healthcare Application", timeline: "3 Months", team: "Design Team" },
        credibilityTag: "Streamlined the assessment process reducing user friction by 40%."
      },
      context: {
        description: "Dietary tracking and nutrition assessments are traditionally tedious, causing high user drop-off rates. This project reimagines the flow using a conversational AI interface.",
        constraints: ["Mobile-first approach", "HIPAA compliance considerations"]
      },
      problem: {
        howMightWe: "How might we design a frictionless nutrition assessment flow that feels like a natural conversation?",
        observations: ["Users abandon long form-based assessments", "Static tracking apps lack personalization"],
        impact: "Improves user retention and data quality for dietitians."
      },
      beforeAfter: {
        before: { image: "", caption: "Long scrolling forms with high drop-off rates" },
        after: { image: "", caption: "Conversational flow capturing data seamlessly" }
      },
      users: {
        goals: ["Quick tracking", "Personalized feedback"],
        painPoints: ["Tedious manual entry", "Lack of motivation"]
      },
      insights: [
        { reframe: "Make tracking feel like texting a friend.", explanation: "Users engage more when the interface mimics their daily communication habits." }
      ],
      solution: {
        steps: [
          { title: "Conversational UI", description: "Designed an intuitive chat interface to guide users through the assessment step-by-step." }
        ]
      },
      visuals: [
        { image: "", caption: "Chat interface mockup" }
      ],
      outcome: {
        metrics: [
          { label: "Completion Rate", value: "+40%" }
        ],
        description: "Greatly improved user retention and onboarding success."
      },
      reflection: {
        lessons: ["Chat interfaces require very careful handling of edge cases and fallback responses."]
      }
    }
  },
  {
    id: 'plantmonitor',
    title: 'Smart Plant Monitor',
    summary: 'Designing a Modular IoT Plant System.',
    tags: ['IoT', 'Hardware', 'UX/UI'],
    category: 'Product Design',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "Smart Plant Monitor provides real-time health metrics for your plants through an intuitive app and modular hardware.",
        metadata: { role: "UX Designer", context: "Consumer IoT", timeline: "4 Months", team: "Cross-functional" },
        credibilityTag: "Successfully bridged physical hardware interactions with a digital dashboard."
      },
      context: {
        description: "Houseplant owners struggle to understand when and how to care for different species, often leading to overwatering or neglect.",
        constraints: ["Must display critical data at a glance", "Integration with low-power sensors"]
      },
      problem: {
        howMightWe: "How might we make plant care intuitive for beginners through actionable data visualization?",
        observations: ["Current solutions overwhelm users with raw data", "Visual indicators on hardware are often ignored"],
        impact: "Empowers users to confidently keep their plants alive."
      },
      beforeAfter: {
        before: { image: "", caption: "Complex raw data dashboards" },
        after: { image: "", caption: "Action-oriented minimalist UI" }
      },
      users: {
        goals: ["Keep plants alive", "Understand plant needs quickly"],
        painPoints: ["Overwhelming sensor data", "Forgetting to water"]
      },
      insights: [
        { reframe: "Users don't want data, they want instructions.", explanation: "Translated raw humidity metrics into simple 'Water Now' or 'Wait' actions." }
      ],
      solution: {
        steps: [
          { title: "Dashboard Design", description: "Created a minimalist dashboard that prioritizes immediate actions (e.g., 'Water Now')." }
        ]
      },
      visuals: [
        { image: "", caption: "Plant Monitor Dashboard" }
      ],
      outcome: {
        metrics: [
          { label: "Plant Survival", value: "95%" }
        ],
        description: "Successfully bridged physical hardware interactions with a digital dashboard."
      },
      reflection: {
        lessons: ["Hardware constraints heavily dictate software refresh rates and UI responsiveness."]
      }
    }
  },
  {
    id: 'money',
    title: 'MONEY',
    summary: 'Simplifying Mobile Finance for Everyday Users.',
    tags: ['Fintech', 'Mobile app', 'UX/UI'],
    category: 'Product Design',
    year: '2024',
    caseStudy: {
      introduction: {
        summary: "MONEY is an intuitive finance tracker that helps users manage their budgets without the typical spreadsheet anxiety.",
        metadata: { role: "Lead Designer", context: "Fintech Startup", timeline: "5 Months", team: "Design & Dev" },
        credibilityTag: "Redesigned the onboarding flow, increasing conversion by 25%."
      },
      context: {
        description: "Personal finance apps are often cluttered with features that average users never touch, creating cognitive overload.",
        constraints: ["Strict platform guidelines (iOS/Android)", "High density of financial data"]
      },
      problem: {
        howMightWe: "How might we simplify budget tracking so everyday users feel in control of their finances?",
        observations: ["Users feel anxious looking at complex charts", "Manual transaction entry is a major friction point"],
        impact: "Increases daily active usage and financial literacy."
      },
      beforeAfter: {
        before: { image: "", caption: "Cluttered spreadsheet-style interface" },
        after: { image: "", caption: "Simplified high-level overview cards" }
      },
      users: {
        goals: ["Budget tracking without stress", "Quick transaction entry"],
        painPoints: ["Financial anxiety", "Complex charts"]
      },
      insights: [
        { reframe: "Progressive disclosure reduces anxiety.", explanation: "Hiding complex data behind simple cards makes finances feel manageable." }
      ],
      solution: {
        steps: [
          { title: "Progressive Disclosure", description: "Hid advanced analytics behind simple, high-level overview cards." }
        ]
      },
      visuals: [
        { image: "", caption: "MONEY App Interface" }
      ],
      outcome: {
        metrics: [
          { label: "Daily Active Users", value: "+25%" }
        ],
        description: "Increased daily engagement by simplifying the core loop."
      },
      reflection: {
        lessons: ["Financial data must be completely accurate, even when visually simplified."]
      }
    }
  },
  {
    id: 'purchaseorder',
    title: 'Purchase Order Automation',
    summary: 'Designing a Frictionless Purchase Order Approval Experience.',
    tags: ['Enterprise', 'B2B', 'Automation'],
    category: 'Enterprise Design',
    year: '2024',
    caseStudy: {
      introduction: {
        summary: "A streamlined B2B approval flow that integrates directly with existing enterprise communication tools like Microsoft Teams.",
        metadata: { role: "UX Designer", context: "Enterprise Software", timeline: "6 Months", team: "Product Team" },
        credibilityTag: "Reduced approval turnaround time from days to hours."
      },
      context: {
        description: "Managers were overwhelmed with email-based purchase order requests, causing supply chain delays.",
        constraints: ["Integration with legacy ERP systems", "Must fit within Microsoft Teams environment"]
      },
      problem: {
        howMightWe: "How might we reduce friction in enterprise approvals without compromising compliance?",
        observations: ["Approvers miss emails in crowded inboxes", "Context-switching between ERP and email slows down the process"],
        impact: "Accelerates procurement cycles and reduces operational bottlenecks."
      },
      beforeAfter: {
        before: { image: "", caption: "Lost email threads and ERP logins" },
        after: { image: "", caption: "One-click approval directly in Teams" }
      },
      users: {
        goals: ["Approve POs quickly", "Maintain compliance trails"],
        painPoints: ["Context switching", "Lost requests"]
      },
      insights: [
        { reframe: "Bring the action to where the user already is.", explanation: "Integrating into Teams eliminated the need for managers to log into a separate system." }
      ],
      solution: {
        steps: [
          { title: "Inline Actions", description: "Designed actionable cards inside Microsoft Teams so managers can approve POs with one click." }
        ]
      },
      visuals: [
        { image: "", caption: "Teams Integration Mockup" }
      ],
      outcome: {
        metrics: [
          { label: "Approval Time", value: "-80%" }
        ],
        description: "Reduced turnaround time from days to hours."
      },
      reflection: {
        lessons: ["Enterprise integrations require strict adherence to third-party platform UI guidelines."]
      }
    }
  },
  {
    id: 'titsystem',
    title: 'T.I.T. System',
    summary: 'A Distributed Ledger for Shared Expenses.',
    tags: ['Blockchain', 'Finance', 'Full-stack'],
    category: 'Engineering',
    year: '2023',
    caseStudy: {
      introduction: {
        summary: "T.I.T. System is a distributed ledger designed to transparently track and settle shared expenses among groups.",
        metadata: { role: "Full Stack Engineer", context: "Personal Project", timeline: "3 Months", team: "Solo" },
        credibilityTag: "Implemented a custom consensus mechanism for resolving disputed expenses."
      },
      context: {
        description: "Roommates and groups often dispute shared expenses because traditional split apps rely on a centralized, mutable database.",
        constraints: ["Decentralized architecture", "Low transaction fees"]
      },
      problem: {
        howMightWe: "How might we create a transparent and trustless shared expense ledger?",
        observations: ["Centralized apps lack transparency when disputes arise", "Users want undeniable proof of payment"],
        impact: "Eliminates social friction around money by providing an immutable record."
      },
      beforeAfter: {
        before: { image: "", caption: "Centralized database prone to disputes" },
        after: { image: "", caption: "Immutable ledger providing unquestionable proof" }
      },
      users: {
        goals: ["Fair expense sharing", "Transparent history"],
        painPoints: ["Disputes over payments", "Lack of trust in manual edits"]
      },
      insights: [
        { reframe: "Trust is built through transparency, not just features.", explanation: "An immutable ledger solves the social problem of trusting the app's math." }
      ],
      solution: {
        steps: [
          { title: "Smart Contracts", description: "Deployed lightweight smart contracts to automatically settle balances at the end of the month." }
        ]
      },
      visuals: [
        { image: "", caption: "Ledger Interface" }
      ],
      outcome: {
        metrics: [
          { label: "Disputed Expenses", value: "0%" }
        ],
        description: "Eliminated social friction around money."
      },
      reflection: {
        lessons: ["Blockchain technology adds significant latency, which must be masked by optimistic UI updates."]
      }
    }
  }
];
