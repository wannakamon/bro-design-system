import { Close } from './Close.jsx';
import { ComponentsDropdownMenuItem } from './ComponentsDropdownMenuItem.jsx';
import { Cursor } from './Cursor.jsx';
import { DropdownMenu } from './DropdownMenu.jsx';
import { Scrollbar } from './Scrollbar.jsx';

// figma node: 6326:29666 Select (56 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "open=" + __venc(p.open) + '|' + "size=" + __venc(p.size) + '|' + "hovering=" + __venc(p.hovering) + '|' + "disabled=" + __venc(p.disabled) + '|' + "filled=" + __venc(p.filled) + '|' + "customTag=" + __venc(p.customTag) + '|' + "multiSelect=" + __venc(p.multiSelect);

export function Select(_p = {}) {
  const props = { ..._p, open: _p.open ?? true, size: _p.size ?? "lg", hovering: _p.hovering ?? false, disabled: _p.disabled ?? false, filled: _p.filled ?? true, customTag: _p.customTag ?? true, multiSelect: _p.multiSelect ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 210,
      height: 40,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 156,
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
          width: 32,
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(250,173,20)",
            flexShrink: 0,
          }}>item 01</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 32,
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(19,194,194)",
            flexShrink: 0,
          }}>item 02</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
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
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Please select"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 210,
      height: 40,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 156,
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
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(250,173,20)",
            flexShrink: 0,
          }}>item 01</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(19,194,194)",
            flexShrink: 0,
          }}>item 02</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
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
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Please select"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 210,
      height: 24,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136.5,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: 32,
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "2.750px 8px 2.750px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(250,173,20)",
            flexShrink: 0,
          }}>item 01</span>
          <Close style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
        <div style={{
          position: "relative",
          width: 32,
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "2.750px 8px 2.750px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(19,194,194)",
            flexShrink: 0,
          }}>item 02</span>
          <Close style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 0px 8px",
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
        gap: 10,
        padding: "1px 0px 1px 0px",
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
        }}>{props.text1 ?? "Please select"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 210,
      height: 24,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 136.5,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "2.750px 8px 2.750px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(250,173,20)",
            flexShrink: 0,
          }}>item 01</span>
          <Close style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
        <div style={{
          position: "relative",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "2.750px 8px 2.750px 8px",
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
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(19,194,194)",
            flexShrink: 0,
          }}>item 02</span>
          <Close style={{
              position: "relative",
              width: 10,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }} />
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 8px 0px 8px",
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
        gap: 10,
        padding: "1px 0px 1px 0px",
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
        }}>{props.text1 ?? "Please select"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
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
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 01</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 02</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
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
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Please select"}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
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
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 01</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          padding: "1px 8px 1px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 02</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
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
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Please select"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 156,
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
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 8px 4px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 01</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 8px 4px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 02</span>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 156,
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
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 01</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 02</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 41,
            height: 16,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Apples</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "0px 8px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 41,
            height: 16,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}>Apples</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "0px 4px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 41,
            height: 16,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
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
            }}>Apples</span>
          </div>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "0px 4px 0px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 41,
            height: 16,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
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
            }}>Apples</span>
          </div>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
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
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "2px 8px 2px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
          }}>item 01</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "2px 8px 2px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
          }}>item 02</span>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 64,
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
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "2px 4px 2px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 01</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "2px 4px 2px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>item 02</span>
          <div style={{
              position: "relative",
              width: 10,
              height: 10,
              flexShrink: 0,
            }}>
            <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
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
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>icon</div>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={10.178} height={6.857} viewBox="0 0 10.178 6.857" fill="none" style={{
          position: "relative",
          width: 10.178,
          height: 6.857,
          flexShrink: 0,
        }}>
          <path d={"M 1.111 0 C 1.179 0 1.244 0.034 1.284 0.089 L 5.09 5.333 L 8.894 0.089 C 8.934 0.034 8.999 0 9.067 0 L 10.071 0 C 10.158 0 10.209 0.099 10.157 0.17 L 5.434 6.681 C 5.264 6.916 4.913 6.916 4.742 6.681 L 0.02 0.17 C -0.031 0.099 0.02 0 0.107 0 L 1.111 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 12px 4px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 36,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <DropdownMenu
          style={{
            position: "absolute",
            left: 0,
            top: 36,
            width: 210,
          }}
          arrow={"no arrow"}
          items={"3"}
        />
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 36,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "1px 0px 1px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{ position: "relative", height: 16, flexShrink: 0 }}>{props.icon1 ?? <Cursor on={true} />}</div>
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
          }}>{props.text1 ?? "Please select"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: -2,
          top: 35.5,
          width: 214,
          height: 264,
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "4px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
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
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={true}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 206,
              top: 4,
              height: 256,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <Scrollbar
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                hover={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 44,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "1px 0px 1px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{ position: "relative", height: 16, flexShrink: 0 }}>{props.icon1 ?? <Cursor on={true} />}</div>
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
          }}>{props.text1 ?? "Please select"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 44,
          width: 210,
          height: 264,
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "4px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
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
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={true}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 202,
              top: 4,
              height: 256,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <Scrollbar
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                hover={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 44,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 64,
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
              overflow: "hidden",
              borderRadius: 2,
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "2px 4px 2px 8px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
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
              }}>item 01</span>
              <div style={{
                  position: "relative",
                  width: 10,
                  height: 10,
                  flexShrink: 0,
                }}>
                <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "2px 4px 2px 8px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
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
              }}>item 02</span>
              <div style={{
                  position: "relative",
                  width: 10,
                  height: 10,
                  flexShrink: 0,
                }}>
                <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: 16, flexShrink: 0 }}>{props.icon2 ?? <Cursor on={true} />}</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 32,
          width: 210,
          height: 264,
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            padding: "4px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
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
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={true}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 202,
              top: 4,
              height: 256,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <Scrollbar
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                hover={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 44,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 64,
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
              overflow: "hidden",
              borderRadius: 2,
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 4px 4px 8px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
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
              }}>item 01</span>
              <div style={{
                  position: "relative",
                  width: 10,
                  height: 10,
                  flexShrink: 0,
                }}>
                <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              backgroundColor: "rgb(230,247,255)",
              boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 4px 4px 8px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
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
              }}>item 02</span>
              <div style={{
                  position: "relative",
                  width: 10,
                  height: 10,
                  flexShrink: 0,
                }}>
                <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: 16, flexShrink: 0 }}>{props.icon2 ?? <Cursor on={true} />}</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 210,
          height: 264,
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "column",
            padding: "4px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
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
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={true}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
              <ComponentsDropdownMenuItem
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                disabled={false}
                icon={false}
                checkable={false}
                checked={false}
                multiSelect={true}
                danger={false}
                arrow={false}
                selected={false}
                hover={false}
              />
            </div>
            <div style={{
              position: "absolute",
              left: 202,
              top: 4,
              height: 256,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              <Scrollbar
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }}
                hover={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 44,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <DropdownMenu
          style={{
            position: "absolute",
            left: 0,
            top: 44,
            width: 210,
          }}
          arrow={"no arrow"}
          items={"3"}
        />
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "0px 8px 0px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 28,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 24,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <DropdownMenu
          style={{
            position: "absolute",
            left: 0,
            top: 28,
            width: 210,
          }}
          arrow={"no arrow"}
          items={"3"}
        />
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 12px 4px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 36,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <DropdownMenu
          style={{
            position: "absolute",
            left: 0,
            top: 32,
            width: 210,
          }}
          arrow={"no arrow"}
          items={"3"}
        />
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 44,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <DropdownMenu
          style={{
            position: "absolute",
            left: 0,
            top: 40,
            width: 210,
          }}
          arrow={"no arrow"}
          items={"3"}
        />
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "0px 8px 0px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 214,
          height: 28,
          opacity: 0.2,
          borderRadius: 4,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 24,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <DropdownMenu
          style={{
            position: "absolute",
            left: 0,
            top: 24,
            width: 210,
          }}
          arrow={"no arrow"}
          items={"3"}
        />
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 12px 4px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 32,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <DropdownMenu
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            arrow={"no arrow"}
            items={"3"}
          />
        </div>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Please select"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 32,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 264,
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "column",
              padding: "4px 0px 4px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
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
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={true}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
              </div>
              <div style={{
                position: "absolute",
                left: 202,
                top: 4,
                height: 256,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <Scrollbar
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    height: "auto",
                  }}
                  hover={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Please select"}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 264,
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "column",
              padding: "4px 0px 4px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
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
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={true}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
              </div>
              <div style={{
                position: "absolute",
                left: 202,
                top: 4,
                height: 256,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <Scrollbar
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    height: "auto",
                  }}
                  hover={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          width: 64,
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
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "2px 4px 2px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
            }}>item 01</span>
            <div style={{
                position: "relative",
                width: 10,
                height: 10,
                flexShrink: 0,
              }}>
              <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "2px 4px 2px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
            }}>item 02</span>
            <div style={{
                position: "relative",
                width: 10,
                height: 10,
                flexShrink: 0,
              }}>
              <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 32,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 264,
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "column",
              padding: "4px 0px 4px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
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
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={true}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
              </div>
              <div style={{
                position: "absolute",
                left: 202,
                top: 4,
                height: 256,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <Scrollbar
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    height: "auto",
                  }}
                  hover={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 4px 4px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          width: 64,
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
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 4px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
            }}>item 01</span>
            <div style={{
                position: "relative",
                width: 10,
                height: 10,
                flexShrink: 0,
              }}>
              <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(230,247,255)",
            boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 4px 4px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
            }}>item 02</span>
            <div style={{
                position: "relative",
                width: 10,
                height: 10,
                flexShrink: 0,
              }}>
              <Close style={{ transform: "scale(0.278, 0.278)", transformOrigin: "0 0" }} />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            height: 264,
            overflow: "hidden",
            borderRadius: 2,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "column",
              padding: "4px 0px 4px 0px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
              alignSelf: "stretch",
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
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={true}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
                <ComponentsDropdownMenuItem
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    width: "auto",
                  }}
                  disabled={false}
                  icon={false}
                  checkable={false}
                  checked={false}
                  multiSelect={true}
                  danger={false}
                  arrow={false}
                  selected={false}
                  hover={false}
                />
              </div>
              <div style={{
                position: "absolute",
                left: 202,
                top: 4,
                height: 256,
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "flex-start",
                flexWrap: "nowrap",
              }}>
                <Scrollbar
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    height: "auto",
                  }}
                  hover={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.25)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <DropdownMenu
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            arrow={"no arrow"}
            items={"3"}
          />
        </div>
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "0px 8px 0px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 24,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 24,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 24,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <DropdownMenu
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            arrow={"no arrow"}
            items={"3"}
          />
        </div>
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "4px 12px 4px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 32,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 32,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <DropdownMenu
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            arrow={"no arrow"}
            items={"3"}
          />
        </div>
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 40,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 41,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
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
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <DropdownMenu
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            arrow={"no arrow"}
            items={"3"}
          />
        </div>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        flexDirection: "row",
        padding: "0px 8px 0px 8px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 24,
          opacity: 0.2,
          borderRadius: 2,
          backgroundColor: "rgb(24,144,255)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 24,
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "1px 0px 1px 0px",
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
          }}>{props.text1 ?? "Lucy"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6.857,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 6px 0px 6px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
          }}>icon</div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 24,
          width: 210,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <DropdownMenu
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            arrow={"no arrow"}
            items={"3"}
          />
        </div>
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 210,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgba(0,0,0,0.25)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "1px 0px 1px 0px",
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
          color: "rgba(0,0,0,0.25)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Lucy"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 6px 0px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={10.178} height={6.857} viewBox="0 0 10.178 6.857" fill="none" style={{
          position: "relative",
          width: 10.178,
          height: 6.857,
          flexShrink: 0,
        }}>
          <path d={"M 1.111 0 C 1.179 0 1.244 0.034 1.284 0.089 L 5.089 5.333 L 8.894 0.089 C 8.934 0.034 8.999 0 9.067 0 L 10.071 0 C 10.158 0 10.209 0.099 10.157 0.17 L 5.434 6.681 C 5.264 6.916 4.913 6.916 4.742 6.681 L 0.02 0.17 C -0.031 0.099 0.02 0 0.107 0 L 1.111 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=large, Filled=true, MultiSelect=true, ⬑Custom Tag=true, Disabled=true, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=true|filled=true|customTag=true|multiSelect=true": __body0,
    // figma: Size=large, Filled=false, MultiSelect=true, ⬑Custom Tag=true, Disabled=true, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=true|filled=false|customTag=true|multiSelect=true": __body1,
    // figma: Size=large, Filled=true, MultiSelect=true, ⬑Custom Tag=true, Disabled=false, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=false|filled=true|customTag=true|multiSelect=true": __body2,
    // figma: Size=large, Filled=false, MultiSelect=true, ⬑Custom Tag=true, Disabled=false, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=false|filled=false|customTag=true|multiSelect=true": __body3,
    // figma: Size=small, Filled=true, MultiSelect=true, ⬑Custom Tag=true, Disabled=true, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=true|filled=true|customTag=true|multiSelect=true": __body4,
    // figma: Size=small, Filled=false, MultiSelect=true, ⬑Custom Tag=true, Disabled=true, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=true|filled=false|customTag=true|multiSelect=true": __body5,
    // figma: Size=small, Filled=true, MultiSelect=true, ⬑Custom Tag=true, Disabled=false, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=false|filled=true|customTag=true|multiSelect=true": __body6,
    // figma: Size=small, Filled=false, MultiSelect=true, ⬑Custom Tag=true, Disabled=false, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=false|filled=false|customTag=true|multiSelect=true": __body7,
    // figma: Size=medium, Filled=true, MultiSelect=true, ⬑Custom Tag=true, Disabled=true, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=true|filled=true|customTag=true|multiSelect=true": __body8,
    // figma: Size=medium, Filled=false, MultiSelect=true, ⬑Custom Tag=true, Disabled=true, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=true|filled=false|customTag=true|multiSelect=true": __body9,
    // figma: Size=medium, Filled=true, MultiSelect=true, ⬑Custom Tag=true, Disabled=false, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=false|filled=true|customTag=true|multiSelect=true": __body10,
    // figma: Size=medium, Filled=false, MultiSelect=true, ⬑Custom Tag=true, Disabled=false, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=false|filled=false|customTag=true|multiSelect=true": __body11,
    // figma: Size=large, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=true|filled=true|customTag=false|multiSelect=true": __body12,
    // figma: Size=large, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=true|filled=false|customTag=false|multiSelect=true": __body1,
    // figma: Size=large, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=true": __body13,
    // figma: Size=large, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=true": __body3,
    // figma: Size=small, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=true|filled=true|customTag=false|multiSelect=true": __body14,
    // figma: Size=small, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=true|filled=false|customTag=false|multiSelect=true": __body5,
    // figma: Size=small, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=true": __body15,
    // figma: Size=small, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=true": __body7,
    // figma: Size=medium, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=true|filled=true|customTag=false|multiSelect=true": __body16,
    // figma: Size=medium, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=true|filled=false|customTag=false|multiSelect=true": __body9,
    // figma: Size=medium, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=true": __body17,
    // figma: Size=medium, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=true": __body11,
    // figma: Size=small, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=true|filled=true|customTag=false|multiSelect=false": __body18,
    // figma: Size=small, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=true|filled=false|customTag=false|multiSelect=false": __body19,
    // figma: Size=small, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=false": __body20,
    // figma: Size=small, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=sm|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=false": __body21,
    // figma: Size=large, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=true|filled=true|customTag=false|multiSelect=false": __body22,
    // figma: Size=large, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=true|filled=false|customTag=false|multiSelect=false": __body23,
    // figma: Size=large, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=false": __body24,
    // figma: Size=large, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=lg|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=false": __body25,
    // figma: Size=medium, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=true|filled=true|customTag=false|multiSelect=false": __body26,
    // figma: Size=medium, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=true, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=true|filled=false|customTag=false|multiSelect=false": __body27,
    // figma: Size=medium, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=false": __body28,
    // figma: Size=medium, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=md|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=false": __body29,
    // figma: Size=medium, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=md|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=true": __body30,
    // figma: Size=large, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=lg|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=true": __body31,
    // figma: Size=medium, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=md|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=true": __body32,
    // figma: Size=large, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=lg|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=true": __body33,
    // figma: Size=large, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=lg|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=false": __body34,
    // figma: Size=small, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=sm|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=false": __body35,
    // figma: Size=medium, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=md|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=false": __body36,
    // figma: Size=large, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=lg|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=false": __body37,
    // figma: Size=small, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=true, Hovering=false
    "open=true|size=sm|hovering=false|disabled=false|filled=true|customTag=false|multiSelect=false": __body38,
    // figma: Size=medium, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=md|hovering=true|disabled=false|filled=false|customTag=false|multiSelect=false": __body39,
    // figma: Size=medium, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=md|hovering=true|disabled=false|filled=false|customTag=false|multiSelect=true": __body40,
    // figma: Size=large, Filled=false, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=lg|hovering=true|disabled=false|filled=false|customTag=false|multiSelect=true": __body41,
    // figma: Size=medium, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=md|hovering=true|disabled=false|filled=true|customTag=false|multiSelect=true": __body42,
    // figma: Size=large, Filled=true, MultiSelect=true, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=lg|hovering=true|disabled=false|filled=true|customTag=false|multiSelect=true": __body43,
    // figma: Size=large, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=lg|hovering=true|disabled=false|filled=false|customTag=false|multiSelect=false": __body44,
    // figma: Size=small, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=sm|hovering=true|disabled=false|filled=false|customTag=false|multiSelect=false": __body45,
    // figma: Size=medium, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=md|hovering=true|disabled=false|filled=true|customTag=false|multiSelect=false": __body46,
    // figma: Size=large, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=lg|hovering=true|disabled=false|filled=true|customTag=false|multiSelect=false": __body47,
    // figma: Size=small, Filled=true, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=true
    "open=false|size=sm|hovering=true|disabled=false|filled=true|customTag=false|multiSelect=false": __body48,
    // figma: Size=medium, Filled=false, MultiSelect=false, ⬑Custom Tag=false, Disabled=false, Open=false, Hovering=false
    "open=false|size=md|hovering=false|disabled=false|filled=false|customTag=false|multiSelect=false": __body49,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Select;
