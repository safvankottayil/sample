import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Content from '../components/BookDemo/Content'
import BookForm from '../components/BookDemo/BookForm'

function BookDemoPage() {
  return (
    <div className="flex  flex-col max-w-[2000px] overflow-hidden m-auto shadow shadow-slate-300  min-h-screen ">
    <Navbar/>
     <div className='flex md:px-24 min-[1600px]:px-32 min-[1950px]:px-52'>
        <Content/>
        <BookForm/>
     </div>
  </div>
  )
}

export default BookDemoPage
