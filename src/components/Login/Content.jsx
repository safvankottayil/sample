import React from 'react'
import Logo from '../Svgs/Logo'
import OsappSvg from '../Svgs/OsappSvg'

import './login.css'
function Content() {
  return (
    <div className='w-1/2 flex py-16 font-inter  space-y-32 min-h-screen pl-40 flex-col'>
        {/* logo */}
      <div className='flex items-center space-x-3 pt-5'><Logo width={63} height={85}/> <OsappSvg width={173} height={54}/> </div>
      <div className='flex flex-col space-y-10'>
        <h1 style={{fontWeight:600}} className='text-4xl text-blue '>The benefits of using WhatsApp for your business growth</h1>
        <ul style={{fontWeight:300}} className='list-disc space-y-2 list-color pl-5 text-[17px]'>
            <li className='' >Personalize your offers with targeted campaigns</li>
            <li className='' >Use ready-made templates to keep in touch with your customers</li>
            <li className='' >Resolve customer issues quickly with smart automations</li>
            <li className='' >Connect with other platforms like Zoho and Shopify for more context</li>
            <li className='' >Build no-code chatbots for 24x7 customer engagement</li>
            <li className='' >Use powerful automations to speed up issue resolution</li>
        </ul>
      </div>
    </div>
  )
}

export default Content
