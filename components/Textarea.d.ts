import * as React from 'react';
export interface TextareaProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  state?: "normal" | "hovered" | "focused" | "disabled";
  filled?: boolean;
  showCount?: boolean;
  /** Text content; defaults to "A design system for enterprise-level products. Create an efficient and enjoyable work experience.". */
  text1?: string;
  /** Text content; defaults to "97 / 100". */
  text2?: string;
}
export declare const Textarea: React.FC<TextareaProps>;
export default Textarea;
