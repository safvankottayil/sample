import React, { useEffect, useState } from 'react'
import NewTemplateDropDown from './NewTemplateDropDown'

function CallToAction({status,setAction,action}) {
    const [WebName,SetWebName]=useState('')
    const [WebUrl,setWebUrl]=useState('')
    useEffect(()=>{
       setAction({type: status?"Call to action":'',text:WebName,url:WebUrl})
    },[WebName])
  return (
    <div className={`flex flex-col ${status?"h-fit":'h-0'} overflow-hidden`}>
        <div className='flex  pt-4 '>
            <div className='flex w-1/3'>
                <NewTemplateDropDown  text={'Call to action'} data={['None','Visit website']}/>
            </div>
            {/* Web name */}
            <div className='flex flex-grow ml-4'>
                <NewTemplateDropDown  value={WebName} setvalue={SetWebName} type={'input'} text={'Button text'} placeholder={'Name'}/>
            </div>
        </div>
        <div className='flex  pt-4 '>
            <div className='flex w-1/3'>
                <NewTemplateDropDown text={'Website type'} data={['None','Dynamic']}/>
            </div>
            <div className='flex flex-grow ml-4'>
                <NewTemplateDropDown value={WebUrl} setvalue={setWebUrl} type={'input'} text={'URL'} placeholder={'www.osapp.com/pricing'}/>
            </div>
        </div>
      
    </div>
  )
}

export default CallToAction
