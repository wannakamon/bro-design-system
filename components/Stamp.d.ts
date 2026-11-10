import * as React from 'react';
export interface StampProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "lock" | "stamp";
}
export declare const Stamp: React.FC<StampProps>;
export default Stamp;
