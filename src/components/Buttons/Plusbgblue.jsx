import React from 'react'
import AddBtnSvg from '../Svgs/AddBtnSvg'
import { useNavigate } from 'react-router-dom'

function Plusbgblue({text,url}) {
    const navigate=useNavigate()
  return (
    <button onClick={()=>navigate(url)} className="add-btn-bg-blue">
    <AddBtnSvg />{text}
  </button>
  )
}

export default Plusbgblue
