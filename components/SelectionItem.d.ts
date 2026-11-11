import * as React from 'react';
export interface SelectionItemProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  closeable?: boolean;
  /** Text content; defaults to "Apples". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SelectionItem: React.FC<SelectionItemProps>;
export default SelectionItem;
