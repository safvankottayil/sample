import React, { useState } from "react";
import ChatPage from "../pages/ChatPage";
import Navbar from "../components/Dashbord/Navbar/Navbar";
import Sidebar from "../components/Dashbord/SideBar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import BroadcastPage from "../pages/BroadcastPage";
import NewbroadcastPage from "../pages/NewbroadcastPage";
import ContactListPage from "../pages/ContactListPage";
import TemplateListpage from "../pages/TemplateListpage";
import AddtemplatePage from "../pages/AddtemplatePage";
import Auto_ChatbotPage from "../pages/Auto_ChatbotPage";
import RightDashboardDeatials from "../components/Dashbord/RightDashboardDeatials/RightDashboardDeatials";
import NewflowPage from "../pages/NewflowPage";

function SiderbarLayoutRouter() {
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <div className="flex max-w-[2000px] overflow-hidden m-auto relative shadow shadow-slate-300  min-h-screen">
      <Sidebar />
      <div
        className={`flex flex-grow  h-screen  overflow-y-scroll dashbord-scroll-bar flex-col`}
      >
        <div className="flex flex-grow">
          <div className="flex flex-col flex-grow">
            <Navbar />
            <div className="flex flex-grow">
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/chat/whatsapp" element={<ChatPage />} />
                <Route path="/broadcast/history" element={<BroadcastPage />} />
                <Route path="/broadcast/schedule" element={<BroadcastPage />} />
                <Route
                  path="/broadcast/schedule/new-broadcast"
                  element={<NewbroadcastPage />}
                />
                <Route path="/contact/list" element={<ContactListPage />} />
                <Route path="/template/list" element={<TemplateListpage />} />
                <Route
                  path="/template/list/new-template"
                  element={<AddtemplatePage />}
                />
                <Route
                  path="/automations/chatbot"
                  element={<Auto_ChatbotPage />}
                />
                <Route path="/automations/chatbot/new-flow" element={<NewflowPage/>} />
              </Routes>
            </div>
          </div>
          {path[1] == "dashboard" ? (   <div className="flex w-[280px]">
           
              <>
                <RightDashboardDeatials />
              </>
           
          </div> ) : (
              ""
            )}
        </div>
      </div>
    </div>
  );
}

export default SiderbarLayoutRouter;
