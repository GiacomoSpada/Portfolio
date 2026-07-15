import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div
      className="ambient-background"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Orb 1: Primary Orange */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '45vw',
          height: '45vw',
          maxWidth: '650px',
          maxHeight: '650px',
          background: 'radial-gradient(circle at 30% 30%, var(--accent-primary) 0%, #FF8533 40%, transparent 80%)',
          filter: 'blur(110px)',
          opacity: 0.35,
          mixBlendMode: 'screen'
        }}
        animate={{
          x: ["-10vw", "25vw", "-15vw", "-10vw"],
          y: ["-5vh", "20vh", "-15vh", "-5vh"],
          scale: [1, 1.25, 0.85, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "50%"]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Orb 2: Warm Amber */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background: 'radial-gradient(circle at 70% 60%, #D97706 0%, #F59E0B 50%, transparent 85%)',
          filter: 'blur(130px)',
          opacity: 0.28,
          mixBlendMode: 'screen'
        }}
        animate={{
          x: ["15vw", "-25vw", "10vw", "15vw"],
          y: ["10vh", "-20vh", "25vh", "10vh"],
          scale: [1, 0.8, 1.3, 1],
          rotate: [360, 180, 0],
          borderRadius: ["50%", "70% 30% 30% 70% / 70% 70% 30% 30%", "40% 60% 70% 30% / 40% 50% 60% 50%", "50%"]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 3: Cyber Cobalt */}
      <motion.div
        style={{
          position: 'absolute',
          top: '30%',
          right: '25%',
          width: '55vw',
          height: '55vw',
          maxWidth: '750px',
          maxHeight: '750px',
          background: 'radial-gradient(circle at 50% 50%, #2563EB 0%, #1E3A8A 60%, transparent 90%)',
          filter: 'blur(140px)',
          opacity: 0.22,
          mixBlendMode: 'screen',
          borderRadius: '50%'
        }}
        animate={{
          x: ["-20vw", "15vw", "-25vw", "-20vw"],
          y: ["15vh", "-10vh", "20vh", "15vh"],
          scale: [1, 1.35, 0.9, 1],
          opacity: [0.18, 0.28, 0.15, 0.18]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
