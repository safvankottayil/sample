import React from 'react'
import ChatUserDeatials from './ChatUserDeatials'
import Chating from './Chating'

function ChatingSection() {
  return (
    <div className='flex flex-grow  '>
      <div className='flex chat-area  relative flex-grow'>
        <Chating/>
      </div>
      <ChatUserDeatials/>
    </div>
  )
}

export default ChatingSection
