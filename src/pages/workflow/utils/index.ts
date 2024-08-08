import { Position } from "reactflow";
import { FlowNode } from "../types";
import { CUSTOM_NODE } from "../nodes/constant";

export const generateNewNode = ({
  data,
  position,
  id,
  zIndex,
  type,
  ...rest
}: any) => {
  return {
    id: `${Date.now()}`,
    type: type || CUSTOM_NODE,
    data,
    position,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    zIndex,
    ...rest,
  } as FlowNode;
};
