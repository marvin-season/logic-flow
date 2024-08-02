import graph from './mock.json'
import {Background, ReactFlow} from 'reactflow';
import {CustomNode} from '@/pages/workflow-page/nodes';

console.log("🚀  ", graph);

const nodeTypes = {
  custom: CustomNode,
};

const Workflow = () => {
  return <div style={{height: '600px'}}>
    <ReactFlow nodeTypes={nodeTypes} nodes={graph.nodes as any} edges={graph.edges} fitView>
      <Background/>
    </ReactFlow>
  </div>
}

export default Workflow

Workflow.displayName = 'Workflow'
