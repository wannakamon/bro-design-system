import { AntDesign } from './AntDesign.jsx';
import { BadgeCount } from './BadgeCount.jsx';
import { TextText } from './TextText.jsx';

// figma node: 6295:24834 Components/Tab (48 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "badge=" + __venc(p.badge) + '|' + "size=" + __venc(p.size) + '|' + "disabled=" + __venc(p.disabled) + '|' + "selected=" + __venc(p.selected) + '|' + "icon=" + __venc(p.icon) + '|' + "hovered=" + __venc(p.hovered);

export function ComponentsTab(_p = {}) {
  const props = { ..._p, badge: _p.badge ?? true, size: _p.size ?? "md", disabled: _p.disabled ?? false, selected: _p.selected ?? true, icon: _p.icon ?? true, hovered: _p.hovered ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "17px 0px 16px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 10,
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
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}>Tab</span>
            </div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "17px 0px 16px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <svg width={114} height={2} viewBox="0 -1 114 2" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 114,
        height: 2,
      }}>
        <path d={"M 0 -1 L 0 0 L 88 0 L 88 -1 L 88 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "17px 0px 16px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"blue invert"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          gap: 10,
          padding: "17px 0px 16px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Tab</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          gap: 10,
          padding: "17px 0px 16px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <svg width={79} height={2} viewBox="0 -1 79 2" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 79,
        height: 2,
      }}>
        <path d={"M 0 -1 L 0 0 L 53 0 L 53 -1 L 53 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
          gap: 10,
          padding: "17px 0px 16px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
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
          padding: "17px 0px 16px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Tab</span>
          </div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
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
          padding: "17px 0px 16px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <svg width={88} height={2} viewBox="0 -1 88 2" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 55,
        width: 88,
        height: 2,
      }}>
        <path d={"M 0 -1 L 0 0 L 62 0 L 62 -1 L 62 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
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
          padding: "17px 0px 16px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"blue invert"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>Tab</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "17px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Tab</span>
        </div>
        <svg width={53} height={2} viewBox="0 -1 53 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 55,
          width: 53,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 27 0 L 27 -1 L 27 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
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
              display: "flex",
              flexDirection: "column",
              gap: 10,
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
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}>Tab</span>
            </div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
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
              display: "flex",
              flexDirection: "column",
              gap: 10,
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
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.25)",
                flexShrink: 0,
              }}>Tab</span>
            </div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
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
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
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
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "12px 0px 12px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"blue invert"} singleDigit={false} />}</div>
        </div>
        <svg width={114} height={2} viewBox="0 -1 114 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 46,
          width: 114,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 85 0 L 85 -1 L 85 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "8px 0px 8px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
          </div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <BadgeCount size={"md"} color={"blue invert"} singleDigit={false} />}</div>
        </div>
        <svg width={115.341} height={2} viewBox="0 -1 115.341 2" fill="none" style={{
          position: "absolute",
          left: -1.341,
          top: 37.998,
          width: 115.341,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 86 0 L 86 -1 L 86 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          gap: 10,
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
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Tab</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          gap: 10,
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
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Tab</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          gap: 10,
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
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          gap: 10,
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
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
          gap: 10,
          padding: "12px 0px 12px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <svg width={79} height={2} viewBox="0 -1 79 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 46,
          width: 79,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 50 0 L 50 -1 L 50 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <svg width={79} height={2} viewBox="0 -1 79 2" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 38,
        width: 79,
        height: 2,
      }}>
        <path d={"M 0 -1 L 0 0 L 50 0 L 50 -1 L 50 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
          gap: 10,
          padding: "8px 0px 8px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
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
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Tab</span>
          </div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
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
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Tab</span>
          </div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
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
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        justifyContent: "center",
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
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"gray"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
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
        justifyContent: "center",
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
          padding: "12px 0px 12px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"blue invert"} singleDigit={false} />}</div>
        <svg width={88} height={2} viewBox="0 -1 88 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 46,
          width: 88,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 59 0 L 59 -1 L 59 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <svg width={88} height={2} viewBox="0 -1 88 2" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 38,
        width: 88,
        height: 2,
      }}>
        <path d={"M 0 -1 L 0 0 L 59 0 L 59 -1 L 59 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
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
          padding: "8px 0px 8px 0px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BadgeCount size={"md"} color={"blue invert"} singleDigit={false} />}</div>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>Tab</span>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
        }}>Tab</span>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
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
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgb(24,144,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Tab</span>
        </div>
        <svg width={24} height={2} viewBox="0 -1 24 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 46,
          width: 24,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 24 0 L 24 -1 L 24 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(24,144,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
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
          display: "flex",
          flexDirection: "column",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
          }}>Tab</span>
        </div>
        <svg width={53} height={2} viewBox="0 -1 53 2" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 38,
          width: 53,
          height: 2,
        }}>
          <path d={"M 0 -1 L 0 0 L 24 0 L 24 -1 L 24 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=large, Selected=false, Hovered=false, Icon=true, Disabled=true, Badge=true
    "badge=true|size=lg|disabled=true|selected=false|icon=true|hovered=false": __body0,
    // figma: Size=large, Selected=false, Hovered=false, Icon=true, Disabled=false, Badge=true
    "badge=true|size=lg|disabled=false|selected=false|icon=true|hovered=false": __body1,
    // figma: Size=large, Selected=false, Hovered=true, Icon=true, Disabled=false, Badge=true
    "badge=true|size=lg|disabled=false|selected=false|icon=true|hovered=true": __body1,
    // figma: Size=large, Selected=true, Hovered=false, Icon=true, Disabled=false, Badge=true
    "badge=true|size=lg|disabled=false|selected=true|icon=true|hovered=false": __body2,
    // figma: Size=large, Selected=false, Hovered=false, Icon=true, Disabled=true, Badge=false
    "badge=false|size=lg|disabled=true|selected=false|icon=true|hovered=false": __body3,
    // figma: Size=large, Selected=false, Hovered=false, Icon=true, Disabled=false, Badge=false
    "badge=false|size=lg|disabled=false|selected=false|icon=true|hovered=false": __body4,
    // figma: Size=large, Selected=false, Hovered=true, Icon=true, Disabled=false, Badge=false
    "badge=false|size=lg|disabled=false|selected=false|icon=true|hovered=true": __body4,
    // figma: Size=large, Selected=true, Hovered=false, Icon=true, Disabled=false, Badge=false
    "badge=false|size=lg|disabled=false|selected=true|icon=true|hovered=false": __body5,
    // figma: Size=large, Selected=false, Hovered=false, Icon=false, Disabled=true, Badge=true
    "badge=true|size=lg|disabled=true|selected=false|icon=false|hovered=false": __body6,
    // figma: Size=large, Selected=false, Hovered=false, Icon=false, Disabled=false, Badge=true
    "badge=true|size=lg|disabled=false|selected=false|icon=false|hovered=false": __body7,
    // figma: Size=large, Selected=false, Hovered=true, Icon=false, Disabled=false, Badge=true
    "badge=true|size=lg|disabled=false|selected=false|icon=false|hovered=true": __body7,
    // figma: Size=large, Selected=true, Hovered=false, Icon=false, Disabled=false, Badge=true
    "badge=true|size=lg|disabled=false|selected=true|icon=false|hovered=false": __body8,
    // figma: Size=large, Selected=false, Hovered=false, Icon=false, Disabled=true, Badge=false
    "badge=false|size=lg|disabled=true|selected=false|icon=false|hovered=false": __body9,
    // figma: Size=large, Selected=false, Hovered=false, Icon=false, Disabled=false, Badge=false
    "badge=false|size=lg|disabled=false|selected=false|icon=false|hovered=false": __body10,
    // figma: Size=large, Selected=false, Hovered=true, Icon=false, Disabled=false, Badge=false
    "badge=false|size=lg|disabled=false|selected=false|icon=false|hovered=true": __body10,
    // figma: Size=large, Selected=true, Hovered=false, Icon=false, Disabled=false, Badge=false
    "badge=false|size=lg|disabled=false|selected=true|icon=false|hovered=false": __body11,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=true, Disabled=true, Badge=true
    "badge=true|size=md|disabled=true|selected=false|icon=true|hovered=false": __body12,
    // figma: Size=small, Selected=false, Hovered=false, Icon=true, Disabled=true, Badge=true
    "badge=true|size=sm|disabled=true|selected=false|icon=true|hovered=false": __body13,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=true, Disabled=false, Badge=true
    "badge=true|size=md|disabled=false|selected=false|icon=true|hovered=false": __body14,
    // figma: Size=small, Selected=false, Hovered=false, Icon=true, Disabled=false, Badge=true
    "badge=true|size=sm|disabled=false|selected=false|icon=true|hovered=false": __body15,
    // figma: Size=medium, Selected=false, Hovered=true, Icon=true, Disabled=false, Badge=true
    "badge=true|size=md|disabled=false|selected=false|icon=true|hovered=true": __body14,
    // figma: Size=small, Selected=false, Hovered=true, Icon=true, Disabled=false, Badge=true
    "badge=true|size=sm|disabled=false|selected=false|icon=true|hovered=true": __body15,
    // figma: Size=medium, Selected=true, Hovered=false, Icon=true, Disabled=false, Badge=true
    "badge=true|size=md|disabled=false|selected=true|icon=true|hovered=false": __body16,
    // figma: Size=small, Selected=true, Hovered=false, Icon=true, Disabled=false, Badge=true
    "badge=true|size=sm|disabled=false|selected=true|icon=true|hovered=false": __body17,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=true, Disabled=true, Badge=false
    "badge=false|size=md|disabled=true|selected=false|icon=true|hovered=false": __body18,
    // figma: Size=small, Selected=false, Hovered=false, Icon=true, Disabled=true, Badge=false
    "badge=false|size=sm|disabled=true|selected=false|icon=true|hovered=false": __body19,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=true, Disabled=false, Badge=false
    "badge=false|size=md|disabled=false|selected=false|icon=true|hovered=false": __body20,
    // figma: Size=small, Selected=false, Hovered=false, Icon=true, Disabled=false, Badge=false
    "badge=false|size=sm|disabled=false|selected=false|icon=true|hovered=false": __body21,
    // figma: Size=medium, Selected=false, Hovered=true, Icon=true, Disabled=false, Badge=false
    "badge=false|size=md|disabled=false|selected=false|icon=true|hovered=true": __body20,
    // figma: Size=small, Selected=false, Hovered=true, Icon=true, Disabled=false, Badge=false
    "badge=false|size=sm|disabled=false|selected=false|icon=true|hovered=true": __body21,
    // figma: Size=medium, Selected=true, Hovered=false, Icon=true, Disabled=false, Badge=false
    "badge=false|size=md|disabled=false|selected=true|icon=true|hovered=false": __body22,
    // figma: Size=small, Selected=true, Hovered=false, Icon=true, Disabled=false, Badge=false
    "badge=false|size=sm|disabled=false|selected=true|icon=true|hovered=false": __body23,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=false, Disabled=true, Badge=true
    "badge=true|size=md|disabled=true|selected=false|icon=false|hovered=false": __body24,
    // figma: Size=small, Selected=false, Hovered=false, Icon=false, Disabled=true, Badge=true
    "badge=true|size=sm|disabled=true|selected=false|icon=false|hovered=false": __body25,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=false, Disabled=false, Badge=true
    "badge=true|size=md|disabled=false|selected=false|icon=false|hovered=false": __body26,
    // figma: Size=small, Selected=false, Hovered=false, Icon=false, Disabled=false, Badge=true
    "badge=true|size=sm|disabled=false|selected=false|icon=false|hovered=false": __body27,
    // figma: Size=medium, Selected=false, Hovered=true, Icon=false, Disabled=false, Badge=true
    "badge=true|size=md|disabled=false|selected=false|icon=false|hovered=true": __body26,
    // figma: Size=small, Selected=false, Hovered=true, Icon=false, Disabled=false, Badge=true
    "badge=true|size=sm|disabled=false|selected=false|icon=false|hovered=true": __body27,
    // figma: Size=medium, Selected=true, Hovered=false, Icon=false, Disabled=false, Badge=true
    "badge=true|size=md|disabled=false|selected=true|icon=false|hovered=false": __body28,
    // figma: Size=small, Selected=true, Hovered=false, Icon=false, Disabled=false, Badge=true
    "badge=true|size=sm|disabled=false|selected=true|icon=false|hovered=false": __body29,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=false, Disabled=true, Badge=false
    "badge=false|size=md|disabled=true|selected=false|icon=false|hovered=false": __body30,
    // figma: Size=small, Selected=false, Hovered=false, Icon=false, Disabled=true, Badge=false
    "badge=false|size=sm|disabled=true|selected=false|icon=false|hovered=false": __body31,
    // figma: Size=medium, Selected=false, Hovered=false, Icon=false, Disabled=false, Badge=false
    "badge=false|size=md|disabled=false|selected=false|icon=false|hovered=false": __body32,
    // figma: Size=small, Selected=false, Hovered=false, Icon=false, Disabled=false, Badge=false
    "badge=false|size=sm|disabled=false|selected=false|icon=false|hovered=false": __body33,
    // figma: Size=medium, Selected=false, Hovered=true, Icon=false, Disabled=false, Badge=false
    "badge=false|size=md|disabled=false|selected=false|icon=false|hovered=true": __body32,
    // figma: Size=small, Selected=false, Hovered=true, Icon=false, Disabled=false, Badge=false
    "badge=false|size=sm|disabled=false|selected=false|icon=false|hovered=true": __body33,
    // figma: Size=medium, Selected=true, Hovered=false, Icon=false, Disabled=false, Badge=false
    "badge=false|size=md|disabled=false|selected=true|icon=false|hovered=false": __body34,
    // figma: Size=small, Selected=true, Hovered=false, Icon=false, Disabled=false, Badge=false
    "badge=false|size=sm|disabled=false|selected=true|icon=false|hovered=false": __body35,
  };
  return (__impls[__vkey(props)] ?? __body16)();
}
export default ComponentsTab;
