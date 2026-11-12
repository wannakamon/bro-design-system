import { ClockCircle } from './ClockCircle.jsx';
import { Divider } from './Divider.jsx';

// figma node: 6295:25802 Component/Timeline-Item-Head (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "trail=" + __venc(p.trail) + '|' + "trail2=" + __venc(p.trail2);

export function ComponentTimelineItemHead(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon", trail: _p.trail ?? true, trail2: _p.trail2 ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <Divider
        style={{
          position: "absolute",
          left: 11,
          top: 22,
          height: 0.001,
        }}
        type={"vertical"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <ClockCircle style={{ transform: "scale(0.444, 0.444)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <ClockCircle style={{ transform: "scale(0.444, 0.444)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <Divider
        style={{
          position: "absolute",
          left: 11,
          top: 11,
          height: 11,
        }}
        type={"vertical"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <Divider
        style={{
          position: "absolute",
          left: 11,
          top: 0,
          height: 11,
        }}
        type={"vertical"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 2px rgb(24,144,255)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <Divider
        style={{
          position: "absolute",
          left: 11,
          top: 11,
          height: 11,
        }}
        type={"vertical"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 2px rgb(24,144,255)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <Divider
        style={{
          position: "absolute",
          left: 11,
          top: 0,
          height: 11,
        }}
        type={"vertical"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 2px rgb(24,144,255)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 22,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 2px rgb(24,144,255)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Type=Icon, Trail ↑=true, Trail ↓=true
    "type=icon|trail=true|trail2=true": __body0,
    // figma: Type=Icon, Trail ↑=true, Trail ↓=false
    "type=icon|trail=true|trail2=false": __body1,
    // figma: Type=Icon, Trail ↑=false, Trail ↓=true
    "type=icon|trail=false|trail2=true": __body0,
    // figma: Type=Icon, Trail ↑=false, Trail ↓=false
    "type=icon|trail=false|trail2=false": __body1,
    // figma: Type=Circle, Trail ↑=true, Trail ↓=true
    "type=circle|trail=true|trail2=true": __body2,
    // figma: Type=Circle, Trail ↑=false, Trail ↓=true
    "type=circle|trail=false|trail2=true": __body3,
    // figma: Type=Circle, Trail ↑=true, Trail ↓=false
    "type=circle|trail=true|trail2=false": __body4,
    // figma: Type=Circle, Trail ↑=false, Trail ↓=false
    "type=circle|trail=false|trail2=false": __body5,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ComponentTimelineItemHead;
