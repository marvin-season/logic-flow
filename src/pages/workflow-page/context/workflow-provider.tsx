import React from 'react';
import WorkflowContext from './workflow-context';
import { createWorkflowStore } from './store';

export default function ({ children }: { children: React.ReactNode }) {
    const store = createWorkflowStore()
    return (
        <>
            <WorkflowContext.Provider value={store}>
                {children}
            </WorkflowContext.Provider>
        </>
    );
}
