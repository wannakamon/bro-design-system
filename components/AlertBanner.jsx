import { AlertAlert02 } from './AlertAlert02.jsx';
import { AlertCheckmarkCircle02 } from './AlertCheckmarkCircle02.jsx';
import { AlertInformationCircle } from './AlertInformationCircle.jsx';
import { AlertOctagonAlert } from './AlertOctagonAlert.jsx';
import { Button } from './Button.jsx';

// figma node: 729:4287 Alert Banner (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "alertStatus=" + __venc(p.alertStatus);

export function AlertBanner(_p = {}) {
  const props = { ..._p, actionButton: _p.actionButton ?? true, alertStatus: _p.alertStatus ?? "info", label: _p.label ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 647,
      borderRadius: 8,
      backgroundColor: "rgba(33,86,238,0.1)",
      boxShadow: "inset 0 0 0 1px rgba(33,86,238,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-10) * 1px)",
      padding: "10px 10px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-10) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-10) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertInformationCircle style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--sp-2) * 1px)",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--color-text-information)",
            flexShrink: 0,
          }}>{props.text1 ?? "Information"}</span>
          {props.label && (
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "var(--color-text-information)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
          )}
        </div>
      </div>
      {props.actionButton && (
      <Button
        style={{ position: "relative", height: 26, flexShrink: 0 }}
        label={"Button"}
        color={"info"}
        style2={"outline"}
        state={"default"}
        size={"sm"}
      />
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 647,
      borderRadius: 8,
      backgroundColor: "rgba(0,201,81,0.1)",
      boxShadow: "inset 0 0 0 1px rgba(0,201,80,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-10) * 1px)",
      padding: "10px 10px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-10) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-10) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertCheckmarkCircle02 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--sp-2) * 1px)",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--color-text-success)",
            flexShrink: 0,
          }}>{props.text1 ?? "Success !"}</span>
          {props.label && (
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--color-text-success)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
          )}
        </div>
      </div>
      {props.actionButton && (
      <Button
        style={{ position: "relative", height: 26, flexShrink: 0 }}
        color={"success"}
        style2={"outline"}
        state={"default"}
        size={"sm"}
      />
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 647,
      borderRadius: 8,
      backgroundColor: "rgba(240,201,7,0.1)",
      boxShadow: "inset 0 0 0 1px rgba(240,201,7,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-10) * 1px)",
      padding: "10px 10px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-10) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-10) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertAlert02 style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--sp-2) * 1px)",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--color-text-warning)",
            flexShrink: 0,
          }}>{props.text1 ?? "Warning !"}</span>
          {props.label && (
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--color-text-warning)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
          )}
        </div>
      </div>
      {props.actionButton && (
      <Button
        style={{ position: "relative", height: 26, flexShrink: 0 }}
        color={"warning"}
        style2={"outline"}
        state={"default"}
        size={"sm"}
      />
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 647,
      borderRadius: 8,
      backgroundColor: "rgba(224,62,62,0.1)",
      boxShadow: "inset 0 0 0 1px rgba(224,62,62,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--sp-10) * 1px)",
      padding: "10px 10px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-10) * 1px)",
      paddingTop: "calc(var(--sp-10) * 1px)",
      paddingRight: "calc(var(--sp-10) * 1px)",
      paddingBottom: "calc(var(--sp-10) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <AlertOctagonAlert style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--sp-2) * 1px)",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "22px",
            color: "var(--color-text-danger)",
            flexShrink: 0,
          }}>{props.text1 ?? "Danger !"}</span>
          {props.label && (
          <span style={{
            position: "relative",
            fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--color-text-danger)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
          )}
        </div>
      </div>
      {props.actionButton && (
      <Button
        style={{ position: "relative", height: 26, flexShrink: 0 }}
        color={"danger"}
        style2={"outline"}
        state={"default"}
        size={"sm"}
      />
      )}
    </div>
  );
  const __impls = {
    // figma: Alert status=Info
    "alertStatus=info": __body0,
    // figma: Alert status=success
    "alertStatus=success": __body1,
    // figma: Alert status=warning
    "alertStatus=warning": __body2,
    // figma: Alert status=danger
    "alertStatus=danger": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AlertBanner;
