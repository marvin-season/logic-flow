import React, { useState, useEffect } from "react";
import Blocks from "./blocks";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[300px] h-[500px]">
        <Blocks />
      </div>
    </>
  );
}
