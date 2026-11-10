import * as React from 'react';
export interface Input2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "copied";
  /** Text content; defaults to "/sign-up/referral?ref=ABCDEFG123456". */
  text1?: string;
  /** Text content; defaults to "Copy Link". */
  text2?: string;
}
export declare const Input2: React.FC<Input2Props>;
export default Input2;
