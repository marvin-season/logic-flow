import React, { useState, useEffect } from "react";
import { Block } from "../types";
import ToolTip from "@/components/tooltip/ToolTip";

export default function ({ block }: { block: Block }) {
  return (
    <>
      <div>
        <ToolTip id="tooltip-block-item" render={() => block.description}>
          <div>{block.title}</div>
        </ToolTip>
      </div>
    </>
  );
}
