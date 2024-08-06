import { FC, memo, ReactElement } from "react";
import { NodeProps } from "reactflow";
import cn from 'classnames';
import { BaseSourceHandle, BaseTargetHandle } from "../../handle";

type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;

const BaseNode: FC<BaseNodeProps> = ({ id, data, children, selected }) => {
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
        <BaseTargetHandle />
        <BaseSourceHandle />
      </div>

    </div>
  );
};

export default memo(BaseNode);
