import { LayoutBlocksVertical41 } from './LayoutBlocksVertical41.jsx';

// figma node: 6295:25845 Timeline (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function Timeline(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "left" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 406,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 168,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.count ?? <LayoutBlocksVertical41 />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 406,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 2552.004,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.count ?? <LayoutBlocksVertical41 />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 450,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 224,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.count ?? <LayoutBlocksVertical41 />}</div>
    </div>
  );
  const __impls = {
    // figma: Mode=left
    "mode=left": __body0,
    // figma: Mode=right
    "mode=right": __body1,
    // figma: Mode=alternate
    "mode=alternate": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Timeline;
