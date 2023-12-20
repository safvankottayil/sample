import React from "react";
import "./customnode.css";
import BoldEdit from "../../Svgs/BoldEdit";
import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import { Handle, Position } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import {setNewflowModal} from '../../../Redux/Client'
function CostumNodeQestion({ id, data }) {
  const dispatch=useDispatch()
  const {NewFlowData}=useSelector((state)=>state.Client)
  return (
    <div className="node-box ">
      {/* head */}
      <div className="node-head  node-bg-orenge w-full">
        <div className="flex items-center space-x-2">
          <QestionSvg />
          <p className="font-inter text-black text-base font-medium">
            Question
          </p>
        </div>
        <div>
          <BoldEdit />
        </div>
      </div>
      {/*  */}
      {/* body */}
      <div onClick={()=>dispatch(setNewflowModal(id))} className="node-body">
        <div className=" space-y-2">
          <p className="text-black-abz-14">{data.label}</p>
          <div className="flex flex-col space-y-2">
            {data?.options?data.options.map((item) => {
              return (
                <>
                  <button className=" relative node-qes-btn text-black-abz-14">
                   {item}
                    <Handle type="source" position={Position.Right} id={item} />
                  </button>
                </>
              );
            }):""}

          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CostumNodeQestion);
