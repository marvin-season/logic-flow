import Workflow from "@/pages/workflow/workflow";
import { ReactFlowProvider } from "reactflow";
import { WorkflowProvider } from "./context";
import flow from "@/api/flow";

const initNodes = (await flow.getFlowApi()).nodes;
const initEdges = (await flow.getFlowApi()).edges;

export default function WorkflowPage() {
  return (
    <>
      <div
        className={
          "h-screen border-[20px] border-b-slate-50 rounded bg-blue-100 p-[20px]"
        }
      >
        
        <WorkflowProvider>
          <ReactFlowProvider>
            <Workflow initNodes={initNodes} initEdges={initEdges} />
          </ReactFlowProvider>
        </WorkflowProvider>
      </div>
    </>
  );
}

WorkflowPage.displayName = "WorkflowPage";
