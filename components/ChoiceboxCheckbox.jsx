// figma-style hand-authored: ChoiceboxCheckbox (3 states) — bro.game "Choicebox" pattern (package/payment selection), coupon-applied check
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ChoiceboxCheckbox(_p = {}) {
  const props = { ..._p, label: _p.label ?? "", state: _p.state ?? "unchecked" };
  const box = (checked, disabled) => ({
    width: 20,
    height: 20,
    borderRadius: 4,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    border: checked ? "none" : "1.5px solid var(--color-border-default)",
    backgroundColor: checked ? "var(--color-brand-primary)" : "transparent",
    opacity: disabled ? 0.4 : 1,
  });
  const successBox = () => ({
    width: 20,
    height: 20,
    borderRadius: 4,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    border: "1px solid var(--color-border-success)",
    backgroundColor: "var(--color-bg-success)",
  });
  const wrap = (disabled) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    ...props.style,
  });
  const labelStyle = {
    fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    color: "var(--color-text-primary)",
    lineHeight: "20px",
  };
  const check = (stroke) => (
    <svg width={11} height={8} viewBox="0 0 11 8" fill="none">
      <path d="M1 4L4 7L10 1" stroke={stroke || "rgb(10,10,10)"} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const __body0 = () => (
    <label className={props.className} style={wrap(false)}>
      <span style={box(false, false)} />
      {props.label && <span style={labelStyle}>{props.label}</span>}
    </label>
  );
  const __body1 = () => (
    <label className={props.className} style={wrap(false)}>
      <span style={box(true, false)}>{check()}</span>
      {props.label && <span style={labelStyle}>{props.label}</span>}
    </label>
  );
  const __body2 = () => (
    <label className={props.className} style={wrap(true)}>
      <span style={box(false, true)} />
      {props.label && <span style={{ ...labelStyle, opacity: 0.4 }}>{props.label}</span>}
    </label>
  );
  const __body3 = () => (
    <label className={props.className} style={wrap(true)}>
      <span style={box(true, true)}>{check()}</span>
      {props.label && <span style={{ ...labelStyle, opacity: 0.4 }}>{props.label}</span>}
    </label>
  );
  const __body4 = () => (
    <label className={props.className} style={wrap(true)}>
      <span style={successBox()}>{check("var(--color-text-success)")}</span>
      {props.label && <span style={{ ...labelStyle, color: "var(--color-text-success)" }}>{props.label}</span>}
    </label>
  );
  const __impls = {
    "state=unchecked": __body0,
    "state=checked": __body1,
    "state=disabled": __body2,
    "state=disabled-checked": __body3,
    "state=success-disabled": __body4,
  };
  const __el = (__impls[__vkey(props)] ?? __body0)();
  if (!props.onClick || props.state === "disabled" || props.state === "disabled-checked" || props.state === "success-disabled") return __el;
  return React.cloneElement(__el, { onClick: props.onClick });
}
export default ChoiceboxCheckbox;
