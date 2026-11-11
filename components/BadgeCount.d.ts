import * as React from 'react';
export interface BadgeCountProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "sm";
  color?: "red" | "green" | "blue" | "blue invert" | "gray";
  singleDigit?: boolean;
  /** Text content; defaults to "99". */
  text1?: string;
}
export declare const BadgeCount: React.FC<BadgeCountProps>;
export default BadgeCount;
