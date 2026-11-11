// figma node: 4194:55986 Component 2 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Component26(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 54,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 1,
        width: 36,
        height: 8,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 44,
        top: 1,
        width: 8,
        height: 8,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.6)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 54,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 8,
        height: 8,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.6)",
      }} />
      <div style={{
        position: "absolute",
        left: 18,
        top: 0,
        width: 36,
        height: 8,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Property 1=1
    "property1=1": __body0,
    // figma: Property 1=2
    "property1=2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component26;
