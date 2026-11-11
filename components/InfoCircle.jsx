// figma node: 6290:18832 InfoCircle
export function InfoCircle(_p = {}) {
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
        <path d={"M 16.071 10.929 C 16.071 11.44 16.274 11.931 16.636 12.292 C 16.997 12.654 17.488 12.857 17.999 12.857 C 18.511 12.857 19.001 12.654 19.363 12.292 C 19.725 11.931 19.928 11.44 19.928 10.929 C 19.928 10.417 19.725 9.927 19.363 9.565 C 19.001 9.203 18.511 9 17.999 9 C 17.488 9 16.997 9.203 16.636 9.565 C 16.274 9.927 16.071 10.417 16.071 10.929 Z M 18.964 15.429 L 17.035 15.429 C 16.858 15.429 16.714 15.573 16.714 15.75 L 16.714 26.679 C 16.714 26.855 16.858 27 17.035 27 L 18.964 27 C 19.14 27 19.285 26.855 19.285 26.679 L 19.285 15.75 C 19.285 15.573 19.14 15.429 18.964 15.429 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default InfoCircle;
