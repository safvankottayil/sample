import React, { useState } from "react";
import Sidebar from "../components/Dashbord/SideBar/Sidebar";
import Navbar from "../components/Dashbord/Navbar/Navbar";
import ChatSearch from "../components/Dashbord/ChatSearch/ChatSearch";
import ChatEmpty from "../components/Dashbord/ChatEmpty/ChatEmpty";
import ChatingSection from "../components/Dashbord/ChatingSection/ChatingSection";
import "./style.css";

function ChatPage() {
 
  return (
    <>
      <ChatSearch />
      {/* <ChatEmpty/> */}
      <ChatingSection />
    </>
  );
}

export default ChatPage;
