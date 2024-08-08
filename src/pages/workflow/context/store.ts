import { createStore } from "zustand";
import { FlowNode } from "../types";
type Shape = {
  candicateNode?: FlowNode;
  setCandicateNode: (candidateNode?: FlowNode) => void;
};

export const createWorkflowStore = () => {
  return createStore<Shape>((set) => {
    return {
      candicateNode: undefined,
      setCandicateNode: (candidateNode?: FlowNode) => {
        set({
          candicateNode: candidateNode,
        });
      },
    };
  });
};
