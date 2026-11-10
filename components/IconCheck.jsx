// figma node: 768:4670 icon/check
export function IconCheck(_p = {}) {
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
      <svg width={10.667} height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
        position: "absolute",
        left: 2.667,
        top: 4,
        width: 10.667,
        height: 7.333,
      }}>
        <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IconCheck;
