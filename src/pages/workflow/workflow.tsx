import graph from "./mock.json";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode } from "@/pages/workflow/nodes";
import { CustomEdge } from "@/pages/workflow/edges";
import { Operator } from "./operator";
import { CandicateNode } from "./candicate-node";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(graph.nodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graph.edges);

  return (
    <div className="h-full">
      <Operator />
      <CandicateNode />
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={console.log}
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
