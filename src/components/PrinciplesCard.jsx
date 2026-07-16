import React from 'react';

export default function PrinciplesCard() {
  return (
    <article 
      className="card card--principles card--orange-group" 
      tabIndex="0" 
      aria-label="How I build"
      style={{ padding: 'var(--padding-card)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', overflow: 'hidden' }}
    >
      <header 
        className="card__label" 
        style={{ position: 'sticky', top: 0, zIndex: 10, width: '100%', marginBottom: '1rem', paddingTop: '4px', paddingBottom: '8px', backgroundColor: 'var(--surface-philosophy)', flexShrink: 0 }}
      >
        How I Build
      </header>
      <ul className="principles-list text-body" style={{ flex: 1, overflowY: 'auto', paddingRight: '8px', margin: 0, listStyle: 'none' }}>
        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '8px', fontWeight: 'bold' }}>•</span>
          <span>Ship early, iterate with data</span>
        </li>
        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '8px', fontWeight: 'bold' }}>•</span>
          <span>Design is how it works, not how it looks</span>
        </li>
        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '8px', fontWeight: 'bold' }}>•</span>
          <span>Remove before you add</span>
        </li>
      </ul>
    </article>
  );
}
