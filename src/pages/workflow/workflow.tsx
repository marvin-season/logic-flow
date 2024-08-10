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
import { useContextMenu, useMousemove } from "@/pages/workflow/hooks/km.tsx";
import { openContextMenu } from "@/pages/workflow/handles/open-context-menu.tsx";
import { useRef } from "react";
import { useWorkflowStore } from "./context/store";
import { useEventListener } from "ahooks";
import { useNodeInteraction } from "./hooks";
import { FlowNode } from "./types";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>(graph.nodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graph.edges);
  const setMousePosition = useWorkflowStore((s) => s.setMousePosition);

  const { handleNodeDragStart, handleNodeDrag, handleNodeDragStop } =
    useNodeInteraction();

  const workflowContainerRef = useRef<HTMLDivElement>(null);
  useContextMenu(openContextMenu);

  useEventListener("mousemove", (e) => {
    const containerClientRect =
      workflowContainerRef.current?.getBoundingClientRect();

    if (containerClientRect) {
      setMousePosition({
        pageX: e.clientX,
        pageY: e.clientY,
        elementX: e.clientX - containerClientRect.left,
        elementY: e.clientY - containerClientRect.top,
      });
    }
  });

  return (
    <div className="h-full" ref={workflowContainerRef}>
      <Operator />
      <CandicateNode />
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodeDragStart={handleNodeDragStart}
        onNodeDrag={handleNodeDrag}
        onNodeDragStop={handleNodeDragStop}
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
