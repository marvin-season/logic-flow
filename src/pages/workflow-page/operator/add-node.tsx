import React, { useState } from "react";
import Tooltip from "@/components/tooltip";

export default function () {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip id="add-node" render={() => <div className="bg-orange-50">hi</div>}>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          {"添加节点"}
        </div>
      </Tooltip>
    </>
  );
}
