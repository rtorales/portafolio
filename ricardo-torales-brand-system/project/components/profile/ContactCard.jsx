import React from 'react';

/**
 * ContactCard — icon + text row used in the contact band. Renders as an
 * anchor when `href` is given. `tone="onDark"` for the navy contact section.
 */
export function ContactCard({ icon, children, href, tone = 'onDark', style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const onDark = tone === 'onDark';
  const base = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '20px 28px',
    borderRadius: 'var(--radius-lg)',
    fontFamily: 'var(--font-sans)',
    fontSize: '.92rem',
    fontWeight: 500,
    textDecoration: 'none',
    minWidth: '200px',
    transition: 'all var(--dur-fast)',
    background: onDark
      ? (hover ? 'rgba(255,255,255,.15)' : 'rgba(255,255,255,.08)')
      : 'var(--surface-card)',
    border: onDark
      ? `1px solid ${hover ? 'rgba(255,255,255,.3)' : 'rgba(255,255,255,.15)'}`
      : '1px solid var(--border-default)',
    color: onDark ? '#fff' : 'var(--text-body)',
    transform: hover ? 'translateY(-2px)' : 'none',
    boxShadow: !onDark && hover ? 'var(--shadow-sm)' : 'none',
    ...style,
  };
  const El = href ? 'a' : 'div';
  return (
    <El
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={base}
      {...rest}
    >
      <span style={{ flexShrink: 0, opacity: onDark ? 0.85 : 1, color: onDark ? '#fff' : 'var(--color-accent)', display: 'inline-flex' }}>
        {icon}
      </span>
      {children}
    </El>
  );
}
