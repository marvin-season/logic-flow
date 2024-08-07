import React, { useState, useEffect } from "react";
import Blocks from "./blocks";
import { Block } from "../types";
import { generateNewNode } from "../utils";
import { useWorkflowContext } from "../context";

export default function () {

  const { setCandicateNode } = useWorkflowContext()

  const handleOnSelect = (block: Block) => {
    console.log('block', block);
    const newNode = generateNewNode({
      data: {
        title: '',
        _isCandidate: true,
      },
      position: {
        x: 0,
        y: 0,
      },
    })
    setCandicateNode(newNode);
  }

  return (
    <>
      <div className="rounded-lg border-[0.5px] border-gray-200 bg-white shadow-lg w-[300px] h-[500px] !min-w-[256px]">
        <Blocks onSelect={handleOnSelect} />
      </div>
    </>
  );
}
