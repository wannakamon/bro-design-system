import { IconWrapper } from './IconWrapper.jsx';

// figma node: 6290:16257 Button (205 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "ghost=" + __venc(p.ghost) + '|' + "type=" + __venc(p.type) + '|' + "danger=" + __venc(p.danger) + '|' + "shape=" + __venc(p.shape) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function Button2(_p = {}) {
  const props = { ..._p, ghost: _p.ghost ?? true, icon: _p.icon ?? false, type: _p.type ?? "primary", danger: _p.danger ?? false, title: _p.title ?? "Button Title", shape: _p.shape ?? "standard", state: _p.state ?? "normal", oneCharTitle: _p.oneCharTitle ?? "A", size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -4,
        top: -4.002,
        width: 112,
        height: 40,
        opacity: 0.1,
        borderRadius: 5,
        backgroundColor: "rgb(64,169,255)",
      }} />
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button Title"}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -4,
        top: -4,
        width: 112,
        height: 40,
        opacity: 0.1,
        borderRadius: 5,
        backgroundColor: "rgb(64,169,255)",
      }} />
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button Title"}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -4.5,
        top: -4.002,
        width: 112,
        height: 40,
        opacity: 0.1,
        borderRadius: 5,
        backgroundColor: "rgb(64,169,255)",
      }} />
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button Title"}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.03)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(9,109,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(9,109,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(9,109,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13.5, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 5, top: 5 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9.003 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9.003 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9.005 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9.005 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 9, top: 9.005 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={false} />}</div>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.oneCharTitle}</span>
      {props.icon && (
      <div style={{ position: "absolute", left: 13, top: 15 }}>{props.icon1 ?? <IconWrapper size={"14px"} union={true} />}</div>
      )}
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,120,117)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,120,117), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,120,117)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,77,79)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,120,117)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,120,117), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,120,117)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,77,79)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,120,117)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,120,117), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,120,117)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,120,117)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,77,79)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body135 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body136 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body137 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body138 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body139 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body140 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body141 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body142 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(24,144,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body143 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body144 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body145 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body146 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body147 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body148 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body149 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body150 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(24,144,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body151 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body152 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body153 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body154 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body155 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body156 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body157 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body158 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(9,109,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -4,
        top: -4,
        width: 112,
        height: 40,
        opacity: 0.1,
        borderRadius: 5,
        backgroundColor: "rgb(64,169,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 104,
        height: 32.001,
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      }} />
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body159 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
      <div style={{
        position: "absolute",
        left: -4,
        top: -4,
        width: 112,
        height: 40,
        opacity: 0.1,
        borderRadius: 5,
        backgroundColor: "rgb(64,169,255)",
      }} />
    </div>
  );
  const __body160 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -4,
        top: -4,
        width: 112,
        height: 40,
        opacity: 0.1,
        borderRadius: 5,
        backgroundColor: "rgb(64,169,255)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 104,
        height: 32.001,
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(64,169,255)",
        outlineOffset: "-1px",
        boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      }} />
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body161 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body162 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(9,109,217)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body163 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(9,109,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body164 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(9,109,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(9,109,217)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body165 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(9,109,217)",
      boxShadow: "inset 0 0 0 1px rgb(9,109,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body166 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body167 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body168 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(24,144,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body169 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(64,169,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body170 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body171 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body172 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.75,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body173 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body174 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
            position: "absolute",
            left: 0.751,
            top: 0.752,
            width: 12.5,
            height: 12.5,
            color: "rgba(0,0,0,0.85)",
          }}>
            <path d={"M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __impls = {
    // figma: Type=secondary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=disabled|size=sm": __body0,
    // figma: Type=text, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=disabled|size=sm": __body1,
    // figma: Type=link, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=disabled|size=sm": __body1,
    // figma: Type=dashed, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=disabled|size=sm": __body2,
    // figma: Type=primary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=disabled|size=sm": __body3,
    // figma: Type=secondary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=hover or press|size=sm": __body4,
    // figma: Type=text, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=hover or press|size=sm": __body5,
    // figma: Type=link, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=hover or press|size=sm": __body6,
    // figma: Type=dashed, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=hover or press|size=sm": __body7,
    // figma: Type=primary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=hover or press|size=sm": __body8,
    // figma: Type=text, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=normal|size=sm": __body9,
    // figma: Type=link, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=normal|size=sm": __body10,
    // figma: Type=dashed, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=normal|size=sm": __body11,
    // figma: Type=secondary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=normal|size=sm": __body4,
    // figma: Type=primary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=normal|size=sm": __body12,
    // figma: Type=text, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=disabled|size=lg": __body13,
    // figma: Type=link, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=disabled|size=lg": __body13,
    // figma: Type=dashed, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=disabled|size=lg": __body14,
    // figma: Type=secondary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=disabled|size=lg": __body15,
    // figma: Type=primary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=disabled|size=lg": __body16,
    // figma: Type=text, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=hover or press|size=lg": __body17,
    // figma: Type=link, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=hover or press|size=lg": __body18,
    // figma: Type=dashed, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=hover or press|size=lg": __body19,
    // figma: Type=secondary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=hover or press|size=lg": __body20,
    // figma: Type=primary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=hover or press|size=lg": __body21,
    // figma: Type=text, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=normal|size=lg": __body22,
    // figma: Type=link, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=normal|size=lg": __body23,
    // figma: Type=dashed, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=normal|size=lg": __body24,
    // figma: Type=secondary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=normal|size=lg": __body25,
    // figma: Type=primary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=normal|size=lg": __body26,
    // figma: Type=text, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=disabled|size=md": __body27,
    // figma: Type=link, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=disabled|size=md": __body27,
    // figma: Type=dashed, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=disabled|size=md": __body28,
    // figma: Type=secondary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=disabled|size=md": __body29,
    // figma: Type=primary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=disabled|size=md": __body30,
    // figma: Type=secondary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=animating|size=md": __body31,
    // figma: Type=dashed, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=animating|size=md": __body32,
    // figma: Type=primary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=animating|size=md": __body33,
    // figma: Type=text, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=active|size=md": __body34,
    // figma: Type=link, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=active|size=md": __body35,
    // figma: Type=dashed, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=active|size=md": __body36,
    // figma: Type=secondary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=active|size=md": __body37,
    // figma: Type=primary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=active|size=md": __body38,
    // figma: Type=text, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=hover or press|size=md": __body39,
    // figma: Type=link, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=hover or press|size=md": __body40,
    // figma: Type=dashed, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=hover or press|size=md": __body41,
    // figma: Type=secondary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=hover or press|size=md": __body42,
    // figma: Type=primary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=hover or press|size=md": __body43,
    // figma: Type=text, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "ghost=true|type=text|danger=false|shape=standard|state=normal|size=md": __body44,
    // figma: Type=link, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "ghost=true|type=link|danger=false|shape=standard|state=normal|size=md": __body45,
    // figma: Type=dashed, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "ghost=true|type=dashed|danger=false|shape=standard|state=normal|size=md": __body46,
    // figma: Type=secondary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "ghost=true|type=secondary|danger=false|shape=standard|state=normal|size=md": __body47,
    // figma: Type=primary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "ghost=true|type=primary|danger=false|shape=standard|state=normal|size=md": __body48,
    // figma: Type=dashed, Shape=square, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=disabled|size=sm": __body49,
    // figma: Type=secondary, Shape=square, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=disabled|size=sm": __body50,
    // figma: Type=primary, Shape=square, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=disabled|size=sm": __body50,
    // figma: Type=dashed, Shape=square, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=hover or press|size=sm": __body51,
    // figma: Type=secondary, Shape=square, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=hover or press|size=sm": __body52,
    // figma: Type=primary, Shape=square, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=hover or press|size=sm": __body53,
    // figma: Type=dashed, Shape=square, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=normal|size=sm": __body54,
    // figma: Type=secondary, Shape=square, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=normal|size=sm": __body55,
    // figma: Type=primary, Shape=square, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=normal|size=sm": __body56,
    // figma: Type=dashed, Shape=square, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=disabled|size=md": __body57,
    // figma: Type=secondary, Shape=square, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=disabled|size=md": __body58,
    // figma: Type=primary, Shape=square, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=disabled|size=md": __body58,
    // figma: Type=dashed, Shape=square, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=hover or press|size=md": __body59,
    // figma: Type=secondary, Shape=square, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=hover or press|size=md": __body60,
    // figma: Type=primary, Shape=square, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=hover or press|size=md": __body61,
    // figma: Type=dashed, Shape=square, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=normal|size=md": __body62,
    // figma: Type=secondary, Shape=square, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=normal|size=md": __body63,
    // figma: Type=primary, Shape=square, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=normal|size=md": __body64,
    // figma: Type=dashed, Shape=square, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=disabled|size=lg": __body65,
    // figma: Type=secondary, Shape=square, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=disabled|size=lg": __body66,
    // figma: Type=primary, Shape=square, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=disabled|size=lg": __body66,
    // figma: Type=dashed, Shape=square, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=hover or press|size=lg": __body67,
    // figma: Type=secondary, Shape=square, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=hover or press|size=lg": __body68,
    // figma: Type=primary, Shape=square, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=hover or press|size=lg": __body69,
    // figma: Type=dashed, Shape=square, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=square|state=normal|size=lg": __body70,
    // figma: Type=secondary, Shape=square, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=square|state=normal|size=lg": __body71,
    // figma: Type=primary, Shape=square, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=square|state=normal|size=lg": __body72,
    // figma: Type=dashed, Shape=circle, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=disabled|size=sm": __body73,
    // figma: Type=secondary, Shape=circle, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=disabled|size=sm": __body74,
    // figma: Type=primary, Shape=circle, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=disabled|size=sm": __body74,
    // figma: Type=dashed, Shape=circle, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=hover or press|size=sm": __body75,
    // figma: Type=secondary, Shape=circle, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=hover or press|size=sm": __body76,
    // figma: Type=primary, Shape=circle, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=hover or press|size=sm": __body77,
    // figma: Type=dashed, Shape=circle, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=normal|size=sm": __body78,
    // figma: Type=secondary, Shape=circle, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=normal|size=sm": __body79,
    // figma: Type=primary, Shape=circle, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=normal|size=sm": __body80,
    // figma: Type=dashed, Shape=circle, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=disabled|size=md": __body81,
    // figma: Type=secondary, Shape=circle, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=disabled|size=md": __body82,
    // figma: Type=primary, Shape=circle, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=disabled|size=md": __body82,
    // figma: Type=dashed, Shape=circle, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=hover or press|size=md": __body83,
    // figma: Type=secondary, Shape=circle, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=hover or press|size=md": __body84,
    // figma: Type=primary, Shape=circle, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=hover or press|size=md": __body85,
    // figma: Type=dashed, Shape=circle, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=normal|size=md": __body86,
    // figma: Type=secondary, Shape=circle, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=normal|size=md": __body87,
    // figma: Type=primary, Shape=circle, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=normal|size=md": __body88,
    // figma: Type=dashed, Shape=circle, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=disabled|size=lg": __body89,
    // figma: Type=secondary, Shape=circle, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=disabled|size=lg": __body90,
    // figma: Type=primary, Shape=circle, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=disabled|size=lg": __body90,
    // figma: Type=dashed, Shape=circle, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=hover or press|size=lg": __body91,
    // figma: Type=secondary, Shape=circle, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=hover or press|size=lg": __body92,
    // figma: Type=primary, Shape=circle, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=hover or press|size=lg": __body93,
    // figma: Type=dashed, Shape=circle, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=circle|state=normal|size=lg": __body94,
    // figma: Type=secondary, Shape=circle, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=circle|state=normal|size=lg": __body95,
    // figma: Type=primary, Shape=circle, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=circle|state=normal|size=lg": __body96,
    // figma: Type=text, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=disabled|size=sm": __body97,
    // figma: Type=link, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=disabled|size=sm": __body97,
    // figma: Type=dashed, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=disabled|size=sm": __body98,
    // figma: Type=secondary, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=disabled|size=sm": __body99,
    // figma: Type=primary, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=disabled|size=sm": __body100,
    // figma: Type=text, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=hover or press|size=sm": __body101,
    // figma: Type=link, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=hover or press|size=sm": __body102,
    // figma: Type=dashed, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=hover or press|size=sm": __body103,
    // figma: Type=secondary, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=hover or press|size=sm": __body104,
    // figma: Type=primary, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=hover or press|size=sm": __body105,
    // figma: Type=text, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=normal|size=sm": __body106,
    // figma: Type=link, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=normal|size=sm": __body106,
    // figma: Type=dashed, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=normal|size=sm": __body107,
    // figma: Type=secondary, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=normal|size=sm": __body108,
    // figma: Type=primary, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=normal|size=sm": __body109,
    // figma: Type=text, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=disabled|size=md": __body110,
    // figma: Type=link, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=disabled|size=md": __body111,
    // figma: Type=dashed, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=disabled|size=md": __body112,
    // figma: Type=secondary, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=disabled|size=md": __body113,
    // figma: Type=primary, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=disabled|size=md": __body113,
    // figma: Type=text, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=hover or press|size=md": __body114,
    // figma: Type=link, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=hover or press|size=md": __body115,
    // figma: Type=dashed, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=hover or press|size=md": __body116,
    // figma: Type=secondary, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=hover or press|size=md": __body117,
    // figma: Type=primary, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=hover or press|size=md": __body118,
    // figma: Type=text, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=normal|size=md": __body119,
    // figma: Type=link, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=normal|size=md": __body120,
    // figma: Type=dashed, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=normal|size=md": __body121,
    // figma: Type=secondary, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=normal|size=md": __body122,
    // figma: Type=primary, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=normal|size=md": __body123,
    // figma: Type=text, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=disabled|size=lg": __body124,
    // figma: Type=link, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=disabled|size=lg": __body124,
    // figma: Type=dashed, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=disabled|size=lg": __body125,
    // figma: Type=secondary, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=disabled|size=lg": __body126,
    // figma: Type=primary, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=disabled|size=lg": __body126,
    // figma: Type=text, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=hover or press|size=lg": __body127,
    // figma: Type=link, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=hover or press|size=lg": __body128,
    // figma: Type=dashed, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=hover or press|size=lg": __body129,
    // figma: Type=secondary, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=hover or press|size=lg": __body130,
    // figma: Type=primary, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=hover or press|size=lg": __body131,
    // figma: Type=text, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "ghost=false|type=text|danger=true|shape=standard|state=normal|size=lg": __body132,
    // figma: Type=link, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "ghost=false|type=link|danger=true|shape=standard|state=normal|size=lg": __body133,
    // figma: Type=dashed, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "ghost=false|type=dashed|danger=true|shape=standard|state=normal|size=lg": __body134,
    // figma: Type=secondary, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "ghost=false|type=secondary|danger=true|shape=standard|state=normal|size=lg": __body135,
    // figma: Type=primary, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "ghost=false|type=primary|danger=true|shape=standard|state=normal|size=lg": __body136,
    // figma: Type=text, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=disabled|size=sm": __body137,
    // figma: Type=link, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=disabled|size=sm": __body97,
    // figma: Type=dashed, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=disabled|size=sm": __body98,
    // figma: Type=secondary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=disabled|size=sm": __body99,
    // figma: Type=primary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=disabled|size=sm": __body138,
    // figma: Type=text, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=hover or press|size=sm": __body139,
    // figma: Type=link, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=hover or press|size=sm": __body140,
    // figma: Type=secondary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=hover or press|size=sm": __body141,
    // figma: Type=dashed, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=hover or press|size=sm": __body142,
    // figma: Type=primary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=hover or press|size=sm": __body143,
    // figma: Type=text, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=normal|size=sm": __body144,
    // figma: Type=link, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=normal|size=sm": __body140,
    // figma: Type=dashed, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=normal|size=sm": __body145,
    // figma: Type=secondary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=normal|size=sm": __body146,
    // figma: Type=primary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=normal|size=sm": __body147,
    // figma: Type=text, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=disabled|size=lg": __body124,
    // figma: Type=link, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=disabled|size=lg": __body124,
    // figma: Type=dashed, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=disabled|size=lg": __body125,
    // figma: Type=secondary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=disabled|size=lg": __body126,
    // figma: Type=primary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=disabled|size=lg": __body126,
    // figma: Type=text, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=hover or press|size=lg": __body148,
    // figma: Type=link, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=hover or press|size=lg": __body149,
    // figma: Type=dashed, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=hover or press|size=lg": __body150,
    // figma: Type=secondary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=hover or press|size=lg": __body151,
    // figma: Type=primary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=hover or press|size=lg": __body152,
    // figma: Type=text, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=normal|size=lg": __body153,
    // figma: Type=link, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=normal|size=lg": __body149,
    // figma: Type=dashed, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=normal|size=lg": __body154,
    // figma: Type=secondary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=normal|size=lg": __body155,
    // figma: Type=primary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=normal|size=lg": __body156,
    // figma: Type=text, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=disabled|size=md": __body110,
    // figma: Type=link, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=disabled|size=md": __body111,
    // figma: Type=dashed, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=disabled|size=md": __body112,
    // figma: Type=secondary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=disabled|size=md": __body113,
    // figma: Type=primary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=disabled|size=md": __body157,
    // figma: Type=secondary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=animating|size=md": __body158,
    // figma: Type=primary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=animating|size=md": __body159,
    // figma: Type=dashed, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=animating|size=md": __body160,
    // figma: Type=text, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=active|size=md": __body161,
    // figma: Type=link, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=active|size=md": __body162,
    // figma: Type=dashed, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=active|size=md": __body163,
    // figma: Type=secondary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=active|size=md": __body164,
    // figma: Type=primary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=active|size=md": __body165,
    // figma: Type=text, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=hover or press|size=md": __body166,
    // figma: Type=link, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=hover or press|size=md": __body167,
    // figma: Type=dashed, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=hover or press|size=md": __body168,
    // figma: Type=secondary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=hover or press|size=md": __body169,
    // figma: Type=primary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=hover or press|size=md": __body170,
    // figma: Type=text, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=text|danger=false|shape=standard|state=normal|size=md": __body171,
    // figma: Type=link, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=link|danger=false|shape=standard|state=normal|size=md": __body167,
    // figma: Type=dashed, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=dashed|danger=false|shape=standard|state=normal|size=md": __body172,
    // figma: Type=secondary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=secondary|danger=false|shape=standard|state=normal|size=md": __body173,
    // figma: Type=primary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "ghost=false|type=primary|danger=false|shape=standard|state=normal|size=md": __body174,
  };
  return (__impls[__vkey(props)] ?? __body26)();
}
export default Button2;
