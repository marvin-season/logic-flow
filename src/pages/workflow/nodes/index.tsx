import { NodeProps } from 'reactflow';
import BaseNode from '@/pages/workflow/nodes/base/node';
import { NodeComponentMap } from '@/pages/workflow/nodes/constant';

export { default as StartNode } from './start/node'
export { default as EndNode } from './end/node'
export { default as IfElseNode } from './if-else/node'


export const CustomNode = (props: NodeProps) => {
  const nodeData = props.data;
  const NodeComponent = NodeComponentMap[nodeData.type];
  if (!NodeComponent) return null;
  return (
    <BaseNode {...props}>
      <NodeComponent />
    </BaseNode>
  );
};

CustomNode.displayName = 'CustomNode';
