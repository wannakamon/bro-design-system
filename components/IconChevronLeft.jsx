// figma node: 672:666 icon/chevron-left
export function IconChevronLeft(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-text-primary)",
      ...props.style,
    }}>
      <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,10,4)",
        transformOrigin: "0 0",
        width: 8,
        height: 4,
      }}>
        <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4 4 L 3.293 4.707 C 3.683 5.098 4.317 5.098 4.707 4.707 L 4 4 Z M 8.707 0.707 C 9.098 0.317 9.098 -0.317 8.707 -0.707 C 8.317 -1.098 7.683 -1.098 7.293 -0.707 L 8 0 L 8.707 0.707 Z M 0 0 L -0.707 0.707 L 3.293 4.707 L 4 4 L 4.707 3.293 L 0.707 -0.707 L 0 0 Z M 4 4 L 4.707 4.707 L 8.707 0.707 L 8 0 L 7.293 -0.707 L 3.293 3.293 L 4 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IconChevronLeft;
