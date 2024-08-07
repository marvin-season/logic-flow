import { createContext, useContext } from "react";
import { FlowNode } from "./types";

type WorkflowContextType = {
  candicateNode: FlowNode;
  setCandicateNode: (node: FlowNode) => void;
};

const WorkflowContext = createContext<WorkflowContextType | null>(null);
export const useWorkflowContext = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error(
      "useWorkflowContext must be used within a WorkflowContextProvider"
    );
  }
  return context;
};

export default WorkflowContext;
