import * as React from 'react';
export interface InputAddonCursorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "normal" | "blinked";
}
export declare const InputAddonCursor: React.FC<InputAddonCursorProps>;
export default InputAddonCursor;
