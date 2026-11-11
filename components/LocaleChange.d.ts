import * as React from 'react';
export interface LocaleChangeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "locale" | "locale-th" | "locale-en";
  /** Text content; defaults to "ไทย". */
  text1?: string;
  /** Text content; defaults to "Eng". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const LocaleChange: React.FC<LocaleChangeProps>;
export default LocaleChange;
