import React from 'react'
import AddBtnSvg from '../Svgs/AddBtnSvg'
import { useNavigate } from 'react-router-dom'

function Plusbgblue({text,url,icon}) {
    const navigate=useNavigate()
  return (
    <button onClick={()=>navigate(url)} className="add-btn-bg-blue flex items-center space-x-1 p-1 px-2">
  {icon?icon:<AddBtnSvg />} <p className='flex pr-1 items-center justify-center leading-3 pb-[1px]'>{text}</p>
  </button>
  )
}

export default Plusbgblue
