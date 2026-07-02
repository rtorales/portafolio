import React from 'react';

/**
 * Badge — status/label indicator with an optional leading dot.
 * Tones: success (green, "Activo"/available), gold (distinction/beca),
 * accent (period pill), neutral. Set `dot` for a leading indicator,
 * `pulse` to animate it.
 */
export function Badge({ children, tone = 'neutral', dot = false, pulse = false, style = {}, ...rest }) {
  const tones = {
    success: { bg: 'var(--success-100)', fg: 'var(--success-600)', bd: 'var(--success-300)', dot: 'var(--success-400)' },
    gold:    { bg: 'var(--gold-100)',    fg: 'var(--gold-700)',    bd: 'var(--gold-200)',    dot: 'var(--gold-600)' },
    accent:  { bg: 'var(--info-100)',    fg: 'var(--color-accent)',bd: 'var(--info-200)',    dot: 'var(--color-accent)' },
    neutral: { bg: 'var(--surface-subtle)', fg: 'var(--text-muted)', bd: 'var(--border-default)', dot: 'var(--text-muted)' },
  };
  const t = tones[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dot ? '6px' : 0,
        fontFamily: 'var(--font-sans)',
        fontSize: '.72rem',
        fontWeight: 700,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        padding: '3px 10px',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        ...style,
      }}
      {...rest}
    >
      {dot ? (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: t.dot,
            flexShrink: 0,
            animation: pulse ? 'rt-pulse 2s infinite' : 'none',
          }}
        />
      ) : null}
      {children}
    </span>
  );
}
