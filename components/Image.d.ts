import * as React from 'react';
export interface ImageProps {
  className?: string;
  style?: React.CSSProperties;
  ratio?: "1.618:1" | "16:10" | "16:9" | "1:1" | "1:1.618" | "2:1" | "2:3" | "3:1" | "3:2" | "3:4" | "4:3" | "5:2" | "custom";
  placeholder?: boolean;
}
export declare const Image: React.FC<ImageProps>;
export default Image;
