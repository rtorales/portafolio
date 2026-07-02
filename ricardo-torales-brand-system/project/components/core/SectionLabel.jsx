import React from 'react';

/**
 * SectionLabel — the uppercase eyebrow with a leading rule that
 * precedes every section title on the portfolio. On dark bands set
 * tone="onDark" to switch to the cyan glow color.
 */
export function SectionLabel({ children, tone = 'light', style = {}, ...rest }) {
  const color = tone === 'onDark' ? 'var(--color-glow)' : 'var(--color-accent)';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-sans)',
        fontSize: '.75rem',
        fontWeight: 700,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'block', width: '24px', height: '2px', background: color, borderRadius: '2px' }} />
      {children}
    </span>
  );
}
