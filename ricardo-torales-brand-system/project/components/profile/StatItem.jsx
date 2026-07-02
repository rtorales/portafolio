import React from 'react';

/**
 * StatItem — big serif number + uppercase label, used in the stats bar.
 * Highlight a suffix (e.g. "+") with the accent color via `suffix`.
 */
export function StatItem({ value, suffix, label, style = {}, ...rest }) {
  return (
    <div style={{ padding: '0 24px', textAlign: 'center', ...style }} {...rest}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.2rem',
          fontWeight: 700,
          color: 'var(--color-brand)',
          lineHeight: 1,
          marginBottom: '4px',
        }}
      >
        {value}
        {suffix ? <span style={{ color: 'var(--color-accent)' }}>{suffix}</span> : null}
      </div>
      <div
        style={{
          fontSize: '.82rem',
          fontWeight: 500,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '.06em',
        }}
      >
        {label}
      </div>
    </div>
  );
}
