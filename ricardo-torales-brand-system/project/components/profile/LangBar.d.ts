import * as React from 'react';

export interface LangBarProps {
  name: string;
  /** Level label, e.g. "Nativo", "Intermedio". */
  level: string;
  /** Fill percent 0–100. @default 100 */
  value?: number;
  style?: React.CSSProperties;
}

/** Labelled proficiency meter for languages/skills. */
export function LangBar(props: LangBarProps): JSX.Element;
