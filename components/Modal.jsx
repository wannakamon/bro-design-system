import { Button } from './Button.jsx';

// figma node: 1104:2827 Modal (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1) + '|' + "devices=" + __venc(p.devices);

export function Modal(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "danger", devices: _p.devices ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 560,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      borderTop: "1.500px solid rgba(255,255,255,0.31)",
      borderRight: "1.500px solid rgba(255,255,255,0.31)",
      borderBottom: "1.500px solid rgba(255,255,255,0.31)",
      borderLeft: "1.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-20) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-20) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "What is Lorem Ipsum?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "26px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-8) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"secondary"}
          style2={"ghost"}
          state={"default"}
          size={"lg"}
        label={props.secondaryLabel ?? "Button"}
        onClick={props.onSecondaryClick}
        />
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"primary"}
          style2={"fill"}
          state={"default"}
          size={"lg"}
        label={props.primaryLabel ?? "Button"}
        onClick={props.onPrimaryClick}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      borderTop: "1.500px solid rgba(255,255,255,0.31)",
      borderRight: "1.500px solid rgba(255,255,255,0.31)",
      borderBottom: "1.500px solid rgba(255,255,255,0.31)",
      borderLeft: "1.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-20) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-20) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "What is Lorem Ipsum?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "26px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--sp-16) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{
            position: "relative",
            height: 46,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          color={"primary"}
          style2={"fill"}
          state={"default"}
          size={"lg"}
        label={props.primaryLabel ?? "Button"}
        onClick={props.onPrimaryClick}
        />
        <Button
          style={{
            position: "relative",
            height: 46,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          color={"secondary"}
          style2={"ghost"}
          state={"default"}
          size={"lg"}
        label={props.secondaryLabel ?? "Button"}
        onClick={props.onSecondaryClick}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 560,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      borderTop: "1.500px solid rgba(255,255,255,0.31)",
      borderRight: "1.500px solid rgba(255,255,255,0.31)",
      borderBottom: "1.500px solid rgba(255,255,255,0.31)",
      borderLeft: "1.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-20) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-20) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "What is Lorem Ipsum?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "26px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-16) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"primary"}
          style2={"fill"}
          state={"default"}
          size={"lg"}
        label={props.primaryLabel ?? "Button"}
        onClick={props.onPrimaryClick}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 360,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      borderTop: "1.500px solid rgba(255,255,255,0.31)",
      borderRight: "1.500px solid rgba(255,255,255,0.31)",
      borderBottom: "1.500px solid rgba(255,255,255,0.31)",
      borderLeft: "1.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-20) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-20) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "What is Lorem Ipsum?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "26px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-16) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{
            position: "relative",
            height: 46,
            flexGrow: 1,
            width: "auto",
          }}
          color={"primary"}
          style2={"fill"}
          state={"default"}
          size={"lg"}
        label={props.primaryLabel ?? "Button"}
        onClick={props.onPrimaryClick}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 560,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      borderTop: "1.500px solid rgba(255,255,255,0.31)",
      borderRight: "1.500px solid rgba(255,255,255,0.31)",
      borderBottom: "1.500px solid rgba(255,255,255,0.31)",
      borderLeft: "1.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-20) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-20) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "What is Lorem Ipsum?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "26px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-8) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"secondary"}
          style2={"ghost"}
          state={"default"}
          size={"lg"}
        label={props.secondaryLabel ?? "Button"}
        onClick={props.onSecondaryClick}
        />
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"danger"}
          style2={"fill"}
          state={"default"}
          size={"lg"}
        label={props.primaryLabel ?? "Button"}
        onClick={props.onPrimaryClick}
        />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 360,
      borderRadius: 16,
      backgroundColor: "rgba(43,43,43,0.55)",
      borderTop: "1.500px solid rgba(255,255,255,0.31)",
      borderRight: "1.500px solid rgba(255,255,255,0.31)",
      borderBottom: "1.500px solid rgba(255,255,255,0.31)",
      borderLeft: "1.500px solid rgba(255,255,255,0.31)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--sp-24) * 1px)",
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--sp-20) * 1px)",
      paddingTop: "calc(var(--sp-20) * 1px)",
      paddingRight: "calc(var(--sp-20) * 1px)",
      paddingBottom: "calc(var(--sp-20) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: "calc(var(--fontsize-20) * 1px)",
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "What is Lorem Ipsum?"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"IBM Plex Sans Thai\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "26px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--sp-8) * 1px)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"secondary"}
          style2={"ghost"}
          state={"default"}
          size={"lg"}
        label={props.secondaryLabel ?? "Button"}
        onClick={props.onSecondaryClick}
        />
        <Button
          style={{ position: "relative", height: 46, flexShrink: 0 }}
          color={"danger"}
          style2={"fill"}
          state={"default"}
          size={"lg"}
        label={props.primaryLabel ?? "Button"}
        onClick={props.onPrimaryClick}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default, Devices=Desktop
    "property1=default|devices=desktop": __body0,
    // figma: Property 1=Default, Devices=Mobile
    "property1=default|devices=mobile": __body1,
    // figma: Property 1=Single Button, Devices=Desktop
    "property1=single button|devices=desktop": __body2,
    // figma: Property 1=Single Button, Devices=Mobile
    "property1=single button|devices=mobile": __body3,
    // figma: Property 1=Danger, Devices=Desktop
    "property1=danger|devices=desktop": __body4,
    // figma: Property 1=Danger, Devices=Mobile
    "property1=danger|devices=mobile": __body5,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Modal;
