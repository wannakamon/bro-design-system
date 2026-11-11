import * as React from 'react';
export interface AlertBannerProps {
  className?: string;
  style?: React.CSSProperties;
  actionButton?: boolean;
  alertStatus?: "info" | "success" | "warning" | "danger";
  label?: boolean;
  /** Text content; defaults to "Information". */
  text1?: string;
  /** Text content; defaults to "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AlertBanner: React.FC<AlertBannerProps>;
export default AlertBanner;
