import { TextText } from './TextText.jsx';

// figma node: 6292:21402 Divider (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "dashed=" + __venc(p.dashed) + '|' + "orientation=" + __venc(p.orientation) + '|' + "title=" + __venc(p.title);

export function Divider(_p = {}) {
  const props = { ..._p, type: _p.type ?? "horizontal", dashed: _p.dashed ?? true, orientation: _p.orientation ?? "left", title: _p.title ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 224,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Divider
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"horizontal"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <div style={{
          position: "relative",
          width: 71,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      <div style={{ position: "relative", width: 21, flexShrink: 0 }}>{props.icon2 ?? <Divider type={"horizontal"} dashed={false} orientation={".n/a"} title={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 215,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 21, flexShrink: 0 }}>{props.icon1 ?? <Divider type={"horizontal"} dashed={false} orientation={".n/a"} title={false} />}</div>
      <div style={{
          position: "relative",
          width: 62,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      <Divider
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"horizontal"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 259,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Divider
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"horizontal"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
      <div style={{
          position: "relative",
          width: 31,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      <Divider
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"horizontal"}
        dashed={false}
        orientation={".n/a"}
        title={false}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg width={1} viewBox="-0.500 0 1 12" fill="none" style={{
        position: "relative",
        width: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 0 L -0.5 0 L -0.5 1.8 L 0 1.8 L 0.5 1.8 L 0.5 0 L 0 0 Z M 0 4.2 L -0.5 4.2 L -0.5 7.8 L 0 7.8 L 0.5 7.8 L 0.5 4.2 L 0 4.2 Z M 0 10.2 L -0.5 10.2 L -0.5 12 L 0 12 L 0.5 12 L 0.5 10.2 L 0 10.2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 12,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <svg width={1} viewBox="-0.500 0 1 12" fill="none" style={{
        position: "relative",
        width: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 0 L -0.5 0 L -0.5 12 L 0 12 L 0.5 12 L 0.5 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 40,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 -0.500 40 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 0 L 0 0.5 L 1.5 0.5 L 1.5 0 L 1.5 -0.5 L 0 -0.5 L 0 0 Z M 3.5 0 L 3.5 0.5 L 6.5 0.5 L 6.5 0 L 6.5 -0.5 L 3.5 -0.5 L 3.5 0 Z M 8.5 0 L 8.5 0.5 L 11.5 0.5 L 11.5 0 L 11.5 -0.5 L 8.5 -0.5 L 8.5 0 Z M 13.5 0 L 13.5 0.5 L 16.5 0.5 L 16.5 0 L 16.5 -0.5 L 13.5 -0.5 L 13.5 0 Z M 18.5 0 L 18.5 0.5 L 21.5 0.5 L 21.5 0 L 21.5 -0.5 L 18.5 -0.5 L 18.5 0 Z M 23.5 0 L 23.5 0.5 L 26.5 0.5 L 26.5 0 L 26.5 -0.5 L 23.5 -0.5 L 23.5 0 Z M 28.5 0 L 28.5 0.5 L 31.5 0.5 L 31.5 0 L 31.5 -0.5 L 28.5 -0.5 L 28.5 0 Z M 33.5 0 L 33.5 0.5 L 36.5 0.5 L 36.5 0 L 36.5 -0.5 L 33.5 -0.5 L 33.5 0 Z M 38.5 0 L 38.5 0.5 L 40 0.5 L 40 0 L 40 -0.5 L 38.5 -0.5 L 38.5 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 40,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 -0.500 40 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 0 L 0 0.5 L 40 0.5 L 40 0 L 40 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Type=horizontal, Dashed=true, Title=true, ⬑Orientation=right
    "type=horizontal|dashed=true|orientation=right|title=true": __body0,
    // figma: Type=horizontal, Dashed=true, Title=true, ⬑Orientation=left
    "type=horizontal|dashed=true|orientation=left|title=true": __body1,
    // figma: Type=horizontal, Dashed=true, Title=true, ⬑Orientation=center
    "type=horizontal|dashed=true|orientation=center|title=true": __body2,
    // figma: Type=vertical, Dashed=true, Title=false, ⬑Orientation=.N/A
    "type=vertical|dashed=true|orientation=.n/a|title=false": __body3,
    // figma: Type=vertical, Dashed=false, Title=false, ⬑Orientation=.N/A
    "type=vertical|dashed=false|orientation=.n/a|title=false": __body4,
    // figma: Type=horizontal, Dashed=false, Title=true, ⬑Orientation=right
    "type=horizontal|dashed=false|orientation=right|title=true": __body0,
    // figma: Type=horizontal, Dashed=false, Title=true, ⬑Orientation=left
    "type=horizontal|dashed=false|orientation=left|title=true": __body1,
    // figma: Type=horizontal, Dashed=true, Title=false, ⬑Orientation=.N/A
    "type=horizontal|dashed=true|orientation=.n/a|title=false": __body5,
    // figma: Type=horizontal, Dashed=false, Title=false, ⬑Orientation=.N/A
    "type=horizontal|dashed=false|orientation=.n/a|title=false": __body6,
    // figma: Type=horizontal, Dashed=false, Title=true, ⬑Orientation=center
    "type=horizontal|dashed=false|orientation=center|title=true": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Divider;
