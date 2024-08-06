import React, { useState } from "react";
import Tooltip from "@/components/tooltip";
import NodeSelector from "../node-selector/node-selector";

export default function () {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip id="add-node" render={() => <NodeSelector />}>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          {"添加节点"}
        </div>
      </Tooltip>
    </>
  );
}
