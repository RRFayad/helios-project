import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { TimeSelectorAction, TimeSelectorState } from "@/types/time-selector";
import { format, parseISO, startOfToday } from "date-fns";
import { CommodityData, PreparedDataForChart } from "@/types/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertMonthNumberToContent = (month: number) => {
  return format(new Date(2024, month), "MMM 2024");
};

export const timeSelectorMonthReducer = (
  prevState: TimeSelectorState,
  action: TimeSelectorAction,
): TimeSelectorState => {
  if (action.type === "SET_RANGE") {
    return { initial: action.payload[0], final: action.payload[1] };
  }
  if (
    action.type === "SET_INITIAL_MONTH" &&
    typeof action.payload === "number"
  ) {
    return { ...prevState, initial: action.payload };
  }
  if (action.type === "SET_FINAL_MONTH" && typeof action.payload === "number") {
    return { ...prevState, final: action.payload };
  } else {
    return prevState;
  }
};

export function prepareDataForChart(
  data: CommodityData[],
  startDate: Date,
  endDate: Date,
): PreparedDataForChart[] {
  // const today = startOfToday();
  const today = new Date("2024-12-13"); // For Testing Purposes

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
