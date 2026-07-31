import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X, MoreHorizontal } from 'lucide-react';

const MODAL_TRANSITION_MS = 220;

const INTRO_TEXT = "Half engineer, half designer, fully allergic to good ideas that never ship. Currently working as an AI Product Engineer at the University of Twente.";

const DETAIL_PARAGRAPHS = [
  "Based in Enschede, Netherlands, Italian by background, currently plotting my next move. Studied Interaction Technology at the University of Twente.",
  "Outside of building, I'm a bit of a car and motorsport enthusiast, always into interior design and style, and I probably spend more time than I'd admit thinking about ETF allocations and what to wear for the day.",
  "I build because I want to create the next thing for people, not just ship features, but make something someone actually reaches for."
];

function AboutModal({ isOpen, onClose }) {
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
        className="about-modal"
        role="dialog"
        aria-modal="true"
        aria-label="About me"
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
          <span className="card__label">About Me</span>

          <div className="about-detail-block">
            {DETAIL_PARAGRAPHS.map((p, i) => (
              <p key={i} className="text-body" style={{ margin: 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default function AboutCard() {
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
    // mount first (invisible), then flip to open on the next frame so the
    // enter transition actually animates instead of snapping in
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
        className="card card--about card--orange-group"
        tabIndex="0"
        role="button"
        aria-label="About me, view details"
        onClick={openModal}
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer' }}
      >
        <span className="card__label">About Me</span>

        <div className="about-avatar-row">
          <img src="/Avatar.png" alt="Portrait of Giacomo" className="about-avatar" />
          <p className="text-body about-intro-text" style={{ margin: 0 }}>{INTRO_TEXT}</p>
        </div>

        <div className="card__footer" style={{ justifyContent: 'flex-start' }}>
          <MoreHorizontal size={22} className="card-more-dots" aria-hidden="true" />
        </div>
      </article>

      {mounted && (
        <AboutModal
          isOpen={open}
          onClose={closeModal}
        />
      )}
    </>
  );
}
