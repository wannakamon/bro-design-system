// figma node: 6326:27275 Components/Input-Affix (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ComponentsInputAffix(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon-14px" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.002,
        top: 0.003,
        width: 16,
        height: 16,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0.002,
        top: 0.003,
        width: 14,
        height: 14,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? ".com"}</span>
    </div>
  );
  const __impls = {
    // figma: Type=icon-16px
    "type=icon-16px": __body0,
    // figma: Type=icon-14px
    "type=icon-14px": __body1,
    // figma: Type=text
    "type=text": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ComponentsInputAffix;
