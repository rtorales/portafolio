import * as React from 'react';

export interface TimelineItemProps {
  company: string;
  role: string;
  /** Period pill, e.g. "2026 – Actualidad". */
  period?: string;
  /** Italic context line under the header. */
  context?: string;
  /** Achievement bullets. */
  bullets?: string[];
  /** Highlight as the current role (accent dot + tinted card + badge). @default false */
  current?: boolean;
  /** Label for the current badge. @default "Activo" */
  currentLabel?: string;
  style?: React.CSSProperties;
}

/**
 * One entry in the experience timeline. Wrap items in a container with the
 * left rail (2px gradient line) — see the Profile UI kit.
 */
export function TimelineItem(props: TimelineItemProps): JSX.Element;
