"use client";
import dynamic from "next/dynamic";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "../chart";
import React from "react";
// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Props {
  chartData: typeof barChartDataWeeklyRevenue;
  chartOptions: typeof barChartOptionsWeeklyRevenue;
}

const BarChart: React.FC<Props> = (props) => {
  const { chartData, chartOptions } = props;

  return (
    <Chart
      options={chartOptions as any}
      type="bar"
      width="100%"
      height="100%"
      series={chartData}
    />
  );
};

export default BarChart;
