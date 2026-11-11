import * as React from 'react';
export interface TimelineItemAlternateProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "←" | "→" | "<- & →";
}
export declare const TimelineItemAlternate: React.FC<TimelineItemAlternateProps>;
export default TimelineItemAlternate;
