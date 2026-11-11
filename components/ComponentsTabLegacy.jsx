import { AntDesign } from './AntDesign.jsx';
import { BadgeCount } from './BadgeCount.jsx';
import { TextText } from './TextText.jsx';

// figma node: 6290:15147 .Components/Tab(Legacy) (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "badge=" + __venc(p.badge) + '|' + "selected=" + __venc(p.selected) + '|' + "disabled=" + __venc(p.disabled) + '|' + "icon=" + __venc(p.icon);

export function ComponentsTabLegacy(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg", badge: _p.badge ?? true, selected: _p.selected ?? true, disabled: _p.disabled ?? false, icon: _p.icon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.25)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 100,
              backgroundColor: "rgb(240,240,240)",
              display: "flex",
              flexDirection: "row",
              padding: "0px 8px 0px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}>99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.65)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount text1={"99"} size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(24,144,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount text1={"99"} size={"md"} color={"blue invert"} singleDigit={false} />}</div>
        </div>
      </div>
      <svg height={2} viewBox="0 -1 88 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 88 0 L 88 -1 L 88 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.25)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.65)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
      <svg height={2} viewBox="0 -1 53 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 53 0 L 53 -1 L 53 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 100,
            backgroundColor: "rgb(240,240,240)",
            display: "flex",
            flexDirection: "row",
            padding: "0px 8px 0px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>99</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <BadgeCount text1={"99"} size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <BadgeCount text1={"99"} size={"md"} color={"blue invert"} singleDigit={false} />}</div>
      </div>
      <svg height={2} viewBox="0 -1 62 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 62 0 L 62 -1 L 62 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>Tab</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 27,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Tab</span>
      </div>
      <svg height={2} viewBox="0 -1 27 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 27 0 L 27 -1 L 27 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.25)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
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
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 100,
              backgroundColor: "rgb(240,240,240)",
              display: "flex",
              flexDirection: "row",
              padding: "0px 8px 0px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}>99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.65)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <BadgeCount text1={"99"} size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
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
            color: "rgb(24,144,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount text1={"99"} size={"sm"} color={"blue invert"} singleDigit={false} />}</div>
        </div>
      </div>
      <svg height={2} viewBox="0 -1 81 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 81 0 L 81 -1 L 81 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.25)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.65)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
      <svg height={2} viewBox="0 -1 50 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 50 0 L 50 -1 L 50 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 100,
            backgroundColor: "rgb(240,240,240)",
            display: "flex",
            flexDirection: "row",
            padding: "0px 8px 0px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>99</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <BadgeCount text1={"99"} size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <BadgeCount text1={"99"} size={"sm"} color={"blue invert"} singleDigit={false} />}</div>
      </div>
      <svg height={2} viewBox="0 -1 55 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 55 0 L 55 -1 L 55 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>Tab</span>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 38,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 0px 8px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Tab</span>
      </div>
      <svg height={2} viewBox="0 -1 23 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 24 0 L 24 -1 L 24 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.25)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
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
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 100,
              backgroundColor: "rgb(240,240,240)",
              display: "flex",
              flexDirection: "row",
              padding: "0px 8px 0px 8px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                textAlign: "center",
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}>99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.65)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <BadgeCount text1={"99"} size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
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
            color: "rgb(24,144,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tab"}</span>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <BadgeCount text1={"99"} size={"md"} color={"blue invert"} singleDigit={false} />}</div>
        </div>
      </div>
      <svg height={2} viewBox="0 -1 85 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 85 0 L 85 -1 L 85 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.25)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgba(0,0,0,0.65)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
            color: "rgb(24,144,255)",
          }}>{props.icon1 ?? <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
      </div>
      <svg height={2} viewBox="0 -1 50 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 50 0 L 50 -1 L 50 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 100,
            backgroundColor: "rgb(240,240,240)",
            display: "flex",
            flexDirection: "row",
            padding: "0px 8px 0px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>99</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <BadgeCount text1={"99"} size={"md"} color={"gray"} singleDigit={true} />}</div>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46.001,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tab"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <BadgeCount text1={"99"} size={"md"} color={"blue invert"} singleDigit={false} />}</div>
      </div>
      <svg height={2} viewBox="0 -1 59 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 59 0 L 59 -1 L 59 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>Tab</span>
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46.001,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "12px 0px 12px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Tab</span>
      </div>
      <svg height={2} viewBox="0 -1 24 2" fill="none" style={{
        position: "relative",
        height: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -1 L 0 0 L 24 0 L 24 -1 L 24 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Size=large, Selected=false, Icon=true, Disabled=true,Badge=true
    "size=lg|badge=true|selected=false|disabled=true|icon=true": __body0,
    // figma: Size=large, Selected=false, Icon=true, Disabled=false,Badge=true
    "size=lg|badge=true|selected=false|disabled=false|icon=true": __body1,
    // figma: Size=large, Selected=true, Icon=true, Disabled=false,Badge=true
    "size=lg|badge=true|selected=true|disabled=false|icon=true": __body2,
    // figma: Size=large, Selected=false, Icon=true, Disabled=true, Badge=false
    "size=lg|badge=false|selected=false|disabled=true|icon=true": __body3,
    // figma: Size=large, Selected=false, Icon=true, Disabled=false, Badge=false
    "size=lg|badge=false|selected=false|disabled=false|icon=true": __body4,
    // figma: Size=large, Selected=true, Icon=true, Disabled=false, Badge=false
    "size=lg|badge=false|selected=true|disabled=false|icon=true": __body5,
    // figma: Size=large, Selected=false, Icon=false, Disabled=true,Badge=true
    "size=lg|badge=true|selected=false|disabled=true|icon=false": __body6,
    // figma: Size=large, Selected=false, Icon=false, Disabled=false,Badge=true
    "size=lg|badge=true|selected=false|disabled=false|icon=false": __body7,
    // figma: Size=large, Selected=true, Icon=false, Disabled=false,Badge=true
    "size=lg|badge=true|selected=true|disabled=false|icon=false": __body8,
    // figma: Size=large, Selected=false, Icon=false, Disabled=true, Badge=false
    "size=lg|badge=false|selected=false|disabled=true|icon=false": __body9,
    // figma: Size=large, Selected=false, Icon=false, Disabled=false, Badge=false
    "size=lg|badge=false|selected=false|disabled=false|icon=false": __body10,
    // figma: Size=large, Selected=true, Icon=false, Disabled=false, Badge=false
    "size=lg|badge=false|selected=true|disabled=false|icon=false": __body11,
    // figma: Size=small, Selected=false, Icon=true, Disabled=true,Badge=true
    "size=sm|badge=true|selected=false|disabled=true|icon=true": __body12,
    // figma: Size=small, Selected=false, Icon=true, Disabled=false,Badge=true
    "size=sm|badge=true|selected=false|disabled=false|icon=true": __body13,
    // figma: Size=small, Selected=true, Icon=true, Disabled=false,Badge=true
    "size=sm|badge=true|selected=true|disabled=false|icon=true": __body14,
    // figma: Size=small, Selected=false, Icon=true, Disabled=true, Badge=false
    "size=sm|badge=false|selected=false|disabled=true|icon=true": __body15,
    // figma: Size=small, Selected=false, Icon=true, Disabled=false, Badge=false
    "size=sm|badge=false|selected=false|disabled=false|icon=true": __body16,
    // figma: Size=small, Selected=true, Icon=true, Disabled=false, Badge=false
    "size=sm|badge=false|selected=true|disabled=false|icon=true": __body17,
    // figma: Size=small, Selected=false, Icon=false, Disabled=true,Badge=true
    "size=sm|badge=true|selected=false|disabled=true|icon=false": __body18,
    // figma: Size=small, Selected=false, Icon=false, Disabled=false,Badge=true
    "size=sm|badge=true|selected=false|disabled=false|icon=false": __body19,
    // figma: Size=small, Selected=true, Icon=false, Disabled=false,Badge=true
    "size=sm|badge=true|selected=true|disabled=false|icon=false": __body20,
    // figma: Size=small, Selected=false, Icon=false, Disabled=true, Badge=false
    "size=sm|badge=false|selected=false|disabled=true|icon=false": __body21,
    // figma: Size=small, Selected=false, Icon=false, Disabled=false, Badge=false
    "size=sm|badge=false|selected=false|disabled=false|icon=false": __body22,
    // figma: Size=small, Selected=true, Icon=false, Disabled=false, Badge=false
    "size=sm|badge=false|selected=true|disabled=false|icon=false": __body23,
    // figma: Size=medium, Selected=false, Icon=true, Disabled=true,Badge=true
    "size=md|badge=true|selected=false|disabled=true|icon=true": __body24,
    // figma: Size=medium, Selected=false, Icon=true, Disabled=false,Badge=true
    "size=md|badge=true|selected=false|disabled=false|icon=true": __body25,
    // figma: Size=medium, Selected=true, Icon=true, Disabled=false,Badge=true
    "size=md|badge=true|selected=true|disabled=false|icon=true": __body26,
    // figma: Size=medium, Selected=false, Icon=true, Disabled=true, Badge=false
    "size=md|badge=false|selected=false|disabled=true|icon=true": __body27,
    // figma: Size=medium, Selected=false, Icon=true, Disabled=false, Badge=false
    "size=md|badge=false|selected=false|disabled=false|icon=true": __body28,
    // figma: Size=medium, Selected=true, Icon=true, Disabled=false, Badge=false
    "size=md|badge=false|selected=true|disabled=false|icon=true": __body29,
    // figma: Size=medium, Selected=false, Icon=false, Disabled=true,Badge=true
    "size=md|badge=true|selected=false|disabled=true|icon=false": __body30,
    // figma: Size=medium, Selected=false, Icon=false, Disabled=false,Badge=true
    "size=md|badge=true|selected=false|disabled=false|icon=false": __body31,
    // figma: Size=medium, Selected=true, Icon=false, Disabled=false,Badge=true
    "size=md|badge=true|selected=true|disabled=false|icon=false": __body32,
    // figma: Size=medium, Selected=false, Icon=false, Disabled=true, Badge=false
    "size=md|badge=false|selected=false|disabled=true|icon=false": __body33,
    // figma: Size=medium, Selected=false, Icon=false, Disabled=false, Badge=false
    "size=md|badge=false|selected=false|disabled=false|icon=false": __body34,
    // figma: Size=medium, Selected=true, Icon=false, Disabled=false, Badge=false
    "size=md|badge=false|selected=true|disabled=false|icon=false": __body35,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ComponentsTabLegacy;
