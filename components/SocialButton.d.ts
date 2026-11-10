import * as React from 'react';
export interface SocialButtonProps {
  className?: string;
  style?: React.CSSProperties;
  socialMedia?: "discord" | "facebook" | "line" | "x (twitter)";
  button?: "full" | "icon";
}
export declare const SocialButton: React.FC<SocialButtonProps>;
export default SocialButton;
