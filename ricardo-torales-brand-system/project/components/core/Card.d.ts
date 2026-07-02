import * as React from 'react';

export interface CardProps {
  /** Enable hover lift + shadow. @default false */
  interactive?: boolean;
  /** Render the tinted highlight-box (left accent border) treatment. @default false */
  accent?: boolean;
  /** Surface tone. @default "card" */
  tone?: 'card' | 'subtle';
  /** CSS padding shorthand. @default "24px" */
  padding?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Base surface container — white card with slate border + 12px radius.
 * @startingPoint section="Core" subtitle="Surface container with hover + accent modes" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
