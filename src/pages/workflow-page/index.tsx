import Workflow from "@/pages/workflow-page/workflow.tsx";
import { ReactFlowProvider } from "reactflow";
import { WorkflowContext, WorkflowProvider } from "./context";
import { useState } from "react";
import { FlowNode } from "./types";

export default function WorkflowPage() {
  return (
    <>
      <div
        className={"h-screen border-[20px] border-b-slate-50 rounded bg-blue-100 p-[20px]"}
      >
        <WorkflowProvider>
          <ReactFlowProvider>
            <Workflow />
          </ReactFlowProvider>
        </WorkflowProvider>

      </div>
    </>
  );
}

WorkflowPage.displayName = "WorkflowPage";
