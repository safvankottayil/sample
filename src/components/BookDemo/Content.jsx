import React from 'react'
import './bookdemo.css'
import MarketingSvg from '../Svgs/MarketingSvg'
function Content() {
  return (
    <div className='w-1/2 pr-10 flex flex-col font-inter '>  
    <div className='flex flex-col pt-14'>
    <div>
        <h1 className='book-demo-text-blue'>Schedule a no-cost demonstration</h1>
        <p className='book-demo-text-gray pt-8'>Find out how Osapp assists you in using WhatsApp as an optimal way for selling, marketing and supporting your clients.</p>
    </div>
    <div className='pl-10 pt-5'>
        <ul className='list-disc list space-y-5'>
            <li className=''>Learn how Osapp streamlines WhatsApp communication.</li>
            <li>Our experts will show you how to use Osapp with WhatsApp in our demos.</li>
            <li>See the benefits of Osapp for your business expansion.</li>
        </ul>
    </div>
    </div>

    <div className='pt-32 pl-10'>
       <MarketingSvg/>
    </div>
    </div>
  )
}

export default Content
