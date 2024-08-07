import React, { useState, useEffect } from "react";
import Blocks from "./blocks";
import { Block } from "../types";

export default function () {

  const handleOnSelect = (block: Block) => {
    console.log('block', block);

  }

  return (
    <>
      <div className="rounded-lg border-[0.5px] border-gray-200 bg-white shadow-lg w-[300px] h-[500px] !min-w-[256px]">
        <Blocks onSelect={handleOnSelect} />
      </div>
    </>
  );
}
