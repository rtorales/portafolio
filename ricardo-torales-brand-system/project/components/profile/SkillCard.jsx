import React from 'react';
import { Tag } from '../core/Tag.jsx';

/**
 * SkillCard — competency card with a gradient icon tile, title, and a
 * wrap of skill Tags. Hover lifts. Pass `icon` (an svg/element) and
 * `skills` (array of strings).
 */
export function SkillCard({ icon, title, skills = [], style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        transition: 'box-shadow var(--dur-fast), transform var(--dur-fast)',
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          background: 'var(--gradient-icon)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          color: 'var(--color-brand)',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--color-brand)',
          marginBottom: '14px',
        }}
      >
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
        {skills.map((s, i) => (
          <Tag key={i}>{s}</Tag>
        ))}
      </div>
    </div>
  );
}
