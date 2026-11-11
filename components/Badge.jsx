// figma node: 672:4073 Badge (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function Badge(_p = {}) {
  const props = { ..._p, label: _p.label ?? "badge", status: _p.status ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(118,186,0,0.25)",
      borderTop: "0.500px solid var(--color-border-brand)",
      borderRight: "0.500px solid var(--color-border-brand)",
      borderBottom: "0.500px solid var(--color-border-brand)",
      borderLeft: "0.500px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 10px 2px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-2) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(0,201,81,0.2)",
      borderTop: "0.500px solid var(--color-status-success)",
      borderRight: "0.500px solid var(--color-status-success)",
      borderBottom: "0.500px solid var(--color-status-success)",
      borderLeft: "0.500px solid var(--color-status-success)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 10px 2px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-2) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(240,201,7,0.2)",
      borderTop: "0.500px solid var(--color-status-warning)",
      borderRight: "0.500px solid var(--color-status-warning)",
      borderBottom: "0.500px solid var(--color-status-warning)",
      borderLeft: "0.500px solid var(--color-status-warning)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 10px 2px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-2) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(224,62,62,0.2)",
      borderTop: "0.500px solid var(--color-status-danger)",
      borderRight: "0.500px solid var(--color-status-danger)",
      borderBottom: "0.500px solid var(--color-status-danger)",
      borderLeft: "0.500px solid var(--color-status-danger)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 10px 2px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-2) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(33,86,238,0.25)",
      borderTop: "0.500px solid var(--color-status-info)",
      borderRight: "0.500px solid var(--color-status-info)",
      borderBottom: "0.500px solid var(--color-status-info)",
      borderLeft: "0.500px solid var(--color-status-info)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 10px 2px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-2) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-information)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Status=Default
    "status=default": __body0,
    // figma: Status=Success
    "status=success": __body1,
    // figma: Status=Warning
    "status=warning": __body2,
    // figma: Status=Danger
    "status=danger": __body3,
    // figma: Status=Info
    "status=info": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Badge;
