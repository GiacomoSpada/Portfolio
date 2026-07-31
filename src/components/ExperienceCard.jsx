import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    role: "Junior Scientist (AI Product Engineer)",
    company: "University of Twente",
    date: "May 2026 – Present",
    description: "Architected EMERALD, a clinical AI health coach for chronic disease management, with a local RAG pipeline and an accessible mobile interface for elderly users.",
    tech: ["Python", "RAG", "React"]
  },
  {
    id: 2,
    role: "Student Assistant",
    company: "University of Twente",
    date: "Nov 2023 – Dec 2025",
    description: "Ran a haptic feedback usability study and engineered a glucose-responsive AI feedback system's data pipeline and architecture.",
    tech: ["Research", "AI Systems"]
  },
  {
    id: 3,
    role: "Product Prototyping Intern",
    company: "RE-LION",
    date: "Sep 2024 – Dec 2024",
    description: "Built spatial tracking sensor testing protocols and delivered a feasibility assessment for VR sensor integration in defense/training scenarios.",
    tech: ["Prototyping", "Hardware"]
  },
  {
    id: 4,
    role: "Junior Business Analyst",
    company: "Venchi",
    date: "Dec 2022 – Aug 2023",
    description: "Automated enterprise approval workflows and streamlined internal tool UX across customer care platforms.",
    tech: ["Power Automate", "Dynamics 365"]
  },
  {
    id: 5,
    role: "IT Technician",
    company: "Provincia di Cuneo",
    date: "Dec 2021 – Dec 2022",
    description: "Managed enterprise hardware deployment and software infrastructure for a 300+ user organization.",
    tech: ["IT Ops"]
  }
];

export default function ExperienceCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = EXPERIENCES.length - 1;
    if (newIndex >= EXPERIENCES.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') paginate(-1);
    if (e.key === 'ArrowRight') paginate(1);
  };

  const handleCardClick = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width / 2) {
      paginate(-1);
    } else {
      paginate(1);
    }
  };

  const handleDragEnd = (e, { offset }) => {
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      paginate(1);
    } else if (offset.x > swipeThreshold) {
      paginate(-1);
    }
  };

  const currentExperience = EXPERIENCES[currentIndex];

  return (
    <article
      className="card card--experience card--showcase"
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        cursor: 'pointer',
        gap: 0
      }}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onClick={handleCardClick}
      aria-label="Experience Carousel"
    >
      {/* Header Layer */}
      <header style={{ zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <span className="card__label" style={{ marginBottom: 0 }}>Experience</span>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="experience-download-btn"
          aria-label="Download CV"
          title="Download CV"
        >
          <Download size={14} strokeWidth={2} />
        </a>
      </header>

      {/* Content Layer */}
      <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              cursor: 'grab',
              touchAction: 'pan-y'
            }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {/* Scrollable container */}
            <div
              className="experience-scroll-container"
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                paddingRight: '4px' // Add small padding for scrollbar
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px', flexShrink: 0 }}>
                <h2 className="text-title" style={{ marginTop: 0, marginBottom: 0, textAlign: 'left' }}>{currentExperience.role}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span className="text-subtitle" style={{ color: 'var(--text-primary)' }}>{currentExperience.company}</span>
                  <span className="text-subtitle" style={{ color: 'var(--border-muted)' }}>|</span>
                  <span className="text-subtitle" style={{ color: 'var(--text-tertiary)' }}>{currentExperience.date}</span>
                </div>
              </div>

              <p className="text-body" style={{
                marginBottom: '0',
                textAlign: 'left',
                flexShrink: 0
              }}>
                {currentExperience.description}
              </p>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px', flexShrink: 0 }}>
                {currentExperience.tech.map(t => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Layer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px', zIndex: 2 }}>
        {EXPERIENCES.map((exp, idx) => (
          <button
            key={exp.id}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              padding: 0,
              background: currentIndex === idx ? 'var(--text-tertiary)' : 'var(--border-subtle)',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
            aria-label={`Go to experience ${idx + 1}`}
          />
        ))}
      </div>
    </article>
  );
}
