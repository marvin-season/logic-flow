import React, { useState } from "react";
import NodeSelector from "../node-selector/node-selector";
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from "@/components/portal-to-follow-elem";

export default function () {
  const [open, setOpen] = useState(false);
  return (
    <PortalToFollowElem open={open}>
      <PortalToFollowElemTrigger>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          {"添加节点"}
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent>
        <NodeSelector />
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  );
}
