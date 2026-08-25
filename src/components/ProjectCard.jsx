import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, MessageCircle, Home, CheckCircle } from 'lucide-react';

const projectIcons = [
  { icon: Stethoscope, name: 'EMERALD' },
  { icon: MessageCircle, name: 'NutriChat' },
  { icon: Home, name: 'Student House Ledger' },
  { icon: CheckCircle, name: 'Purchase Order Automation' }
];

const marqueeIcons = [...projectIcons, ...projectIcons];

export default function ProjectCard({ onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="card card--projects interactive card--showcase"
      onClick={onClick}
      role="button"
      tabIndex="0"
      aria-label="View projects"
    >
      <span className="card__label">Projects</span>
      <div className="project-highlight" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', gap: 0 }}>
        <h1 className="text-title">My Work</h1>
        <div className="project-icon-marquee">
          <div className="project-icon-track">
            {marqueeIcons.map(({ icon: Icon, name }, i) => (
              <div key={i} title={name} className="project-icon-chip">
                <Icon size={52} strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card__footer">
        <span className="card__action" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Explore
          <span className="card__action-arrow"><ArrowRight size={16} style={{ position: 'relative', top: '2px' }} /></span>
        </span>
      </div>
    </motion.article>
  );
}
