import React from 'react';

export default function PrinciplesCard() {
  return (
    <article className="card card--principles" tabIndex="0" aria-label="How I build">
      <span className="card__label">How I Build</span>
      <div className="principles-list">
        <div className="principle-item">Ship early, iterate with data</div>
        <div className="principle-item">Design is how it works, not how it looks</div>
        <div className="principle-item">Remove before you add</div>
      </div>
    </article>
  );
}
