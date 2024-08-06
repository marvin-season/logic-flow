import { memo } from "react";
import { Handle, Position } from "reactflow";

export const BaseSourceHandle = memo(({ ...props }) => {
  return (
    <>
      <Handle type="source" position={Position.Right} id="right" />
    </>
  );
});
export const BaseTargetHandle = memo(({ ...props }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="left" />
    </>
  );
});
