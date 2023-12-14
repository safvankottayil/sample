import React from "react";
import DotSvg from "../../Svgs/DotSvg";
import EditSvg from "../../Svgs/EditSvg";
import DeleteSvg from "../../Svgs/DeleteSvg";

function Table() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="history-table-thead">
          <th className="text-left">Broadcast Name</th>
          <th className="text-left">Schedule on</th>
          <th className="text-left">Status</th>
          <th className="text-left">Action</th>
         
        </tr>
      </thead>
      <tbody>
        {[1, ,2,2].map((item) => {
          return (
            <>
              <tr className="history-table-tbody">
            
                <td className="text-left ">Special Offer</td>
                <td className="text-left ">01/11/2023, 11:00PM </td>
               
                <td>
                  <div className="w-fit table-row-status table-status-green">
                    <p>Active</p>
                  </div>
                </td>
                <td className="text-left pt-5 flex items-center ">
                  <div className="pt-1">
                  <EditSvg/>
                  </div>
                  <div>
                  <DeleteSvg/>
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

export default Table;
