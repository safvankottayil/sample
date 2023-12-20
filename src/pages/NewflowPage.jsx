import React, { useState } from "react";
import RightSidebar from "../components/Automations/Newflow/RightSidebar";
import TableDownArrow from "../components/Svgs/TableDownArrow";
import Newflow from "../components/Automations/Newflow/Newflow";

function NewflowPage() {
  const [nodes,setNodes]=useState([])
  return (
    <div className="flex flex-col flex-grow w-full">
        <div className="flex w-full  p-4 border-b ">
          <div className="flex space-x-2 items-center">
            <div className="rotate-90">
            <TableDownArrow width={25} />
            </div>
            <input type="text" className="text-black-abz-14 new-flow-top-input focus:outline-none" />
          </div>
        </div>
      <div className="flex flex-grow w-full">
       <Newflow SetNodes={setNodes} Nodes={nodes} />
        <RightSidebar nodes={nodes} setNodes={setNodes} />
      </div>
    </div>
  );
}

export default NewflowPage;
