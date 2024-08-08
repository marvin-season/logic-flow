import { createContext, useContext } from "react";
import { createWorkflowStore } from "./store.ts";

type WorkflowStore = ReturnType<typeof createWorkflowStore>;
export const WorkflowContext = createContext<WorkflowStore | null>(null);

export function WorkflowProvider({ children }: {
  children: React.ReactNode;
}) {
  const store = createWorkflowStore();
  return (
    <>
      <WorkflowContext.Provider value={store}>
        {children}
      </WorkflowContext.Provider>
    </>
  );
}

export const useWorkflowContext = () => {
  return useContext(WorkflowContext)!;
};

