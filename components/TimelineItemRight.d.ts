import * as React from 'react';
export interface TimelineItemRightProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TimelineItemRight: React.FC<TimelineItemRightProps>;
export default TimelineItemRight;
