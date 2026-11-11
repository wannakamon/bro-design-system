// figma-style hand-authored: ChoiceboxRadio (3 states) — bro.game "Choicebox" pattern, package/payment-method selector
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ChoiceboxRadio(_p = {}) {
  const props = { ..._p, label: _p.label ?? "", state: _p.state ?? "unselected" };
  const ring = (selected, disabled) => ({
    width: 20,
    height: 20,
    borderRadius: 9999,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    border: selected ? "1.5px solid var(--color-brand-primary)" : "1.5px solid var(--color-border-default)",
    backgroundColor: "transparent",
    opacity: disabled ? 0.4 : 1,
  });
  const dot = {
    width: 10,
    height: 10,
    borderRadius: 9999,
    backgroundColor: "var(--color-brand-primary)",
  };
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
  const __body0 = () => (
    <label className={props.className} style={wrap(false)}>
      <span style={ring(false, false)} />
      {props.label && <span style={labelStyle}>{props.label}</span>}
    </label>
  );
  const __body1 = () => (
    <label className={props.className} style={wrap(false)}>
      <span style={ring(true, false)}><span style={dot} /></span>
      {props.label && <span style={labelStyle}>{props.label}</span>}
    </label>
  );
  const __body2 = () => (
    <label className={props.className} style={wrap(true)}>
      <span style={ring(false, true)} />
      {props.label && <span style={{ ...labelStyle, opacity: 0.4 }}>{props.label}</span>}
    </label>
  );
  const __body3 = () => (
    <label className={props.className} style={wrap(true)}>
      <span style={ring(true, true)}><span style={dot} /></span>
      {props.label && <span style={{ ...labelStyle, opacity: 0.4 }}>{props.label}</span>}
    </label>
  );
  const __impls = {
    "state=unselected": __body0,
    "state=selected": __body1,
    "state=disabled": __body2,
    "state=disabled-selected": __body3,
  };
  const __el = (__impls[__vkey(props)] ?? __body0)();
  if (!props.onClick || props.state === "disabled" || props.state === "disabled-selected") return __el;
  return React.cloneElement(__el, { onClick: props.onClick });
}
export default ChoiceboxRadio;
