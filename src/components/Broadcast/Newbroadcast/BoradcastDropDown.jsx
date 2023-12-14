import React from "react";
import LeftArow from "../../Svgs/LeftArow";

function BoradcastDropDown({text,data,select,setSelect}) {
  return (
    <div className="new-broadcast-form-select-box w-full ">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <p className="text-gray-abz-12">{text}</p>
          <p className="text-black-abz-14">{data[0]}</p>
        </div>
        <div className=" -rotate-90">
            <LeftArow width={17}/>
        </div>
      </div>
    </div>
  );
}

export default BoradcastDropDown;
