import {cloneElement, FC, memo, ReactElement} from 'react';
import {NodeProps} from 'reactflow';


type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;

const BaseNode: FC<BaseNodeProps> = ({id, data, children}) => {


  return (
    <div
      style={{
        width: 'auto',
        height: 'auto',
      }}
    >
      <div className={'group relative pb-1 shadow-xs border border-transparent rounded-[15px] w-[240px] bg-[#fcfdff] border-solid'}>
      </div>
      {cloneElement(children, {id, data})}

    </div>
  );
};

export default memo(BaseNode);
