import * as React from 'react';
export interface ComponentsInputAffixProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon-14px" | "icon-16px" | "text";
  /** Text content; defaults to ".com". */
  text1?: string;
}
export declare const ComponentsInputAffix: React.FC<ComponentsInputAffixProps>;
export default ComponentsInputAffix;
