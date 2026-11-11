import * as React from 'react';
export interface Input3Props {
  className?: string;
  style?: React.CSSProperties;
  prefix?: boolean;
  placeholder?: string;
  size?: "lg" | "md" | "sm";
  value?: string;
  suffix?: boolean;
  state?: "normal" | "focused" | "disabled";
  addonAfter?: boolean;
  addonBefore?: boolean;
  filled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Input3: React.FC<Input3Props>;
export default Input3;
