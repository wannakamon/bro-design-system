import * as React from 'react';
export interface ProgressBarType4ShowProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "press";
  /** Text content; defaults to "Reward". */
  text1?: string;
  /** Text content; defaults to "จำนวนสแตมป์ของคุณ". */
  text2?: string;
  /** Text content; defaults to "2/10". */
  text3?: string;
  /** Text content; defaults to "อีก 3 ดวง ปลดล็อคของรางวัล". */
  text4?: string;
}
export declare const ProgressBarType4Show: React.FC<ProgressBarType4ShowProps>;
export default ProgressBarType4Show;
