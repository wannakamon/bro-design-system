import * as React from 'react';
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  inputState?: "default" | "focus" | "correct" | "incorrect" | "password" | "show password" | "code incorrect" | "code correct" | "disabled" | "text area";
  required?: boolean;
  /** Text content; defaults to "อีเมล". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "กรอกอีเมล". */
  text3?: string;
  /** Text content; defaults to "Minimum 10 characters". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export default Input;
