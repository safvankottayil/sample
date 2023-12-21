import React, { useRef } from 'react'

export default function VideoInput({value,setItems,items}) {
    const videoRef=useRef(null)
  return (
    <>
    <button onClick={()=>videoRef.current.click()}  className="flex w-full node-msg-btn text-sm text-abz items-center justify-center">
                  Uplod Video
                </button>
                <input ref={videoRef} accept="video/*" onChange={(e)=>setItems(items.map(item=>{
                  if(item.id==value.id){
                    return {...item,file:e.target.files[0]}
                  }else{
                    return item
                  }
                }))} type="file" className="hidden" />
</>
  )
}
