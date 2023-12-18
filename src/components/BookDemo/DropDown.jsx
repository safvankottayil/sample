import React, { useEffect, useRef, useState } from "react";
import LeftArow from "../Svgs/LeftArow";
import "./bookdemo.css";
function DropDown({err, data, value, setvalue }) {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(data ? data[0] : "");
console.log(err);
  useEffect(() => {
    setSelect(data ? data[0] : "");
  }, []);
  return (
    <div className={`book-demo-input-text ${ err?'book-demo-input-border-red':`book-demo-input-border`} mt-1 h-14 p-3  w-full relative`} >
      <div className="flex w-full items-center h-full  justify-between">
        <div className="flex space-y-1 flex-col">
          <p className=" text-base font-normal font-inter text-[#505050]">
            {select}
          </p>
        </div>

        <div
          onClick={() => setShow(!show)}
          className={`${show ? "rotate-90" : "-rotate-90"} cursor-pointer`}
        >
          <LeftArow width={17} />
        </div>
      </div>

      <div
        className={`flex ${
          show
            ? "h-fit ring-1 z-40 ring-slate-300 ring-opacity-40 top-[58px]"
            : `h-0 -translate-y-5   opacity-0`
        }  transition-all w-full left-0  overflow-hidden duration-300 bookdemo-select-show absolute `}
      >
        {data
          ? data.map((item) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setSelect(item),
                        setShow(false),
                        setvalue(data[0] == item ? "" : item);
                    }}
                    key={item}
                    className="bookdemo-select-item py-2 cursor-pointer text-base font-normal font-inter text-[#505050] hover:bg-slate-50 w-full"
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
