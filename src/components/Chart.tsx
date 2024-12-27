"use client";

import React from "react";
import DUMMY_DATA from "@/lib/data.json";
import { format, parseISO, startOfToday } from "date-fns";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { prepareDataForChart } from "@/lib/utils";

const DUMMY_START_DATE = new Date("2024-01-01");
const DUMMY_END_DATE = new Date("2024-12-31");

function Chart() {
  const startDate = DUMMY_START_DATE;
  const endDate = DUMMY_END_DATE;

  const data = prepareDataForChart(DUMMY_DATA, startDate, endDate);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={301}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <YAxis
          yAxisId="left"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          fontSize={12}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip contentStyle={{ fontSize: 14 }} />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="priceRangeMax"
          name="Daily High"
          stackId="0"
          stroke="none"
          fill="#F9E3B6"
          fillOpacity={1}
          legendType="none"
          unit={" USD"}
        />
        {/*White Area to Cover the Min (didn't figure out how to show in the Tooltip with different color)*/}
        <Area
          yAxisId="left"
          tooltipType="none"
          type="monotone"
          dataKey="priceRangeMin"
          name="Daily Low"
          stackId="1"
          stroke="none"
          fill="#FFF"
          fillOpacity={1}
          legendType="none"
          unit={" USD"}
        />
        {/*Done only for Tooltip Purposes*/}
        <Area
          yAxisId="left"
          dataKey="priceRangeMin"
          name="Daily Low"
          stackId="2"
          stroke="none"
          fill="#F9E3B6"
          fillOpacity={0}
          legendType="none"
          unit={" USD"}
        />
        <CartesianGrid opacity={0.4} />
        <XAxis
          dataKey="date_on"
          fontSize={12}
          tickFormatter={(value) => format(value, "MMM")}
          interval={30}
          minTickGap={10}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="last"
          name="Closing Price"
          stroke="#B76402"
          dot={false}
          connectNulls={true}
          legendType="none"
          strokeWidth={2}
          unit={" USD"}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="wapr"
          name="Climate Risk"
          unit={"%"}
          stroke="#376BFA"
          dot={false}
          connectNulls={true}
          legendType="none"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="predictedWapr"
          name="Predicted Climate Risk"
          unit={"%"}
          stroke="#376BFA"
          dot={false}
          connectNulls={true}
          legendType="none"
          strokeWidth={2}
          strokeDasharray={"4"}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default Chart;
