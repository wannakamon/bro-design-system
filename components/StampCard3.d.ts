import * as React from 'react';
export interface StampCard3Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "card1" | "card2";
  /** Text content; defaults to "คุณมี Stamp แล้ว". */
  text1?: string;
  /** Text content; defaults to "0". */
  text2?: string;
  /** Text content; defaults to "/ 12 ดวง". */
  text3?: string;
  /** Text content; defaults to "ชวนเพื่อนตอนนี้ ปลดล็อครางวัลเลย". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const StampCard3: React.FC<StampCard3Props>;
export default StampCard3;
