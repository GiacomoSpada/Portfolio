import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, MessageCircle, Home, Wallet, CheckCircle, Sprout } from 'lucide-react';

const projectIcons = [
  { icon: Stethoscope, name: 'EMERALD' },
  { icon: MessageCircle, name: 'NutriChat' },
  { icon: Home, name: 'Student House Ledger' },
  { icon: Wallet, name: 'MONEY' },
  { icon: CheckCircle, name: 'Purchase Order Automation' },
  { icon: Sprout, name: 'Smart Plant Monitor' }
];

const marqueeIcons = [...projectIcons, ...projectIcons];

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
      <motion.div layout transition={transition} className="project-highlight" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', gap: 0 }}>
        <motion.h1 layout transition={transition} className="text-title">My Work</motion.h1>
        <div className="project-icon-marquee">
          <div className="project-icon-track">
            {marqueeIcons.map(({ icon: Icon, name }, i) => (
              <div key={i} title={name} className="project-icon-chip">
                <Icon size={52} strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div layout transition={transition} className="card__footer">
        <span className="card__action" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Explore
          <span className="card__action-arrow"><ArrowRight size={16} style={{ position: 'relative', top: '2px' }} /></span>
        </span>
      </motion.div>
    </motion.article>
  );
}