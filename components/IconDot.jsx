// figma node: 672:637 icon/dot
export function IconDot(_p = {}) {
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
      <svg width={1.333} height={1.333} viewBox="0 0 1.333 1.333" fill="none" style={{
        position: "absolute",
        left: 7.4,
        top: 7.4,
        width: 1.333,
        height: 1.333,
      }}>
        <path d={"M 1.333 0.667 L 0.333 0.667 C 0.333 0.483 0.483 0.333 0.667 0.333 L 0.667 1.333 L 0.667 2.333 C 1.587 2.333 2.333 1.587 2.333 0.667 L 1.333 0.667 Z M 0.667 1.333 L 0.667 0.333 C 0.851 0.333 1 0.483 1 0.667 L 0 0.667 L -1 0.667 C -1 1.587 -0.254 2.333 0.667 2.333 L 0.667 1.333 Z M 0 0.667 L 1 0.667 C 1 0.851 0.851 1 0.667 1 L 0.667 0 L 0.667 -1 C -0.254 -1 -1 -0.254 -1 0.667 L 0 0.667 Z M 0.667 0 L 0.667 1 C 0.483 1 0.333 0.851 0.333 0.667 L 1.333 0.667 L 2.333 0.667 C 2.333 -0.254 1.587 -1 0.667 -1 L 0.667 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IconDot;
