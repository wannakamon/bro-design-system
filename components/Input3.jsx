import { ComponentsInputAffix } from './ComponentsInputAffix.jsx';
import { InputAddonCursor } from './InputAddonCursor.jsx';
import { InputAddonIcon } from './InputAddonIcon.jsx';
import { InputAddonLabel } from './InputAddonLabel.jsx';

// figma node: 6326:27294 Input (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state) + '|' + "filled=" + __venc(p.filled);

export function Input3(_p = {}) {
  const props = { ..._p, prefix: _p.prefix ?? false, placeholder: _p.placeholder ?? "example", size: _p.size ?? "lg", value: _p.value ?? "example", suffix: _p.suffix ?? false, state: _p.state ?? "normal", addonAfter: _p.addonAfter ?? false, addonBefore: _p.addonBefore ?? false, filled: _p.filled ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 222,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          width: 70,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "1px 8px 1px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
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
          }}>{props.placeholder}</span>
        </div>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 222,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.addonBefore && (
        <div style={{
            position: "relative",
            width: 70,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 0px 0px 2px rgba(24,144,255,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "1px 8px 1px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.prefix && (
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
              position: "absolute",
              left: 1.126,
              top: 0.782,
              width: 11.75,
              height: 12.438,
              color: "rgba(0,0,0,0.45)",
            }}>
              <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          )}
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 1,
                height: 18,
                flexShrink: 0,
              }}>{props.icon3 ?? <InputAddonCursor state={"normal"} />}</div>
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
            }}>{props.placeholder}</span>
          </div>
          {props.suffix && (
          <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>{props.icon4 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
          )}
        </div>
      </div>
      {props.addonAfter && (
      <InputAddonIcon style={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 222,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          width: 70,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "1px 8px 1px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
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
          }}>{props.placeholder}</span>
        </div>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 222,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <InputAddonLabel
        style={{
          position: "relative",
          width: 76,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"https://"}
      />
      )}
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
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
          }}>{props.placeholder}</span>
        </div>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon2 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 222,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.addonBefore && (
        <InputAddonLabel
          style={{
            position: "relative",
            width: 76,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"https://"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 0px 0px 2px rgba(24,144,255,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.prefix && (
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
              position: "absolute",
              left: 1.126,
              top: 0.782,
              width: 11.75,
              height: 12.438,
              color: "rgba(0,0,0,0.45)",
            }}>
              <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          )}
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 1,
                height: 18,
                flexShrink: 0,
              }}>{props.icon2 ?? <InputAddonCursor state={"normal"} />}</div>
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
            }}>{props.placeholder}</span>
          </div>
          {props.suffix && (
          <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
          )}
        </div>
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 222,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <InputAddonLabel
        style={{
          position: "relative",
          width: 76,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"https://"}
      />
      )}
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
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
          }}>{props.placeholder}</span>
        </div>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon2 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 222,
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          width: 70,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 12px 5px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
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
          }}>{props.placeholder}</span>
        </div>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 222,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.addonBefore && (
        <div style={{
            position: "relative",
            width: 70,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 0px 0px 2px rgba(24,144,255,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "5px 12px 5px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.prefix && (
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
              position: "absolute",
              left: 1.126,
              top: 0.782,
              width: 11.75,
              height: 12.438,
              color: "rgba(0,0,0,0.45)",
            }}>
              <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          )}
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 1,
                height: 18,
                flexShrink: 0,
              }}>{props.icon3 ?? <InputAddonCursor state={"normal"} />}</div>
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
            }}>{props.placeholder}</span>
          </div>
          {props.suffix && (
          <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>{props.icon4 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
          )}
        </div>
      </div>
      {props.addonAfter && (
      <InputAddonIcon style={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 221,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel />}</div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 12px 5px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.127,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 5.875 0 C 8.015 0 9.75 1.735 9.75 3.875 C 9.75 5.167 9.117 6.312 8.144 7.016 C 8.15 7.019 8.156 7.02 8.162 7.023 C 8.86 7.319 9.494 7.747 10.029 8.283 C 10.566 8.818 10.994 9.452 11.289 10.15 C 11.58 10.836 11.734 11.563 11.75 12.31 C 11.75 12.326 11.747 12.343 11.741 12.358 C 11.735 12.374 11.725 12.388 11.714 12.399 C 11.702 12.411 11.688 12.421 11.673 12.428 C 11.658 12.434 11.642 12.437 11.625 12.438 L 10.688 12.438 C 10.619 12.438 10.564 12.384 10.563 12.315 C 10.531 11.109 10.046 9.98 9.19 9.124 C 8.305 8.238 7.128 7.75 5.875 7.75 C 4.622 7.75 3.445 8.238 2.559 9.124 C 1.703 9.98 1.219 11.109 1.188 12.315 C 1.186 12.382 1.131 12.437 1.063 12.438 L 0.125 12.438 C 0.108 12.438 0.092 12.434 0.076 12.428 C 0.061 12.421 0.047 12.411 0.035 12.399 C 0.024 12.388 0.014 12.374 0.008 12.358 C 0.002 12.343 0 12.326 0 12.31 C 0.014 11.567 0.171 10.835 0.461 10.151 C 0.756 9.454 1.183 8.819 1.72 8.284 C 2.259 7.744 2.887 7.321 3.587 7.025 C 3.593 7.022 3.599 7.021 3.606 7.018 C 2.632 6.313 2 5.167 2 3.875 C 2 1.734 3.734 0 5.875 0 Z M 5.875 1.188 C 5.158 1.188 4.482 1.468 3.975 1.976 C 3.467 2.483 3.188 3.158 3.188 3.875 C 3.188 4.592 3.467 5.268 3.975 5.775 C 4.482 6.283 5.158 6.563 5.875 6.563 C 6.592 6.562 7.267 6.283 7.774 5.775 C 8.282 5.268 8.563 4.592 8.563 3.875 C 8.563 3.158 8.282 2.483 7.774 1.976 C 7.267 1.468 6.592 1.188 5.875 1.188 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
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
          }}>{props.placeholder}</span>
        </div>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 216,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          width: 70,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "1px 8px 1px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.addonBefore && (
        <div style={{
            position: "relative",
            width: 70,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 0px 0px 2px rgba(24,144,255,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "1px 8px 1px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.prefix && (
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
              position: "absolute",
              left: 1.126,
              top: 0.782,
              width: 11.75,
              height: 12.438,
              color: "rgba(0,0,0,0.45)",
            }}>
              <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          )}
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
          }}>{props.value}</span>
          <InputAddonCursor
            style={{
              position: "relative",
              height: 18,
              flexGrow: 1,
              width: "auto",
            }}
            state={"normal"}
          />
          {props.suffix && (
          <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
          )}
        </div>
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 216,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          width: 70,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel text1={"https://"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "1px 8px 1px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 216,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <InputAddonLabel
        style={{
          position: "relative",
          width: 89,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"https://"}
      />
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.25)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon2 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.addonBefore && (
        <InputAddonLabel
          style={{
            position: "relative",
            width: 76,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"https://"}
        />
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 0px 0px 2px rgba(24,144,255,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.prefix && (
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
              position: "absolute",
              left: 1.126,
              top: 0.782,
              width: 11.75,
              height: 12.438,
              color: "rgba(0,0,0,0.45)",
            }}>
              <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          )}
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
          }}>{props.value}</span>
          <InputAddonCursor
            style={{
              position: "relative",
              height: 18,
              flexGrow: 1,
              width: "auto",
            }}
            state={"normal"}
          />
          {props.suffix && (
          <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>{props.icon2 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
          )}
        </div>
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 216,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <InputAddonLabel
        style={{
          position: "relative",
          width: 76,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"https://"}
      />
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon2 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 216,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(245,245,245)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 12px 5px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.126,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.25)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.25)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.addonBefore && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <InputAddonLabel />}</div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 0px 0px 2px rgba(24,144,255,0.2)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "5px 12px 5px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.prefix && (
          <div style={{
            position: "relative",
            width: 14,
            height: 14,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
              position: "absolute",
              left: 1.126,
              top: 0.782,
              width: 11.75,
              height: 12.438,
              color: "rgba(0,0,0,0.45)",
            }}>
              <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          )}
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
          }}>{props.value}</span>
          <InputAddonCursor
            style={{
              position: "relative",
              height: 18,
              flexGrow: 1,
              width: "auto",
            }}
            state={"normal"}
          />
          {props.suffix && (
          <div style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
          )}
        </div>
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 216,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.addonBefore && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <InputAddonLabel />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "5px 12px 5px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prefix && (
        <div style={{
          position: "relative",
          width: 14,
          height: 14,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={11.750} height={12.438} viewBox="0 0 11.750 12.438" fill="none" style={{
            position: "absolute",
            left: 1.127,
            top: 0.782,
            width: 11.75,
            height: 12.438,
            color: "rgba(0,0,0,0.45)",
          }}>
            <path d={"M 11.289 10.15 C 10.994 9.452 10.567 8.818 10.03 8.283 C 9.494 7.746 8.86 7.319 8.163 7.023 C 8.156 7.02 8.15 7.019 8.144 7.016 C 9.117 6.313 9.75 5.167 9.75 3.875 C 9.75 1.734 8.016 0 5.875 0 C 3.734 0 2 1.734 2 3.875 C 2 5.167 2.633 6.313 3.606 7.017 C 3.6 7.02 3.594 7.022 3.588 7.025 C 2.888 7.32 2.259 7.744 1.72 8.284 C 1.184 8.82 0.756 9.454 0.461 10.152 C 0.171 10.835 0.014 11.567 0 12.309 C 0 12.326 0.003 12.343 0.009 12.358 C 0.015 12.374 0.024 12.388 0.036 12.4 C 0.047 12.412 0.061 12.421 0.076 12.428 C 0.092 12.434 0.108 12.438 0.125 12.438 L 1.063 12.438 C 1.131 12.438 1.186 12.383 1.188 12.316 C 1.219 11.109 1.703 9.98 2.559 9.123 C 3.445 8.238 4.622 7.75 5.875 7.75 C 7.128 7.75 8.305 8.238 9.191 9.123 C 10.047 9.98 10.531 11.109 10.563 12.316 C 10.564 12.384 10.619 12.438 10.688 12.438 L 11.625 12.438 C 11.642 12.438 11.658 12.434 11.674 12.428 C 11.689 12.421 11.703 12.412 11.715 12.4 C 11.726 12.388 11.735 12.374 11.741 12.358 C 11.748 12.343 11.75 12.326 11.75 12.309 C 11.734 11.563 11.58 10.836 11.289 10.15 L 11.289 10.15 Z M 5.875 6.563 C 5.158 6.563 4.483 6.283 3.975 5.775 C 3.467 5.267 3.188 4.592 3.188 3.875 C 3.188 3.158 3.467 2.483 3.975 1.975 C 4.483 1.467 5.158 1.188 5.875 1.188 C 6.592 1.188 7.267 1.467 7.775 1.975 C 8.283 2.483 8.563 3.158 8.563 3.875 C 8.563 4.592 8.283 5.267 7.775 5.775 C 7.267 6.283 6.592 6.563 5.875 6.563 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: "rgba(0,0,0,0.85)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.value}</span>
        {props.suffix && (
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon3 ?? <ComponentsInputAffix type={"icon-14px"} />}</div>
        )}
      </div>
      {props.addonAfter && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <InputAddonIcon />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Size=small, State=disabled, Filled=false
    "size=sm|state=disabled|filled=false": __body0,
    // figma: Size=small, State=focused, Filled=false
    "size=sm|state=focused|filled=false": __body1,
    // figma: Size=small, State=normal, Filled=false
    "size=sm|state=normal|filled=false": __body2,
    // figma: Size=large, State=disabled, Filled=false
    "size=lg|state=disabled|filled=false": __body3,
    // figma: Size=large, State=focused, Filled=false
    "size=lg|state=focused|filled=false": __body4,
    // figma: Size=large, State=normal, Filled=false
    "size=lg|state=normal|filled=false": __body5,
    // figma: Size=medium, State=disabled, Filled=false
    "size=md|state=disabled|filled=false": __body6,
    // figma: Size=medium, State=focused, Filled=false
    "size=md|state=focused|filled=false": __body7,
    // figma: Size=medium, State=normal, Filled=false
    "size=md|state=normal|filled=false": __body8,
    // figma: Size=small, State=disabled, Filled=true
    "size=sm|state=disabled|filled=true": __body9,
    // figma: Size=small, State=focused, Filled=true
    "size=sm|state=focused|filled=true": __body10,
    // figma: Size=small, State=normal, Filled=true
    "size=sm|state=normal|filled=true": __body11,
    // figma: Size=large, State=disabled, Filled=true
    "size=lg|state=disabled|filled=true": __body12,
    // figma: Size=large, State=focused, Filled=true
    "size=lg|state=focused|filled=true": __body13,
    // figma: Size=large, State=normal, Filled=true
    "size=lg|state=normal|filled=true": __body14,
    // figma: Size=medium, State=disabled, Filled=true
    "size=md|state=disabled|filled=true": __body15,
    // figma: Size=medium, State=focused, Filled=true
    "size=md|state=focused|filled=true": __body16,
    // figma: Size=medium, State=normal, Filled=true
    "size=md|state=normal|filled=true": __body17,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default Input3;
