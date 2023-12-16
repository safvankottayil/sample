import React, { useEffect, useRef, useState } from 'react'
import LeftArow from '../../Svgs/LeftArow'

function NewTemplateDropDown({text,data,value,setvalue,type,placeholder}) {
    const [show,setShow]=useState(false)
    const [select,setSelect]=useState(data?data[0]:'')
    const InputRef=useRef(null)
    useEffect(()=>{
    setSelect(data?data[0]:'')
    },[])
  return (
    <div className="new-template-form-select-box w-full relative ">
      <div className="flex w-full items-center justify-between">
        <div className="flex space-y-1 flex-col">
         {text?<p className="text-gray-abz-12">{text}</p>:""}
         {type!='input'? <p className="text-black-abz-14">{select}</p>:<>
         <input value={value} onChange={()=>setvalue(InputRef.current.value)} ref={InputRef}  type="text" placeholder={placeholder} className='flex  focus:outline-none text-gray-abz-14 flex-grow ' />
         </>}
        </div>
        {type!='input'?
        <div onClick={()=>setShow(!show)} className={`${show?'rotate-90':'-rotate-90'} cursor-pointer`} >
            <LeftArow  width={17}/>
        </div>:''}
      </div>
      {type!='input'&&data?
      <div className={`flex ${show?"h-fit ring-1 z-40 ring-slate-300 ring-opacity-40":`h-0 ${text?'top-10':"top-5"} opacity-0`} ${text?'top-[75px]':"top-[53px]"} transition-all w-full left-0  overflow-hidden duration-300 new-template-form-select-show absolute `}>
     
       {data.map((item)=>{
        return <>
        <div  onClick={()=>{setSelect(item),setShow(false),setvalue(data[0]==item?'':item)}} key={item} className='new-template-form-select-item cursor-pointer text-black-abz-14 hover:bg-slate-50 w-full'>
        <p>{item}</p>
       </div>
        </>
       })}
       
      
      </div>
      :''}
    </div>
  )
}

export default NewTemplateDropDown
