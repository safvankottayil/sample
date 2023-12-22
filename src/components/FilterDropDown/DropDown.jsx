import React, { useEffect, useState } from "react";
import Arrowdown from "../Svgs/Arrowdown";

function DropDown({ data, setvalue, H ,value}) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(value?value:data?data[0]:'');
 useEffect(() => {
  if(value)
 setItem(value)
 }, [value])
  return (
    <div className="flex flex-col relative">
      <div
      onClick={() => setShow(!show)}
        className={`${
          H ? H : ""
        } relative dropdown flex items-center justify-between`}
      >
        <p className="w-[128px]">{item}</p>
        <p className={show ? "rotate-180" : ""} >
          <Arrowdown />
        </p>
      </div>
      <div
        className={`flex ${
          show
            ? `filter-show top-10 z-[1000] w-full`
            : "h-0 z-0 top-1 opacity-0"
        } transition-all duration-300 absolute`}
      >
        {data
          ? data.map((item, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setShow(false), setvalue(index==0?'':item),setItem(item);
                    }}
                    className="filter-show-item hover:bg-slate-100 rounded-lg"
                  >
                    <p>{item}</p>
                  </div>
                </>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default DropDown;
