"use client";
import dynamic from "next/dynamic";
import React from "react";
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Props {
  chartData: any;
  chartOptions: any;
}

const LineChart: React.FC<Props> = (props) => {
  const { chartData, chartOptions } = props;

  return (
    <Chart
      options={chartOptions}
      type="line"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
};

export default LineChart;
