import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";

function HomePage() {
  return (
    <div className="flex  flex-col max-w-[2000px] overflow-hidden m-auto shadow shadow-slate-300  min-h-screen ">
      <Navbar />
      <Home/>
    </div>
  );
}

export default HomePage;
