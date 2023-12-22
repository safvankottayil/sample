import React from "react";
import "./customnode.css";
import BoldEdit from "../../Svgs/BoldEdit";
import { Handle, Position } from "reactflow";
import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import { setconditionModal } from "../../../Redux/Client";
import { useDispatch } from "react-redux";
function CostumNodeCondition({data,id}) {
  const dispatch=useDispatch()
  return (
    <div className="node-box ">
    {/* head */}

    <div className="node-head relative node-bg-blue w-full">
    <Handle  type="target" position={Position.Left} id={id} />
      <div className="flex items-center space-x-2">
        <QestionSvg />
        <p className="font-inter text-black text-base font-medium">
        Condition
        </p>
      </div>
      <div>
        <BoldEdit />
      </div>
      <Handle  type="source" position={Position.Right} id={id} />
    </div>
  
    {/*  */}
    {/* body */}
    <div onClick={()=>dispatch(setconditionModal(id))} className="node-body">
      <div className=" space-y-2">
        <p className="text-black-abz-14">This is condition Content</p>
        <div className="flex flex-col ">
      
        </div>
      </div>
    </div>
  </div>
  )
}

export default CostumNodeCondition
