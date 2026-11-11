import * as React from 'react';
export interface ChoiceboxRadioProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "unselected" | "selected" | "disabled" | "disabled-selected";
  onClick?: () => void;
}
export declare const ChoiceboxRadio: React.FC<ChoiceboxRadioProps>;
export default ChoiceboxRadio;
