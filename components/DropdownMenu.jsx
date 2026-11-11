import { ComponentsDropdownMenuItem } from './ComponentsDropdownMenuItem.jsx';
import { Scrollbar } from './Scrollbar.jsx';

// figma node: 6326:28690 Dropdown-Menu (78 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "arrow=" + __venc(p.arrow) + '|' + "items=" + __venc(p.items);

export function DropdownMenu(_p = {}) {
  const props = { ..._p, arrow: _p.arrow ?? "no arrow", items: _p.items ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 264,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={true}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={true}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 114,
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
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 264,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={true}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
          <ComponentsDropdownMenuItem
            style={{
              position: "relative",
              height: 42,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            disabled={false}
            icon={false}
            checkable={false}
            checked={false}
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 114,
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
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
          top: 0,
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
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 264,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 114,
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
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 16,
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
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 270,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
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
          <div style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "5px 12px 5px 12px",
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
            }}>1st menu item</span>
          </div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 36,
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
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 264,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
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
            multiSelect={false}
            danger={false}
            arrow={false}
            selected={false}
            hover={false}
          />
        </div>
        <div style={{
          position: "absolute",
          left: 110,
          top: 0,
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
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
        multiSelect={false}
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
        multiSelect={false}
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
        multiSelect={false}
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
        multiSelect={false}
        danger={false}
        arrow={false}
        selected={false}
        hover={false}
      />
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
        multiSelect={false}
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
        multiSelect={false}
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
        multiSelect={false}
        danger={false}
        arrow={false}
        selected={false}
        hover={false}
      />
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
        multiSelect={false}
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
        multiSelect={false}
        danger={false}
        arrow={false}
        selected={false}
        hover={false}
      />
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
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
        multiSelect={false}
        danger={false}
        arrow={false}
        selected={false}
        hover={false}
      />
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
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
          multiSelect={false}
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            transform: "matrix(1,0,0,-1,0,0)",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: 118,
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 22px 0px 22px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 0,
          height: 6,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <svg width={12} viewBox="0 0 12 6" fill="none" style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 12 6 L 6 0 L 0 6 L 12 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(245,245,245)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "5px 12px 5px 12px",
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
          }}>1st menu item</span>
        </div>
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
          multiSelect={false}
          danger={false}
          arrow={false}
          selected={false}
          hover={false}
        />
      </div>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 9px 28px 8px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon2 ?? <ComponentsDropdownMenuItem disabled={false} icon={false} checkable={false} checked={false} multiSelect={false} danger={false} arrow={false} selected={false} hover={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Arrow=no arrow, Items=1
    "arrow=no arrow|items=1": __body0,
    // figma: Arrow=bottom right, Items=12
    "arrow=bottom right|items=12": __body1,
    // figma: Arrow=bottom center, Items=12
    "arrow=bottom center|items=12": __body2,
    // figma: Arrow=bottom left, Items=12
    "arrow=bottom left|items=12": __body3,
    // figma: Arrow=top right, Items=12
    "arrow=top right|items=12": __body4,
    // figma: Arrow=top center, Items=12
    "arrow=top center|items=12": __body5,
    // figma: Arrow=top left, Items=12
    "arrow=top left|items=12": __body6,
    // figma: Arrow=no arrow, Items=12
    "arrow=no arrow|items=12": __body7,
    // figma: Arrow=bottom right, Items=11
    "arrow=bottom right|items=11": __body8,
    // figma: Arrow=bottom center, Items=11
    "arrow=bottom center|items=11": __body9,
    // figma: Arrow=bottom left, Items=11
    "arrow=bottom left|items=11": __body10,
    // figma: Arrow=top right, Items=11
    "arrow=top right|items=11": __body11,
    // figma: Arrow=top center, Items=11
    "arrow=top center|items=11": __body12,
    // figma: Arrow=top left, Items=11
    "arrow=top left|items=11": __body13,
    // figma: Arrow=no arrow, Items=11
    "arrow=no arrow|items=11": __body14,
    // figma: Arrow=bottom right, Items=10
    "arrow=bottom right|items=10": __body15,
    // figma: Arrow=bottom center, Items=10
    "arrow=bottom center|items=10": __body16,
    // figma: Arrow=bottom left, Items=10
    "arrow=bottom left|items=10": __body17,
    // figma: Arrow=top right, Items=10
    "arrow=top right|items=10": __body18,
    // figma: Arrow=top center, Items=10
    "arrow=top center|items=10": __body19,
    // figma: Arrow=top left, Items=10
    "arrow=top left|items=10": __body20,
    // figma: Arrow=no arrow, Items=10
    "arrow=no arrow|items=10": __body21,
    // figma: Arrow=bottom right, Items=9
    "arrow=bottom right|items=9": __body22,
    // figma: Arrow=bottom center, Items=9
    "arrow=bottom center|items=9": __body23,
    // figma: Arrow=bottom left, Items=9
    "arrow=bottom left|items=9": __body24,
    // figma: Arrow=top right, Items=9
    "arrow=top right|items=9": __body25,
    // figma: Arrow=top center, Items=9
    "arrow=top center|items=9": __body26,
    // figma: Arrow=top left, Items=9
    "arrow=top left|items=9": __body27,
    // figma: Arrow=no arrow, Items=9
    "arrow=no arrow|items=9": __body28,
    // figma: Arrow=bottom right, Items=8
    "arrow=bottom right|items=8": __body29,
    // figma: Arrow=bottom center, Items=8
    "arrow=bottom center|items=8": __body30,
    // figma: Arrow=bottom left, Items=8
    "arrow=bottom left|items=8": __body31,
    // figma: Arrow=top right, Items=8
    "arrow=top right|items=8": __body32,
    // figma: Arrow=top center, Items=8
    "arrow=top center|items=8": __body33,
    // figma: Arrow=top left, Items=8
    "arrow=top left|items=8": __body34,
    // figma: Arrow=no arrow, Items=8
    "arrow=no arrow|items=8": __body35,
    // figma: Arrow=bottom right, Items=7
    "arrow=bottom right|items=7": __body36,
    // figma: Arrow=bottom center, Items=7
    "arrow=bottom center|items=7": __body37,
    // figma: Arrow=bottom left, Items=7
    "arrow=bottom left|items=7": __body38,
    // figma: Arrow=top right, Items=7
    "arrow=top right|items=7": __body39,
    // figma: Arrow=top center, Items=7
    "arrow=top center|items=7": __body40,
    // figma: Arrow=top left, Items=7
    "arrow=top left|items=7": __body41,
    // figma: Arrow=no arrow, Items=7
    "arrow=no arrow|items=7": __body42,
    // figma: Arrow=bottom right, Items=6
    "arrow=bottom right|items=6": __body43,
    // figma: Arrow=bottom center, Items=6
    "arrow=bottom center|items=6": __body44,
    // figma: Arrow=bottom left, Items=6
    "arrow=bottom left|items=6": __body45,
    // figma: Arrow=top right, Items=6
    "arrow=top right|items=6": __body46,
    // figma: Arrow=top center, Items=6
    "arrow=top center|items=6": __body47,
    // figma: Arrow=top left, Items=6
    "arrow=top left|items=6": __body48,
    // figma: Arrow=no arrow, Items=6
    "arrow=no arrow|items=6": __body49,
    // figma: Arrow=bottom right, Items=5
    "arrow=bottom right|items=5": __body50,
    // figma: Arrow=bottom center, Items=5
    "arrow=bottom center|items=5": __body51,
    // figma: Arrow=bottom left, Items=5
    "arrow=bottom left|items=5": __body52,
    // figma: Arrow=top right, Items=5
    "arrow=top right|items=5": __body53,
    // figma: Arrow=top center, Items=5
    "arrow=top center|items=5": __body54,
    // figma: Arrow=top left, Items=5
    "arrow=top left|items=5": __body55,
    // figma: Arrow=no arrow, Items=5
    "arrow=no arrow|items=5": __body56,
    // figma: Arrow=bottom right, Items=4
    "arrow=bottom right|items=4": __body57,
    // figma: Arrow=bottom center, Items=4
    "arrow=bottom center|items=4": __body58,
    // figma: Arrow=bottom left, Items=4
    "arrow=bottom left|items=4": __body59,
    // figma: Arrow=top right, Items=4
    "arrow=top right|items=4": __body60,
    // figma: Arrow=top center, Items=4
    "arrow=top center|items=4": __body61,
    // figma: Arrow=top left, Items=4
    "arrow=top left|items=4": __body62,
    // figma: Arrow=no arrow, Items=4
    "arrow=no arrow|items=4": __body63,
    // figma: Arrow=bottom right, Items=3
    "arrow=bottom right|items=3": __body64,
    // figma: Arrow=bottom center, Items=3
    "arrow=bottom center|items=3": __body65,
    // figma: Arrow=bottom left, Items=3
    "arrow=bottom left|items=3": __body66,
    // figma: Arrow=top right, Items=3
    "arrow=top right|items=3": __body67,
    // figma: Arrow=top center, Items=3
    "arrow=top center|items=3": __body68,
    // figma: Arrow=top left, Items=3
    "arrow=top left|items=3": __body69,
    // figma: Arrow=no arrow, Items=3
    "arrow=no arrow|items=3": __body70,
    // figma: Arrow=bottom right, Items=2
    "arrow=bottom right|items=2": __body71,
    // figma: Arrow=bottom center, Items=2
    "arrow=bottom center|items=2": __body72,
    // figma: Arrow=bottom left, Items=2
    "arrow=bottom left|items=2": __body73,
    // figma: Arrow=top right, Items=2
    "arrow=top right|items=2": __body74,
    // figma: Arrow=top center, Items=2
    "arrow=top center|items=2": __body75,
    // figma: Arrow=top left, Items=2
    "arrow=top left|items=2": __body76,
    // figma: Arrow=no arrow, Items=2
    "arrow=no arrow|items=2": __body77,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DropdownMenu;
