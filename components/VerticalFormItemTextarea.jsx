import { InfoCircle } from './InfoCircle.jsx';
import { Textarea } from './Textarea.jsx';

// figma node: 6332:30673 Vertical-Form-Item/Textarea (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "required=" + __venc(p.required) + '|' + "optional=" + __venc(p.optional) + '|' + "helpText=" + __venc(p.helpText) + '|' + "tooltip=" + __venc(p.tooltip);

export function VerticalFormItemTextarea(_p = {}) {
  const props = { ..._p, required: _p.required ?? true, optional: _p.optional ?? true, helpText: _p.helpText ?? false, tooltip: _p.tooltip ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
          flexShrink: 0,
        }}>{props.text2 ?? "(optional)"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
      <div style={{
        position: "relative",
        width: 0.001,
        height: 0.001,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 311,
          height: 22,
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
        }}>{props.text3 ?? "Please input passenger's name or delete this field."}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
          flexShrink: 0,
        }}>{props.text2 ?? "(optional)"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <InfoCircle style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
          flexShrink: 0,
        }}>{props.text2 ?? "(optional)"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
      <div style={{
        position: "relative",
        width: 0.001,
        height: 0.001,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 311,
          height: 22,
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
        }}>{props.text3 ?? "Please input passenger's name or delete this field."}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <InfoCircle style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
          flexShrink: 0,
        }}>{props.text2 ?? "(optional)"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "SimSong, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22.001px",
          color: "rgb(255,77,79)",
          flexShrink: 0,
        }}>{props.text1 ?? "*"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
        }}>{props.text2 ?? "Label"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <InfoCircle style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
      <div style={{
        position: "relative",
        width: 0.001,
        height: 0.001,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 311,
          height: 22,
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
        }}>{props.text3 ?? "Please input passenger's name or delete this field."}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "SimSong, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22.001px",
          color: "rgb(255,77,79)",
          flexShrink: 0,
        }}>{props.text1 ?? "*"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(38,38,38)",
          flexShrink: 0,
        }}>{props.text2 ?? "Label"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <InfoCircle style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <InfoCircle style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
      <div style={{
        position: "relative",
        width: 0.001,
        height: 0.001,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 311,
          height: 22,
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
        }}>{props.text2 ?? "Please input passenger's name or delete this field."}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <InfoCircle style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "SimSong, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22.001px",
          color: "rgb(255,77,79)",
          flexShrink: 0,
        }}>{props.text1 ?? "*"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text2 ?? "Label"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
      <div style={{
        position: "relative",
        width: 0.001,
        height: 0.001,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 311,
          height: 22,
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
        }}>{props.text3 ?? "Please input passenger's name or delete this field."}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "SimSong, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: "22.001px",
          color: "rgb(255,77,79)",
          flexShrink: 0,
        }}>{props.text1 ?? "*"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text2 ?? "Label"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
      <div style={{
        position: "relative",
        width: 0.001,
        height: 0.001,
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: 0.001,
          width: 311,
          height: 22,
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.45)",
        }}>{props.text2 ?? "Please input passenger's name or delete this field."}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <Textarea
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        state={"normal"}
        filled={false}
        showCount={true}
      />
    </div>
  );
  const __impls = {
    // figma: Required=false, Optional=true, Tooltip=false, Help Text=true
    "required=false|optional=true|helpText=true|tooltip=false": __body0,
    // figma: Required=false, Optional=true, Tooltip=false, Help Text=false
    "required=false|optional=true|helpText=false|tooltip=false": __body1,
    // figma: Required=false, Optional=true, Tooltip=true, Help Text=true
    "required=false|optional=true|helpText=true|tooltip=true": __body2,
    // figma: Required=false, Optional=true, Tooltip=true, Help Text=false
    "required=false|optional=true|helpText=false|tooltip=true": __body3,
    // figma: Required=true, Optional=false, Tooltip=true, Help Text=true
    "required=true|optional=false|helpText=true|tooltip=true": __body4,
    // figma: Required=true, Optional=false, Tooltip=true, Help Text=false
    "required=true|optional=false|helpText=false|tooltip=true": __body5,
    // figma: Required=false, Optional=false, Tooltip=true, Help Text=true
    "required=false|optional=false|helpText=true|tooltip=true": __body6,
    // figma: Required=false, Optional=false, Tooltip=true, Help Text=false
    "required=false|optional=false|helpText=false|tooltip=true": __body7,
    // figma: Required=true, Optional=false, Tooltip=false, Help Text=true
    "required=true|optional=false|helpText=true|tooltip=false": __body8,
    // figma: Required=true, Optional=false, Tooltip=false, Help Text=false
    "required=true|optional=false|helpText=false|tooltip=false": __body9,
    // figma: Required=false, Optional=false, Tooltip=false, Help Text=true
    "required=false|optional=false|helpText=true|tooltip=false": __body10,
    // figma: Required=false, Optional=false, Tooltip=false, Help Text=false
    "required=false|optional=false|helpText=false|tooltip=false": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default VerticalFormItemTextarea;
