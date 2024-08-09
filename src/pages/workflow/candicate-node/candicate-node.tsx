import { useEventListener } from "ahooks";
import { CUSTOM_NODE } from "../nodes/constant";
import { useWorkflowStore } from '@/pages/workflow/context/store.ts';
import { CustomNode } from "../nodes";
import { useReactFlow } from "reactflow";

export default function () {

  const setCandidateNode = useWorkflowStore(s => s.setCandidateNode);
  const candidateNode = useWorkflowStore(s => s.candidateNode)
  const mousePosition = useWorkflowStore(s => s.mousePosition)
  const reactflow = useReactFlow();
  useEventListener('click', (e) => {
    const { screenToFlowPosition } = reactflow
    const { x, y } = screenToFlowPosition({ x: mousePosition.pageX, y: mousePosition.pageY });
    // setCandidateNode({...candidateNode, position: {x, y}})
  });

  useEventListener('contextmenu', (e) => {
    setCandidateNode(undefined)
  });
  return (
    <>
      <div
        className="absolute z-10"
        style={{
          left: mousePosition.elementX,
          top: mousePosition.elementY,
          transform: `scale(${1})`,
          transformOrigin: '0 0',
        }}
      >
        {candidateNode?.type === CUSTOM_NODE && <CustomNode {...candidateNode as any} />}

      </div>

    </>
  );
}
