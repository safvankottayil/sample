import React from "react";
import Logo from "../Svgs/Logo";
import OsappSvg from "../Svgs/OsappSvg";
import { NavLink, useNavigate } from "react-router-dom";
import './navbar.css'
const items = [
  { item: "Home", url: "/" },
  { item: "About", url: "/about" },
  { item: "Documentation", url: "/documentation" },
  {item:'Learn',url:"/lern"},
  {item:'Price',url:'/bookdemo'}
];

function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="w-full h-24">
    <div className="w-full fixed h-24 pt-2 bg-white z-50 justify-around font-inter flex">
      <div className="flex justify-center space-x-1 items-center">
        <Logo width={30} height={38} />
        <OsappSvg width={75} height={23} />
      </div>
      <div className="hidden md:flex items-center" >
       {items.map((item)=>{
        return (<>
        <NavLink to={item.url} className={`mx-3 px-2 py-2`} >{item.item}</NavLink>
        </>)
       })}
      </div>
      <div className="flex items-center space-x-5 ">
        <button onClick={()=>navigate('/login')} className=" w-40   px-8 border border-black py-3  font-inter  rounded-lg flex justify-center items-center whitespace-nowrap">Login</button>
        <button className="px-8 py-3 text-white rounded-lg   w-40 font-inter hidden sm:flex justify-center items-center whitespace-nowrap book-demo-bg">Book Demo</button>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
