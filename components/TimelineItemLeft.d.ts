import * as React from 'react';
export interface TimelineItemLeftProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TimelineItemLeft: React.FC<TimelineItemLeftProps>;
export default TimelineItemLeft;
