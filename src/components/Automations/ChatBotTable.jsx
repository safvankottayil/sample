import React from "react";
import CopySvg from "../Svgs/CopySvg";
import EditSvg from "../Svgs/EditSvg";
import DeleteSvg from "../Svgs/DeleteSvg";

function ChatBotTable() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="table-thead">
          <th className="text-left w-10">
            <div className="flex ">
              <input type="checkbox" />
            </div>
          </th>
          <th className="text-left">Name</th>
          <th className="text-left">Triggered</th>
          <th className="text-left">Steps finished</th>
          <th className="text-left">Finished</th>
          <th className="text-left">Modified on</th>
          <th className="text-left">Created on</th>
          <th className="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2,1].map((item, i) => {
          return (
            <>
              <tr className="table-tbody">
                <td className=' className="text-left w-10 "'>
                  <div className="flex ">
                    <input type="checkbox" />
                  </div>
                </td>
                <td className="text-left  ">Getting Started</td>
                <td className="text-left  ">250</td>
                <td className="text-left  ">1489</td>
                <td className="text-left  ">268</td>
                <td className="text-left  ">15/10/2023, 2:13PM </td>
                <td className="text-left  ">09/01/2023, 10:10AM </td>
                <td className="text-left w-[200px]  ">
                  <div className="flex  items-center space-x-4">
                    <CopySvg />
                    <EditSvg width={20} />
                    <DeleteSvg width={20} />
                    {/* <button className="bg-[#25D366] rounded-lg p-2">Submit</button> */}
                  </div>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default ChatBotTable;
