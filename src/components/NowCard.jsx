import React from 'react';

export default function NowCard() {
  return (
    <article className="card card--now" tabIndex="0" aria-label="What I'm doing now">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="card__label">Now</span>
        <div className="now-status" style={{ marginTop: '2px' }}>
          <span className="now-dot"></span>
          <span className="now-status-text">Currently</span>
        </div>
      </header>

      <div className="now-items">
        <div className="now-item">
          <span className="now-item__label text-subtitle">Building</span>
          <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>EMERALD AI</span>
        </div>
        <div className="now-item">
          <span className="now-item__label text-subtitle">Exploring</span>
          <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>Advanced RAG</span>
        </div>
        <div className="now-item">
          <span className="now-item__label text-subtitle">Reading</span>
          <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>System Design</span>
        </div>
        <div className="now-item">
          <span className="now-item__label text-subtitle">Location</span>
          <span className="now-item__value text-body" style={{ whiteSpace: 'nowrap' }}>Enschede, NL</span>
        </div>
      </div>
    </article>
  );
}
