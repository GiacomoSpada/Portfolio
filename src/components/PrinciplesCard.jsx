import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function PrinciplesCard() {
  const { theme } = useTheme();
  const f1Logo = theme === 'dark' ? '/f_logo_icon_248908_black.png' : '/f_logo_icon_248908.png';

  return (
    <article
      className="card card--principles card--orange-group"
      tabIndex="0"
      aria-label="Outside work"
      style={{ justifyContent: 'flex-start', height: '100%' }}
    >
      <header
        className="card__label"
        style={{ width: '100%', marginBottom: '1rem', flexShrink: 0 }}
      >
        Outside Work
      </header>
      <div className="outside-work-icons">
        <a href="https://strava.app.link/tHr19Xodc5b" target="_blank" rel="noopener noreferrer" title="Strava" aria-label="Strava">
          <img src="/strava_icon_130820.svg" alt="Strava" className="outside-work-icon" decoding="async" />
        </a>
        <a
          href="https://www.formula1.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Formula 1"
          aria-label="Formula 1"
          className="outside-work-icon outside-work-icon-badge"
        >
          <img src={f1Logo} alt="Formula 1" className="outside-work-icon-badge-img" decoding="async" />
        </a>
        <a href="https://www.polarsteps.com" target="_blank" rel="noopener noreferrer" title="Polarsteps" aria-label="Polarsteps">
          <img src="/polarsteps.jpeg" alt="Polarsteps" className="outside-work-icon outside-work-icon-rounded" decoding="async" />
        </a>
      </div>
    </article>
  );
}