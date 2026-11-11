import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  /** Leading icon; defaults to false. */
  showIcon?: boolean;
  style2?: "fill" | "outline" | "ghost" | "disable";
  loading?: boolean;
  state?: "default" | "hover" | "loading";
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
