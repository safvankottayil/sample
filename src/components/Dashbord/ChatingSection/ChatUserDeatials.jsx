import React, { useState } from "react";
import "./chating.css";
import DotSvg from "../../Svgs/DotSvg";
import ContactParameter from "./ContactParameter";
import PlaceholderIcon from "../../Svgs/PlaceholderIcon";
import TagIcon from "../../Svgs/TagIcon";
import CloseBtnBlack from "../../Svgs/CloseBtnBlack";
import Arrowdown from "../../Svgs/Arrowdown";
import EditSvg from "../../Svgs/EditSvg";
import DeleteSvg from "../../Svgs/DeleteSvg";
function ChatUserDeatials() {
  const [contact, setcontact] = useState([["Name", "Edgar Huel"]]);
  return (
    <div className="flex chat-user-info overflow-y-auto chat-search-scroll-bar relative border-l">
      <div className="absolute  h-fit w-full px-6 py-3 flex flex-col">
        {/*   USER-STATUS-AND NAME-PHOTO   */}
        <div className="flex">
          <img src="/avatar.png" alt="" />
          <div className="flex flex-col pl-2 justify-center">
            <p style={{ fontWeight: 500 }} className="font-inter text-sm">
              Edgar Huel
            </p>
            <p
              style={{ color: "#1A9447", fontWeight: 400 }}
              className="flex items-center text-xs font-abz "
            >
              <DotSvg fill={'#1A9447'} /> <span className="pl-2">Available</span>
            </p>
          </div>
        </div>
        {/* uSER -NUMBER-EMAIL */}
        <div className="flex flex-col pt-5">
          <h1 className="text-sm font-inter font-medium">Basic Information</h1>
          <p className="flex text-xs font-abz">
            <span style={{ color: "#505050" }}>Phone Number:</span>
            <span style={{ color: "#505050" }}>+91 98989 89898</span>
          </p>
          <p style={{ color: "#505050" }} className="flex fontabz text-xs">
            Email: huel15@gmail.com
          </p>
        </div>
        {/* Contact Parameters */}
        <div className="flex w-full flex-col pt-10">
          <h1 className="pb-1 font-inter text-sm font-medium">
            Contact Parameters
          </h1>
          <div className="space-y-1">
            {contact.map((item) => {
              return (
                <>
                  <ContactParameter key={item[0]} data={item} />
                </>
              );
            })}
            <div
              onClick={() => setcontact([...contact, contact[0]])}
              className="flex pl-2 "
            >
              <PlaceholderIcon color={"#176AF2"} />
              <p
                style={{ color: "#176AF2" }}
                className="font-abz pl-2 text-sm font-normal"
              >
                Add custom parameters
              </p>
            </div>
          </div>
        </div>
        {/* Tage */}
        <div className="flex relative flex-col pt-5">
          <div className="flex flex-col">
            <h1 className="font-inter text-xs font-semibold pb-1">Tag</h1>
            <input
              type="text"
              className="flex flex-grow tag-input font-abz pl-8 p-2 focus:outline-none"
              placeholder="Add tag"
            />
            <div className="absolute top-12 left-2">
              <TagIcon />
            </div>
          </div>
          {/* Show tags */}
          <div className="flex  pt-2">
            {[1, 2, 4].map((item) => {
              return (
                <>
                  <p className="flex m-1 w-fit capitalize show-tag">
                    <p>tag</p> <CloseBtnBlack />
                  </p>
                </>
              );
            })}
          </div>
        </div>
        {/* Nots */}
        <div className="flex w-full flex-col pt-7">
          <h1 className="font-inter text-xs font-semibold pb-1">Notes</h1>
          <div className="flex flex-grow w-full relative">
            <div className="absolute left-2 top-2 w-full">
              <PlaceholderIcon color={"#1C1C1C"} />
            </div>
            <input
              className="flex focus:outline-none flex-grow mr-2 tag-input h-9 pl-7 "
              type="text"
              placeholder="Text"
            />
            <div className="absolute right-16 top-[10px]">
              <Arrowdown />{" "}
            </div>
            <button className="notes-save-btn">Save</button>
          </div>
          {/* note card */}
          <div className="flex flex-col space-y-2 pt-4">
            {[1, 2].map((item) => {
              return (
                <div className="note-card">
                  <p className="font-abz text-sm font-normal">
                    Aut laboriosam hic error. Harum nesciunt aut dignissimos at
                    odit aliquid et.{" "}
                  </p>
                  <div className="flex">
                    <img src="/avatar.png" className="" alt="" />
                    <div className="flex flex-col pl-2">
                      <h1
                        style={{ fontWeight: 500 }}
                        className="font-inter text-sm"
                      >
                        Marsha Kulas
                      </h1>
                      <p
                        style={{ color: "#505050" }}
                        className="flex fontabz text-xs"
                      >
                        25 Sept 2023, 09:41am
                      </p>
                    </div>
                    <div className="flex space-x-1 pl-3 pt-1">
                      <EditSvg />
                      <DeleteSvg />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatUserDeatials;
