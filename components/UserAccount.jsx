import { IconChevronDown } from './IconChevronDown.jsx';
import { IconSecurityCheck } from './IconSecurityCheck.jsx';

// figma node: 643:360 User Account (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function UserAccount(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 234,
      borderRadius: 12,
      borderTop: "0.500px solid rgba(255,255,255,0.31)",
      borderRight: "0.500px solid rgba(255,255,255,0.31)",
      borderBottom: "0.500px solid rgba(255,255,255,0.31)",
      borderLeft: "0.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-10) * 1px)",
      padding: "10px 10px 10px 10px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-10) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-10) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
        borderRadius: 9999,
        backgroundColor: "rgba(118,186,0,0.2)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "6px 7px 6px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "14px",
          color: "var(--color-text-brand)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "LK"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        gap: "calc(var(--sp-0) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "13px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "Leon S Kennedy"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "12px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "leon@gmail.com"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronDown style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 234,
      borderRadius: 12,
      borderTop: "0.500px solid rgba(255,255,255,0.31)",
      borderRight: "0.500px solid rgba(255,255,255,0.31)",
      borderBottom: "0.500px solid rgba(255,255,255,0.31)",
      borderLeft: "0.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-10) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-10) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 34,
        borderRadius: 9999,
        background: "radial-gradient(37.528px 31.932px at 7.35% 27.94%, rgb(19,27,117) 0.00%, rgb(10,78,186) 55.85%, rgb(118,186,0) 100.00%)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "6px 7px 6px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "LK"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        gap: "calc(var(--sp-0) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.text2 ?? "Leon S Kennedy"}</span>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconSecurityCheck style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "leon@gmail.com"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconChevronDown style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Verified
    "property1=verified": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default UserAccount;
