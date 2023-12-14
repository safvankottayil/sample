import React from 'react'
import ChatSearchSvg from '../Svgs/ChatSearchSvg'

function Search({value,setValue}) {
  return (
    <div className='flex w-full relative'>
      <input type="text" className='search-input-box flex flex-grow focus:outline-none pl-6 py-1 text-gray-abz-14' />
      <div className='absolute top-1 left-1'><ChatSearchSvg/></div>
    </div>
  )
}

export default Search
