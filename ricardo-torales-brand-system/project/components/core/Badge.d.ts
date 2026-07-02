import * as React from 'react';

export interface BadgeProps {
  /** Semantic tone. @default "neutral" */
  tone?: 'success' | 'gold' | 'accent' | 'neutral';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Animate the dot (pulse). @default false */
  pulse?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/** Uppercase status/label pill with optional leading dot. */
export function Badge(props: BadgeProps): JSX.Element;
