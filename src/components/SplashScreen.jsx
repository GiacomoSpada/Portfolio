import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SplashScreen({ onEnter }) {
  return (
    <div
      className="splash-screen"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        minHeight: '60vh',
        zIndex: 1000,
        position: 'relative'
      }}
    >
      <motion.div
        className="text-caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '32px',
          fontFamily: 'monospace, sans-serif'
        }}
      >
        STATUS: ONLINE
      </motion.div>

      <motion.div
        className="text-caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '32px',
          fontFamily: 'monospace, sans-serif'
        }}
      >
        LOC: THE NETHERLANDS
      </motion.div>

      <motion.div
        className="text-label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'monospace, sans-serif',
          marginBottom: '24px'
        }}
      >
        SYSTEM INITIALIZED // AI PRODUCT ENGINEERING
      </motion.div>

      <motion.h1
        className="text-display"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          margin: '0 0 16px 0',
          textAlign: 'center',
          width: '100%'
        }}
      >
        Hi, I'm Giacomo.
      </motion.h1>

      <motion.p
        className="text-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          margin: '0 0 48px 0',
          textAlign: 'center',
          width: '100%'
        }}
      >
        I design, build and ship thoughtful AI products.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onClick={onEnter}
        className="splash-btn"
      >
        Explore Portfolio
        <ArrowRight size={20} className="splash-btn-arrow" />
      </motion.button>
    </div>
  );
}
