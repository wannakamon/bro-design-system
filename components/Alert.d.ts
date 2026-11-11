import * as React from 'react';
export interface AlertProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "error" | "info" | "success" | "warning";
  custom?: boolean;
  description?: boolean;
  closeBtn?: boolean;
  icon?: boolean;
  /** Text content; defaults to "Warning Text". */
  text1?: string;
  /** Text content; defaults to "Success Description Success Description Success Description". */
  text2?: string;
}
export declare const Alert: React.FC<AlertProps>;
export default Alert;
