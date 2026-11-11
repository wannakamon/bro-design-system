import * as React from 'react';
export interface TimelineProps {
  className?: string;
  style?: React.CSSProperties;
  count?: React.ReactNode;
  mode?: "left" | "right" | "alternate";
}
export declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
