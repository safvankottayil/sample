import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
function OpenDecument({text,url}) {
  return (
    <Link to={url?url:''} className="border-text-blue cursor-pointer font-abz">
          {text}
          </Link>
  )
}

export default OpenDecument
