import * as React from 'react';
export interface VerticalFormItemTextareaProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  optional?: boolean;
  helpText?: boolean;
  tooltip?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "(optional)". */
  text2?: string;
  /** Text content; defaults to "Please input passenger's name or delete this field.". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const VerticalFormItemTextarea: React.FC<VerticalFormItemTextareaProps>;
export default VerticalFormItemTextarea;
