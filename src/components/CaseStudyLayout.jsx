import React from 'react';

export default function CaseStudyLayout({ data }) {
  if (!data) return null;

  const {
    introduction,
    context,
    problem,
    beforeAfter,
    users,
    insights,
    solution,
    visuals,
    outcome,
    reflection
  } = data;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingBottom: '32px' }}>
      
      {/* 1. Introduction */}
      {introduction && (
        <section>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '32px', fontWeight: 500, color: 'var(--text-primary)' }}>
            {introduction.summary}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '24px', padding: '24px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            {Object.entries(introduction.metadata || {}).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', minWidth: '120px' }}>
                <span className="text-caption" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>{key}</span>
                <span className="text-body" style={{ fontWeight: 500, margin: 0 }}>{value}</span>
              </div>
            ))}
          </div>
          {introduction.credibilityTag && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: 'var(--radius-button)', fontSize: '0.875rem', fontWeight: 500 }}>
              <span style={{ fontSize: '1rem' }}>✦</span> {introduction.credibilityTag}
            </div>
          )}
        </section>
      )}

      {/* 2. Context & Constraints */}
      {context && (
        <section id="section-context">
          <h3 className="text-title" style={{ marginBottom: '16px' }}>Context</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
            <p className="text-body" style={{ flex: '1 1 300px', margin: 0 }}>
              {context.description}
            </p>
            {context.constraints && (
              <aside style={{ flex: '1 1 250px', background: 'var(--bg-surface-hover)', padding: '24px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)' }}>
                <h4 className="text-subtitle" style={{ marginBottom: '12px' }}>Constraints</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {context.constraints.map((c, i) => (
                    <li key={i} className="text-body" style={{ color: 'var(--text-secondary)' }}>{c}</li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      )}

      {/* 3. Problem Framing */}
      {problem && (
        <section id="section-problem">
          <h3 className="text-title" style={{ color: 'var(--accent-primary)', marginBottom: '24px', fontSize: 'clamp(1.5rem, 2vw + 1rem, 2rem)' }}>
            "{problem.howMightWe}"
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {problem.observations && (
              <div>
                <h4 className="text-subtitle" style={{ marginBottom: '12px' }}>Observations</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {problem.observations.map((obs, i) => (
                    <li key={i} className="text-body">{obs}</li>
                  ))}
                </ul>
              </div>
            )}
            {problem.impact && (
              <p className="text-body" style={{ fontWeight: 500, padding: '16px', borderLeft: '3px solid var(--border-subtle)', background: 'var(--bg-surface-hover)', margin: 0 }}>
                <strong>Impact:</strong> {problem.impact}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 4. Before/After */}
      {beforeAfter && (beforeAfter.before || beforeAfter.after) && (
        <section id="section-beforeAfter">
          <h3 className="text-title" style={{ marginBottom: '24px' }}>Before & After</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-grid)' }}>
            {beforeAfter.before && (
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ aspectRatio: '16/9', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                  {beforeAfter.before.image ? <img src={beforeAfter.before.image} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span className="text-caption">No Image</span>}
                </div>
                <span className="text-caption" style={{ color: 'var(--text-secondary)' }}>Before: {beforeAfter.before.caption}</span>
              </div>
            )}
            {beforeAfter.after && (
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ aspectRatio: '16/9', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-active)', overflow: 'hidden' }}>
                  {beforeAfter.after.image ? <img src={beforeAfter.after.image} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span className="text-caption">No Image</span>}
                </div>
                <span className="text-caption" style={{ color: 'var(--text-secondary)' }}>After: {beforeAfter.after.caption}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. User & Needs */}
      {users && (
        <section id="section-users">
          <h3 className="text-title" style={{ marginBottom: '24px' }}>User Needs</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-grid)' }}>
            {users.goals && (
              <div style={{ flex: '1 1 250px', background: 'var(--bg-surface-hover)', padding: '24px', borderRadius: 'var(--radius-card)' }}>
                <h4 className="text-subtitle" style={{ marginBottom: '16px' }}>Goals</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {users.goals.map((g, i) => (
                    <li key={i} className="text-body">{g}</li>
                  ))}
                </ul>
              </div>
            )}
            {users.painPoints && (
              <div style={{ flex: '1 1 250px', background: 'var(--bg-surface-hover)', padding: '24px', borderRadius: 'var(--radius-card)' }}>
                <h4 className="text-subtitle" style={{ marginBottom: '16px' }}>Pain Points</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
        <section id="section-insights">
          <h3 className="text-title" style={{ marginBottom: '24px' }}>Key Insights</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {insights.map((insight, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '20px' }}>
                <p className="text-subtitle" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>
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
        <section id="section-solution">
          <h3 className="text-title" style={{ marginBottom: '24px' }}>Implementation</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {solution.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-surface-active)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: 'var(--accent-primary)', fontSize: '1.25rem' }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-subtitle" style={{ marginBottom: '8px' }}>{step.title}</h4>
                  <p className="text-body" style={{ margin: 0 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Visuals/Screenshots */}
      {visuals && visuals.length > 0 && (
        <section id="section-visuals">
          <h3 className="text-title" style={{ marginBottom: '24px' }}>Visuals</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {visuals.map((v, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                  {v.image ? <img src={v.image} alt={v.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span className="text-caption">No Image Available</span>}
                </div>
                {v.caption && <p className="text-caption" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>{v.caption}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Outcome & Impact */}
      {outcome && (
        <section id="section-outcome">
          <h3 className="text-title" style={{ marginBottom: '24px' }}>Outcome & Impact</h3>
          {outcome.description && (
            <p className="text-body" style={{ marginBottom: '32px' }}>{outcome.description}</p>
          )}
          {outcome.metrics && outcome.metrics.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-grid)' }}>
              {outcome.metrics.map((m, i) => (
                <div key={i} style={{ flex: '1 1 150px', background: 'var(--bg-surface-hover)', padding: '32px 24px', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '12px' }}>{m.value}</span>
                  <span className="text-caption" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 10. Reflection */}
      {reflection && reflection.lessons && (
        <section id="section-reflection">
          <div style={{ background: 'var(--surface-philosophy)', border: '1px solid var(--border-philosophy)', padding: '32px', borderRadius: 'var(--radius-card)' }}>
            <h3 className="text-title" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>Lessons Learned</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {reflection.lessons.map((lesson, i) => (
                <li key={i} className="text-body" style={{ color: 'var(--text-primary)' }}>{lesson}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

    </div>
  );
}
