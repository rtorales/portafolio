import * as React from 'react';

export interface ButtonProps {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'white' | 'outline' | 'ghost';
  /** Control size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor when provided. */
  href?: string;
  /** Icon element rendered before the label. */
  icon?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Primary action control. Use `primary` (solid navy) on light surfaces,
 * `white`/`outline` on the dark hero/contact bands, `ghost` for tertiary.
 *
 * @startingPoint section="Core" subtitle="Branded action button, 5 variants" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
