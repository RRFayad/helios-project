"use client";
import { DualRangeSlider } from "./ui/dual-range-slider";
import { useContext, useEffect, useReducer } from "react";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

import {
  convertMonthNumberToContent,
  timeSelectorMonthReducer,
} from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TimeSelector() {
  const { setEndDate, setStartDate } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  const [monthsRangeState, dispatch] = useReducer(timeSelectorMonthReducer, {
    initial: 0,
    final: 11,
  });

  useEffect(() => {
    const controller = new AbortController();

    // Debounce to avoid many requests when using the slider
    let timeoutId: NodeJS.Timeout;
    if (monthsRangeState.lastUpdatedBy === "slider") {
      timeoutId = setTimeout(() => {
        setStartDate(new Date(2024, monthsRangeState.initial, 1));
        setEndDate(new Date(2024, monthsRangeState.final + 1, 0));
      }, 800);
    } else {
      setStartDate(new Date(2024, monthsRangeState.initial, 1));
      setEndDate(new Date(2024, monthsRangeState.final + 1, 0));
    }
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [monthsRangeState]);

  return (
    <div className="mb-2 grid h-[72px] grid-cols-[10fr_3fr] gap-x-20">
      <DualRangeSlider
        value={[monthsRangeState.initial, monthsRangeState.final]}
        onValueChange={(newValues) =>
          dispatch({ type: "SET_RANGE", payload: newValues })
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
              dispatch({ type: "SET_INITIAL_MONTH", payload: Number(value) })
            }
          >
            <span className="text-[12px] leading-4 text-[#444444S]">
              Start Date
            </span>
            <SelectTrigger className="mt-1 flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm shadow-sm">
              <SelectValue
                placeholder={convertMonthNumberToContent(
                  monthsRangeState.initial,
                )}
              >
                {convertMonthNumberToContent(monthsRangeState.initial)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {convertMonthNumberToContent(i)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col pt-2">
          <Select
            onValueChange={(value) => {
              dispatch({ type: "SET_FINAL_MONTH", payload: Number(value) });
            }}
          >
            <span className="text-[12px] leading-4 text-[#444444S]">
              End Date
            </span>
            <SelectTrigger className="mt-1 flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm shadow-sm">
              <SelectValue
                placeholder={convertMonthNumberToContent(
                  monthsRangeState.final,
                )}
              >
                {convertMonthNumberToContent(monthsRangeState.final)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 - monthsRangeState.initial }, (_, i) => (
                <SelectItem
                  key={i + monthsRangeState.initial}
                  value={(i + monthsRangeState.initial).toString()}
                >
                  {convertMonthNumberToContent(i + monthsRangeState.initial)}
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
