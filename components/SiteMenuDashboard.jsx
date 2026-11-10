import { IconBlockGame } from './IconBlockGame.jsx';
import { IconChevronLeft } from './IconChevronLeft.jsx';
import { IconChevronRight } from './IconChevronRight.jsx';
import { IconDot } from './IconDot.jsx';
import { IconGift } from './IconGift.jsx';
import { IconHistory } from './IconHistory.jsx';
import { IconMonitorSmartphone } from './IconMonitorSmartphone.jsx';
import { IconUserCircle } from './IconUserCircle.jsx';
import { IconUsersFour } from './IconUsersFour.jsx';
import { IconWallet01 } from './IconWallet01.jsx';
import { NavMenu } from './NavMenu.jsx';

// figma node: 672:2665 Site Menu Dashboard (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function SiteMenuDashboard(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"selected"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                transform: "matrix(-1,0,0,-1,0,0)",
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconDot style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจหลัก</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconDot style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>เติมชั่วโมง</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronLeft style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconDot style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจหลัก</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconDot style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>เติมชั่วโมง</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronLeft style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconDot style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจหลัก</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconDot style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>เติมชั่วโมง</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-32) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-e133ed826ca2b259" style={{
        position: "relative",
        height: 40,
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "เมนูหลัก"}</span>
        <NavMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          openClose={false}
          label={"ภาพรวม"}
          menuItem={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconBlockGame style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แพ็กเกจ</span>
            <IconChevronRight style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconWallet01 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>การชำระเงิน</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconGift style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>แลกโค้ด</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUsersFour style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ชวนเพื่อน</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-8) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "ตั้งค่า"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconUserCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>โปรไฟล์</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconHistory style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>ประวัติการเล่น</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--sp-8) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--sp-0) * 1px)",
          paddingTop: "calc(var(--sp-0) * 1px)",
          paddingRight: "calc(var(--sp-0) * 1px)",
          paddingBottom: "calc(var(--sp-0) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 5,
            height: 20,
            borderRadius: 9999,
            backgroundColor: "var(--color-brand-hover)",
            boxShadow: "0px 0px 31px 13px rgba(159,217,67,0.34)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "rgba(43,43,43,0.55)",
            borderTop: "0.500px solid rgba(255,255,255,0.31)",
            borderRight: "0.500px solid rgba(255,255,255,0.31)",
            borderBottom: "0.500px solid rgba(255,255,255,0.31)",
            borderLeft: "0.500px solid rgba(255,255,255,0.31)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "16px 20px 16px 20px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--sp-20) * 1px)",
            paddingTop: "calc(var(--sp-16) * 1px)",
            paddingRight: "calc(var(--sp-20) * 1px)",
            paddingBottom: "calc(var(--sp-16) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <IconMonitorSmartphone style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "var(--color-text-primary)",
              flexGrow: 1,
            }}>อุปกรณ์</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Plan
    "property1=plan": __body1,
    // figma: Property 1=main plan
    "property1=main plan": __body2,
    // figma: Property 1=add playtime
    "property1=add playtime": __body3,
    // figma: Property 1=payment
    "property1=payment": __body4,
    // figma: Property 1=redeem code
    "property1=redeem code": __body5,
    // figma: Property 1=friend
    "property1=friend": __body6,
    // figma: Property 1=profile
    "property1=profile": __body7,
    // figma: Property 1=history
    "property1=history": __body8,
    // figma: Property 1=device
    "property1=device": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SiteMenuDashboard;
