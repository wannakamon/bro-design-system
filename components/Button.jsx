import { Icon24ShoppingCart } from './Icon24ShoppingCart.jsx';
import { IconLoaderCircle } from './IconLoaderCircle.jsx';

// figma node: 358:204 Button (60 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color) + '|' + "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function Button(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Button", color: _p.color ?? "primary", showIcon: _p.showIcon ?? false, style2: _p.style2 ?? "fill", loading: _p.loading ?? false, state: _p.state ?? "default", size: _p.size ?? "sm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-primary)",
      boxShadow: "inset 3px 3px 10px 0px rgba(179,247,96,0.73)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-primary)",
      boxShadow: "inset 3px 3px 10px 0px rgb(177,245,122)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        flexShrink: 0,
      }}>{props.label}</span>
      <div style={{
          position: "absolute",
          left: 63,
          top: 11,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <IconLoaderCircle style={{ transform: "scale(1.500, 1.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-hover)",
      boxShadow: "0px 0px 25px 10px rgba(177,245,122,0.33)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-primary)",
      boxShadow: "inset 3px 3px 10px 0px rgb(177,245,122)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        flexShrink: 0,
      }}>{props.label}</span>
      <div style={{
          position: "absolute",
          left: 49,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <IconLoaderCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-hover)",
      boxShadow: "0px 0px 25px 8px rgba(177,245,122,0.33)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,201,80,0.4)",
      borderRight: "1px solid rgba(0,201,80,0.4)",
      borderBottom: "1px solid rgba(0,201,80,0.4)",
      borderLeft: "1px solid rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(224,62,62,0.4)",
      borderRight: "1px solid rgba(224,62,62,0.4)",
      borderBottom: "1px solid rgba(224,62,62,0.4)",
      borderLeft: "1px solid rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(240,201,7,0.1)",
      borderTop: "1px solid rgba(240,201,7,0.4)",
      borderRight: "1px solid rgba(240,201,7,0.4)",
      borderBottom: "1px solid rgba(240,201,7,0.4)",
      borderLeft: "1px solid rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(33,86,238,0.4)",
      borderRight: "1px solid rgba(33,86,238,0.4)",
      borderBottom: "1px solid rgba(33,86,238,0.4)",
      borderLeft: "1px solid rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-information)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(0,201,81,0.2)",
      borderTop: "1px solid rgba(0,201,80,0.4)",
      borderRight: "1px solid rgba(0,201,80,0.4)",
      borderBottom: "1px solid rgba(0,201,80,0.4)",
      borderLeft: "1px solid rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,201,80,0.4)",
      borderRight: "1px solid rgba(0,201,80,0.4)",
      borderBottom: "1px solid rgba(0,201,80,0.4)",
      borderLeft: "1px solid rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(224,62,62,0.4)",
      borderRight: "1px solid rgba(224,62,62,0.4)",
      borderBottom: "1px solid rgba(224,62,62,0.4)",
      borderLeft: "1px solid rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(240,201,7,0.1)",
      borderTop: "1px solid rgba(240,201,7,0.4)",
      borderRight: "1px solid rgba(240,201,7,0.4)",
      borderBottom: "1px solid rgba(240,201,7,0.4)",
      borderLeft: "1px solid rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(33,86,238,0.4)",
      borderRight: "1px solid rgba(33,86,238,0.4)",
      borderBottom: "1px solid rgba(33,86,238,0.4)",
      borderLeft: "1px solid rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-information)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(224,62,62,0.2)",
      borderTop: "1px solid rgba(224,62,62,0.4)",
      borderRight: "1px solid rgba(224,62,62,0.4)",
      borderBottom: "1px solid rgba(224,62,62,0.4)",
      borderLeft: "1px solid rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-status-danger)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(0,201,80,0.4)",
      borderRight: "1px solid rgba(0,201,80,0.4)",
      borderBottom: "1px solid rgba(0,201,80,0.4)",
      borderLeft: "1px solid rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(224,62,62,0.4)",
      borderRight: "1px solid rgba(224,62,62,0.4)",
      borderBottom: "1px solid rgba(224,62,62,0.4)",
      borderLeft: "1px solid rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(240,201,7,0.1)",
      borderTop: "1px solid rgba(240,201,7,0.4)",
      borderRight: "1px solid rgba(240,201,7,0.4)",
      borderBottom: "1px solid rgba(240,201,7,0.4)",
      borderLeft: "1px solid rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid rgba(33,86,238,0.4)",
      borderRight: "1px solid rgba(33,86,238,0.4)",
      borderBottom: "1px solid rgba(33,86,238,0.4)",
      borderLeft: "1px solid rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-information)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(240,201,7,0.25)",
      borderTop: "1px solid rgba(240,201,7,0.4)",
      borderRight: "1px solid rgba(240,201,7,0.4)",
      borderBottom: "1px solid rgba(240,201,7,0.4)",
      borderLeft: "1px solid rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(33,86,238,0.25)",
      borderTop: "1px solid rgba(33,86,238,0.4)",
      borderRight: "1px solid rgba(33,86,238,0.4)",
      borderBottom: "1px solid rgba(33,86,238,0.4)",
      borderLeft: "1px solid rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--color-text-information)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid var(--color-border-brand)",
      borderRight: "1px solid var(--color-border-brand)",
      borderBottom: "1px solid var(--color-border-brand)",
      borderLeft: "1px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid var(--color-border-brand)",
      borderRight: "1px solid var(--color-border-brand)",
      borderBottom: "1px solid var(--color-border-brand)",
      borderLeft: "1px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-bg-invert)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-text-invert)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid var(--color-border-brand)",
      borderRight: "1px solid var(--color-border-brand)",
      borderBottom: "1px solid var(--color-border-brand)",
      borderLeft: "1px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-bg-invert)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "var(--color-text-invert)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid var(--color-border-brand)",
      borderRight: "1px solid var(--color-border-brand)",
      borderBottom: "1px solid var(--color-border-brand)",
      borderLeft: "1px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(0,201,81,0.2)",
      borderTop: "1px solid rgba(0,201,80,0.4)",
      borderRight: "1px solid rgba(0,201,80,0.4)",
      borderBottom: "1px solid rgba(0,201,80,0.4)",
      borderLeft: "1px solid rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(224,62,62,0.2)",
      borderTop: "1px solid rgba(224,62,62,0.4)",
      borderRight: "1px solid rgba(224,62,62,0.4)",
      borderBottom: "1px solid rgba(224,62,62,0.4)",
      borderLeft: "1px solid rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-status-danger)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(240,201,7,0.25)",
      borderTop: "1px solid rgba(240,201,7,0.4)",
      borderRight: "1px solid rgba(240,201,7,0.4)",
      borderBottom: "1px solid rgba(240,201,7,0.4)",
      borderLeft: "1px solid rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(33,86,238,0.25)",
      borderTop: "1px solid rgba(33,86,238,0.4)",
      borderRight: "1px solid rgba(33,86,238,0.4)",
      borderBottom: "1px solid rgba(33,86,238,0.4)",
      borderLeft: "1px solid rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "13px",
        color: "var(--color-text-information)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid var(--color-border-brand)",
      borderRight: "1px solid var(--color-border-brand)",
      borderBottom: "1px solid var(--color-border-brand)",
      borderLeft: "1px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      borderTop: "1px solid var(--color-border-brand)",
      borderRight: "1px solid var(--color-border-brand)",
      borderBottom: "1px solid var(--color-border-brand)",
      borderLeft: "1px solid var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-bg-invert)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-text-invert)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(0,201,81,0.2)",
      borderTop: "1px solid rgba(0,201,80,0.4)",
      borderRight: "1px solid rgba(0,201,80,0.4)",
      borderBottom: "1px solid rgba(0,201,80,0.4)",
      borderLeft: "1px solid rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(224,62,62,0.2)",
      borderTop: "1px solid rgba(224,62,62,0.4)",
      borderRight: "1px solid rgba(224,62,62,0.4)",
      borderBottom: "1px solid rgba(224,62,62,0.4)",
      borderLeft: "1px solid rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-danger)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-status-danger)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(240,201,7,0.25)",
      borderTop: "1px solid rgba(240,201,7,0.4)",
      borderRight: "1px solid rgba(240,201,7,0.4)",
      borderBottom: "1px solid rgba(240,201,7,0.4)",
      borderLeft: "1px solid rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-xs) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(33,86,238,0.25)",
      borderTop: "1px solid rgba(33,86,238,0.4)",
      borderRight: "1px solid rgba(33,86,238,0.4)",
      borderBottom: "1px solid rgba(33,86,238,0.4)",
      borderLeft: "1px solid rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "12px",
        color: "var(--color-text-information)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "var(--color-text-brand)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: "calc(var(--fontsize-16) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-text-brand)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: "calc(var(--fontsize-14) * 1px)",
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-text-brand)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(43,43,43,0.55)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-lg) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-bg-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "16px 28px 16px 28px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-28) * 1px)",
      paddingTop: "calc(var(--sp-16) * 1px)",
      paddingRight: "calc(var(--sp-28) * 1px)",
      paddingBottom: "calc(var(--sp-16) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "28px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(43,43,43,0.55)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-md) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-bg-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-12) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-12) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <Icon24ShoppingCart style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(43,43,43,0.55)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-bg-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-primary)",
      boxShadow: "inset 3px 3px 10px 0px rgb(177,245,122)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        flexShrink: 0,
      }}>{props.label}</span>
      <div style={{
          position: "absolute",
          left: 38,
          top: 8,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <IconLoaderCircle />}</div>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--button-height-sm) * 1px)",
      minWidth: 64,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--color-brand-hover)",
      boxShadow: "0px 0px 25px 6px rgba(177,245,122,0.33)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-12) * 1px)",
      paddingTop: "calc(var(--sp-8) * 1px)",
      paddingRight: "calc(var(--sp-12) * 1px)",
      paddingBottom: "calc(var(--sp-8) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Icon24ShoppingCart />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Color=Primary, Style=Fill, Size=LG, State=Default
    "color=primary|style2=fill|state=default|size=lg": __body0,
    // figma: Color=Primary, Style=Fill, Size=LG, State=Loading
    "color=primary|style2=fill|state=loading|size=lg": __body1,
    // figma: Color=Primary, Style=Fill, Size=LG, State=Hover
    "color=primary|style2=fill|state=hover|size=lg": __body2,
    // figma: Color=Primary, Style=Fill, Size=MD, State=Default
    "color=primary|style2=fill|state=default|size=md": __body3,
    // figma: Color=Primary, Style=Fill, Size=MD, State=Loading
    "color=primary|style2=fill|state=loading|size=md": __body4,
    // figma: Color=Primary, Style=Fill, Size=MD, State=Hover
    "color=primary|style2=fill|state=hover|size=md": __body5,
    // figma: Color=Success, Style=Outline, Size=LG, State=Default
    "color=success|style2=outline|state=default|size=lg": __body6,
    // figma: Color=Danger, Style=Outline, Size=LG, State=Default
    "color=danger|style2=outline|state=default|size=lg": __body7,
    // figma: Color=Warning, Style=Outline, Size=LG, State=Default
    "color=warning|style2=outline|state=default|size=lg": __body8,
    // figma: Color=Info, Style=Outline, Size=LG, State=Default
    "color=info|style2=outline|state=default|size=lg": __body9,
    // figma: Color=Success, Style=Outline, Size=LG, State=Hover
    "color=success|style2=outline|state=hover|size=lg": __body10,
    // figma: Color=Success, Style=Outline, Size=MD, State=Default
    "color=success|style2=outline|state=default|size=md": __body11,
    // figma: Color=Danger, Style=Outline, Size=MD, State=Default
    "color=danger|style2=outline|state=default|size=md": __body12,
    // figma: Color=Warning, Style=Outline, Size=MD, State=Default
    "color=warning|style2=outline|state=default|size=md": __body13,
    // figma: Color=Info, Style=Outline, Size=MD, State=Default
    "color=info|style2=outline|state=default|size=md": __body14,
    // figma: Color=Danger, Style=Outline, Size=LG, State=Hover
    "color=danger|style2=outline|state=hover|size=lg": __body15,
    // figma: Color=Danger, Style=Fill, Size=LG, State=Default
    "color=danger|style2=fill|state=default|size=lg": __body16,
    // figma: Color=Success, Style=Outline, Size=SM, State=Default
    "color=success|style2=outline|state=default|size=sm": __body17,
    // figma: Color=Danger, Style=Outline, Size=SM, State=Default
    "color=danger|style2=outline|state=default|size=sm": __body18,
    // figma: Color=Warning, Style=Outline, Size=SM, State=Default
    "color=warning|style2=outline|state=default|size=sm": __body19,
    // figma: Color=Info, Style=Outline, Size=SM, State=Default
    "color=info|style2=outline|state=default|size=sm": __body20,
    // figma: Color=Warning, Style=Outline, Size=LG, State=Hover
    "color=warning|style2=outline|state=hover|size=lg": __body21,
    // figma: Color=Info, Style=Outline, Size=LG, State=Hover
    "color=info|style2=outline|state=hover|size=lg": __body22,
    // figma: Color=Primary, Style=Outline, Size=MD, State=Default
    "color=primary|style2=outline|state=default|size=md": __body23,
    // figma: Color=Secondary, Style=Outline, Size=MD, State=Default
    "color=secondary|style2=outline|state=default|size=md": __body24,
    // figma: Color=Secondary, Style=Fill, Size=MD, State=Default
    "color=secondary|style2=fill|state=default|size=md": __body25,
    // figma: Color=Secondary, Style=Outline, Size=LG, State=Default
    "color=secondary|style2=outline|state=default|size=lg": __body26,
    // figma: Color=Secondary, Style=Fill, Size=LG, State=Default
    "color=secondary|style2=fill|state=default|size=lg": __body27,
    // figma: Color=Primary, Style=Outline, Size=LG, State=Default
    "color=primary|style2=outline|state=default|size=lg": __body28,
    // figma: Color=Success, Style=Outline, Size=MD, State=Hover
    "color=success|style2=outline|state=hover|size=md": __body29,
    // figma: Color=Danger, Style=Outline, Size=MD, State=Hover
    "color=danger|style2=outline|state=hover|size=md": __body30,
    // figma: Color=Danger, Style=Fill, Size=MD, State=Default
    "color=danger|style2=fill|state=default|size=md": __body31,
    // figma: Color=Warning, Style=Outline, Size=MD, State=Hover
    "color=warning|style2=outline|state=hover|size=md": __body32,
    // figma: Color=Info, Style=Outline, Size=MD, State=Hover
    "color=info|style2=outline|state=hover|size=md": __body33,
    // figma: Color=Primary, Style=Outline, Size=SM, State=Default
    "color=primary|style2=outline|state=default|size=sm": __body34,
    // figma: Color=Secondary, Style=Outline, Size=SM, State=Default
    "color=secondary|style2=outline|state=default|size=sm": __body35,
    // figma: Color=Secondary, Style=Fill, Size=SM, State=Default
    "color=secondary|style2=fill|state=default|size=sm": __body36,
    // figma: Color=Success, Style=Outline, Size=SM, State=Hover
    "color=success|style2=outline|state=hover|size=sm": __body37,
    // figma: Color=Danger, Style=Outline, Size=SM, State=Hover
    "color=danger|style2=outline|state=hover|size=sm": __body38,
    // figma: Color=Danger, Style=Fill, Size=SM, State=Default
    "color=danger|style2=fill|state=default|size=sm": __body39,
    // figma: Color=Warning, Style=Outline, Size=SM, State=Hover
    "color=warning|style2=outline|state=hover|size=sm": __body40,
    // figma: Color=Info, Style=Outline, Size=SM, State=Hover
    "color=info|style2=outline|state=hover|size=sm": __body41,
    // figma: Color=Primary, Style=Ghost, Size=LG, State=Default
    "color=primary|style2=ghost|state=default|size=lg": __body42,
    // figma: Color=Primary, Style=Ghost, Size=LG, State=Hover
    "color=primary|style2=ghost|state=hover|size=lg": __body43,
    // figma: Color=Primary, Style=Ghost, Size=MD, State=Default
    "color=primary|style2=ghost|state=default|size=md": __body44,
    // figma: Color=Primary, Style=Ghost, Size=MD, State=Hover
    "color=primary|style2=ghost|state=hover|size=md": __body45,
    // figma: Color=Primary, Style=Ghost, Size=SM, State=Default
    "color=primary|style2=ghost|state=default|size=sm": __body46,
    // figma: Color=Primary, Style=Ghost, Size=SM, State=Hover
    "color=primary|style2=ghost|state=hover|size=sm": __body47,
    // figma: Color=Primary, Style=Disable, Size=LG, State=Default
    "color=primary|style2=disable|state=default|size=lg": __body48,
    // figma: Color=Secondary, Style=Ghost, Size=LG, State=Default
    "color=secondary|style2=ghost|state=default|size=lg": __body49,
    // figma: Color=Secondary, Style=Ghost, Size=LG, State=Hover
    "color=secondary|style2=ghost|state=hover|size=lg": __body50,
    // figma: Color=Primary, Style=Disable, Size=MD, State=Default
    "color=primary|style2=disable|state=default|size=md": __body51,
    // figma: Color=Secondary, Style=Ghost, Size=MD, State=Default
    "color=secondary|style2=ghost|state=default|size=md": __body52,
    // figma: Color=Secondary, Style=Ghost, Size=MD, State=Hover
    "color=secondary|style2=ghost|state=hover|size=md": __body53,
    // figma: Color=Primary, Style=Disable, Size=SM, State=Default
    "color=primary|style2=disable|state=default|size=sm": __body54,
    // figma: Color=Secondary, Style=Ghost, Size=SM, State=Default
    "color=secondary|style2=ghost|state=default|size=sm": __body55,
    // figma: Color=Secondary, Style=Ghost, Size=SM, State=Hover
    "color=secondary|style2=ghost|state=hover|size=sm": __body56,
    // figma: Color=Primary, Style=Fill, Size=SM, State=Default
    "color=primary|style2=fill|state=default|size=sm": __body57,
    // figma: Color=Primary, Style=Fill, Size=SM, State=Loading
    "color=primary|style2=fill|state=loading|size=sm": __body58,
    // figma: Color=Primary, Style=Fill, Size=SM, State=Hover
    "color=primary|style2=fill|state=hover|size=sm": __body59,
  };
  const explicitState = _p.state;
  const interactive = !!props.onClick && !explicitState;
  const [__hover, __setHover] = React.useState(false);
  const [__pressed, __setPressed] = React.useState(false);
  let __effState = props.state;
  let __fallbackFilter = null;
  if (interactive) {
    if (__pressed) {
      const activeKey = __vkey({ ...props, state: "active" });
      const hoverKey = __vkey({ ...props, state: "hover" });
      if (__impls[activeKey]) { __effState = "active"; }
      else if (__impls[hoverKey]) { __effState = "hover"; __fallbackFilter = "brightness(0.85)"; }
      else { __fallbackFilter = "brightness(0.82)"; }
    } else if (__hover) {
      const hoverKey = __vkey({ ...props, state: "hover" });
      if (__impls[hoverKey]) { __effState = "hover"; }
      else { __fallbackFilter = "brightness(1.12)"; }
    }
  }
  const __lookupProps = { ...props, state: __effState ?? props.state };
  const __el = (__impls[__vkey(__lookupProps)] ?? __body57)();
  const __extraStyle = __fallbackFilter ? { filter: __fallbackFilter, transition: "filter 0.12s ease, transform 0.08s ease", transform: __pressed ? "translateY(1px)" : undefined } : { transition: "filter 0.12s ease" };
  if (!props.onClick) return React.cloneElement(__el, { style: { ...__el.props.style, ...__extraStyle } });
  return React.cloneElement(__el, {
    onClick: props.onClick,
    onMouseEnter: () => interactive && __setHover(true),
    onMouseLeave: () => { interactive && __setHover(false); interactive && __setPressed(false); },
    onMouseDown: () => interactive && __setPressed(true),
    onMouseUp: () => interactive && __setPressed(false),
    style: { ...__el.props.style, ...__extraStyle, cursor: "pointer" },
  });
}
export default Button;
