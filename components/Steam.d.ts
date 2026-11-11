import * as React from 'react';
export interface SteamProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "reward card" | "steam 150" | "150thb";
  /** Text content; defaults to "ปลดล็อครางวัลแล้ว!". */
  text1?: string;
  /** Text content; defaults to "โปรดบันทึกภาพหน้าจอหรือคัดลอกโค้ดไว้\nเพื่อใช้แลกรับรางวัล". */
  text2?: string;
  /** Text content; defaults to "ปลดล็อครางวัลแล้ว!". */
  text3?: string;
  /** Text content; defaults to "โปรดบันทึกภาพหน้าจอหรือคัดลอกโค้ดไว้\nเพื่อใช้แลกรับรางวัล". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Steam: React.FC<SteamProps>;
export default Steam;
