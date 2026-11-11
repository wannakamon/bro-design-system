import * as React from 'react';
export interface LocaleProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Locale: React.FC<LocaleProps>;
export default Locale;
