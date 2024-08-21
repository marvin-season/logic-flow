import {FC, memo, ReactElement} from 'react';
import cn from 'classnames';
import {Handle, NodeProps, Position} from 'reactflow';

type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;


const BaseJavaScriptNode: FC<BaseNodeProps> = ({id, data, children, selected}) => {
  return (
    <div
      className={cn("border-primary-600 border-solid flex border-[2px] rounded-2xl", selected && "border-blue-600")}
      style={{
        width: "auto",
        height: "auto",
      }}
    >
      <div
        className={
          "p-6 group relative shadow-xs border border-transparent rounded-[15px] w-[240px] bg-[#fcfdff] border-solid"
        }
      >
        {children}
        <Handle id={id} type="target" position={Position.Top}/>
        {/*<Handle id={id} type="target" position={Position.Left}/>*/}
        {/*<Handle id={id} type="target" position={Position.Right}/>*/}
        <Handle id={id} type="source" position={Position.Bottom}/>
      </div>

    </div>
  );
};

export default memo(BaseJavaScriptNode);
