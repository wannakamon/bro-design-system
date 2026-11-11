import * as React from 'react';
export interface ComponentsTabProps {
  className?: string;
  style?: React.CSSProperties;
  badge?: boolean;
  size?: "md" | "lg" | "sm";
  disabled?: boolean;
  selected?: boolean;
  icon?: boolean;
  hovered?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ComponentsTab: React.FC<ComponentsTabProps>;
export default ComponentsTab;
