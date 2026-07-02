import * as React from 'react';

export interface StatItemProps {
  /** The number/metric. */
  value: React.ReactNode;
  /** Accent-colored suffix, e.g. "+". */
  suffix?: string;
  /** Uppercase caption. */
  label: string;
  style?: React.CSSProperties;
}

/** Big serif metric + uppercase label for the stats bar. */
export function StatItem(props: StatItemProps): JSX.Element;
