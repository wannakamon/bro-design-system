import * as React from 'react';
export interface ComponentsTabsTopProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "lg" | "sm" | "fill";
  itemCount?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  icon?: boolean;
}
export declare const ComponentsTabsTop: React.FC<ComponentsTabsTopProps>;
export default ComponentsTabsTop;
