import React, { useState, useEffect } from "react";
import Blocks from "./blocks";

export default function () {
  return (
    <>
      <div className="rounded-lg border-[0.5px] border-gray-200 bg-white shadow-lg w-[300px] h-[500px] !min-w-[256px]">
        <Blocks />
      </div>
    </>
  );
}
