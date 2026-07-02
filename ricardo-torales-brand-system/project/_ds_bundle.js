/* @ds-bundle: {"format":3,"namespace":"RicardoToralesBrandSystem_e0aacc","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/profile/Avatar.jsx"},{"name":"ContactCard","sourcePath":"components/profile/ContactCard.jsx"},{"name":"LangBar","sourcePath":"components/profile/LangBar.jsx"},{"name":"SkillCard","sourcePath":"components/profile/SkillCard.jsx"},{"name":"StatItem","sourcePath":"components/profile/StatItem.jsx"},{"name":"TimelineItem","sourcePath":"components/profile/TimelineItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"193d8fb7c0a3","components/core/Button.jsx":"88ab3e38fa07","components/core/Card.jsx":"e08358950290","components/core/SectionLabel.jsx":"519f659be4d7","components/core/Tag.jsx":"0ad0af5a5f61","components/profile/Avatar.jsx":"953d9cc8c9dd","components/profile/ContactCard.jsx":"557dd77f5b05","components/profile/LangBar.jsx":"df174be3a723","components/profile/SkillCard.jsx":"603331f50566","components/profile/StatItem.jsx":"25bcaa591680","components/profile/TimelineItem.jsx":"5ef80cfe2c1e","ui_kits/portfolio/icons.jsx":"f05529fcd971","ui_kits/portfolio/sections.jsx":"de8b1a0d17cc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RicardoToralesBrandSystem_e0aacc = window.RicardoToralesBrandSystem_e0aacc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — status/label indicator with an optional leading dot.
 * Tones: success (green, "Activo"/available), gold (distinction/beca),
 * accent (period pill), neutral. Set `dot` for a leading indicator,
 * `pulse` to animate it.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  pulse = false,
  style = {},
  ...rest
}) {
  const tones = {
    success: {
      bg: 'var(--success-100)',
      fg: 'var(--success-600)',
      bd: 'var(--success-300)',
      dot: 'var(--success-400)'
    },
    gold: {
      bg: 'var(--gold-100)',
      fg: 'var(--gold-700)',
      bd: 'var(--gold-200)',
      dot: 'var(--gold-600)'
    },
    accent: {
      bg: 'var(--info-100)',
      fg: 'var(--color-accent)',
      bd: 'var(--info-200)',
      dot: 'var(--color-accent)'
    },
    neutral: {
      bg: 'var(--surface-subtle)',
      fg: 'var(--text-muted)',
      bd: 'var(--border-default)',
      dot: 'var(--text-muted)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0,
      animation: pulse ? 'rt-pulse 2s infinite' : 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for the Ricardo Torales brand.
 * Variants map to the portfolio site: solid navy, white (on dark),
 * outline (on dark), and ghost. Sizes sm / md / lg.
 */
function Button({
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
    sm: {
      padding: '7px 16px',
      fontSize: '.85rem',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '.9rem',
      gap: '8px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '1rem',
      gap: '9px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: '#fff',
      border: '1.5px solid var(--color-brand)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: '#fff',
      border: '1.5px solid var(--color-accent)'
    },
    white: {
      background: '#fff',
      color: 'var(--color-brand)',
      border: '1.5px solid #fff'
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,.4)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-brand)',
      border: '1.5px solid var(--border-default)'
    }
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
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base surface container. `interactive` adds the hover lift used
 * across skill/cert cards. `accent` renders the highlight-box treatment
 * (tinted bg + left accent border). `tone="subtle"` uses the page bg.
 */
function Card({
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
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        background: 'var(--surface-subtle)',
        borderLeft: '3px solid var(--ink-900)',
        borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
        padding: '20px 24px',
        color: 'var(--color-brand)',
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: tone === 'subtle' ? 'var(--surface-page)' : 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      transition: 'box-shadow var(--dur-fast), transform var(--dur-fast)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the uppercase eyebrow with a leading rule that
 * precedes every section title on the portfolio. On dark bands set
 * tone="onDark" to switch to the cyan glow color.
 */
function SectionLabel({
  children,
  tone = 'light',
  style = {},
  ...rest
}) {
  const color = tone === 'onDark' ? 'var(--color-glow)' : 'var(--color-accent)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: '.75rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '24px',
      height: '2px',
      background: color,
      borderRadius: '2px'
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small pill/chip for skills, technologies, keywords.
 * `solid` = light slate chip (light bg). `onDark` = translucent (hero).
 */
function Tag({
  children,
  tone = 'solid',
  style = {},
  ...rest
}) {
  const tones = {
    solid: {
      background: 'var(--surface-subtle)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    onDark: {
      background: 'rgba(255,255,255,.10)',
      color: 'rgba(255,255,255,.85)',
      border: '1px solid rgba(255,255,255,.15)'
    },
    accent: {
      background: 'var(--info-100)',
      color: 'var(--color-accent)',
      border: '1px solid var(--info-200)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: '.775rem',
      fontWeight: 500,
      padding: tone === 'onDark' ? '4px 12px' : '4px 10px',
      borderRadius: tone === 'onDark' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/profile/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular portrait with the signature gradient ring used in the
 * hero. `size` in px. Pass `src` + `alt`. Set `ring={false}` for a plain
 * bordered avatar.
 */
function Avatar({
  src,
  alt = '',
  size = 260,
  ring = true,
  style = {},
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    width: size,
    height: size,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  });
  if (!ring) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid var(--border-default)',
        ...style
      }
    }, rest), img);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      padding: '5px',
      background: 'var(--gradient-accent)',
      boxShadow: 'var(--shadow-photo)',
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/profile/ContactCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ContactCard — icon + text row used in the contact band. Renders as an
 * anchor when `href` is given. `tone="onDark"` for the navy contact section.
 */
function ContactCard({
  icon,
  children,
  href,
  tone = 'onDark',
  style = {},
  ...rest
}) {
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
    background: onDark ? hover ? 'rgba(255,255,255,.15)' : 'rgba(255,255,255,.08)' : 'var(--surface-card)',
    border: onDark ? `1px solid ${hover ? 'rgba(255,255,255,.3)' : 'rgba(255,255,255,.15)'}` : '1px solid var(--border-default)',
    color: onDark ? '#fff' : 'var(--text-body)',
    transform: hover ? 'translateY(-2px)' : 'none',
    boxShadow: !onDark && hover ? 'var(--shadow-sm)' : 'none',
    ...style
  };
  const El = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(El, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      opacity: onDark ? 0.85 : 1,
      color: onDark ? '#fff' : 'var(--color-accent)',
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/profile/LangBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LangBar — labelled proficiency meter (language + level + fill bar).
 * `value` is 0–100. Gradient fill (navy → accent).
 */
function LangBar({
  name,
  level,
  value = 100,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '.85rem',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--color-brand)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, level)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '4px',
      background: 'var(--border-default)',
      borderRadius: '2px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${value}%`,
      background: 'linear-gradient(90deg, var(--color-brand), var(--color-accent))',
      borderRadius: '2px'
    }
  })));
}
Object.assign(__ds_scope, { LangBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/LangBar.jsx", error: String((e && e.message) || e) }); }

// components/profile/SkillCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SkillCard — competency card with a gradient icon tile, title, and a
 * wrap of skill Tags. Hover lifts. Pass `icon` (an svg/element) and
 * `skills` (array of strings).
 */
function SkillCard({
  icon,
  title,
  skills = [],
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      transition: 'box-shadow var(--dur-fast), transform var(--dur-fast)',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      background: 'var(--gradient-icon)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
      color: 'var(--color-brand)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1rem',
      fontWeight: 700,
      color: 'var(--color-brand)',
      marginBottom: '14px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '7px'
    }
  }, skills.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, s))));
}
Object.assign(__ds_scope, { SkillCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/SkillCard.jsx", error: String((e && e.message) || e) }); }

// components/profile/StatItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatItem — big serif number + uppercase label, used in the stats bar.
 * Highlight a suffix (e.g. "+") with the accent color via `suffix`.
 */
function StatItem({
  value,
  suffix,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '0 24px',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.2rem',
      fontWeight: 700,
      color: 'var(--color-brand)',
      lineHeight: 1,
      marginBottom: '4px'
    }
  }, value, suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, suffix) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.82rem',
      fontWeight: 500,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, label));
}
Object.assign(__ds_scope, { StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/profile/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TimelineItem — one entry on the experience timeline. Renders the dot,
 * company + role header, period pill, optional context line, and a
 * bulleted list. `current` highlights the entry (accent dot + tinted card).
 */
function TimelineItem({
  company,
  role,
  period,
  context,
  bullets = [],
  current = false,
  currentLabel = 'Activo',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      position: 'relative',
      marginBottom: '40px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-28px',
      top: '8px',
      width: '20px',
      height: '20px',
      background: current ? 'var(--color-accent)' : 'var(--surface-card)',
      border: `3px solid ${current ? 'var(--color-accent)' : 'var(--color-brand)'}`,
      borderRadius: '50%',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: current ? 'var(--zinc-100)' : 'var(--surface-page)',
      border: `1px solid ${current ? 'var(--zinc-300)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '16px',
      flexWrap: 'wrap',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: 'var(--color-brand)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, company, current ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    dot: true,
    pulse: true
  }, currentLabel) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.9rem',
      fontWeight: 600,
      color: 'var(--text-body)',
      marginTop: '2px'
    }
  }, role)), period ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, period) : null), context ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.82rem',
      color: 'var(--text-muted)',
      fontStyle: 'italic',
      margin: '6px 0 14px'
    }
  }, context) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: '18px',
      fontSize: '.9rem',
      color: 'var(--text-body)',
      marginBottom: '7px',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '3px',
      color: 'var(--color-accent)',
      fontSize: '.75rem'
    }
  }, "\u25B8"), b)))));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Heroicons-style outline icons (stroke) + brand glyphs, matching the
// portfolio source. Exposed on window for the kit's Babel scripts.
const RTIcon = ({
  d,
  size = 22,
  fill = false,
  viewBox = '0 0 24 24',
  children
}) => fill ? /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  fill: "currentColor",
  viewBox: viewBox
}, children || /*#__PURE__*/React.createElement("path", {
  d: d
})) : /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  fill: "none",
  viewBox: viewBox,
  stroke: "currentColor",
  strokeWidth: "2"
}, children || /*#__PURE__*/React.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: d
}));
const Icons = {
  mail: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })),
  phone: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  })),
  pin: p => /*#__PURE__*/React.createElement(RTIcon, p, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  })),
  linkedin: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    fill: true,
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  })),
  whatsapp: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    fill: true,
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  })),
  download: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  })),
  clipboard: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  })),
  stack: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
  })),
  bulb: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  })),
  users: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  })),
  cap: p => /*#__PURE__*/React.createElement(RTIcon, _extends({}, p, {
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 14l9-5-9-5-9 5 9 5z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  }))
};
window.Icons = Icons;
window.RTIcon = RTIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Portfolio UI kit — full-screen recreation of the Ricardo Torales site.
// Composes the design-system components + local icons. Exposes sections on window.
const DS = window.RicardoToralesBrandSystem_e0aacc;
const {
  Button,
  Tag,
  Badge,
  SectionLabel,
  Card,
  StatItem,
  SkillCard,
  TimelineItem,
  ContactCard,
  LangBar,
  Avatar
} = DS;
const I = window.Icons;
const wrap = {
  maxWidth: '1060px',
  margin: '0 auto',
  padding: '0 24px'
};
function Nav() {
  const links = ['Perfil', 'Competencias', 'Experiencia', 'Formación'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '1.05rem',
      color: 'var(--color-brand)',
      letterSpacing: '-.01em'
    }
  }, "Ricardo ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, "Torales")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '28px',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: '.875rem',
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Contactar"))));
}
function Hero() {
  const tags = ['Project Manager', 'Scrum Master', 'Dynamics 365', 'Azure AI', 'Salesforce', 'SAP B1', 'PMBOK', 'Power Platform'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--gradient-hero)',
      color: '#fff',
      padding: '88px 0 80px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.18)',
      borderRadius: '100px',
      padding: '5px 14px',
      fontSize: '.78rem',
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--cyan-400)',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      background: 'var(--cyan-400)',
      borderRadius: '50%',
      animation: 'rt-pulse 2s infinite'
    }
  }), "Gerente de Proyectos \xB7 Grupo Chacomer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.2rem,5vw,3.4rem)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-.02em',
      margin: '0 0 12px'
    }
  }, "Ricardo Torales"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1rem,2vw,1.2rem)',
      color: 'rgba(255,255,255,.75)',
      margin: '0 0 28px',
      lineHeight: 1.5
    }
  }, "Gerente de Proyectos Tecnol\xF3gicos", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--cyan-400)',
      fontWeight: 600
    }
  }, "Transformaci\xF3n Digital \xB7 Inteligencia Artificial \xB7 Gobernanza de TI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '36px'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "onDark"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    icon: /*#__PURE__*/React.createElement(I.whatsapp, {
      size: 16
    })
  }, "Contactarme"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(I.download, {
      size: 16
    })
  }, "Descargar CV (PDF)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, [[/*#__PURE__*/React.createElement(I.mail, {
    size: 14
  }), 'ricardotorales@outlook.com'], [/*#__PURE__*/React.createElement(I.phone, {
    size: 14
  }), '+595 981 226 529'], [/*#__PURE__*/React.createElement(I.linkedin, {
    size: 14
  }), 'linkedin.com/in/ricardo-torales'], [/*#__PURE__*/React.createElement(I.pin, {
    size: 14
  }), 'Asunción, Paraguay']].map(([ic, tx], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      fontSize: '.85rem',
      color: 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      display: 'inline-flex'
    }
  }, ic), tx)))), /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/ricardo-torales.jpeg",
    alt: "Ricardo Torales",
    size: 260
  }))));
}
function StatsBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)',
      padding: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex'
    }
  }, [['14', '+', 'Años de Experiencia'], ['3', '', 'Roles Simultáneos'], ['9', '+', 'Certificaciones'], ['2', '', 'Maestrías Completadas']].map(([v, s, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      borderRight: i < 3 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(StatItem, {
    value: v,
    suffix: s,
    label: l
  })))));
}
function Perfil() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: '64px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Sobre m\xED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,3vw,2.1rem)',
      fontWeight: 700,
      color: 'var(--color-brand)',
      lineHeight: 1.3,
      margin: '10px 0 16px'
    }
  }, "Perfil Profesional"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-body)',
      margin: '0 0 18px',
      lineHeight: 1.75
    }
  }, "Ejecutivo tecnol\xF3gico con m\xE1s de ", /*#__PURE__*/React.createElement("strong", null, "14 a\xF1os de trayectoria"), " liderando iniciativas de transformaci\xF3n digital de alto impacto en ERP, CRM e Inteligencia Artificial."), /*#__PURE__*/React.createElement(Card, {
    accent: true,
    style: {
      margin: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '.95rem',
      color: 'var(--color-brand)',
      fontWeight: 500,
      lineHeight: 1.65
    }
  }, "Actualmente ", /*#__PURE__*/React.createElement("strong", null, "Gerente de Proyectos en Grupo Chacomer"), ", Consultor Externo en Okara y Miembro Titular del Comit\xE9 de Selecci\xF3n de Proyectos del MITIC (Resoluci\xF3n N.\xB0 381/2025, fondos BID).")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.75
    }
  }, "Especialista en ", /*#__PURE__*/React.createElement("strong", null, "IA aplicada, hiperautomatizaci\xF3n y plataformas Microsoft Dynamics 365, Salesforce y SAP"), ". Scrum Master certificado con formaci\xF3n en PMBOK e ITIL.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '.8rem',
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 16px'
    }
  }, "Posici\xF3n actual"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--success-100)',
      border: '1px solid var(--success-200)',
      borderRadius: '8px',
      padding: '12px 16px',
      fontSize: '.875rem',
      fontWeight: 600,
      color: 'var(--success-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--success-500)',
      animation: 'rt-pulse 2s infinite'
    }
  }), "Gerente de Proyectos \xB7 Grupo Chacomer")), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '.8rem',
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 16px'
    }
  }, "Idiomas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(LangBar, {
    name: "Espa\xF1ol",
    level: "Nativo",
    value: 100
  }), /*#__PURE__*/React.createElement(LangBar, {
    name: "Ingl\xE9s",
    level: "Intermedio",
    value: 60
  }), /*#__PURE__*/React.createElement(LangBar, {
    name: "Portugu\xE9s",
    level: "Intermedio",
    value: 55
  }))))));
}
function Competencias() {
  const cards = [{
    icon: /*#__PURE__*/React.createElement(I.clipboard, null),
    title: 'Gestión de Proyectos & PMO',
    skills: ['PMBOK', 'ITIL', 'SCRUM', 'KANBAN', 'Design Thinking', 'Lean Six Sigma', 'Gobierno de TI']
  }, {
    icon: /*#__PURE__*/React.createElement(I.stack, null),
    title: 'Plataformas & Tecnologías',
    skills: ['Dynamics 365 F&O', 'Dynamics CRM', 'Salesforce', 'SAP B1', 'Azure AI', 'Power Platform', '.NET', 'Angular']
  }, {
    icon: /*#__PURE__*/React.createElement(I.bulb, null),
    title: 'IA & Automatización',
    skills: ['Azure AI', 'Copilot Studio', 'Machine Learning', 'RPA', 'Hiperautomatización', 'Low Code', 'BI']
  }, {
    icon: /*#__PURE__*/React.createElement(I.users, null),
    title: 'Liderazgo Ejecutivo',
    skills: ['Dirección de equipos +15', 'Gestión del cambio', 'Comunicación C-Level', 'Negociación', 'Reportes al directorio']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Habilidades"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,3vw,2.1rem)',
      fontWeight: 700,
      color: 'var(--color-brand)',
      lineHeight: 1.3,
      margin: '10px 0 16px'
    }
  }, "Competencias Clave"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-body)',
      maxWidth: '640px',
      margin: '0 0 48px'
    }
  }, "Integraci\xF3n de visi\xF3n estrat\xE9gica de negocio, gobernanza de TI y dominio t\xE9cnico en plataformas l\xEDderes del mercado global."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '20px'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(SkillCard, _extends({
    key: c.title
  }, c))))));
}
function Experiencia() {
  const items = [{
    current: true,
    company: 'Grupo Chacomer',
    role: 'Gerente de Proyectos de Tecnología',
    period: '2026 – Actualidad',
    context: 'Grupo empresarial líder en Paraguay · +3.000 colaboradores',
    bullets: ['Dirección estratégica de la agenda de transformación digital del Grupo.', 'Gobierno de proyectos de alto valor con gestión de presupuesto, riesgos y KPIs.', 'Liderazgo de equipos multidisciplinarios en implementaciones ERP, CRM e IA.']
  }, {
    company: 'Okara — Consultora Organizacional',
    role: 'Consultor Externo',
    period: '2024 – Actualidad',
    context: 'Consultora de referencia en Paraguay',
    bullets: ['Asesoría en transformación digital y optimización de procesos.', 'Diseño de soluciones de automatización a medida.']
  }, {
    company: 'MITIC — Comité de Selección',
    role: 'Miembro Titular (Sector Privado)',
    period: '2025',
    context: 'Resolución N.° 381/2025 · Fondos BID',
    bullets: ['Evaluación de proyectos tecnológicos con financiamiento BID.']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Trayectoria"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,3vw,2.1rem)',
      fontWeight: 700,
      color: 'var(--color-brand)',
      lineHeight: 1.3,
      margin: '10px 0 16px'
    }
  }, "Experiencia Profesional"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-body)',
      maxWidth: '640px',
      margin: '0 0 48px'
    }
  }, "M\xE1s de 14 a\xF1os dirigiendo transformaciones tecnol\xF3gicas de alto impacto en organizaciones l\xEDderes."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '9px',
      top: '8px',
      bottom: 0,
      width: '2px',
      background: 'linear-gradient(to bottom, var(--navy-800), var(--border-default))'
    }
  }), items.map(it => /*#__PURE__*/React.createElement(TimelineItem, _extends({
    key: it.company
  }, it))))));
}
function Contacto() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-hero)',
      color: '#fff',
      textAlign: 'center',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onDark"
  }, "Contacto")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,3vw,2.1rem)',
      fontWeight: 700,
      color: '#fff',
      margin: '12px 0 16px'
    }
  }, "Construyamos algo de alto impacto"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontSize: '1.05rem',
      maxWidth: '540px',
      margin: '0 auto 40px',
      lineHeight: 1.7
    }
  }, "Abierto a consultor\xEDa ejecutiva, alianzas estrat\xE9gicas y proyectos de transformaci\xF3n digital, IA y automatizaci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement(ContactCard, {
    icon: /*#__PURE__*/React.createElement(I.mail, {
      size: 18
    }),
    href: "#"
  }, "ricardotorales@outlook.com"), /*#__PURE__*/React.createElement(ContactCard, {
    icon: /*#__PURE__*/React.createElement(I.phone, {
      size: 18
    }),
    href: "#"
  }, "+595 981 226 529"), /*#__PURE__*/React.createElement(ContactCard, {
    icon: /*#__PURE__*/React.createElement(I.linkedin, {
      size: 18
    }),
    href: "#"
  }, "linkedin.com/in/ricardo-torales")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    icon: /*#__PURE__*/React.createElement(I.whatsapp, {
      size: 16
    })
  }, "Escribir por WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: /*#__PURE__*/React.createElement(I.download, {
      size: 16
    })
  }, "Descargar CV"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'rgba(255,255,255,.5)',
      textAlign: 'center',
      padding: '24px',
      fontSize: '.82rem'
    }
  }, "\xA9 2026 Ricardo Torales \xB7 Gerente de Tecnolog\xEDa & Consultor en Automatizaci\xF3n \xB7 Asunci\xF3n, Paraguay");
}
Object.assign(window, {
  Nav,
  Hero,
  StatsBar,
  Perfil,
  Competencias,
  Experiencia,
  Contacto,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.LangBar = __ds_scope.LangBar;

__ds_ns.SkillCard = __ds_scope.SkillCard;

__ds_ns.StatItem = __ds_scope.StatItem;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

})();
