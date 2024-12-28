import { useContext, useReducer, useState } from "react";
import { DualRangeSlider } from "./ui/dual-range-slider";
import { DatePickerForm } from "./date-picker-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, getMonth, getYear } from "date-fns";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

interface MonthRangeState {
  initial: number;
  final: number;
}

const reducer = (
  prevState: MonthRangeState,
  action: { type: string; payload: number | number[] },
): MonthRangeState => {
  if (action.type === "DEFINE_RANGE" && typeof action.payload === "object") {
    return { initial: action.payload[0], final: action.payload[1] };
  }
  if (
    action.type === "DEFINE_INITIAL_MONTH" &&
    typeof action.payload === "number"
  ) {
    return { ...prevState, initial: action.payload };
  }
  if (
    action.type === "DEFINE_FINAL_MONTH" &&
    typeof action.payload === "number"
  ) {
    return { ...prevState, final: action.payload };
  } else {
    return prevState;
  }
};

function TimeSelector() {
  const { endDate, setEndDate, startDate, setStartDate } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  const [monthsRangeState, dispatch] = useReducer(reducer, {
    initial: 0,
    final: 11,
  });

  const initialMonth = format(
    new Date(2024, monthsRangeState.initial),
    "MMM 2024",
  );
  const finalMonth = format(new Date(2024, monthsRangeState.final), "MMM 2024");

  return (
    <div className="mb-2 grid h-[72px] grid-cols-[10fr_3fr] gap-x-20">
      <DualRangeSlider
        value={[monthsRangeState.initial, monthsRangeState.final]}
        onValueChange={(newValues) =>
          dispatch({ type: "DEFINE_RANGE", payload: newValues })
        }
        min={0}
        max={11}
        step={1}
        className="ml-10 w-full"
      />

      <div className="flex w-full flex-row items-center justify-center space-x-4">
        <div className="flex flex-col pt-2">
          <Select
            onValueChange={(value) =>
              dispatch({ type: "DEFINE_INITIAL_MONTH", payload: Number(value) })
            }
          >
            <span className="text-[12px] leading-4 text-[#444444S]">
              Start Date
            </span>
            <SelectTrigger className="mt-1 flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm shadow-sm">
              <SelectValue placeholder={initialMonth}>
                {initialMonth}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {format(new Date(2024, i), "MMM 2024")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col pt-2">
          <Select
            onValueChange={(value) =>
              dispatch({ type: "DEFINE_FINAL_MONTH", payload: Number(value) })
            }
          >
            <span className="text-[12px] leading-4 text-[#444444S]">
              End Date
            </span>
            <SelectTrigger className="mt-1 flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm shadow-sm">
              <SelectValue placeholder={finalMonth}>{finalMonth}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 - monthsRangeState.initial }, (_, i) => (
                <SelectItem
                  key={i + monthsRangeState.initial}
                  value={i + monthsRangeState.initial.toString()}
                >
                  {format(
                    new Date(2024, i + monthsRangeState.initial),
                    "MMM 2024",
                  )}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default TimeSelector;
