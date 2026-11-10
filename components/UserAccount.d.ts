import * as React from 'react';
export interface UserAccountProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "verified";
  /** Text content; defaults to "LK". */
  text1?: string;
  /** Text content; defaults to "Leon S Kennedy". */
  text2?: string;
  /** Text content; defaults to "leon@gmail.com". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const UserAccount: React.FC<UserAccountProps>;
export default UserAccount;
