// figma node: 6326:26773 Alert (64 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "custom=" + __venc(p.custom) + '|' + "description=" + __venc(p.description) + '|' + "closeBtn=" + __venc(p.closeBtn) + '|' + "icon=" + __venc(p.icon);

export function Alert(_p = {}) {
  const props = { ..._p, type: _p.type ?? "error", custom: _p.custom ?? false, description: _p.description ?? false, closeBtn: _p.closeBtn ?? true, icon: _p.icon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(250,173,20)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(250,173,20)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,173,20)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,173,20)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,77,79)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(82,196,26)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,77,79)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 93,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(82,196,26)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 36px 0px 36px",
        alignItems: "flex-start",
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
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          height: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 92,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
        }}>{props.text2 ?? "Success Description Success Description Success Description"}</span>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(250,173,20)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(250,173,20)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(255,77,79)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(82,196,26)",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 0 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,173,20)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(250,173,20)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,77,79)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(82,196,26)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,77,79)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(82,196,26)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16} viewBox="0 0 16 16" fill="none" style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" transform="matrix(1 0 0 1 -0.000 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.45)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>
            <path d={"M 0 0 L 14 0 L 14 14 L 0 14 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Warning Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Info Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,251,230)",
      boxShadow: "inset 0 0 0 1px rgb(255,229,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Warning Text"}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(230,247,255)",
      boxShadow: "inset 0 0 0 1px rgb(145,213,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Info Text"}</span>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Error Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Success Text"}</span>
        <div style={{
          position: "relative",
          width: 64.001,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            outline: "1px dashed rgb(145,213,255)",
            outlineOffset: "-0.500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1,
              color: "rgb(24,144,255)",
              flexShrink: 0,
            }}>Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(255,241,240)",
      boxShadow: "inset 0 0 0 1px rgb(255,204,199)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Error Text"}</span>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 395,
      borderRadius: 2,
      backgroundColor: "rgb(246,255,237)",
      boxShadow: "inset 0 0 0 1px rgb(183,235,143)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "9px 16px 9px 16px",
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
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Success Text"}</span>
    </div>
  );
  const __impls = {
    // figma: Type=warning, Description=true, Icon=True, Close Btn=True, Custom=True
    "type=warning|custom=true|description=true|closeBtn=true|icon=true": __body0,
    // figma: Type=info, Description=true, Icon=True, Close Btn=True, Custom=True
    "type=info|custom=true|description=true|closeBtn=true|icon=true": __body1,
    // figma: Type=warning, Description=true, Icon=True, Close Btn=True, Custom=False
    "type=warning|custom=false|description=true|closeBtn=true|icon=true": __body2,
    // figma: Type=info, Description=true, Icon=True, Close Btn=True, Custom=False
    "type=info|custom=false|description=true|closeBtn=true|icon=true": __body3,
    // figma: Type=error, Description=true, Icon=True, Close Btn=True, Custom=True
    "type=error|custom=true|description=true|closeBtn=true|icon=true": __body4,
    // figma: Type=success, Description=true, Icon=True, Close Btn=True, Custom=True
    "type=success|custom=true|description=true|closeBtn=true|icon=true": __body5,
    // figma: Type=error, Description=true, Icon=True, Close Btn=True, Custom=False
    "type=error|custom=false|description=true|closeBtn=true|icon=true": __body6,
    // figma: Type=success, Description=true, Icon=True, Close Btn=True, Custom=False
    "type=success|custom=false|description=true|closeBtn=true|icon=true": __body7,
    // figma: Type=warning, Description=true, Icon=True, Close Btn=False, Custom=True
    "type=warning|custom=true|description=true|closeBtn=false|icon=true": __body8,
    // figma: Type=info, Description=true, Icon=True, Close Btn=False, Custom=True
    "type=info|custom=true|description=true|closeBtn=false|icon=true": __body9,
    // figma: Type=warning, Description=true, Icon=True, Close Btn=False, Custom=False
    "type=warning|custom=false|description=true|closeBtn=false|icon=true": __body10,
    // figma: Type=info, Description=true, Icon=True, Close Btn=False, Custom=False
    "type=info|custom=false|description=true|closeBtn=false|icon=true": __body11,
    // figma: Type=error, Description=true, Icon=True, Close Btn=False, Custom=True
    "type=error|custom=true|description=true|closeBtn=false|icon=true": __body12,
    // figma: Type=success, Description=true, Icon=True, Close Btn=False, Custom=True
    "type=success|custom=true|description=true|closeBtn=false|icon=true": __body13,
    // figma: Type=error, Description=true, Icon=True, Close Btn=False, Custom=False
    "type=error|custom=false|description=true|closeBtn=false|icon=true": __body14,
    // figma: Type=success, Description=true, Icon=True, Close Btn=False, Custom=False
    "type=success|custom=false|description=true|closeBtn=false|icon=true": __body15,
    // figma: Type=warning, Description=true, Icon=False, Close Btn=True, Custom=True
    "type=warning|custom=true|description=true|closeBtn=true|icon=false": __body16,
    // figma: Type=info, Description=true, Icon=False, Close Btn=True, Custom=True
    "type=info|custom=true|description=true|closeBtn=true|icon=false": __body17,
    // figma: Type=warning, Description=true, Icon=False, Close Btn=True, Custom=False
    "type=warning|custom=false|description=true|closeBtn=true|icon=false": __body18,
    // figma: Type=info, Description=true, Icon=False, Close Btn=True, Custom=False
    "type=info|custom=false|description=true|closeBtn=true|icon=false": __body19,
    // figma: Type=error, Description=true, Icon=False, Close Btn=True, Custom=True
    "type=error|custom=true|description=true|closeBtn=true|icon=false": __body20,
    // figma: Type=success, Description=true, Icon=False, Close Btn=True, Custom=True
    "type=success|custom=true|description=true|closeBtn=true|icon=false": __body21,
    // figma: Type=error, Description=true, Icon=False, Close Btn=True, Custom=False
    "type=error|custom=false|description=true|closeBtn=true|icon=false": __body22,
    // figma: Type=success, Description=true, Icon=False, Close Btn=True, Custom=False
    "type=success|custom=false|description=true|closeBtn=true|icon=false": __body23,
    // figma: Type=warning, Description=true, Icon=False, Close Btn=False, Custom=True
    "type=warning|custom=true|description=true|closeBtn=false|icon=false": __body24,
    // figma: Type=info, Description=true, Icon=False, Close Btn=False, Custom=True
    "type=info|custom=true|description=true|closeBtn=false|icon=false": __body25,
    // figma: Type=warning, Description=true, Icon=False, Close Btn=False, Custom=False
    "type=warning|custom=false|description=true|closeBtn=false|icon=false": __body26,
    // figma: Type=info, Description=true, Icon=False, Close Btn=False, Custom=False
    "type=info|custom=false|description=true|closeBtn=false|icon=false": __body27,
    // figma: Type=error, Description=true, Icon=False, Close Btn=False, Custom=True
    "type=error|custom=true|description=true|closeBtn=false|icon=false": __body28,
    // figma: Type=success, Description=true, Icon=False, Close Btn=False, Custom=True
    "type=success|custom=true|description=true|closeBtn=false|icon=false": __body29,
    // figma: Type=error, Description=true, Icon=False, Close Btn=False, Custom=False
    "type=error|custom=false|description=true|closeBtn=false|icon=false": __body30,
    // figma: Type=success, Description=true, Icon=False, Close Btn=False, Custom=False
    "type=success|custom=false|description=true|closeBtn=false|icon=false": __body31,
    // figma: Type=warning, Description=false, Icon=True, Close Btn=True, Custom=True
    "type=warning|custom=true|description=false|closeBtn=true|icon=true": __body32,
    // figma: Type=info, Description=false, Icon=True, Close Btn=True, Custom=True
    "type=info|custom=true|description=false|closeBtn=true|icon=true": __body33,
    // figma: Type=warning, Description=false, Icon=True, Close Btn=True, Custom=False
    "type=warning|custom=false|description=false|closeBtn=true|icon=true": __body34,
    // figma: Type=info, Description=false, Icon=True, Close Btn=True, Custom=False
    "type=info|custom=false|description=false|closeBtn=true|icon=true": __body35,
    // figma: Type=error, Description=false, Icon=True, Close Btn=True, Custom=True
    "type=error|custom=true|description=false|closeBtn=true|icon=true": __body36,
    // figma: Type=success, Description=false, Icon=True, Close Btn=True, Custom=True
    "type=success|custom=true|description=false|closeBtn=true|icon=true": __body37,
    // figma: Type=error, Description=false, Icon=True, Close Btn=True, Custom=False
    "type=error|custom=false|description=false|closeBtn=true|icon=true": __body38,
    // figma: Type=success, Description=false, Icon=True, Close Btn=True, Custom=False
    "type=success|custom=false|description=false|closeBtn=true|icon=true": __body39,
    // figma: Type=warning, Description=false, Icon=True, Close Btn=False, Custom=True
    "type=warning|custom=true|description=false|closeBtn=false|icon=true": __body40,
    // figma: Type=info, Description=false, Icon=True, Close Btn=False, Custom=True
    "type=info|custom=true|description=false|closeBtn=false|icon=true": __body41,
    // figma: Type=warning, Description=false, Icon=True, Close Btn=False, Custom=False
    "type=warning|custom=false|description=false|closeBtn=false|icon=true": __body42,
    // figma: Type=info, Description=false, Icon=True, Close Btn=False, Custom=False
    "type=info|custom=false|description=false|closeBtn=false|icon=true": __body43,
    // figma: Type=error, Description=false, Icon=True, Close Btn=False, Custom=True
    "type=error|custom=true|description=false|closeBtn=false|icon=true": __body44,
    // figma: Type=success, Description=false, Icon=True, Close Btn=False, Custom=True
    "type=success|custom=true|description=false|closeBtn=false|icon=true": __body45,
    // figma: Type=error, Description=false, Icon=True, Close Btn=False, Custom=False
    "type=error|custom=false|description=false|closeBtn=false|icon=true": __body46,
    // figma: Type=success, Description=false, Icon=True, Close Btn=False, Custom=False
    "type=success|custom=false|description=false|closeBtn=false|icon=true": __body47,
    // figma: Type=warning, Description=false, Icon=False, Close Btn=True, Custom=True
    "type=warning|custom=true|description=false|closeBtn=true|icon=false": __body48,
    // figma: Type=info, Description=false, Icon=False, Close Btn=True, Custom=True
    "type=info|custom=true|description=false|closeBtn=true|icon=false": __body49,
    // figma: Type=warning, Description=false, Icon=False, Close Btn=True, Custom=False
    "type=warning|custom=false|description=false|closeBtn=true|icon=false": __body50,
    // figma: Type=info, Description=false, Icon=False, Close Btn=True, Custom=False
    "type=info|custom=false|description=false|closeBtn=true|icon=false": __body51,
    // figma: Type=error, Description=false, Icon=False, Close Btn=True, Custom=True
    "type=error|custom=true|description=false|closeBtn=true|icon=false": __body52,
    // figma: Type=success, Description=false, Icon=False, Close Btn=True, Custom=True
    "type=success|custom=true|description=false|closeBtn=true|icon=false": __body53,
    // figma: Type=error, Description=false, Icon=False, Close Btn=True, Custom=False
    "type=error|custom=false|description=false|closeBtn=true|icon=false": __body54,
    // figma: Type=success, Description=false, Icon=False, Close Btn=True, Custom=False
    "type=success|custom=false|description=false|closeBtn=true|icon=false": __body55,
    // figma: Type=warning, Description=false, Icon=False, Close Btn=False, Custom=True
    "type=warning|custom=true|description=false|closeBtn=false|icon=false": __body56,
    // figma: Type=info, Description=false, Icon=False, Close Btn=False, Custom=True
    "type=info|custom=true|description=false|closeBtn=false|icon=false": __body57,
    // figma: Type=warning, Description=false, Icon=False, Close Btn=False, Custom=False
    "type=warning|custom=false|description=false|closeBtn=false|icon=false": __body58,
    // figma: Type=info, Description=false, Icon=False, Close Btn=False, Custom=False
    "type=info|custom=false|description=false|closeBtn=false|icon=false": __body59,
    // figma: Type=error, Description=false, Icon=False, Close Btn=False, Custom=True
    "type=error|custom=true|description=false|closeBtn=false|icon=false": __body60,
    // figma: Type=success, Description=false, Icon=False, Close Btn=False, Custom=True
    "type=success|custom=true|description=false|closeBtn=false|icon=false": __body61,
    // figma: Type=error, Description=false, Icon=False, Close Btn=False, Custom=False
    "type=error|custom=false|description=false|closeBtn=false|icon=false": __body62,
    // figma: Type=success, Description=false, Icon=False, Close Btn=False, Custom=False
    "type=success|custom=false|description=false|closeBtn=false|icon=false": __body63,
  };
  return (__impls[__vkey(props)] ?? __body38)();
}
export default Alert;
