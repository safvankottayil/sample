import React, { useState } from 'react'
import Arrowdown from '../Svgs/Arrowdown'

function DropDown({data,setvalue}) {
  const [show,setShow]=useState(false)
  return (
    <div className="flex flex-col relative">
    <div className="relative dropdown flex justify-between ">
        <p className="w-[128px]">{data[0]}</p>
        <p className={show?'rotate-180':""} onClick={()=>setShow(!show)}><Arrowdown/></p>
    </div>
    <div className={`flex ${ show?`filter-show top-10 z-[1000] w-full`:"h-0 z-0 top-1 opacity-0"} transition-all duration-300 absolute`}>
      {data?data.map((item,index)=>{
        return <>
         <div onClick={()=>{setShow(false),setvalue(index==0?'':item)}} className='filter-show-item hover:bg-slate-100 rounded-lg'>
        <p>{item}</p>
      </div>
        </>
      }):""}
     
    </div>
    </div>
  )
}

export default DropDown
