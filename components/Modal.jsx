import { Button } from './Button.jsx';
import { Icon } from '../assets/icons/Icon.jsx';

// figma node: 1104:2827 Modal — default / danger / single button × desktop / mobile, + icon, + inset
const FONT = "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
const ICONS = {
  success: { name: "AlertCheckmarkCircle02", color: "var(--color-text-success)", bg: "rgba(0,201,81,0.12)" },
  warning: { name: "AlertAlertCircle", color: "var(--color-text-warning)", bg: "rgba(240,201,7,0.12)" },
  danger: { name: "AlertOctagonAlert", color: "var(--color-text-danger)", bg: "rgba(224,62,62,0.12)" },
};

export function Modal(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default", devices: _p.devices ?? "desktop", icon: _p.icon ?? "none" };
  const mobile = props.devices === "mobile";
  const single = props.property1 === "single button";
  const primaryColor = props.property1 === "danger" ? "danger" : "primary";
  const ic = ICONS[props.icon];
  const primary = (
    <Button style={{ height: 46, width: mobile ? "100%" : single ? 269 : 217, flexShrink: 0 }}
      color={primaryColor} style2="fill" state="default" size="lg" showIcon={false}
      label={props.primaryLabel ?? "Button"} onClick={props.onPrimaryClick} />
  );
  const secondary = single ? null : (
    <Button style={{ height: 46, width: mobile ? "100%" : 217, flexShrink: 0 }}
      color="secondary" style2="ghost" state="default" size="lg" showIcon={false}
      label={props.secondaryLabel ?? "Button"} onClick={props.onSecondaryClick} />
  );
  return (
    <div className={props.className} style={{
      width: mobile ? 360 : 560,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      border: "1.5px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "calc(var(--sp-20) * 1px)",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      fontFamily: FONT,
      ...props.style,
    }}>
      {ic && (
        <div style={{ width: 40, height: 40, borderRadius: 9999, backgroundColor: ic.bg, color: ic.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name={ic.name} size={20} />
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "calc(var(--sp-16) * 1px)", alignSelf: "stretch" }}>
        <span style={{ fontWeight: 600, fontSize: 18, lineHeight: "26px", textAlign: "center", color: "var(--color-text-primary)" }}>
          {props.text1 ?? "What is Lorem Ipsum?"}
        </span>
        <span style={{ fontWeight: 400, fontSize: 16, lineHeight: "25px", textAlign: "center", color: "var(--color-text-secondary)", textWrap: "pretty" }}>
          {props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
        </span>
      </div>
      {props.inset && (
        <div style={{ alignSelf: "stretch", minHeight: 260, borderRadius: 8, backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, boxSizing: "border-box" }}>
          {props.inset === true
            ? <span style={{ fontSize: 16, lineHeight: "25px", textAlign: "center", color: "var(--color-text-placeholder)" }}>Content within the inset.<br />e.g form input, radio button</span>
            : props.inset}
        </div>
      )}
      <div style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        gap: mobile ? "calc(var(--sp-16) * 1px)" : "calc(var(--sp-8) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
      }}>
        {mobile ? <>{primary}{secondary}</> : <>{secondary}{primary}</>}
      </div>
    </div>
  );
}
export default Modal;
