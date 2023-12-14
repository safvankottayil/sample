import React from 'react'
import History from '../components/Broadcast/History/History'
import { useLocation } from 'react-router-dom'
import Schedule from '../components/Broadcast/Shedule/Schedule'

function BroadcastPage() {
    const location=useLocation()
    const  path=location.pathname.split('/')
  return (
    <>
    {path[2]=='history'?<History/>:<Schedule/>}
   
      
    </>
  )
}

export default BroadcastPage
