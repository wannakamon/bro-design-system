import * as React from 'react';
export interface MenuDashboardMobileProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "moblie close" | "mobile open";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MenuDashboardMobile: React.FC<MenuDashboardMobileProps>;
export default MenuDashboardMobile;
