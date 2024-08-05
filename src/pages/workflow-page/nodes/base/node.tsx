import { FC, memo, ReactElement } from "react";
import { NodeProps } from "reactflow";
import { BaseSourceHandle, BaseTargetHandle } from "./base-handle";

type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;

const BaseNode: FC<BaseNodeProps> = ({ id, data, children }) => {
  return (
    <div
      className={
        "border-primary-600 border-solid flex border-[2px] rounded-2xl"
      }
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
        <BaseTargetHandle />

        {children}
        <BaseSourceHandle />
      </div>
      
    </div>
  );
};

export default memo(BaseNode);
