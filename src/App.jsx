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
import { usePath, navigate } from './router';

// Case-study content (project copy + images) is only needed once the user
// opens the Projects workspace, so it's split out of the initial bundle.
const ProjectsWorkspace = lazy(() => import('./components/ProjectsWorkspace'));

export default function App() {
  const path = usePath();
  const inWorkspace = path === '/projects' || path.startsWith('/projects/');
  const projectSlug = inWorkspace ? path.split('/')[2] || null : null;
  // Deep links to a case study skip the splash screen.
  const [hasEntered, setHasEntered] = useState(() => inWorkspace);

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
                className={`bento-grid ${inWorkspace ? 'workspace-active' : ''}`}
                id="bentoGrid"
              >
                {!inWorkspace ? (
                  <ProjectCard onClick={() => navigate('/projects')} />
                ) : (
                  <div style={{ gridColumn: '1 / 5', gridRow: '1 / 3' }} />
                )}

                <NowCard />
                <AboutCard />
                <ExperienceCard />
                <PrinciplesCard />
                <ContactDock />

                <AnimatePresence mode="popLayout">
                  {inWorkspace && (
                    <Suspense fallback={null}>
                      <ProjectsWorkspace
                        projectSlug={projectSlug}
                        onClose={() => navigate('/')}
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
