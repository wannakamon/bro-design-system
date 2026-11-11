import { TabsTopLegacy } from './TabsTopLegacy.jsx';
import { TextText } from './TextText.jsx';

// figma node: 6290:19174 .card-head(legacy) (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "title=" + __venc(p.title) + '|' + "tabs=" + __venc(p.tabs) + '|' + "extra=" + __venc(p.extra);

export function CardHeadLegacy(_p = {}) {
  const props = { ..._p, size: _p.size ?? "md", title: _p.title ?? false, tabs: _p.tabs ?? true, extra: _p.extra ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      height: 38,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 38,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 38,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "8px 0px 8px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
            <svg height={2} viewBox="0 -1 24 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 24 0 L 24 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>box-shadow</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
        }}>More</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 38,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 38,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "8px 0px 8px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
            <svg height={2} viewBox="0 -1 24 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 24 0 L 24 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>box-shadow</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 46,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 46,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
            <svg height={2} viewBox="0 -1 24 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 24 0 L 24 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>box-shadow</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "rgb(24,144,255)",
          flexShrink: 0,
        }}>More</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TabsTopLegacy
        style={{
          position: "relative",
          height: 46,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        centered={false}
        icon={false}
        overflow={false}
        extra={false}
        extra2={false}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
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
        padding: "8px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
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
        padding: "8px 0px 8px 0px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(24,144,255)",
            flexShrink: 0,
          }}>More</span>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
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
        padding: "8px 0px 8px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 38,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 38,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "8px 0px 8px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
            <svg height={2} viewBox="0 -1 24 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 24 0 L 24 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
          <div style={{
            position: "relative",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>box-shadow</div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
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
        padding: "8px 0px 8px 0px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(24,144,255)",
            flexShrink: 0,
          }}>More</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 38,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 38,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "8px 0px 8px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
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
            <svg height={2} viewBox="0 -1 24 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 24 0 L 24 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <TextText
              style={{
                position: "relative",
                width: 24,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              hierarchy={"primary"}
              bullet={false}
              copyable={false}
              editable={false}
            />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
          width: 1,
        }}>box-shadow</div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
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
        padding: "16px 0px 16px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
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
        padding: "16px 0px 16px 0px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", width: 70, flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(24,144,255)",
            flexShrink: 0,
          }}>More</span>
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
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
        padding: "16px 0px 16px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
      </div>
      <TabsTopLegacy
        style={{
          position: "relative",
          height: 46,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        centered={false}
        icon={false}
        overflow={false}
        extra={false}
        extra2={false}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 280,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240), inset 0px 1px 0px 0px rgb(240,240,240), inset 1px 0px 0px 0px rgb(240,240,240)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
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
        padding: "16px 0px 16px 0px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextText hierarchy={"primary"} bullet={false} copyable={false} editable={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgb(24,144,255)",
            flexShrink: 0,
          }}>More</span>
        </div>
      </div>
      <TabsTopLegacy
        style={{
          position: "relative",
          height: 46,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        centered={false}
        icon={false}
        overflow={false}
        extra={false}
        extra2={false}
      />
    </div>
  );
  const __impls = {
    // figma: Size=small, Title=false, Extra=true, Tabs=true
    "size=sm|title=false|tabs=true|extra=true": __body0,
    // figma: Size=small, Title=false, Extra=false, Tabs=true
    "size=sm|title=false|tabs=true|extra=false": __body1,
    // figma: Size=medium, Title=false, Extra=true, Tabs=true
    "size=md|title=false|tabs=true|extra=true": __body2,
    // figma: Size=medium, Title=false, Extra=false, Tabs=true
    "size=md|title=false|tabs=true|extra=false": __body3,
    // figma: Size=small, Title=true, Extra=false, Tabs=false
    "size=sm|title=true|tabs=false|extra=false": __body4,
    // figma: Size=small, Title=true, Extra=true, Tabs=false
    "size=sm|title=true|tabs=false|extra=true": __body5,
    // figma: Size=small, Title=true, Extra=false, Tabs=true
    "size=sm|title=true|tabs=true|extra=false": __body6,
    // figma: Size=small, Title=true, Extra=true, Tabs=true
    "size=sm|title=true|tabs=true|extra=true": __body7,
    // figma: Size=medium, Title=true, Extra=false, Tabs=false
    "size=md|title=true|tabs=false|extra=false": __body8,
    // figma: Size=medium, Title=true, Extra=true, Tabs=false
    "size=md|title=true|tabs=false|extra=true": __body9,
    // figma: Size=medium, Title=true, Extra=false, Tabs=true
    "size=md|title=true|tabs=true|extra=false": __body10,
    // figma: Size=medium, Title=true, Extra=true, Tabs=true
    "size=md|title=true|tabs=true|extra=true": __body11,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default CardHeadLegacy;
