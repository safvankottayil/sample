import React, { useState } from "react";
import './schedule.css'
import ChatSearchSvg from "../../Svgs/ChatSearchSvg";
import AddBtnSvg from "../../Svgs/AddBtnSvg";
import DropDown from "../../FilterDropDown/DropDown";
import Export from "../../Svgs/Export";
import DeleteSvg from "../../Svgs/DeleteSvg";
import Table from "./Table";
import Pagination from "../../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import BoldDelete from "../../Svgs/BoldDelete";
function Schedule() {
    const navigate=useNavigate()
  return (
    <div className="w-full flex flex-col p-6 ">
      <div className="flex justify-between ">
        <div className="h-7 py-1 px-2">
          <h1 className="flex  font-inter text-base font-semibold text-[#1C1C1C]">
            Broadcast Schedule
          </h1>
        </div>
        {/* ------------ */}
        <div className="flex space-x-5">
          <div className="h-7 py-1 px-2">
            <p className="text-sm font-abz font-normal text-[#505050]">
              Message limit: 50
            </p>
          </div>
          <div className="history-head-border-text-blue cursor-pointer font-abz">
            Open Documentation
          </div>
          <button onClick={()=>navigate('/broadcast/schedule/new-broadcast')} className="brocast-add-btn">
            <AddBtnSvg /> <p className="pr-1">New Broadcast</p> 
          </button>
        </div>
      </div>
      {/*  */}
      {/* FILTER AREA */}
      <div className="history-filter  flex justify-between mt-4">
        <div className="flex relative">
          <input
            type="text"
            className="history-search-input pl-6 focus:outline-none"
            placeholder="Search"
          />
          <div className="absolute top-[5px] left-1">
            <ChatSearchSvg />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center space-x-2">
            <p className="text-xs font-normal font-abz">Sorted by</p>
            <DropDown data={["Latest"]} />
          </div>
          <p className="w-[1px] h-5 bg-[#E1E1E1] mx-4"></p>
          <div className="flex  ">
            <div className="history-export space-x-1">
              <Export />
              <p className="font-abx font-sm font-normal">Export</p>
            </div>
            <div className="pl-2 flex items-center pr-1">
              <BoldDelete />

            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-grow overflow-hidden pt-2">
        <div className="flex w-full flex-col">
        <Table/>
        </div>
      
      </div>
      {/* Pagination */}
      <div className="flex justify-end py-5  items-center ">
        <Pagination/>
      </div>
    </div>
  );
}

export default Schedule;
