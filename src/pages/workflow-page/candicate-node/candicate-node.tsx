import { useEventListener } from "ahooks";
import { useWorkflowContext } from "../context";

export default function () {
    console.log('hi');
    
    const { getState } = useWorkflowContext();
    console.log(getState());


    useEventListener('click', (e) => {

    });

    useEventListener('contextmenu', (e) => {

    });
    return (
        <>
            {
            }
        </>
    );
}
