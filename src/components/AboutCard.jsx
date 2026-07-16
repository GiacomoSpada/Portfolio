import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutCard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="card card--about interactive card--orange-group"
      onClick={() => setShowMore(!showMore)}
      role="button"
      tabIndex="0"
      aria-label="About me — click to toggle"
      style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <AnimatePresence initial={false} mode="wait">
        {!showMore ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.2 }}
            className="about-front"
            style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
          >
            <span className="card__label">About Me</span>
            <h2 className="text-title" style={{ marginTop: 0, marginBottom: '12px' }}>AI Product Engineer</h2>
            <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
              <p className="text-body" style={{ margin: 0 }}>
                I build digital products from idea to implementation.
                I care about engineering, design, UX and execution equally.
              </p>
            </div>
            <div className="card__footer" style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <span className="card__action" style={{ whiteSpace: 'nowrap' }}>
                More
                <span className="card__action-arrow">→</span>
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.2 }}
            className="about-back"
            style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, transform: 'none' }}
          >
            <span className="card__label">About Me</span>
            <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, paddingRight: '8px' }}>
              <div className="back-detail text-body" style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div><strong>Based in</strong> the Netherlands</div>
                <div><strong>Education</strong> — University of Twente</div>
                <div><strong>Focus</strong> — Building products that solve real problems with thoughtful engineering and clean design.</div>
                <div><strong>Philosophy</strong> — Ship early. Iterate with intention. Every pixel should earn its place.</div>
              </div>
            </div>
            <div className="card__footer" style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <span className="card__action" style={{ whiteSpace: 'nowrap' }}>
                <span style={{ marginRight: '4px' }}>←</span> Return
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
