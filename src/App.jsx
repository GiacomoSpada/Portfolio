import React, { useState, Suspense, lazy } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import AboutCard from './components/AboutCard';
import ExperienceCard from './components/ExperienceCard';
import NowCard from './components/NowCard';
import PrinciplesCard from './components/PrinciplesCard';
import ContactDock from './components/ContactDock';
import SplashScreen from './components/SplashScreen';
import AmbientBackground from './components/AmbientBackground';

// Case-study content (project copy + images) is only needed once the user
// opens the Projects workspace, so it's split out of the initial bundle.
const ProjectsWorkspace = lazy(() => import('./components/ProjectsWorkspace'));

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
            style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%', minWidth: 0, minHeight: 0, height: '100%' }}
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
                    <Suspense fallback={null}>
                      <ProjectsWorkspace
                        initialProjectId="grid"
                        onClose={() => setViewState('home')}
                      />
                    </Suspense>
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
