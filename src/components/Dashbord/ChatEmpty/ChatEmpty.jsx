import React from 'react'
import ChatEmptySvg from '../../Svgs/ChatEmptySvg'

function ChatEmpty() {
  return (
    <div className='flex flex-col flex-grow  justify-center items-center'>
           <div className='flex justify-center  w-full items-center'>
            <p style={{color:'#ADADAD'}} className=' text-2xl font-inter text-center'>No chats found</p>
         </div>
      <ChatEmptySvg/>
    </div>
  )
}

export default ChatEmpty
