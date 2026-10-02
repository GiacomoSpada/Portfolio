import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/* Respect the visitor's "reduce motion" system setting for all animations */}
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
      <Analytics />
    </ThemeProvider>
  </StrictMode>,
)
