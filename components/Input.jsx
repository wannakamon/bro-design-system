import { AlertAlert02 } from './AlertAlert02.jsx';
import { AlertCheckmarkCircle02 } from './AlertCheckmarkCircle02.jsx';
import { AlertInformationCircle } from './AlertInformationCircle.jsx';
import { IconCheck } from './IconCheck.jsx';
import { IconEye } from './IconEye.jsx';
import { IconEyeOff } from './IconEyeOff.jsx';
import { IconX } from './IconX.jsx';

// figma node: 768:4692 Input (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "inputState=" + __venc(p.inputState);

export function Input(_p = {}) {
  const props = { ..._p, label: _p.label ?? "รหัสผ่าน", inputState: _p.inputState ?? "default", required: _p.required ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "อีเมล"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid rgba(250,250,250,0.34)",
        borderRight: "0.500px solid rgba(250,250,250,0.34)",
        borderBottom: "0.500px solid rgba(250,250,250,0.34)",
        borderLeft: "0.500px solid rgba(250,250,250,0.34)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-placeholder)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "กรอกอีเมล"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "รหัสผ่าน"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid rgba(250,250,250,0.34)",
        borderRight: "0.500px solid rgba(250,250,250,0.34)",
        borderBottom: "0.500px solid rgba(250,250,250,0.34)",
        borderLeft: "0.500px solid rgba(250,250,250,0.34)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-placeholder)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "************"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconEyeOff />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon2 ?? <AlertInformationCircle style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text4 ?? "Minimum 10 characters"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "อีเมล"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "1.500px solid var(--color-border-focus)",
        borderRight: "1.500px solid var(--color-border-focus)",
        borderBottom: "1.500px solid var(--color-border-focus)",
        borderLeft: "1.500px solid var(--color-border-focus)",
        boxShadow: "0px 2px 3px 0px var(--color-border-focus)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "yourmail@example.com"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "รหัสผ่าน"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid rgba(250,250,250,0.34)",
        borderRight: "0.500px solid rgba(250,250,250,0.34)",
        borderBottom: "0.500px solid rgba(250,250,250,0.34)",
        borderLeft: "0.500px solid rgba(250,250,250,0.34)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-placeholder)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "mypassword"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconEye />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon2 ?? <AlertInformationCircle style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text4 ?? "Minimum 10 characters"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Text Area"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid rgba(250,250,250,0.34)",
        borderRight: "0.500px solid rgba(250,250,250,0.34)",
        borderBottom: "0.500px solid rgba(250,250,250,0.34)",
        borderLeft: "0.500px solid rgba(250,250,250,0.34)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-placeholder)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{props.text3 ?? "ข้อความเพิ่มเติม ...\n\n"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertInformationCircle style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text4 ?? "สูงสุด 500 ตัวอักษร / Max 500 characters"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "อีเมล"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid var(--color-status-success)",
        borderRight: "0.500px solid var(--color-status-success)",
        borderBottom: "0.500px solid var(--color-status-success)",
        borderLeft: "0.500px solid var(--color-status-success)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "yourmail@example.com"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertCheckmarkCircle02 style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-success)",
          flexShrink: 0,
        }}>{props.text4 ?? "ยืนยันอีเมล"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid var(--color-status-success)",
        borderRight: "0.500px solid var(--color-status-success)",
        borderBottom: "0.500px solid var(--color-status-success)",
        borderLeft: "0.500px solid var(--color-status-success)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "BROCOMMART"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconCheck />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-success)",
          flexShrink: 0,
        }}>{props.text2 ?? "โค้ดถูกต้อง"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "อีเมล"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid var(--color-status-danger)",
        borderRight: "0.500px solid var(--color-status-danger)",
        borderBottom: "0.500px solid var(--color-status-danger)",
        borderLeft: "0.500px solid var(--color-status-danger)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "yourmail@example.com"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertAlert02 style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text4 ?? "รูปแบบอีเมลไม่ถูกต้อง"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(255,255,255,0)",
        borderTop: "0.500px solid var(--color-status-danger)",
        borderRight: "0.500px solid var(--color-status-danger)",
        borderBottom: "0.500px solid var(--color-status-danger)",
        borderLeft: "0.500px solid var(--color-status-danger)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "BROCOMMART"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconX />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-4) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 8,
          whiteSpace: "nowrap",
          lineHeight: "10px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "โค้ดไม่ถูกต้อง"}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 252,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-4) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Disabled"}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--color-text-danger)",
          flexShrink: 0,
        }}>{props.text2 ?? "*"}</span>
        )}
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "rgba(43,43,43,0.55)",
        borderTop: "0.500px solid rgba(250,250,250,0.34)",
        borderRight: "0.500px solid rgba(250,250,250,0.34)",
        borderBottom: "0.500px solid rgba(250,250,250,0.34)",
        borderLeft: "0.500px solid rgba(250,250,250,0.34)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "12px 12px 12px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--sp-12) * 1px)",
        paddingTop: "calc(var(--sp-12) * 1px)",
        paddingRight: "calc(var(--sp-12) * 1px)",
        paddingBottom: "calc(var(--sp-12) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-disabled)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "cannot edit"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Input State=Default
    "inputState=default": __body0,
    // figma: Input State=Password
    "inputState=password": __body1,
    // figma: Input State=Focus
    "inputState=focus": __body2,
    // figma: Input State=Show Password
    "inputState=show password": __body3,
    // figma: Input State=Text Area
    "inputState=text area": __body4,
    // figma: Input State=Correct
    "inputState=correct": __body5,
    // figma: Input State=Code Correct
    "inputState=code correct": __body6,
    // figma: Input State=Incorrect
    "inputState=incorrect": __body7,
    // figma: Input State=Code Incorrect
    "inputState=code incorrect": __body8,
    // figma: Input State=Disabled
    "inputState=disabled": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Input;
