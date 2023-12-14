import React, { useState } from "react";
import Logo from "../components/Svgs/Logo";
import OsappSvg from "../components/Svgs/OsappSvg";
import "./getstart.css";
import WebSvg from "../components/Svgs/WebSvg";
import DesctopSvg from "../components/Svgs/DesctopSvg";
import GetStartModal from "../components/GetStartModal/GetStartModal";
function GetStartpage() {
    const [getstart,setGetstartModal]=useState(true)
  return (
    <>
    {getstart?<GetStartModal Close={setGetstartModal}/>:""}
    <div className="flex  px-40 flex-col space-y-16 font-inter  py-10 max-w-[2000px] overflow-hidden m-auto shadow shadow-slate-300  min-h-screen ">
      <div className=" flex">
        <div className="flex items-center pb-4 ">
          
          <Logo width={29} height={37} /> <OsappSvg width={75} height={23} />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 style={{fontWeight:600}} className="text-4xl">
          Send your first message to check out team inbox
        </h1>
        <p style={{fontWeight:500}} className="get-start-text-grey text-lg ">
          Start the trial by sending a WhatsApp Message that begins with #START
        </p>
      </div>
      <div className="grid grid-cols-11">
        {/* qr section */}
        <div className="get-start-cart-border col-span-5 space-y-3 flex flex-col p-6">
          <h1 style={{fontWeight:600}} className="text-2xl">Scan the QR code</h1>
          <p style={{fontWeight:400}} className="text-lg text-inter">
            Use phone camera to scan the below code. Tap on the link to open a
            pre-filled WhatsApp message. Hit send" to kick start the trial.
          </p>
          <div className="h-[200px] code w-[200px]"></div>
        </div>
        {/*  */}
        <div className="flex justify-center col-span-1 items-center">
          <h1 className="px-[32px] or-text">OR</h1>
        </div>
        {/* send message section */}
        <div className="get-start-cart-border space-y-4 col-span-5  pb-10 flex flex-col p-6">
          <h1 style={{fontWeight:600}} className="text-2xl">Send a message</h1>
          <p style={{fontWeight:400}} className="text-lg text-inter">
            use the below buttons to send a pre-filled WhatsApp message. You can
            also save +14798024855 to your contacts and send a message starting
            with #63BMM
          </p>
         <button className="h-14  text-lg  flex justify-center items-center space-x-1"><WebSvg/><span style={{fontWeight:600}} className="text-lg">Whatsapp Web</span></button>
         <button className="h-14  text-lg  flex justify-center items-center space-x-1"><DesctopSvg/><span style={{fontWeight:600}} className="text-lg">Whatsapp Desktop App</span></button>
        </div>
      </div>
    </div>
    </>
  );
}

export default GetStartpage;
