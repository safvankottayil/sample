import React from 'react'
import BorderText_Blue from '../Buttons/BorderText_Blue'
import Plusbgblue from '../Buttons/Plusbgblue'
import Automations from '../Svgs/AutomationsSvg'
import Search from '../Search/Search'
import DropDown from '../FilterDropDown/DropDown'
import ImportSvg from '../Svgs/ImportSvg'
import Export from '../Svgs/Export'
import DeleteSvg from '../Svgs/DeleteSvg'
import ChatBotTable from './ChatBotTable'
import Pagination from '../Pagination/Pagination'

function ChatBot() {
  return (
    <div className='flex flex-col flex-grow w-full p-6'>
        <div className='flex w-full justify-between'>
            <h1 className='text-black-int-16-600'>Chatbot Flows</h1>
            <div className='flex space-x-3 items-center'>
                <div >
                    <BorderText_Blue text={'Open Documentation'} key={''}/>
                </div>
                <div className='flex'>
                    <Plusbgblue url={'/automations/chatbot/new-flow'} icon={<Automations width={21} height={20} Active={'white'} />} text={'New Flow'} />
                </div>
            </div>
        </div>
        {/* Filter */}
        <div className=' flex pt-3'>
         <div className=' flex filter-border justify-between w-full'>
            <div className='flex space-x-3 '>
                <div className='flex items-center '>
                    <p className='whitespace-nowrap text-black-int-14'>2 Selected</p>
                </div>
                <Search/>
            </div>
            <div className='flex items-center space-x-1'>
                <div className='flex items-center space-x-2'>
                    <p className='text-black-abz-12'>Sorted by</p>
                    <DropDown data={['Latest']} />
                </div>
                <div className='w-[1.5px] bg-[#E1E1E1]'></div>
              
                    <div className=''>
                     <DeleteSvg/>
                    </div>
                   
               
            </div>
         </div>
        </div>
        {/* Filter End */}
        {/* Table */}
        <div className='flex flex-grow w-full'>
            <div className='flex flex-col w-full'>
                <ChatBotTable/>
            </div>
        </div>
        {/* Table End */}
        <div className='flex justify-end pb-6 pt-10'>
            <Pagination/>
        </div>
      
    </div>
  )
}

export default ChatBot
