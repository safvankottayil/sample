import React, { useEffect, useRef, useState } from "react";
// import { Chart } from "react-google-charts";
import ReactApexChart from "react-apexcharts";
import { motion } from "framer-motion";

import "./dashboard.css";

const data = {
  options: {
    chart: {
      with: "100%",
      type: "line",
    },
    colors: ["#25D366", "#176AF2"],

    stroke: {
      width: 3,
      curve: "smooth",
    },
    legend:{
      offsetY: '-30',
      position: 'top',
      horizontalAlign: 'right', 
    },
    subtitle: {
      text: 'Total Projects -  Operating Status',
      align: 'left',
      offsetX: 100,
      offsetY: 2,
      style: {
        fontSize:  '14px',
        fontWeight: 400,
        fontFamily:  'sans-serif',
        color:  '#ADADAD'
      },
  },
  
    title: {
      text: "Total Users",
      align: "left",
      style: {
        fontSize: "14px",
        fontWeight:  600,
        fontFamily:  'sans-serif',
        color: "#1C1C1C",
      },
    },

    yaxis: {
      min: 0,
      max: 30,
  
      tickAmount: 3,
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
            colors: ['#ADADAD'],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'text-gray-abz-12',
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
      
    },
    },
    forecastDataPoints: {
      count: 1,
    },
    xaxis: {
      type: "month",
      categories: ["jan", "Feb", "Mar", "Apr", "may", "Jun", "jul"],
      tickAmount: 10,
      labels:{
        style: {
          colors: ['#ADADAD','#ADADAD','#ADADAD','#ADADAD','#ADADAD','#ADADAD','#ADADAD'],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'text-gray-abz-12',
      },
      }
    },
  },

  series: [
    {
      name: "Previous Week",
      data: [10, 18, 20, 15, 12, 15, 26],
    },
    {
      name: "Current Week",
      data: [17, 11, 9, 12, 18, 21, 20],
    },
  ],
};

function DashboardChartOne() {
  const parentWidth = useRef(null),
    rightChildWidth = useRef(null);
    const [chartWidth,setChartWidth]=useState('100')
    
  return (
    <>
      <div ref={parentWidth} className="flex space-x-7  ">
        <div className="flex chart overflow-hidden trafic-web-layout w-full   ">
          {/* <Chart width={'100%'} height={'100%'} options={options} data={data} chartType="LineChart" /> */}
          <ReactApexChart
            series={data.series}
            options={data.options}
            type="line"
            height={"350px"}
            width={`100%`}
          />
        </div>
        <div
          ref={rightChildWidth}
          className="flex min-w-[200px] max-w-[272px] flex-grow flex-col border-2 trafic-web-layout-2"
        >
           <h1 className="text-black-int-14-600">Traffic by Website</h1>
           <div className="flex flex-grow w-full justify-between   ">
            {/* category */}
             <div className="flex justify-evenly text-black-abz-12 flex-col ">
              <p className="">Google</p>
              <p>YouTube</p>
              <p>Instagram</p>
              <p>Pinterest</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Tumblr</p>
             </div>
             {/* progress */}
             <div className="flex flex-col items-end pl-7 justify-evenly pb-2 w-full   ">
              <div className="web-traffic-progress-box ">
                {/* 1 */}
                <div className="web-traffic-progress w-full h-3">
                  <div className="h-3 w-1/2 web-traffic-progress-blue "></div>
                </div>
              </div>
              {/* 2 */}
              <div className="web-traffic-progress-box">
              
                <div className="web-traffic-progress w-full h-3">
                  <div className="h-3 w-1/2 web-traffic-progress-blue "></div>
                </div>
              </div>
              {/* 3 */}
              <div className="web-traffic-progress-box">
                <div className="web-traffic-progress w-full h-3">
                  <div className="h-3 w-1/4 web-traffic-progress-blue "></div>
                </div>
              </div>
              {/* 4 */}
              <div className="web-traffic-progress-box">
                <div className="web-traffic-progress w-full h-3">
                  <motion.div  style={{width:`${100}%`}} className={` h-3 web-traffic-progress-blue`}></motion.div>
                </div>
              </div>
              {/* 5 */}
              <div className="web-traffic-progress-box">
                <div className="web-traffic-progress w-full h-3">
                  <div className="h-3 w-1/2 web-traffic-progress-blue "></div>
                </div>
              </div>
              {/* 6 */}
              <div className="web-traffic-progress-box">
                <div className="web-traffic-progress w-full h-3">
                  <div className="h-3 w-1/2 web-traffic-progress-blue "></div>
                </div>
              </div>
              {/* 7 */}
              <div className="web-traffic-progress-box">
                <div className="web-traffic-progress w-full h-3">
                  <div className="h-3 w-1/2 web-traffic-progress-blue "></div>
                </div>
              </div>
             </div>
           </div>
          
        </div>
      </div>
      
    </>
  );
}

export default DashboardChartOne;
