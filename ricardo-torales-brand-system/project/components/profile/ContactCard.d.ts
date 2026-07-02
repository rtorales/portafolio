import * as React from 'react';

export interface ContactCardProps {
  icon?: React.ReactNode;
  /** Renders as a link when set. */
  href?: string;
  /** Surface context. @default "onDark" */
  tone?: 'onDark' | 'light';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/** Icon + text contact row; translucent on dark, bordered card on light. */
export function ContactCard(props: ContactCardProps): JSX.Element;
