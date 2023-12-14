import React from "react";
import "./chatsearch.css";
import ChatSearchSvg from "../../Svgs/ChatSearchSvg";
import FilterIcon from "../../Svgs/FilterIcon";
import ReadmarkSvg from "../../Svgs/ReadmarkSvg";
function ChatSearch() {
  return (
    <div className="chat-user-search overflow-y-auto chat-search-scroll-bar flex flex-col relative  ">
      <div className="absolute flex w-full px-3 py-3 flex-col justify-center ">
        <div className="flex w-full  relative">
          <div className="absolute top-[5px] left-1 ">
            <ChatSearchSvg />
          </div>
          <input
            type="text"
            className="chat-input-search flex-grow flex h-7 font-abz textsm pl-6 mr-2 focus:outline-none"
          />
          <div className="filter-bg">
            <FilterIcon />
          </div>
        </div>
        <div className="flex flex-col pt-4 w-full ">
          <div className="flex justify-center pb-4 w-full items-center">
            <p className="chat-search-not-found-text font-abz text-center">
              No chats found
            </p>
          </div>
          <div className=" user-list-box felx flex-col  user-list-item-active">
            <div className="flex w-full justify-between">
              <p className="user-list-name font-iter">Edgar Huel</p>{" "}
              <p className="user-list-time font-abz">11:49 pm</p>
            </div>
            <div className="flex w-full justify-between">
              <p className="user-list-msg-text font-abz">message</p>{" "}
              <div className="flex items-center">
                <p className="user-list-msg-status-box font-abz user-list-status-blue mr-2">
                  Open
                </p>
                <ReadmarkSvg />
              </div>
            </div>
          </div>
          {[1, 2, 3, 4, 4, 4, 4, 4].map((item) => {
            return (
              <>
                <div className=" user-list-box flex flex-col user-list-item">
                  <div className="flex w-full justify-between">
                    <p className="user-list-name font-iter">Edgar Huel</p>{" "}
                    <p className="user-list-time font-abz">11:49 pm</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="user-list-msg-text font-abz">message</p>{" "}
                    <div className="flex items-center">
                      <p className="user-list-msg-status-box font-abz user-list-status-blue mr-2">
                        Open
                      </p>
                      <ReadmarkSvg />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatSearch;
