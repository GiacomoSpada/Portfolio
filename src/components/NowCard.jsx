import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PAGES = [
  [
    { id: 'building', label: 'Building', value: 'EMERALD AI' },
    { id: 'exploring', label: 'Exploring', value: 'Advanced RAG' }
  ],
  [
    { id: 'reading', label: 'Reading', value: 'System Design' },
    { id: 'location', label: 'Location', value: 'Enschede, NL' }
  ]
];

export default function NowCard() {
  const [isTablet, setIsTablet] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    const handleResize = (e) => setIsTablet(e.matches);
    
    setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

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
    if (newIndex < 0) newIndex = PAGES.length - 1;
    if (newIndex >= PAGES.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e) => {
    if (!isTablet) return;
    if (e.key === 'ArrowLeft') paginate(-1);
    if (e.key === 'ArrowRight') paginate(1);
  };

  const handleCardClick = (e) => {
    if (!isTablet) return;
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
    if (!isTablet) return;
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      paginate(1);
    } else if (offset.x > swipeThreshold) {
      paginate(-1);
    }
  };

  const currentPage = PAGES[currentIndex];

  if (!isTablet) {
    return (
      <article className="card card--now card--orange-group" tabIndex="0" aria-label="What I'm doing now">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span className="card__label">Now</span>
          <div className="now-status" style={{ marginTop: '2px' }}>
            <span className="now-dot"></span>
            <span className="now-status-text">Currently</span>
          </div>
        </header>

        <div className="now-items">
          <div className="now-item">
            <span className="now-item__label text-subtitle">Building</span>
            <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>EMERALD AI</span>
          </div>
          <div className="now-item">
            <span className="now-item__label text-subtitle">Exploring</span>
            <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>Advanced RAG</span>
          </div>
          <div className="now-item">
            <span className="now-item__label text-subtitle">Reading</span>
            <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>System Design</span>
          </div>
          <div className="now-item">
            <span className="now-item__label text-subtitle">Location</span>
            <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>Enschede, NL</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article 
      className="card card--now card--orange-group" 
      tabIndex="0" 
      aria-label="What I'm doing now"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        cursor: 'pointer'
      }}
      onKeyDown={handleKeyDown}
      onClick={handleCardClick}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 2 }}>
        <span className="card__label">Now</span>
        <div className="now-status" style={{ marginTop: '2px' }}>
          <span className="now-dot"></span>
          <span className="now-status-text">Currently</span>
        </div>
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
              justifyContent: 'center',
              cursor: 'grab',
              touchAction: 'pan-y'
            }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <div className="now-items" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {currentPage.map(item => (
                <div className="now-item" key={item.id}>
                  <span className="now-item__label text-subtitle">{item.label}</span>
                  <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Layer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px', zIndex: 2 }}>
        {PAGES.map((_, idx) => (
          <button
            key={idx}
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
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </article>
  );
}
