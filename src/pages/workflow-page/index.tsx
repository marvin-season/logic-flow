import Workflow from "@/pages/workflow-page/workflow.tsx";
import { ReactFlowProvider } from "reactflow";
import WorkflowContext from "./context";
import { useState } from "react";
import { FlowNode } from "./types";

export default function WorkflowPage() {
  const [candicateNode, setCandicateNode] = useState<FlowNode | null>(null);
  return (
    <>
      <div
        className={"h-screen border-[20px] border-b-slate-50 rounded bg-blue-100 p-[20px]"}
      >
        <WorkflowContext.Provider value={{ candicateNode, setCandicateNode }}>
          <ReactFlowProvider>
            <Workflow />
          </ReactFlowProvider>
        </WorkflowContext.Provider>

      </div>
    </>
  );
}

WorkflowPage.displayName = "WorkflowPage";
