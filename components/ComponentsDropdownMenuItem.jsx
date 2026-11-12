import { Check } from './Check.jsx';
import { CheckboxInput } from './CheckboxInput.jsx';
import { Right } from './Right.jsx';
import { User } from './User.jsx';

// figma node: 6326:28581 Components/Dropdown/Menu-Item (29 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "disabled=" + __venc(p.disabled) + '|' + "icon=" + __venc(p.icon) + '|' + "checkable=" + __venc(p.checkable) + '|' + "checked=" + __venc(p.checked) + '|' + "multiSelect=" + __venc(p.multiSelect) + '|' + "danger=" + __venc(p.danger) + '|' + "arrow=" + __venc(p.arrow) + '|' + "selected=" + __venc(p.selected) + '|' + "hover=" + __venc(p.hover);

export function ComponentsDropdownMenuItem(_p = {}) {
  const props = { ..._p, disabled: _p.disabled ?? true, menuTitle: _p.menuTitle ?? "Menu item", icon: _p.icon ?? true, checkable: _p.checkable ?? true, checked: _p.checked ?? true, multiSelect: _p.multiSelect ?? true, danger: _p.danger ?? true, arrow: _p.arrow ?? true, selected: _p.selected ?? true, hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CheckboxInput checked={true} indeterminate={false} hovering={false} disabled={true} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} hovering={false} disabled={true} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <CheckboxInput checked={true} indeterminate={false} hovering={false} disabled={false} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} hovering={false} disabled={false} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <CheckboxInput checked={true} indeterminate={false} hovering={false} disabled={false} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CheckboxInput checked={false} indeterminate={false} hovering={false} disabled={false} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgb(255,77,79)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgb(255,77,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon2 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.25)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.menuTitle}</span>
      </div>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon2 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(230,247,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon2 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon2 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
      justifyContent: "space-between",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.85)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.menuTitle}</span>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Right style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 130,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 12px 5px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon1 ?? <User style={{ transform: "scale(0.333, 0.333)", transformOrigin: "0 0" }} />}</div>
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
        }}>{props.menuTitle}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mu
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=true|danger=false|arrow=false|selected=false|hover=false": __body0,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=true, ↳ Checked=true, Multi
    "disabled=true|icon=false|checkable=true|checked=true|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body1,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=true, ↳ Checked=false, Mult
    "disabled=true|icon=false|checkable=true|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body2,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=true, Multi
    "disabled=false|icon=false|checkable=true|checked=true|multiSelect=false|danger=false|arrow=false|selected=false|hover=true": __body3,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=false, Mult
    "disabled=false|icon=false|checkable=true|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=true": __body4,
    // figma: Icon=true, Arrow=false, Hover=true, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Multi
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=true|arrow=false|selected=false|hover=true": __body5,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=true|arrow=false|selected=false|hover=true": __body6,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=true, Mult
    "disabled=false|icon=false|checkable=true|checked=true|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body7,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=true, ↳ Checked=false, Mul
    "disabled=false|icon=false|checkable=true|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body8,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=true|arrow=false|selected=false|hover=false": __body9,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=true, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=true|arrow=false|selected=false|hover=false": __body10,
    // figma: Icon=true, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Multi
    "disabled=true|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=false|hover=false": __body11,
    // figma: Icon=false, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Mult
    "disabled=true|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=false|hover=false": __body12,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Mult
    "disabled=true|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body13,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=true, Checkable=false, ↳ Checked=false, Mul
    "disabled=true|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body14,
    // figma: Icon=true, Arrow=true, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Multi
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=true|hover=false": __body15,
    // figma: Icon=false, Arrow=true, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=true|hover=false": __body16,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false,Mult
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=true|danger=false|arrow=false|selected=true|hover=false": __body17,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=true|hover=false": __body18,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=true, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=true|hover=false": __body19,
    // figma: Icon=true, Arrow=true, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Multi
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=false|hover=true": __body20,
    // figma: Icon=false, Arrow=true, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=false|hover=true": __body21,
    // figma: Icon=true, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=true": __body22,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=true": __body23,
    // figma: Icon=false, Arrow=false, Hover=true, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false,Mult
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=true|danger=false|arrow=false|selected=false|hover=true": __body23,
    // figma: Icon=true, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mult
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=false|hover=false": __body24,
    // figma: Icon=false, Arrow=true, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=true|selected=false|hover=false": __body25,
    // figma: Icon=true, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mul
    "disabled=false|icon=true|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body26,
    // figma: Icon=false, Arrow=false, Hover=false, Selected=false, Danger=false, Disabled=false, Checkable=false, ↳ Checked=false, Mu
    "disabled=false|icon=false|checkable=false|checked=false|multiSelect=false|danger=false|arrow=false|selected=false|hover=false": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ComponentsDropdownMenuItem;
