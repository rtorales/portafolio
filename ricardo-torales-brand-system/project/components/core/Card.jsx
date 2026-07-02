import React from 'react';

/**
 * Card — base surface container. `interactive` adds the hover lift used
 * across skill/cert cards. `accent` renders the highlight-box treatment
 * (tinted bg + left accent border). `tone="subtle"` uses the page bg.
 */
export function Card({
  children,
  interactive = false,
  accent = false,
  tone = 'card',
  padding = '24px',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  if (accent) {
    return (
      <div
        style={{
          background: 'var(--surface-subtle)',
          borderLeft: '3px solid var(--ink-900)',
          borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
          padding: '20px 24px',
          color: 'var(--color-brand)',
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: tone === 'subtle' ? 'var(--surface-page)' : 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding,
        transition: 'box-shadow var(--dur-fast), transform var(--dur-fast)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
