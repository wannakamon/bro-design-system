// figma node: 6326:29661 Cursor (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "on=" + __venc(p.on);

export function Cursor(_p = {}) {
  const props = { ..._p, on: _p.on ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 16,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={16} height={1} viewBox="0 -0.500 16 1" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,0,0)",
        transformOrigin: "0 0",
        width: 16,
        height: 1,
      }}>
        <path d={"M 0 -0.5 L 0 0 L 16 0 L 16 -0.5 L 16 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 16,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 1,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>cursor</div>
    </div>
  );
  const __impls = {
    // figma: On=true
    "on=true": __body0,
    // figma: On=false
    "on=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Cursor;
