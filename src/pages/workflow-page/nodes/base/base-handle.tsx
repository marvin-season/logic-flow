import { Handle, Position } from "reactflow";

export const BaseSourceHandle = ({...props}) => {
    console.log(props);
    
  return (
    <>
      <Handle type="source" position={Position.Right} id="right" />
    </>
  );
};
export const BaseTargetHandle = ({...props}) => {
    console.log(props);
    
  return (
    <>
      <Handle type="target" position={Position.Left} id="left" />
    </>
  );
};
