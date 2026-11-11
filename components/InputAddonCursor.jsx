// figma node: 6326:27289 Input-Addon/Cursor (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function InputAddonCursor(_p = {}) {
  const props = { ..._p, state: _p.state ?? "normal" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1,
        height: 18,
        backgroundColor: "rgb(0,0,0)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1,
        height: 18,
        backgroundColor: "rgb(255,255,255)",
      }} />
    </div>
  );
  const __impls = {
    // figma: State=normal
    "state=normal": __body0,
    // figma: State=blinked
    "state=blinked": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InputAddonCursor;
