import * as React from 'react';
export interface StamptProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "hover" | "press" | "mobile" | "mobile press" | "number";
  /** Text content; defaults to "รับฟรี 5 ชั่วโมง". */
  text1?: string;
  /** Text content; defaults to "5". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Stampt: React.FC<StamptProps>;
export default Stampt;
