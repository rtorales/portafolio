import * as React from 'react';

export interface TagProps {
  /** Chip style. @default "solid" */
  tone?: 'solid' | 'onDark' | 'accent';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/** Small pill/chip for skills, technologies, keywords. */
export function Tag(props: TagProps): JSX.Element;
