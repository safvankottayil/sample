import React from 'react'
import ProgressIcon from '../../Svgs/ProgressIcon'

function DashboardTopDeatials() {
  return (
    <div className='flex w-full space-x-7 '>
      {[1,2,3,4].map((item,index)=>{
        return(<div className={index%2==0?'dashboard-card-blue':'dashboard-card-green'}>
         <h1 className='text-black-int-14-600'>Views</h1>
         <div className='flex justify-between w-full items-center'>
            <h1 className='text-inter text-[25px] leading-[30px] font-semibold'>753K</h1>
            <p className='flex'>
                <p>+11.01%</p>
                <ProgressIcon/>
            </p>
         </div>
        </div>)
      })}
    </div>
  )
}

export default DashboardTopDeatials
