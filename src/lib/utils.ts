import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { TimeSelectorAction, TimeSelectorState } from "@/types/time-selector";

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
    return {
      initial: action.payload.monthRange[0],
      final: action.payload.monthRange[1],
      lastUpdatedBy: "slider",
    };
  }
  if (action.type === "SET_INITIAL_MONTH") {
    return {
      ...prevState,
      initial: action.payload.month,
      lastUpdatedBy: action.payload.updatedBy,
    };
  }
  if (action.type === "SET_FINAL_MONTH") {
    return {
      ...prevState,
      final: action.payload.month,
      lastUpdatedBy: action.payload.updatedBy,
    };
  } else {
    return prevState;
  }
};
