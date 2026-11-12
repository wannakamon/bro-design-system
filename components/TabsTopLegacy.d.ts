import * as React from 'react';
export interface TabsTopLegacyProps {
  className?: string;
  style?: React.CSSProperties;
  centered?: boolean;
  icon?: boolean;
  overflow?: boolean;
  extra?: boolean;
  extra2?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TabsTopLegacy: React.FC<TabsTopLegacyProps>;
export default TabsTopLegacy;
