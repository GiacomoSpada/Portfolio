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
    id: 'nexus',
    title: 'Nexus Data Platform',
    summary: 'A high-throughput, low-latency streaming analytics platform for real-time financial data.',
    tags: ['Kafka', 'Go', 'ClickHouse', 'FinTech'],
    category: 'Data Infrastructure',
    year: '2025',
    caseStudy: {
      introduction: {
        summary: "Nexus is a streaming data platform capable of processing millions of events per second with sub-10ms latency.",
        metadata: { role: "Backend Engineer", context: "Fintech Startup", timeline: "4 Months", team: "3 Engineers" },
        credibilityTag: "Scales to handle 2M+ events/sec on peak trading days with zero downtime."
      },
      context: {
        description: "The previous system relied on batch processing, which resulted in stale data for high-frequency trading algorithms.",
        constraints: ["Zero message loss", "Sub-10ms latency", "High availability"]
      },
      problem: {
        howMightWe: "How might we rebuild the entire data pipeline to support true real-time streaming without dropping messages?",
        observations: ["Batch processing causes unacceptable delays", "Trading algorithms require millisecond accuracy"],
        impact: "Enables real-time algorithmic trading decisions based on live market data."
      },
      users: {
        goals: ["Real-time data feeds", "High reliability during market volatility"],
        painPoints: ["Stale data", "System crashes during peak loads"]
      },
      insights: [
        { reframe: "Batch is dead for HFT.", explanation: "Transitioning to an event-driven architecture with Kafka was the only way to achieve the latency requirements." }
      ],
      solution: {
        steps: [
          { title: "Kafka Event Bus", description: "Replaced batch jobs with a distributed Kafka streaming architecture." },
          { title: "Go Microservices", description: "Rewrote data processors in Go for maximum concurrency and performance." }
        ]
      },
      outcome: {
        metrics: [
          { label: "Data Latency", value: "8ms" },
          { label: "Throughput", value: "2M/s" }
        ],
        description: "Reduced data latency from 5 minutes to 8ms."
      },
      reflection: {
        lessons: ["Proper partition strategy in Kafka is critical for maintaining order and scaling consumers.", "ClickHouse is incredibly fast for analytical queries over streaming data."]
      }
    }
  },
  {
    id: 'aura',
    title: 'Aura Design System',
    summary: 'A comprehensive, accessible component library and design token system built for enterprise scale.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Design'],
    category: 'Frontend',
    year: '2024',
    caseStudy: {
      introduction: {
        summary: "Aura is the foundational design system powering 15+ internal and external applications.",
        metadata: { role: "Design Technologist", context: "Enterprise Rebrand", timeline: "8 Months", team: "Design Systems Team" },
        credibilityTag: "Ensures strict accessibility compliance and perfectly consistent UX across the organization."
      },
      context: {
        description: "Before Aura, every product team built their own components, leading to visual inconsistencies, duplicated effort, and widespread accessibility failures.",
        constraints: ["Must support legacy app integration", "Strict WCAG 2.1 AA compliance", "Themeability"]
      },
      problem: {
        howMightWe: "How might we create a unified, scalable component library that developers actually want to use?",
        observations: ["Developers copy-paste old code", "Designers create inconsistent specs"],
        impact: "Dramatically speeds up UI development while ensuring brand consistency."
      },
      users: {
        goals: ["Fast implementation", "Accessible by default", "Easy customization"],
        painPoints: ["Breaking changes in updates", "Poor documentation"]
      },
      insights: [
        { reframe: "A design system is a product, not a project.", explanation: "It requires dedicated maintenance, versioning, and developer relations to succeed." }
      ],
      solution: {
        steps: [
          { title: "Token Architecture", description: "Implemented a strict token-based architecture for colors, spacing, and typography." },
          { title: "React Component Library", description: "Built from the ground up using React and Tailwind CSS." }
        ]
      },
      outcome: {
        metrics: [
          { label: "Adoption Rate", value: "95%" },
          { label: "Time-to-Market", value: "-40%" }
        ],
        description: "Adopted by 15+ applications, standardizing the entire digital ecosystem."
      },
      reflection: {
        lessons: ["Getting buy-in from engineering early is more important than perfect design specs.", "Semantic versioning is essential for component updates."]
      }
    }
  },
  {
    id: 'lumina',
    title: 'Lumina API Gateway',
    summary: 'A heavily optimized API gateway that centralizes authentication, rate limiting, and routing for microservices.',
    tags: ['Rust', 'GraphQL', 'Redis', 'Security'],
    category: 'Backend',
    year: '2023',
    caseStudy: {
      introduction: {
        summary: "Lumina sits in front of 40+ microservices, providing a unified GraphQL layer, handling JWT authentication, and enforcing strict rate limits.",
        metadata: { role: "Platform Engineer", context: "Infrastructure Overhaul", timeline: "5 Months", team: "2 Engineers" },
        credibilityTag: "Handles sudden traffic spikes without catastrophic memory bloat."
      },
      context: {
        description: "The legacy Node.js API gateway was failing under load, experiencing race conditions and memory leaks during traffic surges.",
        constraints: ["Zero downtime migration", "Backward compatible API", "High concurrency"]
      },
      problem: {
        howMightWe: "How might we centralize authentication and routing while improving system resilience under heavy load?",
        observations: ["Node.js event loop blocking", "Distributed rate limiting was inaccurate"],
        impact: "Protects downstream microservices from being overwhelmed."
      },
      users: {
        goals: ["Reliable API endpoints", "Unified schema"],
        painPoints: ["Random 502 errors", "Slow response times"]
      },
      insights: [
        { reframe: "Memory safety eliminates an entire class of production bugs.", explanation: "Rewriting in Rust virtually eliminated the race conditions that plagued the legacy system." }
      ],
      solution: {
        steps: [
          { title: "Rust Rewrite", description: "Rewritten from Node.js to Rust to handle sudden traffic spikes efficiently." },
          { title: "Redis Rate Limiting", description: "Utilized Redis for distributed rate limiting across multiple instances." }
        ]
      },
      outcome: {
        metrics: [
          { label: "Memory Usage", value: "-85%" },
          { label: "RPS Capacity", value: "4x" }
        ],
        description: "Dramatically improved stability and performance across all integrated services."
      },
      reflection: {
        lessons: ["Rust's strict ownership model has a steep learning curve but pays off massively in concurrent systems.", "GraphQL query complexity analysis is necessary to prevent DoS attacks via the gateway."]
      }
    }
  }
];
