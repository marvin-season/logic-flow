import { ComponentType } from "react";

/**
 *  node
 */
import { EndNode, IfElseNode, StartNode } from "./index.tsx";

export const NodeComponentMap: Record<string, ComponentType<any>> = {
  start: StartNode,
  end: EndNode,
  "if-else": IfElseNode,
};

export const CUSTOM_NODE = 'custom';