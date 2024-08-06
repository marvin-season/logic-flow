import Workflow from "@/pages/workflow-page/workflow.tsx";
import { ReactFlowProvider } from "reactflow";

export default function WorkflowPage() {
  return (
    <>
      <div
        className={"h-screen border-[20px] border-b-slate-50 rounded bg-blue-100 p-[20px]"}
      >
        <ReactFlowProvider>
          <Workflow />
        </ReactFlowProvider>
      </div>
    </>
  );
}

WorkflowPage.displayName = "WorkflowPage";
