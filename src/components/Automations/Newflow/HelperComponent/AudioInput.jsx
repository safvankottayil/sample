import React, { useRef } from 'react'

export default function AudioInput({value,items,setItems}) {
    const AudioRef=useRef(null)
    return (
      <>
      <button onClick={()=>AudioRef.current.click()}  className="flex w-full node-msg-btn text-sm text-abz items-center justify-center">
                    Uplod Audio
                  </button>
                  <input ref={AudioRef} accept="audio/*" onChange={(e)=>setItems(items.map(item=>{
                    if(item.id==value.id){
                      return {...item,file:e.target.files[0]}
                    }else{
                      return item
                    }
                  }))} type="file" className="hidden" />
  </>
    )
}
