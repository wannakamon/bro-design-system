import { CardHeadLegacy } from './CardHeadLegacy.jsx';

// figma node: 6290:19297 .card(legacy) (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "actions=" + __venc(p.actions) + '|' + "border=" + __venc(p.border) + '|' + "cover=" + __venc(p.cover) + '|' + "head=" + __venc(p.head);

export function CardLegacy(_p = {}) {
  const props = { ..._p, size: _p.size ?? "md", actions: _p.actions ?? true, border: _p.border ?? true, cover: _p.cover ?? true, head: _p.head ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
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
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
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
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
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
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
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
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 L 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 L 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 L 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
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
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
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
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
            lineHeight: "100%",
            color: "rgba(0,0,0,0.85)",
            flexShrink: 0,
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
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
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"sm"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
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
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 0px 12px 0px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={15.146} height={15.999} viewBox="0 0 15.146 15.999" fill="none" style={{
              position: "absolute",
              left: 0.425,
              top: 0,
              width: 15.146,
              height: 15.999,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.654 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.449 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.705 13.466 2.642 13.354 2.612 C 13.242 2.581 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.354 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.374 9.343 0.292 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.292 C 5.721 0.374 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.585 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.979 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.029 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.704 C 0.373 11.604 0.852 12.435 1.473 13.167 L 1.505 13.204 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.412 2.132 13.374 L 3.595 12.854 C 4.127 13.292 4.721 13.638 5.363 13.879 L 5.645 15.404 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.404 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.204 L 13.673 13.167 C 14.295 12.433 14.773 11.604 15.096 10.704 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.179 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.279 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.529 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.729 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.179 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.424 8.583 9.572 8.341 9.672 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.832 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.058 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          outline: "1px dashed rgb(145,213,255)",
          outlineOffset: "-0.500px",
          boxShadow: "inset -1px 0px 0px 0px rgb(240,240,240)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={14.286} height={14.286} viewBox="0 0 14.286 14.286" fill="none" style={{
              position: "absolute",
              left: 0.857,
              top: 0.856,
              width: 14.286,
              height: 14.286,
              color: "rgba(0,0,0,0.85)",
            }}>
              <path d={"M 2.602 11.429 C 2.638 11.429 2.673 11.425 2.709 11.42 L 5.713 10.893 C 5.748 10.886 5.782 10.87 5.807 10.843 L 13.377 3.273 C 13.393 3.257 13.406 3.237 13.415 3.215 C 13.424 3.194 13.429 3.171 13.429 3.147 C 13.429 3.124 13.424 3.101 13.415 3.079 C 13.406 3.058 13.393 3.038 13.377 3.021 L 10.409 0.052 C 10.375 0.018 10.33 0 10.282 0 C 10.234 0 10.189 0.018 10.155 0.052 L 2.586 7.621 C 2.559 7.648 2.543 7.68 2.536 7.716 L 2.009 10.72 C 1.992 10.815 1.998 10.914 2.027 11.006 C 2.056 11.099 2.108 11.183 2.177 11.252 C 2.295 11.366 2.443 11.429 2.602 11.429 L 2.602 11.429 Z M 3.805 8.314 L 10.282 1.839 L 11.591 3.148 L 5.114 9.623 L 3.527 9.904 L 3.805 8.314 L 3.805 8.314 Z M 13.714 12.929 L 0.571 12.929 C 0.255 12.929 0 13.184 0 13.5 L 0 14.143 C 0 14.221 0.064 14.286 0.143 14.286 L 14.143 14.286 C 14.221 14.286 14.286 14.221 14.286 14.143 L 14.286 13.5 C 14.286 13.184 14.03 12.929 13.714 12.929 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={10.500} height={1.750} viewBox="0 0 10.500 1.750" fill="none" style={{
              position: "absolute",
              left: 2.75,
              top: 7.109,
              width: 10.5,
              height: 1.75,
              color: "rgb(0,0,0)",
            }}>
              <path d={"M 0 0.875 C 0 0.99 0.023 1.104 0.067 1.21 C 0.111 1.316 0.175 1.412 0.256 1.494 C 0.338 1.575 0.434 1.639 0.54 1.683 C 0.646 1.727 0.76 1.75 0.875 1.75 C 0.99 1.75 1.104 1.727 1.21 1.683 C 1.316 1.639 1.412 1.575 1.494 1.494 C 1.575 1.412 1.639 1.316 1.683 1.21 C 1.727 1.104 1.75 0.99 1.75 0.875 C 1.75 0.76 1.727 0.646 1.683 0.54 C 1.639 0.434 1.575 0.338 1.494 0.256 C 1.412 0.175 1.316 0.111 1.21 0.067 C 1.104 0.023 0.99 0 0.875 0 C 0.76 0 0.646 0.023 0.54 0.067 C 0.434 0.111 0.338 0.175 0.256 0.256 C 0.175 0.338 0.111 0.434 0.067 0.54 C 0.023 0.646 0 0.76 0 0.875 Z M 4.375 0.875 C 4.375 1.107 4.467 1.33 4.631 1.494 C 4.795 1.658 5.018 1.75 5.25 1.75 C 5.482 1.75 5.705 1.658 5.869 1.494 C 6.033 1.33 6.125 1.107 6.125 0.875 C 6.125 0.643 6.033 0.42 5.869 0.256 C 5.705 0.092 5.482 0 5.25 0 C 5.018 0 4.795 0.092 4.631 0.256 C 4.467 0.42 4.375 0.643 4.375 0.875 Z M 8.75 0.875 C 8.75 1.107 8.842 1.33 9.006 1.494 C 9.17 1.658 9.393 1.75 9.625 1.75 C 9.857 1.75 10.08 1.658 10.244 1.494 C 10.408 1.33 10.5 1.107 10.5 0.875 C 10.5 0.643 10.408 0.42 10.244 0.256 C 10.08 0.092 9.857 0 9.625 0 C 9.393 0 9.17 0.092 9.006 0.256 C 8.842 0.42 8.75 0.643 8.75 0.875 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-dd65974aa8589a2e" style={{
        position: "relative",
        height: 299.986,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.781,-0.625,0.625,0.781,26.322,149.993)",
          transformOrigin: "0 0",
          width: 240,
          height: 0.001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 240,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <CardHeadLegacy
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        size={"md"}
        title={true}
        tabs={false}
        extra={true}
      />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 24px 24px 24px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
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
          }}>Europe Street beat</span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(230,247,255)",
          boxShadow: "inset 0 0 0 0.500px rgb(145,213,255), 0 0 0 0.500px rgb(145,213,255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "rgba(0,0,0,0.45)",
            flexShrink: 0,
          }}>www.instagram.com</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=small, Border=false, Head=true, Cover=true, Actions=true
    "size=sm|actions=true|border=false|cover=true|head=true": __body0,
    // figma: Size=small, Border=false, Head=false, Cover=true, Actions=true
    "size=sm|actions=true|border=false|cover=true|head=false": __body1,
    // figma: Size=small, Border=false, Head=true, Cover=true, Actions=false
    "size=sm|actions=false|border=false|cover=true|head=true": __body2,
    // figma: Size=medium, Border=false, Head=true, Cover=true, Actions=true
    "size=md|actions=true|border=false|cover=true|head=true": __body3,
    // figma: Size=medium, Border=false, Head=false, Cover=true, Actions=true
    "size=md|actions=true|border=false|cover=true|head=false": __body4,
    // figma: Size=medium, Border=false, Head=true, Cover=true, Actions=false
    "size=md|actions=false|border=false|cover=true|head=true": __body5,
    // figma: Size=small, Border=false, Head=false, Cover=false, Actions=false
    "size=sm|actions=false|border=false|cover=false|head=false": __body6,
    // figma: Size=medium, Border=false, Head=false, Cover=false, Actions=false
    "size=md|actions=false|border=false|cover=false|head=false": __body7,
    // figma: Size=small, Border=false, Head=true, Cover=false, Actions=true
    "size=sm|actions=true|border=false|cover=false|head=true": __body8,
    // figma: Size=medium, Border=false, Head=true, Cover=false, Actions=true
    "size=md|actions=true|border=false|cover=false|head=true": __body9,
    // figma: Size=medium, Border=false, Head=false, Cover=false, Actions=true
    "size=md|actions=true|border=false|cover=false|head=false": __body10,
    // figma: Size=medium, Border=false, Head=false, Cover=true, Actions=false
    "size=md|actions=false|border=false|cover=true|head=false": __body11,
    // figma: Size=medium, Border=false, Head=true, Cover=false, Actions=false
    "size=md|actions=false|border=false|cover=false|head=true": __body12,
    // figma: Size=small, Border=false, Head=false, Cover=false, Actions=true
    "size=sm|actions=true|border=false|cover=false|head=false": __body13,
    // figma: Size=small, Border=false, Head=false, Cover=true, Actions=false
    "size=sm|actions=false|border=false|cover=true|head=false": __body14,
    // figma: Size=small, Border=false, Head=true, Cover=false, Actions=false
    "size=sm|actions=false|border=false|cover=false|head=true": __body15,
    // figma: Size=small, Border=true, Head=true, Cover=true, Actions=true
    "size=sm|actions=true|border=true|cover=true|head=true": __body16,
    // figma: Size=small, Border=true, Head=false, Cover=true, Actions=true
    "size=sm|actions=true|border=true|cover=true|head=false": __body17,
    // figma: Size=small, Border=true, Head=true, Cover=true, Actions=false
    "size=sm|actions=false|border=true|cover=true|head=true": __body18,
    // figma: Size=medium, Border=true, Head=true, Cover=true, Actions=true
    "size=md|actions=true|border=true|cover=true|head=true": __body19,
    // figma: Size=medium, Border=true, Head=false, Cover=true, Actions=true
    "size=md|actions=true|border=true|cover=true|head=false": __body20,
    // figma: Size=medium, Border=true, Head=true, Cover=true, Actions=false
    "size=md|actions=false|border=true|cover=true|head=true": __body21,
    // figma: Size=small, Border=true, Head=false, Cover=false, Actions=false
    "size=sm|actions=false|border=true|cover=false|head=false": __body22,
    // figma: Size=medium, Border=true, Head=false, Cover=false, Actions=false
    "size=md|actions=false|border=true|cover=false|head=false": __body23,
    // figma: Size=small, Border=true, Head=true, Cover=false, Actions=true
    "size=sm|actions=true|border=true|cover=false|head=true": __body24,
    // figma: Size=medium, Border=true, Head=true, Cover=false, Actions=true
    "size=md|actions=true|border=true|cover=false|head=true": __body25,
    // figma: Size=small, Border=true, Head=false, Cover=false, Actions=true
    "size=sm|actions=true|border=true|cover=false|head=false": __body26,
    // figma: Size=small, Border=true, Head=false, Cover=true, Actions=false
    "size=sm|actions=false|border=true|cover=true|head=false": __body27,
    // figma: Size=small, Border=true, Head=true, Cover=false, Actions=false
    "size=sm|actions=false|border=true|cover=false|head=true": __body28,
    // figma: Size=medium, Border=true, Head=false, Cover=false, Actions=true
    "size=md|actions=true|border=true|cover=false|head=false": __body29,
    // figma: Size=medium, Border=true, Head=false, Cover=true, Actions=false
    "size=md|actions=false|border=true|cover=true|head=false": __body30,
    // figma: Size=medium, Border=true, Head=true, Cover=false, Actions=false
    "size=md|actions=false|border=true|cover=false|head=true": __body31,
  };
  return (__impls[__vkey(props)] ?? __body19)();
}
export default CardLegacy;
