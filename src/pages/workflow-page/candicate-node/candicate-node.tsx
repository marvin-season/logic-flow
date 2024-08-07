import { useEventListener } from "ahooks";
import { useWorkflowContext } from "../context";

export default function () {
    const { candicateNode } = useWorkflowContext();

    console.log('candicateNode', candicateNode);

    useEventListener('click', (e) => {

    });

    useEventListener('contextmenu', (e) => {

    });
    return (
        <>
            {
                candicateNode?.title
            }
        </>
    );
}
