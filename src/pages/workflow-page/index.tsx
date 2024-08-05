import Workflow from "@/pages/workflow-page/workflow.tsx";
import { ReactFlowProvider } from "reactflow";

export default function WorkflowPage() {
  return (
    <>
      <div
        className={"h-screen border-2 border-b-amber-200 rounded bg-blue-50"}
      >
        <ReactFlowProvider>
          <Workflow />
        </ReactFlowProvider>
      </div>
    </>
  );
}

WorkflowPage.displayName = "WorkflowPage";
