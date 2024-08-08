import {useEventListener} from "ahooks";
import {CUSTOM_NODE} from "../nodes/constant";
import {useWorkflowStore} from '@/pages/workflow/context/store.ts';

export default function () {

  const setCandidateNode = useWorkflowStore(s => s.setCandidateNode);
  const candidateNode = useWorkflowStore(s => s.candidateNode)

  useEventListener('click', (e) => {
    console.log('hi');
  });

  useEventListener('contextmenu', (e) => {
    setCandidateNode(undefined)
  });
  return (
    <>
      <div
        className="absolute z-10"
        style={{
          left: 0,
          top: 0,
          transform: `scale(${1})`,
          transformOrigin: '0 0',
        }}
      >
        {candidateNode?.type === CUSTOM_NODE && <div>iii</div>}

      </div>

    </>
  );
}
