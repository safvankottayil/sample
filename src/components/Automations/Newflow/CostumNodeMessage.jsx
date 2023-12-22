import React, { useState } from "react";
import "./customnode.css";
import ReactPlayer from "react-player/lazy";
import BoldEdit from "../../Svgs/BoldEdit";
// import QestionSvg from "../../Svgs/Newflow/QestionSvg";
import { Handle, Position } from "reactflow";
import SendMessage from "../../Svgs/Newflow/SendMessage";
import Editer2 from "../../Editer2/Editer2";
import ImageSvg from "../../Svgs/Newflow/ImageSvg";
import MessageInput from "./MessageInput";
import VideoSvg from "../../Svgs/Newflow/VideoSvg";
import VideoInput from "./VideoInput";
import AudioSvg from "../../Svgs/Newflow/AudioSvg";
import AudioInput from "./AudioInput";
import Document from "../../Svgs/Newflow/Document";
import DocumentInput from "./DocumentInput";
import DeleteSvg from "../../Svgs/DeleteSvg";
export default function CostumNodeMessage({ id, data }) {
  const [EditorText, setEditText] = useState([
    { children: [{ text: "somthing wrong" }] },
  ]);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  console.log(items, "-img");
  return (
    <div className="node-box ">
      {/* head */}
      <div className="node-head  node-bg-green relative w-full">
        <Handle
          className="bg-transparent"
          type="target"
          position={Position.Left}
          id={id}
        />
        <div className="flex items-center space-x-2">
          <SendMessage />
          <p className="font-inter text-black text-base font-medium">
            Send a message
          </p>
        </div>
        <div>
          <BoldEdit />
        </div>
        <Handle
          style={{ background: "#B9B9B9", width: "10px", height: "10px" }}
          type="source"
          position={Position.Right}
          id={id}
        />
      </div>

      {/*  */}
      {/* body */}
      <div className="node-body">
        <div className=" z-[1000] space-y-2 w-full">
          {show ? (
            <Editer2
              initiolState={EditorText}
              SetInitiolState={setEditText}
              // save={update}
            />
          ) : (
            <p className="node-message h-8"></p>
          )}
          <div className=" ">
            <div className="flex flex-col w-full ">
              {items.map((value) => {
                if (value.type == "image") {
                  return (
                    <div className="flex relative  flex-col space-y-2 py-1">
                       <div  onClick={() =>
                              setItems(
                                items.filter((item) => {
                                  return item.id !== value.id;
                                })
                              )
                            } className="absolute z-40 bg-white rounded-full ring-1 ring-slate-400 ring-opacity-40 p-[3px] -right-2 top-2 shadow-black">
                            <DeleteSvg />
                          </div>
                      {value.file ? (
                        <div className="flex w-full relative">
                          <img
                            src={URL.createObjectURL(value.file)}
                            className="w-full h-32"
                          />
                         
                        </div>
                      ) : (
                        <div className="flex items-center justify-center py-5 bg-slate-100 mb-1 rounded-md">
                          <ImageSvg />
                        </div>
                      )}
                      <MessageInput
                        items={items}
                        setItems={setItems}
                        value={value}
                        key={value.id}
                      />
                    </div>
                  );
                } else if (value.type == "video") {
                  return (
                    <div className="space-y-2 relative">
                         <div
                            onClick={() =>
                              setItems(
                                items.filter((item) => {
                                  return item.id !== value.id;
                                })
                              )
                            }
                            className="absolute rounded-full ring-1 bg-white z-50 ring-slate-400 ring-opacity-40 p-[3px] -right-2 top-2 shadow-black"
                          >
                            <DeleteSvg />
                          </div>
                      {value.file ? (
                        <div className="flex relative w-full">
                          <ReactPlayer
                            controls
                            width={"100%"}
                            height={"100px"}
                            url={URL.createObjectURL(value.file)}
                          />
                       
                        </div>
                      ) : (
                        <div className="flex items-center justify-center py-5 bg-slate-100 mb-1 rounded-md">
                          <VideoSvg />
                        </div>
                      )}
                      <VideoInput
                        items={items}
                        value={value}
                        setItems={setItems}
                        key={value.id}
                      />
                    </div>
                  );
                } else if (value.type == "audio") {
                  return (
                    <div className="space-y-2 relative">
                       <div  onClick={() =>
                              setItems(
                                items.filter((item) => {
                                  return item.id !== value.id;
                                })
                              )
                            } className="absolute rounded-full ring-1 z-50 bg-white ring-slate-400 ring-opacity-40 p-[3px] -right-2 top-1 shadow-black">
                            <DeleteSvg />
                          </div>
                      {value.file ? (
                        <div>
                          <audio className="w-full" controls>
                            <source
                              src={URL.createObjectURL(value.file)}
                              type="audio/mp3"
                            />
                            Your browser does not support the audio tag.
                          </audio>
                         
                        </div>
                      ) : (
                        <div className="flex items-center justify-center py-5 bg-slate-100 mb-1 rounded-md">
                          <AudioSvg />
                        </div>
                      )}
                      <AudioInput
                        items={items}
                        value={value}
                        setItems={setItems}
                        key={value.id}
                      />
                    </div>
                  );
                } else if (value.type == "document") {
                  return (
                    <div className="space-y-2">
                      {/* {value.file ? ( */}

                      <div className="flex relative flex-col items-center justify-center py-5 bg-slate-100 mb-1 rounded-md">
                        <div></div>
                        <Document />
                        <p className="text-xs text-center pt-3 text-blue-500">
                          {value.file ? value.file.name : ""}
                        </p>
                        <div
                            onClick={() =>
                              setItems(
                                items.filter((item) => {
                                  return item.id !== value.id;
                                })
                              )
                            }
                            className="absolute rounded-full z-50 bg-white ring-1 ring-slate-400 ring-opacity-40 p-[3px] -right-2 -top-2 shadow-black"
                          >
                            <DeleteSvg />
                          </div>
                        
                      </div>

                      <DocumentInput
                        items={items}
                        value={value}
                        setItems={setItems}
                        key={value.id}
                      />
                    </div>
                  );
                }
                // return
              })}
            </div>
            <button
              onClick={() => setShow(true)}
              className="  mx-1 mt-2 float-left relative font-abz node-msg-btn text-sm text-abz"
            >
              Message
            </button>
            <button
              onClick={() =>
                setItems([
                  ...items,
                  { id: Date.now(), type: "image", file: "" },
                ])
              }
              className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-sm text-abz"
            >
              Image
            </button>

            <button
              onClick={() =>
                setItems([
                  ...items,
                  { id: Date.now(), type: "video", file: "" },
                ])
              }
              className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-sm text-abz"
            >
              Video
            </button>
            <button
              onClick={() =>
                setItems([
                  ...items,
                  { id: Date.now(), type: "audio", file: "" },
                ])
              }
              className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-sm text-abz"
            >
              Audio
            </button>
            <button
              onClick={() =>
                setItems([
                  ...items,
                  { id: Date.now(), type: "document", file: "" },
                ])
              }
              className=" mx-1 mt-2 float-left relative font-abz node-msg-btn text-sm text-abz"
            >
              Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
