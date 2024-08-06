import { Node } from "reactflow";

export enum BlockEnum {
  Start = "start",
  End = "end",
}

export type CommonNodeType<T = {}> = {
  _connectedSourceHandleIds?: string[];
  _connectedTargetHandleIds?: string[];
  _isSingleRun?: boolean;
  _isCandidate?: boolean;
  _isBundled?: boolean;
  _children?: string[];
  _isEntering?: boolean;
  _showAddVariablePopup?: boolean;
  _holdAddVariablePopup?: boolean;
  _iterationLength?: number;
  _iterationIndex?: number;
  isIterationStart?: boolean;
  isInIteration?: boolean;
  iteration_id?: string;
  selected?: boolean;
  title: string;
  desc: string;
  type: BlockEnum;
  width?: number;
  height?: number;
} & T;


export type FlowNode<T = {}> = Node<CommonNodeType<T>>;