// figma node: 14:1321 Component 3 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

export function Component32(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Continue", variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 230,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--color-grey-93-2)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12.899999618530273,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.130px",
        color: "var(--color-grey-20-2)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 230,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--color-grey-95)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 1px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12.899999618530273,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        letterSpacing: "-0.130px",
        color: "var(--color-grey-20-2)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __impls = {
    // figma: variant=1,:hover=true
    "variant=1|hover=true": __body0,
    // figma: variant=1,:hover=false
    "variant=1|hover=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component32;
