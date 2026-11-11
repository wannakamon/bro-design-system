import * as React from 'react';
export interface DropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
  arrow?: "no arrow" | "top left" | "top center" | "top right" | "bottom left" | "bottom center" | "bottom right";
  items?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export default DropdownMenu;
