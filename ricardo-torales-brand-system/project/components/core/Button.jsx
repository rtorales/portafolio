import React from 'react';

/**
 * Button — primary action control for the Ricardo Torales brand.
 * Variants map to the portfolio site: solid navy, white (on dark),
 * outline (on dark), and ghost. Sizes sm / md / lg.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight,
  children,
  disabled = false,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '7px 16px', fontSize: '.85rem', gap: '6px' },
    md: { padding: '12px 24px', fontSize: '.9rem', gap: '8px' },
    lg: { padding: '15px 30px', fontSize: '1rem', gap: '9px' },
  };

  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: '#fff',
      border: '1.5px solid var(--color-brand)',
    },
    accent: {
      background: 'var(--color-accent)',
      color: '#fff',
      border: '1.5px solid var(--color-accent)',
    },
    white: {
      background: '#fff',
      color: 'var(--color-brand)',
      border: '1.5px solid #fff',
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,.4)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-brand)',
      border: '1.5px solid var(--border-default)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    lineHeight: 1,
    transition: 'all var(--dur-fast) ease',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const inner = (
    <>
      {icon ? <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex', flexShrink: 0 }}>{iconRight}</span> : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} style={base} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} style={base} disabled={disabled} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
