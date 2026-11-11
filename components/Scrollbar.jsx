// figma node: 6326:28681 Scrollbar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "hover=" + __venc(p.hover);

export function Scrollbar(_p = {}) {
  const props = { ..._p, hover: _p.hover ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 0px 152px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 99,
        backgroundColor: "rgb(193,193,193)",
        display: "flex",
        flexDirection: "column",
        gap: 80,
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 1,
          height: 1,
          overflow: "hidden",
          flexShrink: 0,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          opacity: 0.45,
        }}>_ignore</div>
        <div style={{
          position: "relative",
          width: 1,
          height: 1,
          overflow: "hidden",
          flexShrink: 0,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          opacity: 0.45,
        }}>_ignore</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 0px 152px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 99,
        backgroundColor: "rgb(125,125,125)",
        display: "flex",
        flexDirection: "column",
        gap: 80,
        padding: "0px 4px 0px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 1,
          height: 1,
          overflow: "hidden",
          flexShrink: 0,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          opacity: 0.45,
        }}>_ignore</div>
        <div style={{
          position: "relative",
          width: 1,
          height: 1,
          overflow: "hidden",
          flexShrink: 0,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          opacity: 0.45,
        }}>_ignore</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Hover=false
    "hover=false": __body0,
    // figma: Hover=true
    "hover=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Scrollbar;
