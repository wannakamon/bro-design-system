// figma node: 6326:27270 Input-Addon/Label
export function InputAddonLabel(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgb(250,250,250)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "http://"}</span>
      </div>
    </div>
  );
}
export default InputAddonLabel;
