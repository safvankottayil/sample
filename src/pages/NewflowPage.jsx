import React, { useEffect, useState } from "react";
import RightSidebar from "../components/Automations/Newflow/RightSidebar";
import TableDownArrow from "../components/Svgs/TableDownArrow";
import Newflow from "../components/Automations/Newflow/Newflow";
import ExportSvg from "../components/Svgs/Export";
import BorderBlue from "../components/Buttons/BorderText_Blue";
import BlueButton from "../components/Buttons/Plusbgblue";
import { setNewFlowData } from "../Redux/Client";
import { useDispatch, useSelector } from "react-redux";
import { useEdgesState, useNodesState } from "reactflow";
function NewflowPage() {
  const dispatch = useDispatch();
  const { NewFlowData } = useSelector((state) => state.Client);
  // const [Node,SetNode]=useState([])
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // dispatch(setNewFlowData({data:[]}))

  // console.log(NewFlowData)
  return (
    <div className="flex flex-col flex-grow w-full">
      <div className="flex w-full justify-between  p-4 border-b ">
        <div className="flex space-x-2 items-center">
          <div className="rotate-90">
            <TableDownArrow width={25} />
          </div>
          <input
            type="text"
            className="text-black-abz-14 new-flow-top-input focus:outline-none"
          />
        </div>
        {/* Right side */}

        <div className="flex space-x-3 items-center pr-5">
          <div className="flex items-center px-2 space-x-1">
            <ExportSvg />
            <p>Export</p>
          </div>
          <div>
            <BorderBlue text={"Cancel"} />
          </div>
          <div>
            <BlueButton icon={""} text={"Save Chatbot"} />
          </div>
        </div>
      </div>
      <div className="flex flex-grow w-full">
        <Newflow
          edges={edges}
          nodes={nodes}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          setEdges={setEdges}
          setNodes={setNodes}
        />
        <RightSidebar Node={nodes} SetNode={setNodes} />
      </div>
    </div>
  );
}

export default NewflowPage;
