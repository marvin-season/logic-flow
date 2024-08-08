import React from "react";
import Blocks from "./blocks";
import {Block} from "../types";
import {generateNewNode} from "../utils";
import {useWorkflowContext} from "../context";

export default function () {

  const workflowContext = useWorkflowContext();

  const handleOnSelect = (block: Block) => {
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
    workflowContext.setState({candidateNode: newNode})
    console.log('workflowContext', workflowContext.getState());

  }

  return (
    <>
      <div className="rounded-lg border-[0.5px] border-gray-200 bg-white shadow-lg w-[300px] h-[500px] !min-w-[256px]">
        <Blocks onSelect={handleOnSelect}/>
      </div>
    </>
  );
}
