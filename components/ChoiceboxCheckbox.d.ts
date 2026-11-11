import * as React from 'react';
export interface ChoiceboxCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "unchecked" | "checked" | "disabled" | "disabled-checked" | "success-disabled";
  onClick?: () => void;
}
export declare const ChoiceboxCheckbox: React.FC<ChoiceboxCheckboxProps>;
export default ChoiceboxCheckbox;
