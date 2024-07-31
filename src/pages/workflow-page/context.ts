import {createContext} from 'react';

type WorkflowContextType = {
  zoomTo: (scale: number) => void
}

const WorkflowContext = createContext<WorkflowContextType | null>(null);

export default WorkflowContext
