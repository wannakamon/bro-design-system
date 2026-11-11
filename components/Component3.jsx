// figma node: 14:359 Component 3 (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

export function Component3(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 52.8,
      height: 52.8,
      borderRadius: 26.399999618530273,
      backgroundColor: "var(--color-chartreuse-green-36)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.06), 0px 2px 32px 0px rgba(0,0,0,0.16)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 52.8,
        height: 52.8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={20.060} height={26.380} viewBox="0 0 20.060 26.380" fill="none" style={{
          position: "relative",
          width: 20.06,
          height: 26.38,
          maxWidth: 26.4,
          maxHeight: 26.4,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 20.06 0 L 20.06 26.38 L 0 26.38 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      maxWidth: 48,
      maxHeight: 48,
      borderRadius: 24,
      backgroundColor: "var(--color-chartreuse-green-36)",
      boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.06), 0px 2px 32px 0px rgba(0,0,0,0.16)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={18.230} height={23.980} viewBox="0 0 18.230 23.980" fill="none" style={{
          position: "relative",
          width: 18.23,
          height: 23.98,
          maxWidth: 24,
          maxHeight: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 18.23 0 L 18.23 23.98 L 0 23.98 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 23,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 22,
        height: 22,
      }}>
        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 22,
          height: 22,
          overflow: "hidden",
        }}>
          <path d={"M 0 0 L 22 0 L 22 22 L 0 22 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: variant=1,:hover=true
    "variant=1|hover=true": __body0,
    // figma: variant=1,:hover=false
    "variant=1|hover=false": __body1,
    // figma: variant=2,:hover=false
    "variant=2|hover=false": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component3;
