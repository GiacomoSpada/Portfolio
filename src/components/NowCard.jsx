import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Target, PenTool, Code2, Users, X, MoreHorizontal } from 'lucide-react';

const MODAL_TRANSITION_MS = 220;

const SKILLS = [
  { id: 'product', icon: Target, label: 'Product' },
  { id: 'design', icon: PenTool, label: 'Design' },
  { id: 'build', icon: Code2, label: 'Build' },
  { id: 'lead', icon: Users, label: 'Lead' }
];

const SKILL_DETAILS = [
  {
    name: 'Product',
    description: "Turning ambiguous problems into clear, buildable direction, from early user research through to defining what actually needs to exist."
  },
  {
    name: 'Design',
    description: "Designing interfaces and flows that hold up under real use, not just in a mockup, validated through prototyping and usability testing, not guesswork."
  },
  {
    name: 'Build',
    description: "Full-stack execution across the whole product, including local LLM pipelines, RAG architecture, and the interfaces that sit on top of them."
  },
  {
    name: 'Lead',
    description: "Getting cross-functional stakeholders, engineers, executives, and end users, aligned and shipped, even under tight timelines and competing priorities."
  }
];

function SkillsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  return createPortal(
    <motion.div
      className="about-modal-backdrop"
      onClick={onClose}
      initial={false}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: MODAL_TRANSITION_MS / 1000 }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <motion.div
        className="about-modal skills-modal"
        role="dialog"
        aria-modal="true"
        aria-label="What I Do Best"
        onClick={(e) => e.stopPropagation()}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95 }}
        transition={{ duration: MODAL_TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={onClose}
          className="about-modal-close"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="about-modal-scroll">
          <span className="card__label">What I Do Best</span>

          <div className="skills-detail-list">
            {SKILL_DETAILS.map((skill) => (
              <div className="skills-detail-row" key={skill.name}>
                <span className="skills-detail-name">{skill.name}</span>
                <p className="skills-detail-desc text-body">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function NowCard() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const openFrameRef = useRef(null);

  useEffect(() => () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openFrameRef.current) cancelAnimationFrame(openFrameRef.current);
  }, []);

  const openModal = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMounted(true);
    openFrameRef.current = requestAnimationFrame(() => {
      openFrameRef.current = requestAnimationFrame(() => setOpen(true));
    });
  };

  const closeModal = () => {
    setOpen(false);
    closeTimeoutRef.current = setTimeout(() => setMounted(false), MODAL_TRANSITION_MS);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <>
      <article
        className="card card--now card--orange-group"
        tabIndex="0"
        role="button"
        aria-label="What I do best, view details"
        onClick={openModal}
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer' }}
      >
        <header>
          <span className="card__label">What I Do Best</span>
        </header>

        <div className="now-items">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div className="now-item" key={skill.id}>
                <Icon size={20} className="now-item__icon" />
                <span className="now-item__label">{skill.label}</span>
              </div>
            );
          })}
        </div>

        <div className="card__footer" style={{ justifyContent: 'flex-start' }}>
          <MoreHorizontal size={22} className="card-more-dots" aria-hidden="true" />
        </div>
      </article>

      {mounted && <SkillsModal isOpen={open} onClose={closeModal} />}
    </>
  );
}
