import React from 'react';

/**
 * Tag — small pill/chip for skills, technologies, keywords.
 * `solid` = light slate chip (light bg). `onDark` = translucent (hero).
 */
export function Tag({ children, tone = 'solid', style = {}, ...rest }) {
  const tones = {
    solid: {
      background: 'var(--surface-subtle)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
    },
    onDark: {
      background: 'rgba(255,255,255,.10)',
      color: 'rgba(255,255,255,.85)',
      border: '1px solid rgba(255,255,255,.15)',
    },
    accent: {
      background: 'var(--info-100)',
      color: 'var(--color-accent)',
      border: '1px solid var(--info-200)',
    },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: '.775rem',
        fontWeight: 500,
        padding: tone === 'onDark' ? '4px 12px' : '4px 10px',
        borderRadius: tone === 'onDark' ? 'var(--radius-pill)' : 'var(--radius-sm)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
