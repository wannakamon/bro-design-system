// figma node: 14:1309 Component 1 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Component15(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--color-grey-13)",
      ...props.style,
    }}>
      <svg width={16} height={24} viewBox="0 0 16 24" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 24,
        borderWidth: "calc(var(--stroke-weight-1-6) * 1px)",
      }}>
        <path d={"M 0 0 L 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 0 16 L 0 8 Z M 8 16 L 8 24 L 0 16 L 8 16 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 11,
      height: 11,
      position: "relative",
      color: "var(--color-grey-60)",
      ...props.style,
    }}>
      <svg width={10.986} height={11.028} viewBox="0 0 10.986 11.028" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 10.986,
        height: 11.028,
        borderWidth: "calc(var(--stroke-weight-1-2) * 1px)",
      }}>
        <path d={"M 5.599 4.543 L 10.876 4.55 C 11.337 6.699 10.495 11.028 5.599 11.028 C 2.507 11.028 0 8.559 0 5.514 C 0 2.469 2.507 0 5.599 0 C 6.994 -0.002 8.339 0.511 9.369 1.437 L 7.794 2.989 C 7.183 2.472 6.404 2.187 5.599 2.188 C 3.734 2.188 2.222 3.677 2.222 5.514 C 2.222 7.35 3.734 8.839 5.599 8.839 C 7.166 8.839 8.249 7.926 8.647 6.649 L 5.599 6.649 L 5.599 4.543 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: variant=1
    "variant=1": __body0,
    // figma: variant=2
    "variant=2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component15;
