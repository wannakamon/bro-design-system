import * as React from 'react';
export interface ButtonGroupProps {
  className?: string;
  style?: React.CSSProperties;
  items?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
}
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
