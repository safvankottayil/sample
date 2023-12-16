import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
function BorderText_Blue({text,url,icon}) {
  return (
    <Link to={url?url:''} className="border-text-blue  cursor-pointer font-abz">
           {icon? icon:""}
         <p className=''>{text}</p> 
          </Link>
  )
}

export default BorderText_Blue
