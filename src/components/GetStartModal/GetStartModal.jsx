import React from 'react'
import { motion } from 'framer-motion'
import './getstartmodal.css'
import { useNavigate } from 'react-router-dom'
function GetStartModal({Close}) {
    const navigate=useNavigate()
  return (
    <div className='w-screen h-screen fixed bg-black bg-opacity-40 flex justify-center items-center'>
       <motion.div initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} className='modal-bg-raduis min-w-[680px] p-8 flex font-inter flex-col'>
        <h1 style={{fontWeight:600}} className='text-3xl'>Nice to meet you, Alfred</h1>
        <p className='whitespace-nowrap text-2xl pt-2'>Few more details to personalize your experience</p>
         <form onSubmit={(e)=>{e.preventDefault(),Close(false)}} action="" className='flex flex-col'>
            <div className='flex flex-col pt-8'>
                <label style={{fontWeight:500}} htmlFor="industry" className='text-sm pb-1'>What industry are you in?*</label>
                <select className='modal-input-border px-6 py-4 focus:outline-none' name="industry" id="">
                     <option value="">Select</option>
                    <option value="E-commerce">E-commerce</option>
                </select>
                <p className='h-4 '></p>
            </div>
            <div className='flex flex-col'>
                <label style={{fontWeight:500}} htmlFor="industry" className='text-sm pb-1 leading-4 '>What is your company website?*</label>
                <input type="text" className='input-border px-6 py-4' placeholder='Website' />
                <p className='h-4 '></p>
            </div>
            <div className='flex flex-grow pt-4'>
                <button style={{fontWeight:600}} className='flex w-full get-strat-btn-color justify-center py-4 px-6 text-white text-lg '>Get Started</button>
            </div>

         </form>
       </motion.div>
    </div>
  )
}

export default GetStartModal
