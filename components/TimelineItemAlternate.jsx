import { ComponentTimelineItemHead } from './ComponentTimelineItemHead.jsx';
import { TimelineItemLeft } from './TimelineItemLeft.jsx';
import { TimelineItemRight } from './TimelineItemRight.jsx';

// figma node: 6295:25835 Timeline.Item/Alternate (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "position=" + __venc(p.position);

export function TimelineItemAlternate(_p = {}) {
  const props = { ..._p, position: _p.position ?? "←" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 396,
      display: "flex",
      flexDirection: "row",
      gap: -10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", height: 0.001, flexGrow: 1 }} />
      <TimelineItemRight style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 396,
      display: "flex",
      flexDirection: "row",
      gap: -10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TimelineItemLeft style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }} />
      <div style={{ position: "relative", height: 0.001, flexGrow: 1 }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 396,
      display: "flex",
      flexDirection: "row",
      gap: -10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TimelineItemLeft style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }} />
      <TimelineItemRight
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        icon1={<ComponentTimelineItemHead type={"circle"} trail={false} trail2={false} style={{ transform: "scale(1, 1.909)", transformOrigin: "0 0" }} />}
      />
    </div>
  );
  const __impls = {
    // figma: Position=→
    "position=→": __body0,
    // figma: Position=←
    "position=←": __body1,
    // figma: Position=<- & →
    "position=<- & →": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TimelineItemAlternate;
