import { LayoutBlocksBase } from './LayoutBlocksBase.jsx';

// figma node: 6295:25797 LayoutBlocks/vertical×4-1
export function LayoutBlocksVertical41(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32.001,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.stBlock1 ?? <LayoutBlocksBase />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.ndBlock2 ?? <LayoutBlocksBase />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.rdBlock3 ?? <LayoutBlocksBase />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.thBlock4 ?? <LayoutBlocksBase />}</div>
    </div>
  );
}
export default LayoutBlocksVertical41;
