"use server";

import DUMMY_DATA from "@/lib/data.json";
import { format, parseISO, subDays } from "date-fns";
import { CommodityData, PreparedDataForChart } from "@/types/data";

export const getCocoaDataByPeriod = async (
  startDate: Date,
  endDate: Date,
): Promise<PreparedDataForChart[]> => {
  const data: CommodityData[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA);
    }, 500);
  });

  // const today = startOfToday();
  const today = new Date(2024, 11, 14); // We are considering today is Dec 14th, to show dashed line chart

  const chartData = [];

  for (const item of data) {
    const itemDate = parseISO(item.date_on);

    if (itemDate >= startDate && itemDate <= endDate) {
      const updatedItem = {
        commodity: item.commodity,
        date_on: format(itemDate, "yy-MMM-dd"),
        wapr: itemDate <= subDays(today, 1) ? item.wapr : null,
        predictedWapr: itemDate >= subDays(today, 1) ? item.wapr : null, // Forecasted Weighted Avg Percentual Risk
        last: item.last,
        priceRangeMin: item.last
          ? (item.last * (Math.random() * (1 - 0.8) + 0.8)).toFixed(0) // As we mentioned in interview, I could generate this data
          : null,
        priceRangeMax: item.last
          ? (item.last * (Math.random() * (1 - 0.8) + 1)).toFixed(0) // As we mentioned in interview, I could generate this data
          : null,
        month: format(itemDate, "MMM"),
      };

      chartData.push(updatedItem);
    }
  }
  return chartData;
};
