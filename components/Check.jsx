// figma node: 6326:28579 Check
export function Check(_p = {}) {
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
      <svg width={32.787} height={25.869} viewBox="0 0 32.787 25.869" fill="none" style={{
        position: "absolute",
        left: 1.608,
        top: 5.063,
        width: 32.787,
        height: 25.869,
      }}>
        <path d={"M 32.465 0 L 29.656 0 C 29.263 0 28.889 0.181 28.648 0.49 L 12.082 21.475 L 4.139 11.411 C 4.019 11.258 3.866 11.135 3.691 11.05 C 3.516 10.965 3.325 10.921 3.131 10.921 L 0.322 10.921 C 0.053 10.921 -0.096 11.23 0.069 11.439 L 11.074 25.381 C 11.588 26.032 12.577 26.032 13.095 25.381 L 32.718 0.514 C 32.883 0.309 32.734 0 32.465 0 L 32.465 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Check;
