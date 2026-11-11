import { ComponentTimelineItemHead } from './ComponentTimelineItemHead.jsx';

// figma node: 6295:25829 Timeline.Item/Right
export function TimelineItemRight(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Create a services site 2015-09-01" };
  return (
    <div className={props.className} style={{
      width: 250,
      display: "flex",
      flexDirection: "column",
      padding: "0px 26px 20px 26px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
      <div style={{
          position: "absolute",
          left: -6,
          top: 0,
          width: 22,
          height: 42,
        }}>{props.icon1 ?? <ComponentTimelineItemHead type={"circle"} trail={true} trail2={true} style={{ transform: "scale(1, 1.909)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default TimelineItemRight;
