import * as React from 'react';
export interface SiteMenuDashboardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "plan" | "main plan" | "add playtime" | "payment" | "history" | "friend" | "profile" | "device" | "redeem code";
  /** Text content; defaults to "เมนูหลัก". */
  text1?: string;
  /** Text content; defaults to "ตั้งค่า". */
  text2?: string;
}
export declare const SiteMenuDashboard: React.FC<SiteMenuDashboardProps>;
export default SiteMenuDashboard;
