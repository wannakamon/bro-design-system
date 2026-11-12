import { Close } from './Close.jsx';

// figma node: 6326:28527 Selection-Item (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "disabled=" + __venc(p.disabled) + '|' + "closeable=" + __venc(p.closeable);

export function SelectionItem(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg", disabled: _p.disabled ?? true, closeable: _p.closeable ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>{props.text1 ?? "Apples"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Apples"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Apples"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Apples"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Apples"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Apples"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 4px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Apples"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 8px",
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
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Apples"}</span>
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Apples"}</span>
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=small, Disabled=true, Closeable=false
    "size=sm|disabled=true|closeable=false": __body0,
    // figma: Size=large, Disabled=true, Closeable=false
    "size=lg|disabled=true|closeable=false": __body1,
    // figma: Size=medium, Disabled=true, Closeable=false
    "size=md|disabled=true|closeable=false": __body2,
    // figma: Size=small, Disabled=false,Closeable=false
    "size=sm|disabled=false|closeable=false": __body3,
    // figma: Size=large, Disabled=false,Closeable=false
    "size=lg|disabled=false|closeable=false": __body4,
    // figma: Size=medium, Disabled=false,Closeable=false
    "size=md|disabled=false|closeable=false": __body5,
    // figma: Size=small, Disabled=false, Closeable=true
    "size=sm|disabled=false|closeable=true": __body6,
    // figma: Size=large, Disabled=false, Closeable=true
    "size=lg|disabled=false|closeable=true": __body7,
    // figma: Size=medium, Disabled=false, Closeable=true
    "size=md|disabled=false|closeable=true": __body8,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default SelectionItem;
