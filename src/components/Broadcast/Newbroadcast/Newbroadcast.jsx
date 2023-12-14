import React from "react";
import "./Newbroadcast.css";
import BoradcastDropDown from "./BoradcastDropDown";
import AddBtnSvg from "../../Svgs/AddBtnSvg";
import Search from "../../Search/Search";
function Newbroadcast() {
  return (
    <div className="flex flex-col flex-grow p-6">
      <div>
        <h1 className="font-inter pb-6 font-semibold text-sm">New Broadcast</h1>
      </div>
      {/* Edit section */}
      <div className="new-broadcast-form-card ">
        <div className="flex flex-col space-y-4 flex-grow w-full">
          <BoradcastDropDown text={"Broadcast name"} data={["Free Trial"]} />

          <BoradcastDropDown
            text={"Select template message"}
            data={["Free trial broadcast"]}
          />
        </div>

        <div className="h-[1px] bg-gray-new-br   w-full"></div>
        {/*---------- Contact --------- */}
        <div className="flex flex-col w-full pt-3 space-y-3 ">
          <h1 className="text-black-int-14">Contact</h1>
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="col-span-1">
              <BoradcastDropDown data={["Country"]} text={"Attribute"} />
            </div>
            <div className="col-span-1">
              <BoradcastDropDown data={["Include"]} text={"Operation"} />
            </div>
            <div className="col-span-1">
              <BoradcastDropDown data={["Bahrain"]} text={"Value"} />
            </div>
          </div>
          {/* ----------- */}
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="col-span-1">
              <BoradcastDropDown data={["Country"]} text={"Attribute"} />
            </div>
            <div className="col-span-1">
              <BoradcastDropDown data={["Include"]} text={"Operation"} />
            </div>
            <div className="col-span-1">
              <BoradcastDropDown data={["Bahrain"]} text={"Value"} />
            </div>
          </div>
          {/* ------------------ */}
        </div>
        {/* Add filter BUTTON */}
        <div className="w-full justify-between flex">
          <div className="flex">
            <p className="text-black-abz-14">Selected: </p>
            <p className="text-blue-abz-14 pl-1"> 5 contact</p>
          </div>
          <button className="text-blue-abz-14 flex new-add-filter-btn px-2 space-x-1 py-1 justify-center items-center">
            {" "}
            <AddBtnSvg color={"#176AF2"} /> <p className="pr-1">Add filter</p>{" "}
          </button>
        </div>
        {/* ------------- */}
        <div className="new-broadcast-card">
          <Search />
          <div className="flex flex-col w-full">
            {[1, 2, 3,4,5].map((item) => {
              return (
                <>
                  <div className="flex h-10 items-center">
                    <input type="checkbox" className="" />
                    <div className="py-2 px-4">
                      <p className="text-black-abz-14 w-[195px]">
                        Laverne Zemlak
                      </p>
                    </div>

                    <div className="py-2 px-4">
                      <p className="text-black-abz-14">612-789-8023</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="h-[1px] bg-gray-new-br   w-full"></div>
        {/* radio Buttons */}
        <div className="new-broadcast-card text-black-int-14">
            <h1 className=" pt-1">When do you want to send?</h1>
            <div className="flex space-x-2">
              <div className="flex space-x-2 ">
                <input type="radio" name="send" />
                <p>Send now</p>
              </div>
              <div className="flex space-x-2 ">
                <input type="radio" name="send" />
                <p>Schedule</p>
              </div>
            </div>
        </div>
        {/* ---------- */}
        <div className="flex w-full justify-end">
          <button className="flex new-broadcast-submit-btn px-3 ">
          Add Broadcast
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newbroadcast;
