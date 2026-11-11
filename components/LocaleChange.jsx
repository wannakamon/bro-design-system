import { IconCheck } from './IconCheck.jsx';
import { Locale } from './Locale.jsx';

// figma node: 6140:53848 Locale change (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function LocaleChange(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "locale" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Locale />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Locale />}</div>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "rgba(43,43,43,0.55)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.31)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 12,
              height: 12,
              flexShrink: 0,
            }}>{props.icon2 ?? <IconCheck style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "19.200px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "ไทย"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "19.200px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Eng"}</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Locale />}</div>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "rgba(43,43,43,0.55)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.31)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "19.200px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "ไทย"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 12,
              height: 12,
              flexShrink: 0,
            }}>{props.icon2 ?? <IconCheck style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "19.200px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Eng"}</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Locale
    "property1=locale": __body0,
    // figma: Property 1=Locale-th
    "property1=locale-th": __body1,
    // figma: Property 1=Locale-en
    "property1=locale-en": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default LocaleChange;
