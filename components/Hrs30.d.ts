import * as React from 'react';
export interface Hrs30Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "reward card";
  /** Text content; defaults to "ปลดล็อครางวัลแล้ว!". */
  text1?: string;
  /** Text content; defaults to "โปรดบันทึกภาพหน้าจอหรือคัดลอกโค้ดไว้\nเพื่อใช้แลกรับรางวัล". */
  text2?: string;
  /** Text content; defaults to "Code 2: 15 ชั่วโมง". */
  text3?: string;
  /** Text content; defaults to "GFN-THX-4ZUNEGYVTW". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Hrs30: React.FC<Hrs30Props>;
export default Hrs30;
