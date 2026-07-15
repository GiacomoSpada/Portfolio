import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 })
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function ProjectsWorkspace({ initialProjectId, onClose }) {
  // 'grid' for Level 2, or project ID for Level 3
  const [activeProject, setActiveProject] = useState(initialProjectId || 'grid');
  const selectedProjectData = projectsData.find(p => p.id === activeProject);
  const smoothTransition = {
    layout: {
      type: 'tween',
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    },
    opacity: { duration: 0.2 }
  };
  
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeProject]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = projectsData.length - 1;
      if (next >= projectsData.length) next = 0;
      return next;
    });
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) paginate(1);
    else if (swipe > swipeConfidenceThreshold) paginate(-1);
  };

  return (
    <motion.article
      layoutId="projects-workspace-container"
      className="card projects-workspace"
      transition={smoothTransition}
    >
      <AnimatePresence mode="wait">
        {activeProject === 'grid' ? (
          // LEVEL 2: Asymmetrical Gallery Grid
          <motion.div
            key="grid"
            style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px', background: 'var(--bg-surface-hover)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={smoothTransition}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
              <button
                className="nav-back-btn"
                onClick={onClose}
                aria-label="Go back to Portfolio"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
            {isMobile ? (
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={handleDragEnd}
                      style={{ position: 'absolute', inset: 0, touchAction: 'pan-y', display: 'flex', flexDirection: 'column' }}
                    >
                      {(() => {
                        const project = projectsData[currentIndex];
                        return (
                          <motion.div
                            className="gallery-project-card"
                            onClick={() => setActiveProject(project.id)}
                            whileTap={{ scale: 0.98 }}
                            style={{ flex: 1, margin: 0 }}
                          >
                            <div className={`project-visual project-visual-${project.id}`}>
                              {project.id === 'aura' && (
                                <>
                                  <div className="aura-orb aura-orb-1"></div>
                                  <div className="aura-orb aura-orb-2"></div>
                                </>
                              )}
                              {project.id === 'nexus' && <div className="nexus-line"></div>}
                              {project.id === 'lumina' && <div className="lumina-ring"></div>}
                            </div>
                            <div className="project-content">
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                  <span className="card__label text-caption" style={{ marginBottom: 0 }}>{project.category}</span>
                                  <span className="card__count text-caption">{project.year}</span>
                                </div>
                              </div>
                              <h2 className="text-title" style={{ margin: '0 0 8px 0' }}>
                                {project.title}
                              </h2>
                              <div style={{ flex: 1, marginBottom: '8px' }}>
                                <p className="text-body" style={{ margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {project.summary}
                                </p>
                              </div>
                              <div className="project-tags">
                                {project.tags.slice(0, 3).map(t => (
                                  <span key={t} className="tag-chip">{t}</span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                  {projectsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      style={{
                        width: '6px', height: '6px', borderRadius: '50%', padding: 0,
                        background: currentIndex === idx ? 'var(--text-tertiary)' : 'var(--border-subtle)',
                        border: 'none', cursor: 'pointer', transition: 'background 0.2s ease'
                      }}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="workspace-gallery-grid" style={{ padding: 0, background: 'transparent', flex: 1, minHeight: 0 }}>
                {projectsData.map((project, index) => {
                  const isHero = index === 0;
                  return (
                    <div
                      key={project.id}
                      className={isHero ? 'project-card-hero' : ''}
                      style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}
                    >
                      <motion.div
                        className="gallery-project-card"
                        onClick={() => setActiveProject(project.id)}
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ flex: 1, margin: 0 }}
                      >
                        <div className={`project-visual project-visual-${project.id}`}>
                          {project.id === 'aura' && (
                            <>
                              <div className="aura-orb aura-orb-1"></div>
                              <div className="aura-orb aura-orb-2"></div>
                            </>
                          )}
                          {project.id === 'nexus' && <div className="nexus-line"></div>}
                          {project.id === 'lumina' && <div className="lumina-ring"></div>}
                        </div>
                        <div className="project-content">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                              <span className="card__label text-caption" style={{ marginBottom: 0 }}>{project.category}</span>
                              <span className="card__count text-caption">{project.year}</span>
                            </div>
                          </div>
                          <h2 className="text-title" style={{ margin: '0 0 8px 0' }}>
                            {project.title}
                          </h2>
                          <div style={{ flex: 1, marginBottom: '8px' }}>
                            <p className="text-body" style={{ margin: 0, display: '-webkit-box', WebkitLineClamp: isHero ? 3 : 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {project.summary}
                            </p>
                          </div>
                          <div className="project-tags">
                            {project.tags.slice(0, isHero ? 4 : 2).map(t => (
                              <span key={t} className="tag-chip">{t}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        ) : (
          // LEVEL 3: Split View
          <motion.div
            key="case-study"
            className="workspace-split-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={smoothTransition}
          >
            <motion.div
              className="workspace-sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, ...smoothTransition }}
            >
              <div className="workspace-sidebar-nav">
                <h3 className="workspace-sidebar-title">Projects</h3>
                {projectsData.map(project => (
                  <div
                    key={project.id}
                    className={`workspace-sidebar-item ${project.id === activeProject ? 'active' : ''}`}
                    onClick={() => setActiveProject(project.id)}
                  >
                    {project.title}
                  </div>
                ))}
              </div>

              <div className="workspace-sidebar-nav" style={{ marginTop: '16px' }}>
                <h3 className="workspace-sidebar-title">Sections</h3>
                {selectedProjectData?.sections.map(section => (
                  <div
                    key={section.id}
                    className="workspace-sidebar-item"
                    onClick={() => {
                      document.getElementById(`section-${section.id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {section.title}
                  </div>
                ))}
              </div>
            </motion.div>

            <div
              className="workspace-content"
              ref={contentRef}
            >

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-surface)', padding: '24px 0 16px 0' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="card__label text-caption" style={{ marginBottom: 0 }}>{selectedProjectData.category}</span>
                  <span className="card__count text-caption">{selectedProjectData.year}</span>
                </div>
                <button
                  className="nav-back-btn"
                  onClick={() => setActiveProject('grid')}
                  aria-label="Back to Projects"
                >
                  <ArrowLeft size={20} />
                </button>
              </div>

              <h2
                className="text-display"
                style={{ marginBottom: '16px' }}
              >
                {selectedProjectData.title}
              </h2>

              <p className="text-body" style={{ marginBottom: '32px', maxWidth: '600px' }}>
                {selectedProjectData.summary}
              </p>

              <div className="project-tags" style={{ marginBottom: '48px' }}>
                {selectedProjectData.tags.map(t => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {selectedProjectData.sections.map(section => (
                  <section key={section.id} id={`section-${section.id}`}>
                    <h3 className="text-title" style={{ marginBottom: '16px' }}>
                      {section.title}
                    </h3>
                    <p className="text-body" style={{ maxWidth: '650px', whiteSpace: 'pre-wrap' }}>
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
