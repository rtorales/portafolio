import * as React from 'react';

export interface SkillCardProps {
  /** Icon element for the gradient tile. */
  icon?: React.ReactNode;
  title: string;
  /** Skill labels rendered as Tags. */
  skills?: string[];
  style?: React.CSSProperties;
}

/**
 * Competency card: gradient icon tile + title + wrap of skill tags.
 * @startingPoint section="Profile" subtitle="Competency card with icon + skill tags" viewport="500x260"
 */
export function SkillCard(props: SkillCardProps): JSX.Element;
