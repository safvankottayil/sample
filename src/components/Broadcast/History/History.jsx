import React from "react";
import "./history.css";
import AddBtnSvg from "../../Svgs/AddBtnSvg";
import DowloadSvg from "../../Svgs/HistoryStatus/DowloadSvg";
import SendSvg from "../../Svgs/HistoryStatus/SendSvg";
import ReadSvg from "../../Svgs/HistoryStatus/ReadSvg";
import MsgSvg from "../../Svgs/HistoryStatus/MsgSvg";
import FiledSvg from "../../Svgs/HistoryStatus/FiledSvg";
import QeueedSvg from "../../Svgs/HistoryStatus/QeueedSvg";
import ChatSearchSvg from "../../Svgs/ChatSearchSvg";
import DropDown from "../../FilterDropDown/DropDown";
import Export from "../../Svgs/Export";
import DeleteSvg from "../../Svgs/DeleteSvg";
import Table from "./Table";
import Pagination from "../../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
const item = [
  { item: "Send", count: 200, icon: <SendSvg /> },
  { item: "Delivered", count: 195, icon: <DowloadSvg/> },
  { item: "Read", count: 180, icon: <ReadSvg/> },
  { item: "Replied", count: 172, icon: <MsgSvg/> },
  { item: "Send", count: 5, icon: <FiledSvg/> },
  { item: "Processing", count: 4, icon: <FiledSvg/> },
  { item: "Queued", count: 10, icon: <QeueedSvg/>},
  ,
];
function History() {
    const navigate=useNavigate()
  return (
    <div className="w-full flex flex-col p-6">
      {/*--HEADING */}
      <div className="flex justify-between ">
        <div className="h-7 py-1 px-2">
          <h1 className="flex  font-inter text-base font-semibold text-[#1C1C1C]">
            Broadcast History
          </h1>
        </div>
        {/* ------------ */}
        <div className="flex space-x-5">
          <div className="h-7 py-1 px-2">
            <p className="text-sm font-abz font-normal text-[#505050]">
              Message limit: 50
            </p>
          </div>
          <div className="history-head-border-text-blue font-abz">
            Open Documentation
          </div>
          <button onClick={()=>navigate('/broadcast/schedule/new-broadcast')} className="brocast-add-btn">
            <AddBtnSvg /> New Broadcast
          </button>
        </div>
      </div>
      {/* ----------------- */}
      {/* -----------SHOW STATUS----------------- */}
      <div className="flex  space-x-3 pt-5">
        {/* SEND */}
        {item.map((item, index) => {
          return (
            <>
              <div
                className={`${
                  index % 2 == 0 ? "history-green-card" : "history-blue-card"
                } flex flex-col`}
              >
                <h1 className="font-semibold text-sm font-inter">
                  {item.item}
                </h1>
                <div className="flex justify-between w-full">
                  <p className="font-inter text-2xl font-semibold">
                    {item.count}
                  </p>{" "}
                  <p>{item.icon}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* FILTER AREA */}
      <div className="history-filter  flex justify-between mt-4">
        <div className="flex relative">
            <input type="text" className="history-search-input pl-6 focus:outline-none" placeholder="Search" />
            <div className="absolute top-[5px] left-1"><ChatSearchSvg/></div>
        </div>
        <div className="flex items-center ">
            <div className="flex items-center space-x-2">
                <p className="text-xs font-normal font-abz">Sorted by</p>
                <DropDown data={['Latest']}/>
            </div>
            <p className="w-[1px] h-5 bg-[#E1E1E1] mx-4" ></p>
            <div className="flex  ">
              
                <div className="history-export space-x-1">
                    <Export/>
                    <p className="font-abx font-sm font-normal">Export</p>

                </div>
                <div className="pl-2"><DeleteSvg/></div>
            </div>
        </div>
        
      </div>
      {/*  */}
      <div className="flex flex-grow overflow-hidden">
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

export default History;
