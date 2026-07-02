import React from 'react';
import { Badge } from '../core/Badge.jsx';

/**
 * TimelineItem — one entry on the experience timeline. Renders the dot,
 * company + role header, period pill, optional context line, and a
 * bulleted list. `current` highlights the entry (accent dot + tinted card).
 */
export function TimelineItem({
  company,
  role,
  period,
  context,
  bullets = [],
  current = false,
  currentLabel = 'Activo',
  style = {},
  ...rest
}) {
  return (
    <article style={{ position: 'relative', marginBottom: '40px', ...style }} {...rest}>
      {/* dot */}
      <div
        style={{
          position: 'absolute',
          left: '-28px',
          top: '8px',
          width: '20px',
          height: '20px',
          background: current ? 'var(--color-accent)' : 'var(--surface-card)',
          border: `3px solid ${current ? 'var(--color-accent)' : 'var(--color-brand)'}`,
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      <div
        style={{
          background: current ? 'var(--zinc-100)' : 'var(--surface-page)',
          border: `1px solid ${current ? 'var(--zinc-300)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-lg)',
          padding: '24px 28px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '4px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--color-brand)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {company}
              {current ? <Badge tone="success" dot pulse>{currentLabel}</Badge> : null}
            </div>
            <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text-body)', marginTop: '2px' }}>
              {role}
            </div>
          </div>
          {period ? <Badge tone="accent">{period}</Badge> : null}
        </div>
        {context ? (
          <div style={{ fontSize: '.82rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: '6px 0 14px' }}>
            {context}
          </div>
        ) : null}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {bullets.map((b, i) => (
            <li
              key={i}
              style={{
                position: 'relative',
                paddingLeft: '18px',
                fontSize: '.9rem',
                color: 'var(--text-body)',
                marginBottom: '7px',
                lineHeight: 1.6,
              }}
            >
              <span style={{ position: 'absolute', left: 0, top: '3px', color: 'var(--color-accent)', fontSize: '.75rem' }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
