import React, { useState } from 'react'
import DashboardTopDeatials from '../components/Dashbord/DashboardDeatils/DashboardTopDeatials'
import DashboardChartOne from '../components/Dashbord/DashboardDeatils/DashboardChartOne'


function DashboardPage() {
  
  return (
    <>
    <div className='flex flex-col space-y-7 flex-grow p-6'>
      
      <DashboardTopDeatials/>
      <DashboardChartOne/>
    </div>
    </>
  )
}

export default DashboardPage
