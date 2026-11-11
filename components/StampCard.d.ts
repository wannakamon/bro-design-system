import * as React from 'react';
export interface StampCardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "unlock" | "received2" | "lock book" | "card1" | "received" | "variant6" | "variant7";
  /** Text content; defaults to "ชวนเพื่อน". */
  text1?: string;
  /** Text content; defaults to "1". */
  text2?: string;
  /** Text content; defaults to "คน". */
  text3?: string;
  /** Text content; defaults to "เพื่อรับรางวัลและปลดล็อค STAMP BOOK". */
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
export declare const StampCard: React.FC<StampCardProps>;
export default StampCard;
