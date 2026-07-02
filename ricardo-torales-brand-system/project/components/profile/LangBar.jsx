import React from 'react';

/**
 * LangBar — labelled proficiency meter (language + level + fill bar).
 * `value` is 0–100. Gradient fill (navy → accent).
 */
export function LangBar({ name, level, value = 100, style = {}, ...rest }) {
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.85rem', marginBottom: '5px' }}>
        <span style={{ fontWeight: 600, color: 'var(--color-brand)' }}>{name}</span>
        <span style={{ color: 'var(--text-muted)' }}>{level}</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border-default)', borderRadius: '2px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${value}%`,
            background: 'linear-gradient(90deg, var(--color-brand), var(--color-accent))',
            borderRadius: '2px',
          }}
        />
      </div>
    </div>
  );
}
