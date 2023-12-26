import React from "react";
import "./customnode.css";
import BoldEdit from "../../Svgs/BoldEdit";
import { Handle, Position } from "reactflow";
import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import {
  setCopyNode,
  setDeleteNode,
  setconditionModal,
} from "../../../Redux/Client";
import { useDispatch } from "react-redux";
import DeleteSvg from "../../Svgs/DeleteSvg";
import CopySvg from "../../Svgs/CopySvg";
function CostumNodeCondition({ data, id }) {
  const dispatch = useDispatch();
  return (
    <div className="node-box ">
      {/* head */}

      <div className="node-head relative node-bg-blue w-full">
        <Handle className="h-[10px] w-[10px] bg-blue-300" type="target" position={Position.Left} id={id} />
        <div className="flex items-center space-x-2">
          <QestionSvg />
          <p className="font-inter text-black text-base font-medium">
            Condition
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BoldEdit />
          <div onClick={() => dispatch(setDeleteNode(id))}>
            <DeleteSvg />
          </div>
          <div onClick={() => dispatch(setCopyNode(id))}>
            <CopySvg />
          </div>
        </div>
        <Handle className="h-[10px] w-[10px] bg-blue-300" type="source" position={Position.Right} id={id} />
      </div>

      {/*  */}
      {/* body */}
      <div
        onClick={() => dispatch(setconditionModal(id))}
        className="node-body"
      >
        <div className=" space-y-2">
          <p className="text-black-abz-14">This is condition Content</p>
          <div className="flex flex-col "></div>
        </div>
      </div>
    </div>
  );
}

export default CostumNodeCondition;
