import React from "react";
import "./dashboard.css";
import ReactApexChart from "react-apexcharts";
import TrafficByDevice from "./TrafficByDevice";
import { DonutChart } from "./DonutChart";
import DotSvg from "../../Svgs/DotSvg";
function ChartSectionTwo() {
 

  return (
    <div className="flex flex-grow space-x-7 ">
      <div className="trafic-web-layout chart">
        <TrafficByDevice />
      </div>
      <div className="trafic-web-layout justify-center pie-chart chart">
        <div className="flex w-fit justify-between ">
          <div className="flex relative flex-col justify-center ">
            <h1 className="text-black-int-14-600 absolute top-3 left-3  ">Traffic by Location</h1>
            <DonutChart
              data={[
                { name: "Mark", value: 30 },
                { name: "Robert", value: 30 },
                { name: "Emily", value: 34 },
                { name: "Marion", value: 30 },
              ]}
              height={250}
              width={250}
            />
          </div>
          <div className="flex  w-1/3  items-center flex-col">
            <div className="flex flex-col h-fit justify-center space-y-2 ">
                <p className="bg-b flex items-center justify-between">
                    <p className="text-black-abz-12 flex items-center space-x-2">  <DotSvg fill={'#176AF2'} /> <p>United States</p></p><p className="">38.6%</p>
                  
                </p>
                <p className="bg-b flex items-center justify-between">
                    <p className="text-black-abz-12 flex items-center space-x-2">  <DotSvg fill={'#81E5A6'} /> <p>Canada</p></p><p className="">22.6%</p>
                  
                </p>
                <p className="bg-b flex items-center justify-between">
                    <p className="text-black-abz-12 flex items-center space-x-2">  <DotSvg fill={'#78A9F7'} /> <p>Mexico</p></p><p className="">30.6%</p>
                  
                </p>
                <p className="bg-b flex items-center justify-between">
                    <p className="text-black-abz-12 flex items-center space-x-2">  <DotSvg fill={'#848484'} /> <p>Other</p></p><p className="">8.6%</p>
                  
                </p>
               
               
            </div>
            
         
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSectionTwo;
