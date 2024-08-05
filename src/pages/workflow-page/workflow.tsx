import graph from "./mock.json";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode } from "@/pages/workflow-page/nodes";

const nodeTypes = {
  custom: CustomNode,
};

const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(graph.nodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graph.edges);

  return (
    <div className="h-screen p-[20px]">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Workflow;

Workflow.displayName = "Workflow";
