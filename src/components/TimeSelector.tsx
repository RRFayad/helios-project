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
import DatePickerByDay from "./DatePickerByDay";
import MonthSelector from "./MonthSelector";

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
    <div className="mb-2 grid h-[72px] gap-x-20 lg:grid-cols-[10fr_3fr]">
      <DualRangeSlider
        value={[monthsRangeState.initial, monthsRangeState.final]}
        onValueChange={(newValues) =>
          dispatch({ type: "SET_RANGE", payload: newValues })
        }
        min={0}
        max={11}
        step={1}
        className="mx-auto w-[90%] lg:mx-0 lg:ml-10 lg:w-full"
      />
      {/* <DatePickerByDay /> */}
      <MonthSelector monthsRangeState={monthsRangeState} dispatch={dispatch} />
    </div>
  );
}

export default TimeSelector;
