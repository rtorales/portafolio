import * as React from 'react';

export interface SectionLabelProps {
  /** Surface context. @default "light" */
  tone?: 'light' | 'onDark';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/** Uppercase eyebrow with leading rule, precedes section titles. */
export function SectionLabel(props: SectionLabelProps): JSX.Element;
