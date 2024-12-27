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
          ? item.last * Math.random() * (1 - 0.8) + 0.8 // As we mentioned in interview, I could generate this data
          : null,
        priceRangeMax: item.last
          ? item.last * Math.random() * (1 - 0.8) + 1 // As we mentioned in interview, I could generate this data
          : null,
        month: format(itemDate, "MMM"),
      };

      data.push(updatedItem);
    }
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date_on"
          fontSize={12}
          tickFormatter={(value) => format(value, "MMM")}
          interval={30}
          minTickGap={10}
          //   includeHidden
          //   allowDuplicatedCategory={false}
        />
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
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="last"
          stroke="#B66202"
          dot={false}
          connectNulls={true}
          legendType="none"
          name="price"
          strokeWidth={2}
        />
        {/* <Area type="monotone" fill="#8884d8" stroke="#8884d8" /> */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="wapr"
          stroke="#386CFA"
          dot={false}
          connectNulls={true}
          legendType="none"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="predictedWapr"
          stroke="#386CFA"
          dot={false}
          connectNulls={true}
          legendType="none"
          strokeWidth={2}
          strokeDasharray={"4"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
