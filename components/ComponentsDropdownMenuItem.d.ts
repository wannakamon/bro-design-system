import * as React from 'react';
export interface ComponentsDropdownMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  menuTitle?: string;
  icon?: boolean;
  checkable?: boolean;
  checked?: boolean;
  multiSelect?: boolean;
  danger?: boolean;
  arrow?: boolean;
  selected?: boolean;
  hover?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ComponentsDropdownMenuItem: React.FC<ComponentsDropdownMenuItemProps>;
export default ComponentsDropdownMenuItem;
