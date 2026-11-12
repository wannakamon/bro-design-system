import * as React from 'react';
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  size?: "lg" | "md" | "sm";
  hovering?: boolean;
  disabled?: boolean;
  filled?: boolean;
  customTag?: boolean;
  multiSelect?: boolean;
  /** Text content; defaults to "Please select". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Select: React.FC<SelectProps>;
export default Select;
