import * as React from 'react';
export interface Modal2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant3";
  /** Text content; defaults to "Ko********er สมัครผ่านลิงก์\nของคุณสำเร็จ!". */
  text1?: string;
}
export declare const Modal2: React.FC<Modal2Props>;
export default Modal2;
