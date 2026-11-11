// figma node: 6293:22152 ClockCircle
export function ClockCircle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style,
    }}>
      <svg width={36} height={36} viewBox="0 0 36 36" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 36,
        height: 36,
      }}>
        <path d={"M 18 0 C 8.06 0 0 8.06 0 18 C 0 27.94 8.06 36 18 36 C 27.94 36 36 27.94 36 18 C 36 8.06 27.94 0 18 0 Z M 18 32.946 C 9.747 32.946 3.054 26.253 3.054 18 C 3.054 9.747 9.747 3.054 18 3.054 C 26.253 3.054 32.946 9.747 32.946 18 C 32.946 26.253 26.253 32.946 18 32.946 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 25.02 23.083 L 19.29 18.94 L 19.29 8.996 C 19.29 8.819 19.145 8.675 18.969 8.675 L 17.036 8.675 C 16.859 8.675 16.715 8.819 16.715 8.996 L 16.715 20.061 C 16.715 20.166 16.763 20.262 16.847 20.323 L 23.493 25.168 C 23.637 25.273 23.838 25.24 23.943 25.1 L 25.092 23.533 C 25.196 23.384 25.164 23.183 25.02 23.083 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ClockCircle;
