import {NodeProps} from 'reactflow';
import BaseNode from '@/pages/workflow-page/nodes/base/node.tsx';
import {NodeComponentMap} from '@/pages/workflow-page/constant.ts';


export const CustomNode = (props: NodeProps) => {
  const nodeData = props.data;
  const NodeComponent = NodeComponentMap[nodeData.type];
  if (!NodeComponent) return null;
  return (
    <BaseNode {...props}>
      <NodeComponent/>
    </BaseNode>
  );
};

CustomNode.displayName = 'CustomNode';
