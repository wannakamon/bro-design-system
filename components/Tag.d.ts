import * as React from 'react';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  closable?: boolean;
  color?: "default" | "blue" | "cyan" | "geekblue" | "gold" | "green" | "lime" | "orange" | "purple" | "red" | "volcano" | "magenta";
  icon?: boolean;
  /** Text content; defaults to "magenta". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
