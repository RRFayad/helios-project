import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { format, parseISO, startOfToday } from "date-fns";
import { CommodityData, PreparedDataForChart } from "@/types/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function prepareDataForChart(
  data: CommodityData[],
  startDate: Date,
  endDate: Date,
): PreparedDataForChart[] {
  // const today = startOfToday();
  const today = new Date("2024-06-06"); // For Testing Purposes

  const chartData = [];

  for (const item of data) {
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

      chartData.push(updatedItem);
    }
  }
  return chartData;
}
