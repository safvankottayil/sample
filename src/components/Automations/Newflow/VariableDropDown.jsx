import React from "react";

function VariableDropDown({setValue,Show}) {
    function clickHandle(value){
        if(setValue){
            setValue(value)
        }
        Show(0)
    }
  return (
    <div className="flex flex-col text-black-abz-14 col w-80 py-3 border-2 rounded-lg bg-white ">
      <input
        type="text"
        className="w-full h-8 focus:outline-none border-b pl-3  "
        placeholder="Search variable"
      />
      <div className="w-full sticky px-2">
          <p className="p-2 font-semibold">Contact Custum Variable</p>
        </div>
      <div className="w-full flex flex-col h-40 overflow-y-scroll dashbord-scroll-bar">
        
        {[1,2,3,4,5,5,5,5].map(_=>{
           return <div onClick={()=>clickHandle('{{name}}')} className="hover:bg-slate-100 px-4 p-2 flex justify-between"><p className="">name</p>  <p className="p">{`{{name}}`}</p></div>
        })}
      </div>
    </div>
  );
}

export default VariableDropDown;
