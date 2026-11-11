import { LocaleChange } from './LocaleChange.jsx';
import { SiteMenuDashboard } from './SiteMenuDashboard.jsx';

// figma node: 6161:54049 Menu dashboard mobile (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function MenuDashboardMobile(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "moblie close" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "rgba(43,43,43,0.55)",
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--color-text-secondary)",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        width: 176,
        height: 36,
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "absolute", left: -48, top: 1 }}>{props.icon1 ?? <LocaleChange property1={"locale"} />}</div>
        <div style={{
          position: "relative",
          borderRadius: 8,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.31)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "8px 8px 8px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={16} height={1.500} viewBox="0 -0.750 16 1.500" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 8.5,
              width: 16,
              height: 1.5,
            }}>
              <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={1.500} viewBox="0 -0.750 16 1.500" fill="none" style={{
              position: "absolute",
              left: 4,
              top: 15.5,
              width: 16,
              height: 1.5,
            }}>
              <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "rgba(43,43,43,0.55)",
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--color-text-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgba(43,43,43,0.55)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 16px 16px 16px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-e133ed826ca2b259" style={{
          position: "relative",
          width: 176,
          height: 36,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{ position: "absolute", left: -48, top: 1 }}>{props.icon1 ?? <LocaleChange property1={"locale"} />}</div>
          <div style={{
            position: "relative",
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 8px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>
              <svg width={16} height={1.500} viewBox="0 -0.750 16 1.500" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0.707,0.707,-0.707,0.707,6,6)",
                transformOrigin: "0 0",
                width: 16,
                height: 1.5,
              }}>
                <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={16} height={1.500} viewBox="0 -0.750 16 1.500" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(0.707,-0.707,0.707,0.707,6,17.314)",
                transformOrigin: "0 0",
                width: 16,
                height: 1.5,
              }}>
                <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 16 0.75 C 16.414 0.75 16.75 0.414 16.75 0 C 16.75 -0.414 16.414 -0.75 16 -0.75 L 16 0 L 16 0.75 Z M 0 0 L 0 0.75 L 16 0.75 L 16 0 L 16 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <SiteMenuDashboard
        style={{
          position: "relative",
          height: 720,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        property1={"plan"}
      />
    </div>
  );
  const __impls = {
    // figma: Property 1=Moblie close
    "property1=moblie close": __body0,
    // figma: Property 1=Mobile open
    "property1=mobile open": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default MenuDashboardMobile;
