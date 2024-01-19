import React, { useRef } from 'react'

export default function MessageInput({value,items,setItems}) {
    const imgRef=useRef(null)
  return (
    <>
        <button onClick={()=>imgRef.current.click()}  className="flex w-full node-msg-btn text-sm text-abz items-center justify-center">
                      Uplod Image
                    </button>
                    <input  accept="image/*" ref={imgRef} onChange={(e)=>setItems(items.map(item=>{
                      if(item.id==value.id){
                        return {...item,file:e.target.files[0]}
                      }else{
                        return item
                      }
                    }))} type="file" className="hidden" />
    </>
  )
}
