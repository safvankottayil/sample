import React, { useEffect } from 'react'
import './dash-navbar.css'
import NotificationSvg from '../../Svgs/NotificationSvg'
import { useLocation } from 'react-router-dom'
function Navbar() {
    const location=useLocation()
    let pathname=location.pathname.split('/')
console.log(pathname);
 
  return (
    <div className='flex dashbord-navbar justify-between '>
        {/* NAVIGATION PATH */}
      <div className='flex  items-center  font-abz justify-start'>
        <button className='dashbord-navbar-path dashbord-navbar-path-text-gray capitalize'>{pathname[1]}</button>
        <p className=' dashbord-navbar-path-text-gray'>/</p>
        <button className='dashbord-navbar-path dashbord-navbar-path-text-blue capitalize'>{pathname[2]?pathname[2]:"Overview"}</button>
      </div>
      <div className='flex'>
        <div className='flex flex-col font-abz justify-center items-start'>
            <p className='leading-3'><span style={{fontWeight:400}} className='text-sm leading-3'>Free conversations:</span><span style={{fontWeight:600}} className='font-inter leading-4 text-sm'>800</span></p>
            <p className='leading-3'><span style={{fontWeight:400}} className='text-sm leading-3'>Balance:</span>           <span style={{fontWeight:600}} className='font-inter leading-4 text-sm'>$80</span></p>
        </div>
        <div className='px-5'>
            <button style={{fontWeight:400}} className=' dashbord-navbar-btn font-abz h-8  text-white text-sm'>Buy Credits</button>
        </div>
        <div className='flex justify-center items-center p'>
            <NotificationSvg/>
        </div>

      </div>
    </div>
  )
}

export default Navbar
