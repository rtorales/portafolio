import * as React from 'react';

export interface AvatarProps {
  src: string;
  alt?: string;
  /** Diameter in px. @default 260 */
  size?: number;
  /** Gradient ring (hero style) vs plain border. @default true */
  ring?: boolean;
  style?: React.CSSProperties;
}

/** Circular portrait with the signature cyan→blue gradient ring. */
export function Avatar(props: AvatarProps): JSX.Element;
