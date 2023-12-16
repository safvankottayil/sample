import React, { useEffect, useRef } from 'react'
import Plusbgblue from '../../Buttons/Plusbgblue'
import UploadSvg from '../../Svgs/UploadSvg'

function Meadia({status,setImage}) {
    const imgRef=useRef(null)
  return (
    <div className='flex transition-all duration-1000'>
    <div className={`flex flex-col space-y-3 ${status?"h-fit ":"h-0 "}  overflow-hidden w-full `}>
      <div className='flex text-black-int-14 items-center space-x-3 '>
        <div className='flex items-center space-x-2'>
            <input type="radio" className='w-5 h-5' name='meadia' />
             <label htmlFor="image">Image</label>
        </div>
        <div className='flex items-center space-x-2'>
            <input type="radio" className='w-5 h-5' name='meadia' />
             <label htmlFor="image">Video</label>
        </div>
        <div className='flex items-center space-x-2'>
            <input type="radio" className='w-5 h-5' name='meadia' />
             <label htmlFor="image">Document</label>
        </div>
      </div>
      <div className='flex justify-start items-center'>
        <div onClick={()=>imgRef.current.click()}>
        <Plusbgblue icon={<UploadSvg/>} text={'Upload Media'}/>
        </div>
        
        <input onChange={()=>setImage(imgRef.current?.files[0])} ref={imgRef} type="file" className='hidden' />
      </div>
    </div>
    </div>
  )
}

export default Meadia
