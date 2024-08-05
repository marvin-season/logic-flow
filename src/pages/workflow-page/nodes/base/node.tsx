import {FC, memo, ReactElement} from 'react';
import {NodeProps} from 'reactflow';


type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;

const BaseNode: FC<BaseNodeProps> = ({id, data, children}) => {


  return (
    <div
      className={'border-primary-600 border-solid flex border-[2px] rounded-2xl'}
      style={{
        width: 'auto',
        height: 'auto',
      }}
    >
      <div
        className={'p-6 group relative pb-1 shadow-xs border border-transparent rounded-[15px] w-[240px] bg-[#fcfdff] border-solid'}>
        {children}
      </div>

    </div>
  );
};

export default memo(BaseNode);
