import React from "react";


import './home.css'
function Home() {
  return (
    <div className="flex w-full font-inter overflow-hidden flex-grow">
      <div className="flex w-full md:w-6/12 items-center justify-center">
        <div className="flex pl-4 space-y-4 md:pl-40 flex-col">
          <p style={{fontWeight:600,color:"#4F4F4F"}}  className="text-xl font-inter pb-4">Unlock the Power of</p>
          <h1 style={{fontWeight:600,color:"#25D366"}} className="text-5xl">WhatsApp Chatbot</h1>
          <p style={{color:'#717171'}} className=" py-3 text-lg">
            Your One-Stop Solution for Chatbot Building, E-Commerce on WhatsApp,
            Customer Management, Facebook Ads, and Follow-ups
          </p>
          <div className="pt-5">
            <button className="px-9 py-3 rounded-lg border-black border">Start a 7-day trial</button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:w-7/12 relative justify-end items-center overflow-hidden lap-image ">
       <img src="/x.jpg" className=" " alt="" />
      </div>
    </div>
  );
}

export default Home;
