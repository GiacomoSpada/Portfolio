import React, { useState } from 'react';

function DataTable({ title, headers, rows }) {
  if (!headers || !rows) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {title && <h4 className="text-subtitle" style={{ margin: 0 }}>{title}</h4>}
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="text-caption" style={{ textAlign: 'left', padding: '16px', color: 'var(--accent-primary)', background: 'var(--bg-surface-hover)', borderBottom: '1px solid var(--border-subtle)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="text-body" style={{ padding: '16px', borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none', verticalAlign: 'top' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BarChart({ title, unit, items }) {
  if (!items || items.length === 0) return null;
  const max = Math.max(...items.map(it => it.max || it.value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--bg-surface-hover)', padding: '32px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)' }}>
      {title && <h4 className="text-subtitle" style={{ margin: 0 }}>{title}</h4>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="text-body" style={{ margin: 0 }}>{it.label}</span>
              <span className="text-body" style={{ margin: 0, fontWeight: 600, color: 'var(--accent-primary)' }}>{it.value}{unit || ''}</span>
            </div>
            <div style={{ width: '100%', height: '10px', borderRadius: '9999px', background: 'var(--bg-surface-active)', overflow: 'hidden' }}>
              <div style={{ width: `${(it.value / max) * 100}%`, height: '100%', borderRadius: '9999px', background: 'var(--accent-primary)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '48px', cursor: 'zoom-out'
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 'var(--radius-card)' }}
      />
    </div>
  );
}

export default function CaseStudyLayout({ data }) {
  const [archOpen, setArchOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  if (!data) return null;

  const imageCaptionStyle = {
    color: 'var(--text-secondary)',
    textAlign: 'center',
    textTransform: 'none',
    fontWeight: 400,
    letterSpacing: 'normal'
  };

  const {
    introduction,
    context,
    methodology,
    problem,
    beforeAfter,
    users,
    insights,
    solution,
    visuals,
    deeperArchitecture,
    outcome,
    reflection
  } = data;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', paddingBottom: '64px' }}>
      
      {/* 1. Introduction */}
      {introduction && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {introduction.status && (
            <span
              className="text-caption"
              style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                padding: '6px 14px', borderRadius: 'var(--radius-badge)',
                background: 'var(--accent-soft)', color: 'var(--accent-primary)',
                fontWeight: 600, letterSpacing: '0.04em'
              }}
            >
              {introduction.status}
            </span>
          )}
          <p className="text-body" style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', margin: 0 }}>
            {introduction.summary}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', padding: '32px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            {Object.entries(introduction.metadata || {}).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', minWidth: '120px' }}>
                <span className="text-caption" style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '8px' }}>{key}</span>
                <span className="text-body" style={{ fontWeight: 500, margin: 0 }}>{value}</span>
              </div>
            ))}
          </div>
          {introduction.credibilityTag && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: 'var(--radius-button)', fontSize: '0.875rem', fontWeight: 500, alignSelf: 'flex-start' }}>
              <span style={{ fontSize: '1rem' }}>✦</span> {introduction.credibilityTag}
            </div>
          )}
        </section>
      )}

      {/* 2. Context & Constraints */}
      {context && (
        <section id="section-context" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Context</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p className="text-body" style={{ margin: 0 }}>
              {context.description}
            </p>
            {context.constraints && (
              <aside style={{ background: 'var(--bg-surface-hover)', padding: '32px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 className="text-subtitle" style={{ margin: 0 }}>Constraints</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {context.constraints.map((c, i) => (
                    <li key={i} className="text-body" style={{ color: 'var(--text-secondary)' }}>{c}</li>
                  ))}
                </ul>
              </aside>
            )}
            {context.comparisonTable && <DataTable {...context.comparisonTable} />}
          </div>
        </section>
      )}

      {/* 2b. Methodology */}
      {methodology && (
        <section id="section-methodology" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Methodology</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {methodology.description && (
              <p className="text-body" style={{ margin: 0 }}>{methodology.description}</p>
            )}
            {methodology.stats && methodology.stats.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                {methodology.stats.map((s, i) => (
                  <div key={i} style={{ flex: '1 1 150px', background: 'var(--bg-surface-hover)', padding: '24px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span className="text-caption" style={{ color: 'var(--accent-primary)' }}>{s.label}</span>
                    <span className="text-body" style={{ fontWeight: 600, margin: 0 }}>{s.value}</span>
                  </div>
                ))}
              </div>
            )}
            {methodology.phases && methodology.phases.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 className="text-subtitle" style={{ margin: 0 }}>Phases</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {methodology.phases.map((p, i) => (
                    <li key={i} className="text-body"><strong>{p.title}:</strong> {p.description}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Problem Framing */}
      {problem && (
        <section id="section-problem" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '12px', padding: '16px 20px', background: 'var(--accent-soft)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-card)', alignSelf: 'flex-start' }}>
            <span style={{ fontSize: '1.25rem', marginTop: '2px' }}>✦</span>
            <span className="text-body" style={{ fontWeight: 500, margin: 0, color: 'var(--accent-primary)' }}>
              {problem.howMightWe}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {problem.observations && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 className="text-subtitle" style={{ margin: 0 }}>Observations</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {problem.observations.map((obs, i) => (
                    <li key={i} className="text-body">{obs}</li>
                  ))}
                </ul>
              </div>
            )}
            {problem.impact && (
              <p className="text-body" style={{ fontWeight: 500, padding: '24px', borderLeft: '3px solid var(--border-subtle)', background: 'var(--bg-surface-hover)', margin: 0 }}>
                <strong>Impact:</strong> {problem.impact}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 4. Before/After */}
      {beforeAfter && (beforeAfter.before || beforeAfter.after) && (
        <section id="section-beforeAfter" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Before & After</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {beforeAfter.before && (
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  onClick={() => beforeAfter.before.image && setLightbox({ src: beforeAfter.before.image, alt: beforeAfter.before.caption })}
                  style={{ aspectRatio: '16/9', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)', overflow: 'hidden', cursor: beforeAfter.before.image ? 'zoom-in' : 'default' }}
                >
                  {beforeAfter.before.image ? <img src={beforeAfter.before.image} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <span className="text-caption">No Image</span>}
                </div>
                <span className="text-caption" style={imageCaptionStyle}>Before: {beforeAfter.before.caption}</span>
              </div>
            )}
            {beforeAfter.after && (
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  onClick={() => beforeAfter.after.image && setLightbox({ src: beforeAfter.after.image, alt: beforeAfter.after.caption })}
                  style={{ aspectRatio: '16/9', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)', overflow: 'hidden', cursor: beforeAfter.after.image ? 'zoom-in' : 'default' }}
                >
                  {beforeAfter.after.image ? <img src={beforeAfter.after.image} alt="After" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <span className="text-caption">No Image</span>}
                </div>
                <span className="text-caption" style={imageCaptionStyle}>After: {beforeAfter.after.caption}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. User & Needs */}
      {users && (
        <section id="section-users" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>User Needs</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {users.goals && (
              <div style={{ flex: '1 1 250px', background: 'var(--bg-surface-hover)', padding: '32px', borderRadius: 'var(--radius-card)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h4 className="text-subtitle" style={{ margin: 0 }}>Goals</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {users.goals.map((g, i) => (
                    <li key={i} className="text-body">{g}</li>
                  ))}
                </ul>
              </div>
            )}
            {users.painPoints && (
              <div style={{ flex: '1 1 250px', background: 'var(--bg-surface-hover)', padding: '32px', borderRadius: 'var(--radius-card)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h4 className="text-subtitle" style={{ margin: 0 }}>Pain Points</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {users.painPoints.map((p, i) => (
                    <li key={i} className="text-body">{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Key Insights */}
      {insights && insights.length > 0 && (
        <section id="section-insights" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Key Insights</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {insights.map((insight, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p className="text-subtitle" style={{ color: 'var(--text-primary)', margin: 0, fontWeight: 600 }}>
                  {insight.reframe}
                </p>
                <p className="text-body" style={{ margin: 0 }}>
                  {insight.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Solution */}
      {solution && solution.steps && (
        <section id="section-solution" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Implementation</h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {solution.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'stretch' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-surface-active)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'var(--accent-primary)', fontSize: '1.25rem', zIndex: 1, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  {i < solution.steps.length - 1 && (
                    <div style={{ width: '2px', flexGrow: 1, background: 'var(--border-subtle)', margin: '8px 0' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < solution.steps.length - 1 ? '32px' : '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 className="text-subtitle" style={{ margin: 0 }}>{step.title}</h4>
                  <p className="text-body" style={{ margin: 0 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {solution.diagram && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <div
                onClick={() => solution.diagram.image && setLightbox({ src: solution.diagram.image, alt: solution.diagram.caption })}
                style={{ width: '100%', maxWidth: '480px', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border-subtle)', cursor: solution.diagram.image ? 'zoom-in' : 'default' }}
              >
                {solution.diagram.image ? <img src={solution.diagram.image} alt={solution.diagram.caption} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} /> : <span className="text-caption">No Image Available</span>}
              </div>
              {solution.diagram.caption && <p className="text-caption" style={imageCaptionStyle}>{solution.diagram.caption}</p>}
            </div>
          )}
          {solution.progressionTable && (
            <div style={{ marginTop: '8px' }}>
              <DataTable {...solution.progressionTable} />
            </div>
          )}
        </section>
      )}

      {/* 8. Visuals/Screenshots */}
      {((visuals && visuals.length > 0) || deeperArchitecture) && (
        <section id="section-visuals" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Visuals</h3>
          {visuals && visuals.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {visuals.map((v, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    onClick={() => v.image && setLightbox({ src: v.image, alt: v.caption })}
                    style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border-subtle)', cursor: v.image ? 'zoom-in' : 'default' }}
                  >
                    {v.image ? <img src={v.image} alt={v.caption} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <span className="text-caption">No Image Available</span>}
                  </div>
                  {v.caption && <p className="text-caption" style={imageCaptionStyle}>{v.caption}</p>}
                </div>
              ))}
            </div>
          )}

          {deeperArchitecture && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => setArchOpen(!archOpen)}
                className="text-subtitle"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start',
                  background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '8px 0'
                }}
              >
                <span style={{ color: 'var(--accent-primary)', transition: 'transform 0.2s', transform: archOpen ? 'rotate(90deg)' : 'none', display: 'inline-block' }}>▸</span>
                {deeperArchitecture.label || 'Deeper Architecture'}
              </button>
              {archOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    onClick={() => deeperArchitecture.image && setLightbox({ src: deeperArchitecture.image, alt: deeperArchitecture.caption })}
                    style={{ width: '100%', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border-subtle)', cursor: deeperArchitecture.image ? 'zoom-in' : 'default' }}
                  >
                    {deeperArchitecture.image ? <img src={deeperArchitecture.image} alt={deeperArchitecture.caption} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} /> : <span className="text-caption">No Image Available</span>}
                  </div>
                  {deeperArchitecture.caption && <p className="text-caption" style={imageCaptionStyle}>{deeperArchitecture.caption}</p>}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* 9. Outcome & Impact */}
      {outcome && (
        <section id="section-outcome" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h3 className="text-title" style={{ margin: 0 }}>Outcome & Impact</h3>
          {outcome.chart && <BarChart {...outcome.chart} />}
          {outcome.description && (
            <p className="text-body" style={{ margin: 0 }}>{outcome.description}</p>
          )}
          {outcome.metrics && outcome.metrics.length > 0 && (
            <div className="outcome-metrics-grid">
              {outcome.metrics.map((m, i) => (
                <div key={i} style={{ minWidth: 0, background: 'var(--bg-surface-hover)', padding: '32px 24px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '12px' }}>
                  <span style={{ fontSize: 'clamp(1.5rem, 1.5vw + 1rem, 2.25rem)', fontWeight: 700, color: 'var(--accent-primary)', lineHeight: 1.1, whiteSpace: 'nowrap' }}>{m.value}</span>
                  <span className="text-caption" style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', margin: 0 }}>{m.label}</span>
                  {m.detail && <span className="text-caption" style={{ color: 'var(--text-tertiary)', textTransform: 'none', margin: 0 }}>{m.detail}</span>}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 10. Reflection */}
      {reflection && reflection.lessons && (
        <section id="section-reflection">
          <div style={{ background: 'var(--surface-philosophy)', border: '1px solid var(--border-philosophy)', padding: '40px', borderRadius: 'var(--radius-card)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h3 className="text-title" style={{ margin: 0, color: 'var(--text-primary)' }}>Lessons Learned</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {reflection.lessons.map((lesson, i) => (
                <li key={i} className="text-body" style={{ color: 'var(--text-primary)' }}>{lesson}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}
