import React from 'react'
import "./dashboard.css";
import ReactApexChart from "react-apexcharts";
function MarketingChart() {
    const data = {
        options: {
          chart: {
            with: "100%",
            type: "bar",
          },
          plotOptions: {
            bar: {
            
              borderRadius: 4,
              horizontal: false,
                borderRadiusWhenStacked: 'last',
                columnWidth: '60%',
               
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 3,
            curve: "smooth",
          },
    
          title: {
            text: "Marketing & SEO",
            align: "left",
            style: {
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "sans-serif",
              color: "#1C1C1C",
            },
          },
    
          yaxis: {
            min: 0,
            max: 30,
    
            tickAmount: 3,
            labels: {
              show: true,
              align: "right",
              minWidth: 0,
              maxWidth: 160,
              style: {
                colors: ["#ADADAD"],
                fontSize: "12px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                cssClass: "text-gray-abz-12",
              },
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
            },
          },
       
          xaxis: {
            type: "month",
            categories: ["Linux", "Mac", "IOS", "Windows", "Android", "Other"],
            tickAmount: 10,
            labels: {
              style: {
                colors: [
                  "#ADADAD",
                  "#ADADAD",
                  "#ADADAD",
                  "#ADADAD",
                  "#ADADAD",
                  "#ADADAD",
                  "#ADADAD",
                ],
                fontSize: "12px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                cssClass: "text-gray-abz-12",
              },
            },
          },
        },
    
        series: [
          {
            data: [
              {
                x: "category A",
                y: 20,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
              {
                x: "category B",
                y: 13,
                fillColor: '#81E5A6',
                strokeColor: '#fff'
              },
              {
                x: "category B",
                y: 13,
                fillColor: '#81E5A6',
                strokeColor: '#fff'
              },
              {
                x: "category C",
                y: 23,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
              {
                x: "category A",
                y: 20,
                fillColor: '#81E5A6',
                strokeColor: '#fff'
              },
              {
                x: "category B",
                y: 28,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
              {
                x: "category C",
                y: 13,
                fillColor: '#848484',
                strokeColor: '#fff'
              },
              {
                x: "category A",
                y: 20,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
              {
                x: "category B",
                y: 13,
                fillColor: '#81E5A6',
                strokeColor: '#fff'
              },
              {
                x: "category C",
                y: 23,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
              {
                x: "category A",
                y: 20,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
              {
                x: "category B",
                y: 13,
                fillColor: '#81E5A6',
                strokeColor: '#fff'
              },
              {
                x: "category C",
                y: 23,
                fillColor: '#78A9F7',
                strokeColor: '#fff'
              },
            ],
          },
        ],
      };
  return (
    <ReactApexChart
    options={data.options}
    series={data.series}
    type="bar"
    height={"350px"}
    width={"100%"}
  />
  )
  }
export default MarketingChart
