import React from 'react'
import NewTemplate from '../components/Template/NewTemplate/NewTemplate'

function AddtemplatePage() {
  return (
    <div className='flex flex-grow flex-col p-6'>
    <div className='flex w-full pb-6 '>
        <h1 className='text-black-int-16-600'>New Template</h1>
    </div>
    <NewTemplate/>
  
</div>
  )
}

export default AddtemplatePage
