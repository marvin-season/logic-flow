import { createContext, useContext } from "react";
import { createWorkflowStore } from "./store";

type WorkflowStore = ReturnType<typeof createWorkflowStore>;
const WorkflowContext = createContext<WorkflowStore | null>(null);

export default WorkflowContext;