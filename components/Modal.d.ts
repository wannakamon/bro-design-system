import * as React from 'react';
export interface ModalProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "danger" | "default" | "single button";
  devices?: "desktop" | "mobile";
  /** Text content; defaults to "What is Lorem Ipsum?". */
  text1?: string;
  /** Text content; defaults to "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,". */
  text2?: string;
  /** Primary/danger button label; defaults to "Button". */
  primaryLabel?: string;
  /** Secondary/ghost button label (hidden on "single button"); defaults to "Button". */
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
