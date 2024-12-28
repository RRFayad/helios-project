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
      initial: action.payload[0],
      final: action.payload[1],
      lastUpdatedBy: "slider",
    };
  }
  if (
    action.type === "SET_INITIAL_MONTH" &&
    typeof action.payload === "number"
  ) {
    return { ...prevState, initial: action.payload, lastUpdatedBy: "select" };
  }
  if (action.type === "SET_FINAL_MONTH" && typeof action.payload === "number") {
    return { ...prevState, final: action.payload, lastUpdatedBy: "select" };
  } else {
    return prevState;
  }
};
