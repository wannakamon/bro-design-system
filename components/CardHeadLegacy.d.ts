import * as React from 'react';
export interface CardHeadLegacyProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "sm";
  title?: boolean;
  tabs?: boolean;
  extra?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const CardHeadLegacy: React.FC<CardHeadLegacyProps>;
export default CardHeadLegacy;
