import * as React from 'react';
export interface TextTextProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  hierarchy?: "primary" | "secondary" | "link";
  bullet?: boolean;
  copyable?: boolean;
  editable?: boolean;
  /** Text content; defaults to "￮". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TextText: React.FC<TextTextProps>;
export default TextText;
