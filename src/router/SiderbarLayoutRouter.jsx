import React, { useState } from 'react'
import ChatPage from '../pages/ChatPage'
import Navbar from '../components/Dashbord/Navbar/Navbar';
import Sidebar from '../components/Dashbord/SideBar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import BroadcastPage from '../pages/BroadcastPage';
import NewbroadcastPage from '../pages/NewbroadcastPage';
import ContactListPage from '../pages/ContactListPage';
import TemplateListpage from '../pages/TemplateListpage';
import AddtemplatePage from '../pages/AddtemplatePage';

function SiderbarLayoutRouter() {
    const [subPathname, setSubpathName] = useState("");
    console.log(subPathname);
  return (
    <div className='flex max-w-[2000px] overflow-hidden m-auto relative shadow shadow-slate-300  min-h-screen'>
      <Sidebar SetSubPath={setSubpathName} SubPath={subPathname}  />
      <div className='flex flex-grow  h-screen overflow-y-scroll dashbord-scroll-bar flex-col'>
        <Navbar/>
        <div className='flex flex-grow'>
           <Routes>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path='/chat/whatsapp' element={<ChatPage/>}/>
            <Route path='/broadcast/history' element={<BroadcastPage/>}/>
            <Route path='/broadcast/schedule'  element={<BroadcastPage/>}/>
            <Route path='/broadcast/schedule/new-broadcast' element={<NewbroadcastPage/>} />
            <Route path='/contact/list' element={<ContactListPage/>} />
            <Route path='/template/list' element={<TemplateListpage/>} />
            <Route path='/template/list/new-template' element={<AddtemplatePage/>} />
           </Routes>
        </div>
      </div>
    </div>
  )
}

export default SiderbarLayoutRouter
