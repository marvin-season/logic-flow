import {useEventListener} from "ahooks";
import {useWorkflowContext} from "../context";
import {CUSTOM_NODE} from "../nodes/constant";
import {useStore} from '@/pages/workflow/context/store.ts';

export default function () {
  console.log('hi');

  const workflowContext = useWorkflowContext();
  const candidateNode = useStore(s => s.candidateNode)
  console.log(' workflowContext.getState().candidateNode', workflowContext.getState().candidateNode);

  useEventListener('click', (e) => {
    console.log('hi');
  });

  useEventListener('contextmenu', (e) => {
    workflowContext.setState({candicateNode: undefined})
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
