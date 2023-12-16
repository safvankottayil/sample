import React from "react";
import "./RightSidebar.css";
import Template from "../../Svgs/TemplateSvg";
import Contact from "../../Svgs/ContactSvg";
import Team from "../../Svgs/TeamSvg";
import Message from "../../Svgs/Notification/Message";
import Ticket from "../../Svgs/Notification/Ticket";
const items = [
  {
    icon: <Template Active={"black"} width={21} />,
    css: "noti-icon-box-blue",
    text: "Template message: Getting started approved ",
    time: "Just now",
  },
  {
    icon: <Contact Active={"black"} width={21} />,
    css: "noti-icon-box-green",
    text: "Six new contact registered",
    time: "59 minutes ago",
  },
  {
    icon: <Team Active={"black"} width={21} />,
    css: "noti-icon-box-blue",
    text: "New team member added",
    time: "12 hours ago",
  },
  {
    icon: <Message Active={"black"} width={20} />,
    css: "noti-icon-box-green",
    text: "New message from Rita Nicolas ",
    time: "Today, 11:59 AM",
  },
  {
    icon: <Ticket Active={"black"} width={20} />,
    css: "noti-icon-box-green",
    text: "You have been assigned a ticket by Ricardo Watsica.",
    time: "Today, 11:59 AM",
  },
];
function RightDashboardDeatials() {
  return (
    <div className="flex flex-col  flex-grow right-sidebar border-l">
      <div className="flex flex-col w-full space-y-4 py-4">
        <h1 className="text-black-int-14-600">Notifications</h1>
        {/* 1 */}
        {items.map((item) => {
          return (
            <>
              <div className="flex space-x-2">
                <div className={`${item.css} h-fit`}>
                 {item.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-black-abz-14">
                    {item.text}
                  </p>
                  <p className="text-[#929292] text-xs font-normal font-abz">
                   {item.time}
                  </p>
                </div>
              </div>
            </>
          );
        })}

        {/* --- */}
       
      </div>
      <div className="flex flex-col w-full space-y-4  pb-2 ">
        <h1  className="text-black-int-14-600 pb-2">Team Members</h1>
        {['Simon Howell','Julia Schulist','Mildred Reynolds','Mildred Reynolds','Mildred Reynolds','Mildred Reynolds'].map((item,index)=>{
            return(<>
            <div className="flex items-center space-x-3">
              <img src={index%2==0?"/avatar.png":'/avata.png'} className="w-6 h-6" alt="" />
              <p className="text-black-abz-14">{item}</p>
            </div>
            </>)
        })}
      </div>
    </div>
  );
}

export default RightDashboardDeatials;
