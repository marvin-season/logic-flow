export const setFlowToLocalStorage = (flow: any) => {
    localStorage.setItem('flow', JSON.stringify(flow));
}

export const getFlowFromLocalStorage = () => {
    try {
        const flowString = localStorage.getItem('flow');
        return JSON.parse(flowString || '{}');
    } catch (error) {

    }
}