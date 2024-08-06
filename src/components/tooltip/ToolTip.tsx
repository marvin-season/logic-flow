import React, { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function ({
  id,
  children,
  render,
  noArrow = true,
}: {
  id: string;
  children: React.ReactNode;
  render?: (props: any) => JSX.Element;
  noArrow?: boolean;
}) {
  return (
    <>
      {React.cloneElement(children as React.ReactElement, {
        "data-tooltip-id": id,
      })}
      <ReactTooltip
        id={id}
        render={render}
        className="!z-[999] !bg-white !text-xs !font-normal !text-gray-700 !shadow-lg !opacity-100"
        noArrow={noArrow}
      ></ReactTooltip>
    </>
  );
}
