"use client";

import React from "react";
import DUMMY_DATA from "@/lib/data.json";
import { format, parseISO, startOfToday } from "date-fns";
import {
  ComposedChart,
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CommodityData {
  commodity: string;
  date_on: Date;
  wapr: number;
  last: number | null;
  season_status: string;
}

const DUMMY_START_DATE = new Date("2024-01-01");
const DUMMY_END_DATE = new Date("2024-12-31");

function Chart() {
  const startDate = DUMMY_START_DATE;
  const endDate = DUMMY_END_DATE;
  //   const today = startOfToday();
  const today = new Date("2024-06-06");

  const data = [];

  for (const item of DUMMY_DATA) {
    const itemDate = parseISO(item.date_on);

    if (itemDate >= startDate && itemDate <= endDate) {
      const updatedItem = {
        commodity: item.commodity,
        date_on: format(itemDate, "yy-MMM-dd"),
        wapr: itemDate <= today ? item.wapr : null,
        predictedWapr: itemDate > today ? item.wapr : null, // Weighted Avg Percentual Risk
        last: item.last,
        priceRangeMin: item.last
          ? (item.last * (Math.random() * (1 - 0.8) + 0.8)).toFixed(0) // As we mentioned in interview, I could generate this data
          : null,
        priceRangeMax: item.last
          ? (item.last * (Math.random() * (1 - 0.8) + 1)).toFixed(0) // As we mentioned in interview, I could generate this data
          : null,
        month: format(itemDate, "MMM"),
      };

      data.push(updatedItem);
    }
  }

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
