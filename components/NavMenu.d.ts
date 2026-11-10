import * as React from 'react';
export interface NavMenuProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  icon?: React.ReactNode;
  openClose?: boolean;
  menuItem?: "default" | "hover" | "selected";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const NavMenu: React.FC<NavMenuProps>;
export default NavMenu;
