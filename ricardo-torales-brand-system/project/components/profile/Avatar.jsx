import React from 'react';

/**
 * Avatar — circular portrait with the signature gradient ring used in the
 * hero. `size` in px. Pass `src` + `alt`. Set `ring={false}` for a plain
 * bordered avatar.
 */
export function Avatar({ src, alt = '', size = 260, ring = true, style = {}, ...rest }) {
  const img = (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
        display: 'block',
      }}
    />
  );
  if (!ring) {
    return (
      <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border-default)', ...style }} {...rest}>
        {img}
      </div>
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        padding: '5px',
        background: 'var(--gradient-accent)',
        boxShadow: 'var(--shadow-photo)',
        ...style,
      }}
      {...rest}
    >
      {img}
    </div>
  );
}
