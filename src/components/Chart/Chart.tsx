"use client";

import { format } from "date-fns";
import { PreparedDataForChart } from "@/types/data";
import React, { useContext, useEffect, useState } from "react";
import { getCocoaDataByPeriod } from "@/actions/get-data-by-period";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

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

function Chart() {
  const [data, setData] = useState<PreparedDataForChart[]>([]);

  const { endDate, startDate, showClimateRisk, showPriceRange } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  useEffect(() => {
    const controller = new AbortController();

    const fetchCocoaData = async () => {
      try {
        const cocoaData = await getCocoaDataByPeriod(startDate, endDate);
        setData(cocoaData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCocoaData();

    return () => {
      controller.abort();
    };
  }, [endDate, startDate, showClimateRisk, showPriceRange]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={500}
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
        {showPriceRange && (
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="priceRangeMax"
            name="Daily High"
            stackId="0"
            stroke="none"
            fill="#E59828"
            fillOpacity={0.25}
            legendType="none"
            unit={" USD"}
            connectNulls
          />
        )}
        {/*White Area to Cover the Min (didn't figure out how to show in the Tooltip with different color)*/}
        {showPriceRange && (
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
            connectNulls
          />
        )}
        {/*Done only for Tooltip Purposes*/}
        {showPriceRange && (
          <Area
            yAxisId="left"
            dataKey="priceRangeMin"
            name="Daily Low"
            stackId="2"
            stroke="none"
            fill="#E59828"
            fillOpacity={0}
            legendType="none"
            connectNulls={true}
            unit={" USD"}
          />
        )}
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
          animateNewValues={false}
        />
        {showClimateRisk && (
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
            animateNewValues={false}
          />
        )}
        {showClimateRisk && (
          <Line
            strokeDasharray={"4"}
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
            animateNewValues={false}
          />
        )}
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default Chart;
