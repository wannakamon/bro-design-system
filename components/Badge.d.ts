import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  status?: "default" | "success" | "warning" | "danger" | "info";
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
