import React from "react";
import DotSvg from "../../Svgs/DotSvg";

function Table() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="history-table-thead">
          <th className="text-left">Broadcast Name</th>
          <th className="text-left">Scheduled</th>
          <th className="text-left">Successful</th>
          <th className="text-left">Read</th>
          <th className="text-left">Replied</th>
          <th className="text-left">Recipients</th>
          <th className="text-left">Failed</th>
          <th className="text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {[1, ,2,2].map((item) => {
          return (
            <>
              <tr className="history-table-tbody">
                <td className="text-left ">Latest_Offer</td>
                <td className="text-left ">11/08/2024, 02:13PM </td>
                <td className="text-left ">0%</td>
                <td className="text-left ">0%</td>
                <td className="text-left ">0%</td>
                <td className="text-left ">20 Contacts</td>
                <td className="text-left ">0 Contacts</td>
                <td>
                  <div className="w-fit table-row-status table-status-yellow">
                    <DotSvg fill={'#FF8800'}/>
                    <p>Pending</p>
                  </div>
                </td>
              </tr>
              <tr className="history-table-tbody">
                <td className="text-left ">Latest_Offer</td>
                <td className="text-left ">11/08/2024, 02:13PM </td>
                <td className="text-left ">0%</td>
                <td className="text-left ">0%</td>
                <td className="text-left ">0%</td>
                <td className="text-left ">20 Contacts</td>
                <td className="text-left ">0 Contacts</td>
                <td className="text-left">
                  <div className=" w-fit table-row-status table-status-red">
                    <DotSvg fill={'#DB0000'} />
                    <p>Failed</p>
                  </div>
                </td>
              </tr>
              <tr className="history-table-tbody">
                <td className="text-left ">Latest_Offer</td>
                <td className="text-left ">11/08/2024, 02:13PM </td>
                <td className="text-left ">0%</td>
                <td className="text-left ">0%</td>
                <td className="text-left ">0%</td>
                <td className="text-left ">20 Contacts</td>
                <td className="text-left ">0 Contacts</td>
                <td>
                  <div className="table-row-status table-status-green w-fit">
                    <DotSvg fill={'#1A9447'}/>
                    <p>Solved</p>
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
