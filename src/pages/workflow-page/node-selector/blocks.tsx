import React, { useState, useEffect } from "react";
import { useBlocks } from "./hooks";
import Block from "./block";

export default function () {
  const blocks = useBlocks();
  console.log(blocks);

  return (
    <>
      {blocks.map((block, index) => {
        return <Block key={index} block={block} />;
      })}
    </>
  );
}
