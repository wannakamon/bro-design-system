import * as React from 'react';
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "horizontal" | "vertical";
  dashed?: boolean;
  orientation?: "left" | "center" | "right" | ".n/a";
  title?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Divider: React.FC<DividerProps>;
export default Divider;
