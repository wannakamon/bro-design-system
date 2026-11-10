import { IconAiGame } from './IconAiGame.jsx';
import { IconChevronRight } from './IconChevronRight.jsx';

// figma node: 672:671 Nav Menu (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "menuItem=" + __venc(p.menuItem);

export function NavMenu(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Menu", openClose: _p.openClose ?? true, menuItem: _p.menuItem ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 253,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 5,
        height: 20,
        borderRadius: 9999,
        backgroundColor: "rgba(255,255,255,0)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-20) * 1px)",
        paddingTop: "calc(var(--sp-16) * 1px)",
        paddingRight: "calc(var(--sp-20) * 1px)",
        paddingBottom: "calc(var(--sp-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon ?? <IconAiGame />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.openClose && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconChevronRight />}</div>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 253,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 5,
        height: 20,
        borderRadius: 9999,
        backgroundColor: "rgba(255,255,255,0)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(43,43,43,0.55)",
        borderTop: "0.500px solid rgba(255,255,255,0.31)",
        borderRight: "0.500px solid rgba(255,255,255,0.31)",
        borderBottom: "0.500px solid rgba(255,255,255,0.31)",
        borderLeft: "0.500px solid rgba(255,255,255,0.31)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-20) * 1px)",
        paddingTop: "calc(var(--sp-16) * 1px)",
        paddingRight: "calc(var(--sp-20) * 1px)",
        paddingBottom: "calc(var(--sp-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon ?? <IconAiGame />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.openClose && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconChevronRight />}</div>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 253,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-8) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--sp-0) * 1px)",
      paddingTop: "calc(var(--sp-0) * 1px)",
      paddingRight: "calc(var(--sp-0) * 1px)",
      paddingBottom: "calc(var(--sp-0) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 5,
        height: 20,
        borderRadius: 9999,
        backgroundColor: "var(--color-brand-hover)",
        boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgba(43,43,43,0.55)",
        borderTop: "0.500px solid rgba(255,255,255,0.31)",
        borderRight: "0.500px solid rgba(255,255,255,0.31)",
        borderBottom: "0.500px solid rgba(255,255,255,0.31)",
        borderLeft: "0.500px solid rgba(255,255,255,0.31)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-20) * 1px)",
        paddingTop: "calc(var(--sp-16) * 1px)",
        paddingRight: "calc(var(--sp-20) * 1px)",
        paddingBottom: "calc(var(--sp-16) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon ?? <IconAiGame />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.openClose && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            transform: "matrix(-1,0,0,-1,0,0)",
            flexShrink: 0,
          }}>{props.icon1 ?? <IconChevronRight />}</div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Menu item=Default
    "menuItem=default": __body0,
    // figma: Menu item=Hover
    "menuItem=hover": __body1,
    // figma: Menu item=Selected
    "menuItem=selected": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavMenu;
