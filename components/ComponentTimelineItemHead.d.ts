import * as React from 'react';
export interface ComponentTimelineItemHeadProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon" | "circle";
  trail?: boolean;
  trail2?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ComponentTimelineItemHead: React.FC<ComponentTimelineItemHeadProps>;
export default ComponentTimelineItemHead;
