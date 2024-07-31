import Workflow from '@/pages/workflow-page/workflow.tsx';

export default function WorkflowPage() {
  return <>
    <div className={'h-screen border-2 border-b-amber-200 rounded bg-blue-50'}>

      <Workflow/>
    </div>
  </>

}

WorkflowPage.displayName = 'WorkflowPage'
