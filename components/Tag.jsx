import { Close } from './Close.jsx';

// figma node: 6293:22154 Tag (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color) + '|' + "icon=" + __venc(p.icon);

export function Tag(_p = {}) {
  const props = { ..._p, closable: _p.closable ?? true, color: _p.color ?? "default", icon: _p.icon ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,240,246)",
      boxShadow: "inset 0 0 0 1px rgb(255,173,210)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(235,47,150)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "magenta"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,163,158)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(245,34,45)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "red"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,242,232)",
      boxShadow: "inset 0 0 0 1px rgb(255,187,150)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(250,84,28)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "volcano"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,242,232)",
      boxShadow: "inset 0 0 0 1px rgb(255,187,150)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,84,28)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(250,84,28)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "volcano"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,247,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,213,145)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(250,140,22)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "orange"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(250,173,20)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "gold"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,173,20)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(250,173,20)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "gold"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(252,255,230)",
      boxShadow: "inset 0 0 0 1px rgb(234,255,143)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(160,217,17)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "lime"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(252,255,230)",
      boxShadow: "inset 0 0 0 1px rgb(234,255,143)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(160,217,17)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(160,217,17)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "lime"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(82,196,26)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "green"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(230,255,251)",
      boxShadow: "inset 0 0 0 1px rgb(135,232,222)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(19,194,194)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "cyan"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(230,255,251)",
      boxShadow: "inset 0 0 0 1px rgb(135,232,222)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(19,194,194)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(19,194,194)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "cyan"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(24,144,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "blue"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(240,245,255)",
      boxShadow: "inset 0 0 0 1px rgb(173,198,255)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(47,84,235)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "geekblue"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(240,245,255)",
      boxShadow: "inset 0 0 0 1px rgb(173,198,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(47,84,235)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(47,84,235)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "geekblue"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(249,240,255)",
      boxShadow: "inset 0 0 0 1px rgb(211,173,247)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(114,46,209)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "purple"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(249,240,255)",
      boxShadow: "inset 0 0 0 1px rgb(211,173,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(114,46,209)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(114,46,209)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "purple"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Default"}</span>
      {props.closable && (
      <div style={{
          position: "relative",
          width: 10,
          height: 10,
          flexShrink: 0,
        }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,163,158)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(245,34,45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(245,34,45)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "red"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,247,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,213,145)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,140,22)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(250,140,22)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "orange"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,240,246)",
      boxShadow: "inset 0 0 0 1px rgb(255,173,210)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(235,47,150)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(235,47,150)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "magenta"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(82,196,26)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(82,196,26)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "green"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Default "}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 9,
      padding: "1px 8px 1px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 12,
        height: 12,
        flexShrink: 0,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Union</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "blue"}</span>
        {props.closable && (
        <div style={{
            position: "relative",
            width: 10,
            height: 10,
            flexShrink: 0,
          }}>{props.icon1 ?? <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />}</div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Color=magenta, Icon=false
    "color=magenta|icon=false": __body0,
    // figma: Color=red, Icon=false
    "color=red|icon=false": __body1,
    // figma: Color=volcano, Icon=false
    "color=volcano|icon=false": __body2,
    // figma: Color=volcano, Icon=true
    "color=volcano|icon=true": __body3,
    // figma: Color=orange, Icon=false
    "color=orange|icon=false": __body4,
    // figma: Color=gold, Icon=false
    "color=gold|icon=false": __body5,
    // figma: Color=gold, Icon=true
    "color=gold|icon=true": __body6,
    // figma: Color=lime, Icon=false
    "color=lime|icon=false": __body7,
    // figma: Color=lime, Icon=true
    "color=lime|icon=true": __body8,
    // figma: Color=green, Icon=false
    "color=green|icon=false": __body9,
    // figma: Color=cyan, Icon=false
    "color=cyan|icon=false": __body10,
    // figma: Color=cyan, Icon=true
    "color=cyan|icon=true": __body11,
    // figma: Color=blue, Icon=false
    "color=blue|icon=false": __body12,
    // figma: Color=geekblue, Icon=false
    "color=geekblue|icon=false": __body13,
    // figma: Color=geekblue, Icon=true
    "color=geekblue|icon=true": __body14,
    // figma: Color=purple, Icon=false
    "color=purple|icon=false": __body15,
    // figma: Color=purple, Icon=true
    "color=purple|icon=true": __body16,
    // figma: Color=default, Icon=false
    "color=default|icon=false": __body17,
    // figma: Color=red, Icon=true
    "color=red|icon=true": __body18,
    // figma: Color=orange, Icon=true
    "color=orange|icon=true": __body19,
    // figma: Color=magenta, Icon=true
    "color=magenta|icon=true": __body20,
    // figma: Color=green, Icon=true
    "color=green|icon=true": __body21,
    // figma: Color=default, Icon=true
    "color=default|icon=true": __body22,
    // figma: Color=blue, Icon=true
    "color=blue|icon=true": __body23,
  };
  return (__impls[__vkey(props)] ?? __body17)();
}
export default Tag;
