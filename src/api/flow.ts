import { getFlowFromLocalStorage, setFlowToLocalStorage } from "@/storage/local-storage";
import _ from "lodash-es"
import flowJSON from "@/mock/flow.json";


export default {
    getFlowApi: async () => {
        const flow = getFlowFromLocalStorage();

        if (_.isEmpty(flow)) {
            setFlowToLocalStorage(flowJSON)
            return flowJSON
        }
        return flow
    },

    setNodesApi: async (flow: any) => {
        setFlowToLocalStorage(flow) as any;
    },
};
