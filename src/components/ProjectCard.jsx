import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ onClick }) {
  const transition = {
    layout: {
      type: 'tween',
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    },
    opacity: { duration: 0.2 }
  };

  return (
    <motion.article
      layoutId="projects-workspace-container"
      transition={transition}
      className="card card--projects interactive card--showcase"
      onClick={onClick}
      role="button"
      tabIndex="0"
      aria-label="View projects"
    >
      <motion.span layoutId="project-card-label" transition={transition} className="card__label">Projects</motion.span>
      <motion.div layout transition={transition} className="project-highlight">
        <motion.h1 layoutId="project-title-emerald" transition={transition} className="text-title">EMERALD</motion.h1>
        <motion.p layout transition={transition} className="text-body">
          An intelligent healthcare assistant that transforms complex medical guidelines into accessible, conversational support.
        </motion.p>
        <motion.div layout transition={transition} className="project-tags">
          <span className="tag-chip">RAG Pipeline</span>
          <span className="tag-chip">LLM</span>
          <span className="tag-chip">Python</span>
          <span className="tag-chip">Healthcare</span>
        </motion.div>
      </motion.div>

      <motion.div layout transition={transition} className="card__footer">
        <span className="card__action" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Check
          <span className="card__action-arrow"><ArrowRight size={16} style={{ position: 'relative', top: '2px' }} /></span>
        </span>
        <span className="card__count text-caption">4 Projects</span>
      </motion.div>
    </motion.article>
  );
}
