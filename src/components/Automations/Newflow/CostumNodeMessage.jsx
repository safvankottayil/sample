import React from "react";
import "./customnode.css";
import BoldEdit from "../../Svgs/BoldEdit";
// import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import { Handle, Position } from "reactflow";
import SendMessage from "../../Svgs/Newflow/SendMessage";
export default function CostumNodeMessage({ id, data }) {
  return (
    <div className="node-box ">
      {/* head */}
      <div className="node-head  node-bg-green relative w-full">
        <Handle type="target" position={Position.Left} id={id} />
        <div className="flex items-center space-x-2">
          <SendMessage />
          <p className="font-inter text-black text-base font-medium">
            Send a message
          </p>
        </div>
        <div>
          <BoldEdit />
        </div>
        <Handle type="source" position={Position.Right} id={id} />
      </div>
      {/*  */}
      {/* body */}
      <div className="node-body">
        <div className=" space-y-2 w-full">
          {data.message ? (
            <p className=" items-center w-full relative node-message text-black-abz-14">
              {data.message}
            </p>
          ) : (
            ""
          )}
          <div className="">
            <button className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-black-abz-14">
              Message
            </button>
            <button className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-black-abz-14">
              Video
            </button>

            <button className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-black-abz-14">
              Image
            </button>
            <button className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-black-abz-14">
              Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
