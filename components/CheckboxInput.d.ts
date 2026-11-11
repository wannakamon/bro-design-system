import * as React from 'react';
export interface CheckboxInputProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  hovering?: boolean;
  disabled?: boolean;
}
export declare const CheckboxInput: React.FC<CheckboxInputProps>;
export default CheckboxInput;
