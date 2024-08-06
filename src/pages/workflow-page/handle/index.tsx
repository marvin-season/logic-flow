import { memo } from "react";
import { Handle, Position } from "reactflow";
import { FlowNode } from "../types";

type NodeHandleProps = {
  handleId: string;
  handleClassName?: string;
  nodeSelectorClassName?: string;
} & Pick<FlowNode, 'id' | 'data'>;


export const BaseSourceHandle = memo<NodeHandleProps>(({ ...props }) => {
  return (
    <>
      <Handle type="source" position={Position.Right} id="right" />
    </>
  );
});
export const BaseTargetHandle = memo<NodeHandleProps>(({ ...props }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="left" />
    </>
  );
});
