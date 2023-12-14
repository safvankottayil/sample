import React from 'react'
import RoundClose from '../../Svgs/RoundClose'
import Arrowdown from '../../Svgs/Arrowdown'

function ContactParameter({data}) {
    console.log(data);
  return (
    <div className='flex w-full items-center space-x-2  '>
    <div className='contact-input flex-grow h-9 relative'>
        <p className='font-abz text-sm font-normal'>{data[0]}</p>
        <div className=' absolute right-1'>
            <Arrowdown/>
        </div>
      
    </div>
    <div className='contact-input flex-grow h-9'>
        <p className='font-abz text-sm font-normal'>{data[1]}</p>
    </div>
    <RoundClose/>
    </div>
  )
}

export default ContactParameter
