import React from "react"
import{ useMemo } from "react";
import * as d3 from "d3";


const MARGIN = 20;

const colors = [
    "#78A9F7", // blue
    "#81E5A6", // green
    "#848484", // pink
    "#176AF2", // light blue
    // Add more colors if needed
  ];
  

export const DonutChart = ({ width, height, data }) => {
   
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();
    arcPathGenerator.cornerRadius(15)
    // arcPathGenerator.padRadius(10)
    return pie.map((p) =>
      arcPathGenerator({
        innerRadius: 70,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle+0.2,
      })
    );
  }, [radius, pie]);
  

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arc, i) => {
          return <path fill-rule="evenodd" clip-rule="evenodd"   stroke-linecap="round"
          stroke-linejoin="round"   className="" key={i} d={arc} fill={colors[i]} />;
        })}
      </g>
    </svg>
  );
};
