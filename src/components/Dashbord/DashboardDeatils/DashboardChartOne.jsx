import React from "react";
// import { Chart } from "react-google-charts";
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts'
import "./dashboard.css";

  const data = {
    options: {
        chart: {
            with:'100%',
            type: 'line',
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          title: {
            text: 'Forecast',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          yaxis: {
            min: -10,
            max: 40
          },
          forecastDataPoints: {
            count: 7
          },
          xaxis: {
            type: 'month',
            categories: [
              'jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun',
          
            ],
            tickAmount: 10,
          },
    },
    series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      },{
        name: 'value',
        data: [6,8,14,16,22,24,24,22,18,17,15,12,15,17,20,22,24,26,26]
      }]
  };


function DashboardChartOne() {
  return (
    <div className="flex space-x-7 ">
      <div className="flex flex-grow w-full  ">
        {/* <Chart width={'100%'} height={'100%'} options={options} data={data} chartType="LineChart" /> */}
       <ReactApexChart series={data.series} options={data.options} type="line" height={'400px'} width={'700px'}  />
      </div>
      <div className="flex flex-col border-2 trafic-web-layout"></div>
    </div>
  );
}

export default DashboardChartOne;
