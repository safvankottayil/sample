import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TimerSvg from "../../Svgs/TimerSvg";
import RobotSvg from "../../Svgs/RobotSvg";
import Arrowdown from "../../Svgs/Arrowdown";
import LeftArow from "../../Svgs/LeftArow";
import DotSvg from "../../Svgs/DotSvg";
import ChatLinkSvg from "../../Svgs/ChatLinkSvg";
import SmailSvg from "../../Svgs/SmailSvg";
import VoiceSvg from "../../Svgs/VoiceSvg";
import SendSvg from "../../Svgs/SendSvg";
import DropDown from "../../FilterDropDown/DropDown";

function Chating() {
    const ChatRef=useRef(null)
   

    useEffect(() => {
      const setScroll = () => {
        ChatRef.current.scrollTop = ChatRef.current.scrollHeight;
    
      };
    
      setScroll();
    }, []);
  return (
    <div className="flex flex-col flex-grow">
      {/* CHATING TOP SECTION */}
      <div className="chat-top">
        <div className="flex chat-top-timer">
          <TimerSvg /> <p>20:15</p>
        </div>
        {/* bot */}
        <div className="flex">
          <div className="chat-top-bot">
            <RobotSvg height={25} width={25} />
          </div>
          <div className="flex flex-col pl-2">
            <div className="flex items-center space-x-3">
              <p className="font-inter text-sm font-medium">Bot</p>
              <p className="-rotate-90">
                <LeftArow />
              </p>
            </div>
            <p
              style={{ color: "#1A9447", fontWeight: 400 }}
              className="flex items-center text-xs font-abz "
            >
              <DotSvg fill={'#1A9447'} /> <span className="pl-2">Available</span>
            </p>
          </div>
        </div>
        {/* DropDown */}
        <div className="flex flex-grow justify-end">
                     <DropDown data={['Submit as']}/>
           
        </div>
      </div>
      {/* CHATING */}
      <div ref={ChatRef} className="flex flex-col bg-[#FAFAFA] chat-scroll-bar flex-grow overflow-y-scroll  relative ">
        <div  className=" absolute z-50 w-full">
            <div  w-full h-fit>
        {[1,2,2].map(item=>{
            return(<>
              {/* you */}
            <div className="flex flex-col items-end justify-end pr-6 py-3">
              
            <div className="chat-msg-you">
                <p>Here are some photos. you were asking about. 😄</p>
            </div>
            <div className="flex items-end space-x-2 py-2">
                <p className="font-abz text-xs font-normal text-[#6e6d6d]">
                3 days ago
                </p>
                <p className="font-abz text-xs font-normal text-[#1C1C1C]">Chatbot</p>
                <div className="h-6 w-6 rounded-md flex justify-center items-center bg-[#E8F0FE]">
                    <RobotSvg width={14} height={14}/>
                </div>
            </div>
        </div>
        {/* another person */}
        <div className="flex flex-col flex-grow relative ">
        <div className="flex justify-start pl-6 py-3">
            <div className="chat-msg-person">
            <p>Here are some photos. you were asking about. 😄</p>
            </div>
            <div className="flex items-end pl-3"><p className="font-abz text-xs font-normal text-[#6e6d6d]">10:21am</p></div>
        </div>
      </div>
      <div>
        {/* c */}
        <div className="flex justify-center">
            <p className="text-center py-4 font-abz text-[#878686] text-xs font-normal">The ticket has been assigned to Marsha Kulas by Ricardo Watsica</p>
        </div>
      </div>

      
      <div className="flex flex-col items-end justify-end pr-6 py-3">
              
              <div className="chat-msg-you">
                  <p>Here are some photos. you were asking about. 😄</p>
              </div>
              <div className="flex items-end space-x-2 py-2">
                  <p className="font-abz text-xs font-normal text-[#6e6d6d]">
                  3 minute ago
                  </p>
                  <p className="font-abz text-xs font-normal text-[#1C1C1C]">you</p>
                  <div className="h-6 w-6  bg-[url('/public/avata.png')] object-cover rounded-md flex justify-center items-center bg-[#E8F0FE]">
                      {/* <RobotSvg width={14} height={14}/> */}
                  </div>
              </div>
          </div>
    
            </>)
        })}
        </div>
        </div>
       
      </div>
      {/* TYPE SECTION */}
      <div className="chat-bottom">
        <div className="flex flex-grow">
            <input type="text" className="chat-input ring-1 ring-slate-300 ring-opacity-40 focus:outline-none" placeholder="Say Something..." />
        </div>
        <div className="flex space-x-3">
            <ChatLinkSvg/>
            <SmailSvg/>
            <VoiceSvg/>
            <button className="chat-send-btn font-abz space-x-1 items-center px-2 "><SendSvg/><p className="pr-1 pt-1">Send</p></button>
        </div>
      </div>
      
    </div>
  );
}

export default Chating;
