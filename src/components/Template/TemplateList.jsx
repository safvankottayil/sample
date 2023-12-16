import React, { useState } from "react";
import Plusbgblue from "../Buttons/Plusbgblue";
import BorderTextBlue from "../Buttons/BorderText_Blue";
import TemplateSmall from "../Svgs/TemplateSmall";
import Export from "../Svgs/Export";
import DeleteSvg from "../Svgs/DeleteSvg";
import ImportSvg from "../Svgs/ImportSvg";
import DropDown from "../FilterDropDown/DropDown";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import TableList from "./TableList";

function TemplateList() {
  const [isempty, setEmpty] = useState(false);

  return (
    <div className="flex flex-col flex-grow  p-6">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-black-int-16-600">Template Message</h1>
        </div>
        <div className="flex space-x-2">
          <BorderTextBlue text={"Open Documentation"} />
          <div>
            <Plusbgblue
              icon={<TemplateSmall />}
              text={"Template Message"}
              url={"/template/list/new-template"}
            />
          </div>
        </div>
      </div>
      {/* Filter Section */}
      {isempty ? (
        <div className="flex flex-grow justify-center items-center">
          <p className="text-[#ADADAD] font-inter font-medium text-[22px] leading-6">
            No contacts found
          </p>
        </div>
      ) : (
        <div className="flex flex-col flex-grow pt-3">
            {/* filter area */}
          <div className="flex filter-border justify-between">
            <div className="flex items-center space-x-2">
              <div className="">
                <Search />
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center space-x-2">
                <p className="text-black-abz-12">Sorted By </p>
                <DropDown data={["Latest"]} />
              </div>
              <div className="flex space-x-2 text-black-abz-14 pl-3 items-center">
                <button className="btn-border space-x-1">
                  <ImportSvg />
                  <p>Import</p>
                </button>
                <button className="btn-border space-x-1">
                  <Export />
                  <p>Export</p>
                </button>
                <button>
                  <DeleteSvg />
                </button>
              </div>
            </div>
          </div>
          {/* filter end */}
          {/* table started */}
          <div className="flex w-full">
             <TableList/>
          </div>
          {/* Pagination */}
          <div className="flex w-full justify-end pt-12 pb-6">
            <Pagination/>
          </div>
        </div>
      )}
    </div>
  );
}

export default TemplateList;
