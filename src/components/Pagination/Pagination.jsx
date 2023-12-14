import React, { useState } from 'react'
import LeftArow from '../Svgs/LeftArow'
import RightArrow from '../Svgs/RightArrow'

function Pagination() {
  const [count,setcount]=useState(1)
  return (
    <div className="pagination flex items-center ">
    <div className="pagination-item rotate-180 px-4 py-4  flex items-center">
    <RightArrow/>
    </div>
    <div className='flex items-center space-x-2'>
      {[1,2,3,4].map((item)=>{
        return <div onClick={()=>setcount(item)} className={`pagination-item ${count==item?'pagination-item-active':''} px-4 py-4 font-abz `}>{item}</div>
      })}
    </div>
    <div className=" px-4 py-4 pagination-item  flex items-center">
    <RightArrow/>
    </div>

</div>
  )
}

export default Pagination
