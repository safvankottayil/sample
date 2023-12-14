import React, { useState } from "react";
import BorderTextBlue from "../Buttons/BorderText_Blue";
import Plusbgblue from "../Buttons/Plusbgblue";
import Search from "../Search/Search";
import DropDown from "../Dashbord/DropDown/DropDown";
import DeleteSvg from "../Svgs/DeleteSvg";
import Export from "../Svgs/Export";
import ImportSvg from "../Svgs/ImportSvg";
function List() {
  const [isempty, setEmpty] = useState(false);
  return (
    <div className="flex flex-col flex-grow p-6">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-black-int-16-600">Contact list</h1>
        </div>
        <div className="flex space-x-2">
          <BorderTextBlue text={"Open Documentation"} />
          <div>
            <Plusbgblue
              text={"Add contact"}
              url={"/contact/list/add-contact"}
            />
          </div>
        </div>
      </div>

      {/* is Empty */}
      {isempty ? (
        <div className="flex flex-grow justify-center items-center">
          <p className="text-[#ADADAD] font-inter font-medium text-[22px] leading-6">
            No contacts found
          </p>
        </div>
      ) : (
        <div className="flex flex-col pt-3">
            <div className="flex filter-border justify-between">
                <div className="flex items-center space-x-2">
                    <div><p className="text-black-int-14">2 Selected</p></div>
                    <div className="">
                        <Search/>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center space-x-2">
                        <p className="text-black-abz-12">Sorted By </p>
                        <DropDown data={['Latest']}/>
                    </div>
                    <div className="flex space-x-2 text-black-abz-14 pl-3 items-center">
                        <button className="btn-border space-x-1"><ImportSvg/><p>Import</p></button>
                        <button className="btn-border space-x-1"><Export/><p>Export</p></button>
                        <button><DeleteSvg/></button>
                    </div>
                </div>


            </div>
        </div>
      )}
      {/* ---------- */}
    </div>
  );
}

export default List;
