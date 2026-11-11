// figma node: 14:353 Component 2 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

export function Component24(_p = {}) {
  const props = { ..._p, text: _p.text ?? "ยกเลิกแพ็กเกจ", variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "3.500px 0px 3.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "19.200px",
        color: "var(--color-chartreuse-green-31)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "3.500px 0px 3.500px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "19.200px",
        color: "var(--color-chartreuse-green-36)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
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
export default Component24;
