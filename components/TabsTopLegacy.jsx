import { AntDesign } from './AntDesign.jsx';
import { Button2 } from './Button2.jsx';
import { LayoutBlocksHorizontal3 } from './LayoutBlocksHorizontal3.jsx';
import { MenuIconMore } from './MenuIconMore.jsx';

// figma node: 6290:16888 .Tabs-Top(Legacy) (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "centered=" + __venc(p.centered) + '|' + "icon=" + __venc(p.icon) + '|' + "overflow=" + __venc(p.overflow) + '|' + "extra=" + __venc(p.extra) + '|' + "extra2=" + __venc(p.extra2);

export function TabsTopLegacy(_p = {}) {
  const props = { ..._p, centered: _p.centered ?? true, icon: _p.icon ?? true, overflow: _p.overflow ?? true, extra: _p.extra ?? true, extra2: _p.extra2 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
          <div style={{
            position: "relative",
            width: 116,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 32,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
                display: "flex",
                flexDirection: "row",
                gap: 12,
                padding: "12px 0px 12px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <div style={{
                    position: "relative",
                    width: 14,
                    height: 14,
                    flexShrink: 0,
                    color: "rgb(24,144,255)",
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
                </div>
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
              <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
                position: "relative",
                height: 2,
                flexShrink: 0,
                alignSelf: "stretch",
                color: "rgb(24,144,255)",
              }}>
                <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
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
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
                </div>
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
                }}>Tab</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
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
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
                </div>
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
                }}>Tab</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <MenuIconMore />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 543,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <MenuIconMore />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 543 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 543 0 L 543 -0.5 L 543 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 337,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 123,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <MenuIconMore />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 337 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 337 0 L 337 -0.5 L 337 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                height: 4,
                transform: "matrix(1,0,0,-1,0,0)",
                flexShrink: 0,
              }}>{props.icon1 ?? <MenuIconMore style={{ transform: "scale(0.714, 0.286)", transformOrigin: "0 0" }} />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
          <div style={{
            position: "relative",
            width: 116,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 32,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
                display: "flex",
                flexDirection: "row",
                gap: 12,
                padding: "12px 0px 12px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <div style={{
                    position: "relative",
                    width: 14,
                    height: 14,
                    flexShrink: 0,
                    color: "rgb(24,144,255)",
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
                </div>
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
              <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
                position: "relative",
                height: 2,
                flexShrink: 0,
                alignSelf: "stretch",
                color: "rgb(24,144,255)",
              }}>
                <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
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
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
                </div>
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
                }}>Tab</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
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
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
                </div>
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
                }}>Tab</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 330 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 330 0 L 330 -0.5 L 330 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
          <div style={{
            position: "relative",
            width: 169,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 32,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
                display: "flex",
                flexDirection: "row",
                gap: 12,
                padding: "12px 0px 12px 0px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <div style={{
                    position: "relative",
                    width: 14,
                    height: 14,
                    flexShrink: 0,
                    color: "rgb(24,144,255)",
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
                </div>
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
              <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
                position: "relative",
                height: 2,
                flexShrink: 0,
                alignSelf: "stretch",
                color: "rgb(24,144,255)",
              }}>
                <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
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
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
                </div>
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
                }}>Tab</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 61,
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
                  }}>
                  <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
                </div>
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
                }}>Tab</span>
              </div>
            </div>
          </div>
        </div>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 544,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 544 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 544 0 L 544 -0.5 L 544 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 337,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 169,
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 337 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 337 0 L 337 -0.5 L 337 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 407,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 407 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 407 0 L 407 -0.5 L 407 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 330 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 330 0 L 330 -0.5 L 330 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 491,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <div style={{
          position: "relative",
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
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 248 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 248 0 L 248 -0.5 L 248 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 336,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
              display: "flex",
              flexDirection: "row",
              gap: 12,
              padding: "12px 0px 12px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <div style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  color: "rgb(24,144,255)",
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
              </div>
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
            <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
              position: "relative",
              height: 2,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "rgb(24,144,255)",
            }}>
              <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 61,
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
                }}>
                <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
              </div>
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
              }}>Tab</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 336 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 336 0 L 336 -0.5 L 336 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 32,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 61,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            padding: "12px 0px 12px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 14,
                height: 14,
                flexShrink: 0,
                color: "rgb(24,144,255)",
              }}>
              <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
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
          <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
            position: "relative",
            height: 2,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 61,
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
              }}>
              <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
            </div>
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
            }}>Tab</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 61,
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
              }}>
              <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
            </div>
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
            }}>Tab</span>
          </div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 248 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 248 0 L 248 -0.5 L 248 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 346,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 32,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 61,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            padding: "12px 0px 12px 0px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 14,
                height: 14,
                flexShrink: 0,
                color: "rgb(24,144,255)",
              }}>
              <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgb(24,144,255)" }} />
            </div>
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
          <svg height={2} viewBox="0 -1 61 2" fill="none" style={{
            position: "relative",
            height: 2,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(24,144,255)",
          }}>
            <path d={"M 0 0 L 61 0 L 61 -2 L 0 -2 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 61,
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
              }}>
              <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
            </div>
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
            }}>Tab</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 61,
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
              }}>
              <AntDesign style={{ transform: "scale(0.389, 0.389)", transformOrigin: "0 0", color: "rgba(0,0,0,0.65)" }} />
            </div>
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
            }}>Tab</span>
          </div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 346 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 346 0 L 346 -0.5 L 346 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
          <LayoutBlocksHorizontal3 style={{
              position: "relative",
              width: 116,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <MenuIconMore />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 543,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 145,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <MenuIconMore />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 543 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 543 0 L 543 -0.5 L 543 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 123,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                height: 4,
                transform: "matrix(1,0,0,-1,0,0)",
                flexShrink: 0,
              }}>{props.icon1 ?? <MenuIconMore style={{ transform: "scale(0.714, 0.286)", transformOrigin: "0 0" }} />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 273 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 321 0 L 321 -0.5 L 321 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 145,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "18px 18px 18px 18px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 10,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <MenuIconMore />}</div>
          </div>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
          <LayoutBlocksHorizontal3 style={{
              position: "relative",
              width: 116,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 330 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 330 0 L 330 -0.5 L 330 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 145,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Button2
            style={{ position: "relative", flexShrink: 0 }}
            ghost={false}
            type={"secondary"}
            danger={false}
            shape={"standard"}
            state={"normal"}
            size={"md"}
          />
          <LayoutBlocksHorizontal3 style={{
              position: "relative",
              width: 169,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 491,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 135,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 491 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 491 0 L 491 -0.5 L 491 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 337,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 169,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 337 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 337 0 L 337 -0.5 L 337 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 337,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 135,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
      </div>
      <svg height={1} viewBox="0 -0.500 337 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 337 0 L 337 -0.5 L 337 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }} />
      </div>
      <svg height={1} viewBox="0 -0.500 330 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 330 0 L 330 -0.5 L 330 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 330,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <Button2
          style={{ position: "relative", flexShrink: 0 }}
          ghost={false}
          type={"secondary"}
          danger={false}
          shape={"standard"}
          state={"normal"}
          size={"md"}
        />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 135,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
      </div>
      <svg height={1} viewBox="0 -0.500 330 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 330 0 L 330 -0.5 L 330 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 135,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 248 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 248 0 L 248 -0.5 L 248 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0.001,
          height: 0.001,
          flexShrink: 0,
        }} />
        <LayoutBlocksHorizontal3 style={{
            position: "relative",
            width: 135,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "18px 18px 18px 18px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 10,
              transform: "matrix(1,0,0,-1,0,0)",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <MenuIconMore />}</div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 248 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 248 0 L 248 -0.5 L 248 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <LayoutBlocksHorizontal3 style={{
          position: "relative",
          width: 160,
          flexGrow: 1,
          height: "auto",
        }} />
      <svg height={1} viewBox="0 -0.500 248 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 248 0 L 248 -0.5 L 248 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 46,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style,
    }}>
      <LayoutBlocksHorizontal3 style={{
          position: "relative",
          width: 135,
          flexGrow: 1,
          height: "auto",
        }} />
      <svg height={1} viewBox="0 -0.500 248 1" fill="none" style={{
        position: "relative",
        height: 1,
        mixBlendMode: "darken",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L 0 0 L 248 0 L 248 -0.5 L 248 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Centered=false, Overflow=true, <Extra=true, Extra>=true, Icon=true
    "centered=false|icon=true|overflow=true|extra=true|extra2=true": __body0,
    // figma: Centered=true, Overflow=true, <Extra=true, Extra>=true, Icon=true
    "centered=true|icon=true|overflow=true|extra=true|extra2=true": __body1,
    // figma: Centered=false, Overflow=true, <Extra=false, Extra>=true, Icon=true
    "centered=false|icon=true|overflow=true|extra=true|extra2=false": __body2,
    // figma: Centered=true, Overflow=true, <Extra=false, Extra>=true, Icon=true
    "centered=true|icon=true|overflow=true|extra=true|extra2=false": __body3,
    // figma: Centered=false, Overflow=true, <Extra=true, Extra>=false, Icon=true
    "centered=false|icon=true|overflow=true|extra=false|extra2=true": __body4,
    // figma: Centered=true, Overflow=true, <Extra=true, Extra>=false, Icon=true
    "centered=true|icon=true|overflow=true|extra=false|extra2=true": __body5,
    // figma: Centered=false, Overflow=false, <Extra=true, Extra>=true, Icon=true
    "centered=false|icon=true|overflow=false|extra=true|extra2=true": __body6,
    // figma: Centered=true, Overflow=false, <Extra=true, Extra>=true, Icon=true
    "centered=true|icon=true|overflow=false|extra=true|extra2=true": __body7,
    // figma: Centered=false, Overflow=false, <Extra=false, Extra>=true, Icon=true
    "centered=false|icon=true|overflow=false|extra=true|extra2=false": __body8,
    // figma: Centered=true, Overflow=false, <Extra=false, Extra>=true, Icon=true
    "centered=true|icon=true|overflow=false|extra=true|extra2=false": __body9,
    // figma: Centered=false, Overflow=false, <Extra=true, Extra>=false, Icon=true
    "centered=false|icon=true|overflow=false|extra=false|extra2=true": __body10,
    // figma: Centered=true, Overflow=false, <Extra=true, Extra>=false, Icon=true
    "centered=true|icon=true|overflow=false|extra=false|extra2=true": __body11,
    // figma: Centered=false, Overflow=true, <Extra=false, Extra>=false, Icon=true
    "centered=false|icon=true|overflow=true|extra=false|extra2=false": __body12,
    // figma: Centered=true, Overflow=true, <Extra=false, Extra>=false, Icon=true
    "centered=true|icon=true|overflow=true|extra=false|extra2=false": __body13,
    // figma: Centered=false, Overflow=false, <Extra=false, Extra>=false, Icon=true
    "centered=false|icon=true|overflow=false|extra=false|extra2=false": __body14,
    // figma: Centered=true, Overflow=false, <Extra=false, Extra>=false, Icon=true
    "centered=true|icon=true|overflow=false|extra=false|extra2=false": __body15,
    // figma: Centered=false, Overflow=true, <Extra=true, Extra>=true, Icon=false
    "centered=false|icon=false|overflow=true|extra=true|extra2=true": __body16,
    // figma: Centered=true, Overflow=true, <Extra=true, Extra>=true, Icon=false
    "centered=true|icon=false|overflow=true|extra=true|extra2=true": __body17,
    // figma: Centered=false, Overflow=true, <Extra=false, Extra>=true, Icon=false
    "centered=false|icon=false|overflow=true|extra=true|extra2=false": __body18,
    // figma: Centered=true, Overflow=true, <Extra=false, Extra>=true, Icon=false
    "centered=true|icon=false|overflow=true|extra=true|extra2=false": __body19,
    // figma: Centered=false, Overflow=true, <Extra=true, Extra>=false, Icon=false
    "centered=false|icon=false|overflow=true|extra=false|extra2=true": __body20,
    // figma: Centered=true, Overflow=true, <Extra=true, Extra>=false, Icon=false
    "centered=true|icon=false|overflow=true|extra=false|extra2=true": __body21,
    // figma: Centered=false, Overflow=false, <Extra=true, Extra>=true, Icon=false
    "centered=false|icon=false|overflow=false|extra=true|extra2=true": __body22,
    // figma: Centered=true, Overflow=false, <Extra=true, Extra>=true, Icon=false
    "centered=true|icon=false|overflow=false|extra=true|extra2=true": __body23,
    // figma: Centered=false, Overflow=false, <Extra=false, Extra>=true, Icon=false
    "centered=false|icon=false|overflow=false|extra=true|extra2=false": __body24,
    // figma: Centered=true, Overflow=false, <Extra=false, Extra>=true, Icon=false
    "centered=true|icon=false|overflow=false|extra=true|extra2=false": __body25,
    // figma: Centered=false, Overflow=false, <Extra=true, Extra>=false, Icon=false
    "centered=false|icon=false|overflow=false|extra=false|extra2=true": __body26,
    // figma: Centered=true, Overflow=false, <Extra=true, Extra>=false, Icon=false
    "centered=true|icon=false|overflow=false|extra=false|extra2=true": __body27,
    // figma: Centered=false, Overflow=true, <Extra=false, Extra>=false, Icon=false
    "centered=false|icon=false|overflow=true|extra=false|extra2=false": __body28,
    // figma: Centered=true, Overflow=true, <Extra=false, Extra>=false, Icon=false
    "centered=true|icon=false|overflow=true|extra=false|extra2=false": __body29,
    // figma: Centered=false, Overflow=false, <Extra=false, Extra>=false, Icon=false
    "centered=false|icon=false|overflow=false|extra=false|extra2=false": __body30,
    // figma: Centered=true, Overflow=false, <Extra=false, Extra>=false, Icon=false
    "centered=true|icon=false|overflow=false|extra=false|extra2=false": __body31,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TabsTopLegacy;
