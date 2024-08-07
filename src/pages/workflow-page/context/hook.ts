import { useContext } from "react";
import WorkflowContext from "./workflow-context";

export const useWorkflowContext = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error(
      "useWorkflowContext must be used within a WorkflowContextProvider"
    );
  }
  return context;
};
