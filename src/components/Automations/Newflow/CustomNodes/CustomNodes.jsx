import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import Update from "../../../Svgs/Newflow/Update";
import UpdateTag from "../../../Svgs/Newflow/UpdateTag";
import Agent from "../../../Svgs/Newflow/Agent";
import UpdateStatus from "../../../Svgs/Newflow/UpdateStatus";
import TemplateSvg from "../../../Svgs/Newflow/TemplateSvg";
import TimeDelay from "../../../Svgs/Newflow/TimeDelay";
import CustomNodesModal from "./CustomNodesModal";
import {setCustomNodesModal} from '../../../../Redux/Client'
import { useDispatch } from "react-redux";
function CustomNodes({ id, data }) {
    const dispatch=useDispatch()

  return (
    <>
    <div className="min-h-[55px] py-2 px-4F min-w-[170px]  border-2 rounded-md bg-white flex relative border-orange-300">
      <Handle
        className="w-[10px] h-[10px] absolute -right-[5px] bg-orange-300"
        position={Position.Right}
        type="source"
        id={id}
      />
      {data.type == "updateAttribute" ? (
        <div className="flex justify-center w-full items-center space-x-1 text-black font-inter text-base font-medium">
          <Update />
          <p>Update Attribute</p>
        </div>
      ) : (
        ""
      )}
      {data.type == "updateTag" ? (
        <div className="flex justify-center w-full items-center space-x-1 text-black font-inter text-base font-medium">
          <UpdateTag />
          <p>Update Tag</p>
        </div>
      ) : (
        ""
      )}
      {data.type == "assignAgent" ? (
        <div className="flex justify-center w-full items-center space-x-1 text-black font-inter text-base font-medium">
          <Agent />
          <p>Assign Agent</p>
        </div>
      ) : (
        ""
      )}
      {data.type == "updateStatus" ? (
        <div className="flex justify-center px-4 w-full items-center space-x-1 text-black font-inter text-base font-medium">
          <div>
            <UpdateStatus />
          </div>
          <p className="whitespace-nowrap">Update Chat Status</p>
        </div>
      ) : (
        ""
      )}
      {data.type == "template" ? (
        <div onClick={()=>dispatch(setCustomNodesModal('template'))} className="flex justify-center px-4 w-full items-center space-x-1 text-black font-inter text-base font-medium">
          <div>
            <TemplateSvg />
          </div>
          <p className="whitespace-nowrap">Template</p>
        </div>
      ) : (
        ""
      )}
      {data.type == "timeDelay" ? (
        <div className="flex justify-center px-4 w-full items-center space-x-1 text-black font-inter text-base font-medium">
          <div>
            <TimeDelay />
          </div>
          <p className="whitespace-nowrap">Time Delay</p>
        </div>
      ) : (
        ""
      )}
    </div>
    </>
  );
}

export default CustomNodes;
