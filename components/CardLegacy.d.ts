import * as React from 'react';
export interface CardLegacyProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "sm";
  actions?: boolean;
  border?: boolean;
  cover?: boolean;
  head?: boolean;
}
export declare const CardLegacy: React.FC<CardLegacyProps>;
export default CardLegacy;
