export const projectsData = [
  {
    id: 'emerald',
    title: 'EMERALD',
    summary: 'An intelligent healthcare assistant that transforms complex medical guidelines into accessible, conversational support.',
    tags: ['RAG Pipeline', 'LLM', 'Python', 'Healthcare'],
    category: 'Engineering',
    year: '2026',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `EMERALD is a healthcare AI assistant designed to make complex medical guidelines accessible through natural conversation. 
Built with a sophisticated RAG pipeline, it retrieves relevant medical knowledge and generates accurate, contextual responses 
while maintaining strict clinical safety guardrails.`
      },
      {
        id: 'architecture',
        title: 'Architecture',
        content: `Chose a hybrid retrieval approach combining dense and sparse retrieval to handle both semantic and keyword-based medical queries. 
Implemented a traffic cop router to classify query intent before retrieval, reducing hallucination rates significantly.`
      },
      {
        id: 'engineering',
        title: 'Engineering',
        content: `Built on Python, LangChain, and FastAPI. Used ChromaDB for the vector store and integrated with GPT-4 for the reasoning engine. The frontend is built with React and Framer Motion for a seamless, app-like experience.`
      }
    ]
  },
  {
    id: 'nexus',
    title: 'Nexus Data Platform',
    summary: 'A high-throughput, low-latency streaming analytics platform for real-time financial data.',
    tags: ['Kafka', 'Go', 'ClickHouse', 'FinTech'],
    category: 'Data Infrastructure',
    year: '2025',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Nexus is a streaming data platform capable of processing millions of events per second with sub-10ms latency.'
      },
      {
        id: 'challenge',
        title: 'Challenge',
        content: 'The previous system relied on batch processing, which resulted in stale data for high-frequency trading algorithms. The challenge was to rebuild the entire pipeline to support true real-time streaming without dropping messages.'
      },
      {
        id: 'results',
        title: 'Results',
        content: 'Reduced data latency from 5 minutes to 8ms. Scaled to handle 2M+ events/sec on peak trading days with zero downtime.'
      }
    ]
  },
  {
    id: 'aura',
    title: 'Aura Design System',
    summary: 'A comprehensive, accessible component library and design token system built for enterprise scale.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Design'],
    category: 'Frontend',
    year: '2024',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Aura is the foundational design system powering 15+ internal and external applications. It ensures strict accessibility compliance and perfectly consistent UX.'
      },
      {
        id: 'architecture',
        title: 'Architecture',
        content: 'Built from the ground up using React and Tailwind CSS. Implemented a strict token-based architecture for colors, spacing, and typography to allow seamless dark mode and high-contrast theme switching.'
      }
    ]
  },
  {
    id: 'lumina',
    title: 'Lumina API Gateway',
    summary: 'A heavily optimized API gateway that centralizes authentication, rate limiting, and routing for microservices.',
    tags: ['Rust', 'GraphQL', 'Redis', 'Security'],
    category: 'Backend',
    year: '2023',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Lumina sits in front of 40+ microservices, providing a unified GraphQL layer, handling JWT authentication, and enforcing strict rate limits.'
      },
      {
        id: 'engineering',
        title: 'Engineering',
        content: 'Rewritten from Node.js to Rust to handle sudden traffic spikes without catastrophic memory bloat. Utilizes Redis for distributed rate limiting across multiple instances.'
      },
      {
        id: 'lessons',
        title: 'Lessons Learned',
        content: 'Rust’s strict ownership model proved incredibly valuable for a highly concurrent system, virtually eliminating race conditions that plagued the legacy Node.js implementation.'
      }
    ]
  }
];
