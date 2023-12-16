import React from "react";
import CopySvg from "../Svgs/CopySvg";
import EditSvg from "../Svgs/EditSvg";
import DeleteSvg from "../Svgs/DeleteSvg";

function TableList() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="table-thead">
         
          <th className="text-left">Template Name</th>
          <th className="text-left">Category</th>
          <th className="text-left">Status</th>
          <th className="text-left">Language</th>
          <th className="text-left">Last Updated</th>
          <th className="text-left">Action</th>
         
        </tr>
      </thead>
      <tbody>
        {[1, , 2, 22, 2, 2, 2, 2, 2, 2, 2].map((item,i) => {
          return (
            <>
              <tr className="table-tbody">
               
                
                <td className=' className="text-left  "'>Welcome</td>
                <td className="text-left  ">Utility</td>
                <td className="text-left  ">
                    <div className={` ${i%2==0?"bg-[#FFF3E6] text-[#FF8800]":"bg-[#E9FBF0] text-[#1A9447]"}   p-1  w-fit rounded-lg`}> <p>{i%2==1?'Approved':'Draft'}</p></div>
                </td>
                <td className="text-left  ">English (US)</td>
                <td className="text-left  ">09/01/2023</td>
                <td className="text-left w-[200px]  ">
                    <div className="flex  items-center space-x-4">
                        <CopySvg/>
                        <EditSvg width={20} />
                        <DeleteSvg width={20} />
                        <button className="bg-[#25D366] rounded-lg p-2">Submit</button>
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

export default TableList;
