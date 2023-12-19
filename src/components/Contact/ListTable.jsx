import React from 'react'
import EditSvg from '../Svgs/EditSvg';
import DeleteSvg from '../Svgs/DeleteSvg';
import TableDownArrow from '../Svgs/TableDownArrow';

function ListTable() {
  return (
    <table className="w-full table-auto">
    <thead>
      <tr className="table-thead">
        <th className="text-left"><input type="checkbox" /></th>
        <th className="text-left"> <p className='flex items-center space-x-2'><TableDownArrow/><p>Name</p></p></th>
        <th className="text-left">Phone Number</th>
        <th className="text-left">Address</th>
        <th className="text-left">Birthday</th>
        <th className="text-left">Last Changed</th>
        <th className="text-left">Date Added</th>
        <th></th>
       
      </tr>
    </thead>
    <tbody>
      {[1, ,2,22,2,2,2,2,2,2,2].map((item) => {
        return (
          <>
            <tr className="table-tbody">
          
              <td className="text-left w-2 "><input type="checkbox" /></td>
              <td className="text-left  "> <p className='pt-1 flex items-center space-x-2'><img src="/avata.png" className='w-6 h-6' alt="" /> <p>Amy Rowe</p></p> </td>
             
              <td className=' className="text-left  "'>
              612-789-8023
              </td>
              <td className="text-left  ">
              Meadow Lane Oakland, New York
           
              </td>
              <td className="text-left  ">
              27/08/2001
           
              </td>
              <td className="text-left  ">
              10/08/2024, 2:13PM 
           
              </td>
              <td className="text-left  ">
              10/08/2024, 2:13PM 
           
              </td>
            </tr>
          
          </>
        );
      })}
    </tbody>
  </table>
  )
}

export default ListTable
