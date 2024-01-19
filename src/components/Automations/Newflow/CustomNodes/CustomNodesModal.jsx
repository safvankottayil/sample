import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCustomNodesModal } from "../../../../Redux/Client";
import DropDown from "../../../FilterDropDown/DropDown";

function CustomNodesModal() {
  const { customNodesModal } = useSelector((state) => state.Client);
  const dispach=useDispatch()
  return (
    <div className="w-full fixed top-0 left-0 z-40 h-screen bg-black bg-opacity-40 flex justify-center items-center">
      <div className="z-50 flex flex-col p-3 w-[550px] h-fit rounded-lg bg-white">
        <div className="flex w-full py-3 border-b">
          <h1 className="capitalize text-lg font-inter font-semibold">{customNodesModal}</h1>
        </div>
        {/* ----- */}
        <div className="flex flex-grow py-3 w-full">
            <select className="h-11 border pl-2 border-slate-300 focus:outline-none w-full rounded-md" name="" id="">
                <option value="">Select</option>
                <option value="">$</option>
            </select>
        </div>
        <div className="flex justify-end  items-center space-x-3 py-4">
            <button onClick={()=>dispach(setCustomNodesModal(false))} className="flex px-4 py-2 border-2 border-blue-500 rounded-lg text-blue-500 ">Cancel</button>
            <button onClick={()=>dispach(setCustomNodesModal(false))}className="flex px-4 py-2 border-2 border-blue-500 rounded-lg bg-blue-500 text-white">Save</button>
        </div>
      </div>
    </div>
  );
}

export default CustomNodesModal;
