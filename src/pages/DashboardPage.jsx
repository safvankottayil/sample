import React, { useState } from 'react'
import DashboardTopDeatials from '../components/Dashbord/DashboardDeatils/DashboardTopDeatials'
import DashboardChartOne from '../components/Dashbord/DashboardDeatils/DashboardChartOne'
import ChartSectionTwo from '../components/Dashbord/DashboardDeatils/ChartSectionTwo'
import MarketingChart from '../components/Dashbord/DashboardDeatils/MarketingChart'


function DashboardPage() {
  
  return (
    <>
    <div className='flex flex-col space-y-7 flex-grow p-6'>
      
      <DashboardTopDeatials/>
      <DashboardChartOne/>
      <ChartSectionTwo/>
      <div className='trafic-web-layout chart'>
        <MarketingChart/>
      </div>
    </div>
    </>
  )
}

export default DashboardPage
