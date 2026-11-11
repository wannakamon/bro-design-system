import * as React from 'react';
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  ghost?: boolean;
  icon?: boolean;
  type?: "primary" | "secondary" | "dashed" | "link" | "text";
  danger?: boolean;
  title?: string;
  shape?: "standard" | "circle" | "square";
  state?: "normal" | "hover or press" | "disabled" | "active" | "animating";
  oneCharTitle?: string;
  size?: "lg" | "md" | "sm";
  /** Text content; defaults to "Button Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Button2: React.FC<Button2Props>;
export default Button2;
