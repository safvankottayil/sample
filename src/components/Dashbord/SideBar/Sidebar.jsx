import React, { useEffect, useState } from "react";
import Logo from "../../Svgs/Logo";
import OsappSvg from "../../Svgs/OsappSvg";
import "./sidebar.css";
import LeftArow from "../../Svgs/LeftArow";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import DashbordSvg from "../../Svgs/DashbordSvg";
import ChatSvg from "../../Svgs/ChatSvg";
import BroadcastSvg from "../../Svgs/BroadcastSvg";
import Contact from "../../Svgs/ContactSvg";
import Template from "../../Svgs/TemplateSvg";
import Automations from "../../Svgs/AutomationsSvg";
import Shop from "../../Svgs/ShopSvg";
import Team from "../../Svgs/TeamSvg";
import SettingsSvg from "../../Svgs/SettingsSvg";
import HiglightSvg from "../../Svgs/HiglightSvg";
import {motion} from 'framer-motion'
const SidebarItems = [
  {
    item: "dashboard",
    url:'/dashboard',
    Icon: <DashbordSvg Active={'black'} />,
    activeIcon: <DashbordSvg Active={'#FFFFFF'} />,
    HoverIcon: <DashbordSvg Active={'#176AF2'} />,
    subitem: [],
  },
  {
    item: "chat",
    url:'/chat',
    Icon: <ChatSvg Active={'black'} />,
    activeIcon: <ChatSvg Active={'#fffff'} />,
    HoverIcon: <ChatSvg Active={'#176AF2'} />,
    subitem: [
      { item: "Whatsapp" },
      { item: "Instagram" },
      { item: "Facebook" },
      { item: "Email" },
    ],
  },
  {
    item: "broadcast",
    url:'/broadcast',
    Icon: <BroadcastSvg  Active={'black'}/>,
    activeIcon: <BroadcastSvg Active={'#ffff'} />,
    HoverIcon: <BroadcastSvg Active={'#176AF2'} />,
    subitem: [{item:"History"},{item:"Schedule"}],
  },
  {
    item: "contact",
    url:'/contact',
    Icon: <Contact Active={'black'} />,
    activeIcon: <Contact Active={'#ffff'} />,
    HoverIcon: <Contact Active={'#176AF2'} />,
    subitem: [{item:"List"},{item:'Segment'}],
  },
  {
    item: "template",
    url:'/template',
    Icon: <Template Active={'black'}/>,
    HoverIcon: <Template Active={'#176AF2'} />,
    activeIcon: <Template Active={'#ffff'} />,
    subitem: [],
  },
  {
    item: "automations",
    url:'/automations',
    Icon: <Automations Active={'black'}/>,
    activeIcon: <Automations Active={'#ffff'} />,
    HoverIcon: <Automations Active={'#176AF2'} />,
    subitem: [{item:"Default Action"},{item:"Keyword Trigger"},{item:"Replay Material"},{item:"Sequence"},{item:"Chatbot"}],
  },
  {
    item: "shop",
    url:'/shop',
    Icon: <Shop Active={'black'}/>,
    HoverIcon: <Shop Active={'#176AF2'} />,
    activeIcon: <Shop Active={'#ffff'} />,
    subitem: [],
  },
  {
    item: "team",
    url:'/team',
    Icon: <Team Active={'black'}/>,
    HoverIcon: <Team Active={'#176AF2'} />,
    activeIcon: <Team Active={'#ffff'} />,
    subitem: [],
  },
  {
    item: "settings",
    url:'/settings',
    Icon: <SettingsSvg Active={'black'} />,
    HoverIcon: <SettingsSvg Active={'#176AF2'} />,
    activeIcon: <SettingsSvg Active={'#ffff'} />,
    subitem: [],
  },
];
function Sidebar({SubPath,SetSubPath}) {
  const [show, setshow] = useState(true);
  const [active, setAvtive] = useState("");
  const [isHover,setHover]=useState('')
  const location = useLocation();
  const navigate=useNavigate()
  useEffect(() => {
    let path = location.pathname.split("/");
    if (path[2]) {
      setAvtive(path[2]);
    } else {
      setAvtive(path[1]);
    }
  }, []);
  return (
    <div
      className={`${
        show ? "w-[213px]" : "w-0"
      } transition-all duration-500 h-screen overflow-hidden font-inter relative`}
    >
      <div
        onClick={() => setshow(!show)}
        className={`absolute ${
          show ? "hidden" : " -right-4  rotate-180"
        } arow-bg top-4 py-2`}
      >
        <LeftArow width={17} />
      </div>
      <div
        className={`${
          show ? "w-[213px] " : "w-0 opacity-0"
        } flex transition-all duration-500 sidebar-border overflow-y-auto flex-col h-screen top-0 pt-10  left-0`}
      >
        <div className="h-screen pb-5  flex flex-col flex-grow px-6 sidebar-scrollbar overflow-y-auto">
          <div
            onClick={() => setshow(!show)}
            className={`absolute ${
              show ? "right-0" : "hidden "
            } arow-bg top-4 py-2`}
          >
            <LeftArow width={17} />
          </div>
          <div className="flex  items-center pb-10">
            <Logo height={37} width={29} /> <OsappSvg width={75} height={23} />
          </div>

          {/* ----------   Sidebar list ------------ */}
          <div className="flex flex-col pb-10">
            {SidebarItems.map((items) => {
              return (
                <>
                  <motion.p 
                  initial={{opacity:0,x:-20}}
                  animate={{opacity:1,x:0}}
                  transition={{duration:0.5}}
                  onClick={()=>{setAvtive(items.item),items.subitem[0]?'':navigate(items.url)}}
                  onMouseOver={()=>setHover(items.item)}
                    className={`  ${
                      active == items.item
                        ? "sidebar-nav-item-active"
                        : "sidebar-nav-item"
                    }`}
                  >
                    {active == items.item ? items.activeIcon :isHover==items.item?items.HoverIcon : items.Icon}
                    <span
                      className={
                        active == items.item
                          ? "text-white capitalize"
                          :isHover==items.item?"capitalize text-[#176AF2]": "capitalize text-black"
                      }
                    >
                      {items.item}
                    </span>
                  </motion.p>
                  
                  {active == items.item? (
                    <motion.div 
                    initial={{opacity:0,y:-30}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:-20}}
                    transition={{type:'spring',stiffness:100}}
                    className={`${items.subitem[0]?'h-fit':'h-0'} sidebar-sub-box overflow-hidden`}>
                      {items.subitem.map((item) => {
                        return (
                          <motion.div
                            // initial={{opacity:0,x:20}}
                            // animate={{opacity:1,x:0}}
                            // transition={{duration:0.5}}
                            onClick={()=>{SetSubPath(item?.item)
                              let path=`${items.url}/${item.item.toLowerCase()}`
                              navigate(path)}}
                            className={`sidebar-sub-item ${
                              item?.item == SubPath
                                ? "sidebar-sub-item-active"
                                : ""
                            }`}
                          >
                            {item?.item== SubPath ? <HiglightSvg /> : ""}
                            <div></div>
                            <p
                              className={` ${
                                item?.item == SubPath
                                  ? "sidebar-sub-item-text-active"
                                  : "sidebar-sub-item-text"
                              }`}
                            >
                              {item?.item}
                            </p>
                          </motion.div>
                        );
                      })}

                    </motion.div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}

          
           </div>
          {/* ---------------side bar end and avatar */}
          <div className="flex flex-grow flex-col justify-end">
            <div className="flex pb-10">
              <button className="sidebar-upgrade-btn">Upgrade Now</button>
            </div>
            <div className="flex ">
              <img src="/avatar.png" className="w-12 h-12" alt="" />
              <div className="flex flex-col justify-center items-start pl-2">
                <h1 style={{ fontWeight: 500 }} className="text-sm">
                  Name
                </h1>
                <p style={{ fontWeight: 400 }} className="text-xs">
                  FutureX
                </p>
              </div>
              <div className="rotate-90 flex flex-grow justify-center items-start">
                <LeftArow width={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
