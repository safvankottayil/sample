import React from 'react'
import Arrowdown from '../Svgs/Arrowdown'

function DropDown({data}) {
  return (
    <div className="flex flex-col relative">
    <div className="relative dropdown flex justify-between ">
        <p className="w-[128px]">{data[0]}</p>
        <Arrowdown/>
    </div>
    </div>
  )
}

export default DropDown
