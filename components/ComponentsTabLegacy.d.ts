import * as React from 'react';
export interface ComponentsTabLegacyProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  badge?: boolean;
  selected?: boolean;
  disabled?: boolean;
  icon?: boolean;
  /** Text content; defaults to "Tab". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ComponentsTabLegacy: React.FC<ComponentsTabLegacyProps>;
export default ComponentsTabLegacy;
