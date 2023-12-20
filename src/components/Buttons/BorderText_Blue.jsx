import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
function BorderText_Blue({text,url,icon}) {
  return (
    <Link to={url?url:''} className="border-text-blue  flex items-center cursor-pointer font-abz">
           {icon? icon:""}
         <p className='pt-[2px]'>{text}</p> 
          </Link>
  )
}

export default BorderText_Blue
