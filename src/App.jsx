import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import AboutCard from './components/AboutCard';
import ExperienceCard from './components/ExperienceCard';
import NowCard from './components/NowCard';
import PrinciplesCard from './components/PrinciplesCard';
import ContactDock from './components/ContactDock';
import ProjectsWorkspace from './components/ProjectsWorkspace';
import SplashScreen from './components/SplashScreen';
import AmbientBackground from './components/AmbientBackground';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  // 'home' | 'workspace'
  const [viewState, setViewState] = useState('home');

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <AmbientBackground />
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <SplashScreen key="splash" onEnter={() => setHasEntered(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}
          >
            <LayoutGroup>
              <motion.main
                className={`bento-grid ${viewState !== 'home' ? 'workspace-active' : ''}`}
                id="bentoGrid"
              >
                {viewState === 'home' ? (
                  <ProjectCard onClick={() => setViewState('workspace')} />
                ) : (
                  <div style={{ gridColumn: '1 / 5', gridRow: '1 / 3' }} />
                )}

                <NowCard />
                <AboutCard />
                <ExperienceCard />
                <PrinciplesCard />
                <ContactDock />

                <AnimatePresence mode="popLayout">
                  {viewState !== 'home' && (
                    <ProjectsWorkspace
                      initialProjectId="grid"
                      onClose={() => setViewState('home')}
                    />
                  )}
                </AnimatePresence>
              </motion.main>
            </LayoutGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
