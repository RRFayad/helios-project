"use client";

import MonthSelector from "./MonthSelector";
import { timeSelectorMonthReducer } from "@/lib/utils";
import { DualRangeSlider } from "../ui/dual-range-slider";
import { useContext, useEffect, useReducer } from "react";
import DatePickerByDay from "@/components/TimeSelector/DatePickerByDay";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

function TimeSelector() {
  const { setEndDate, setStartDate } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  const [monthsRangeToBeShown, dispatch] = useReducer(
    timeSelectorMonthReducer,
    {
      initial: 0,
      final: 11,
    },
  );

  useEffect(() => {
    const controller = new AbortController();

    // Debounce to avoid many requests when using the slider
    let timeoutId: NodeJS.Timeout;
    if (monthsRangeToBeShown.lastUpdatedBy === "slider") {
      timeoutId = setTimeout(() => {
        setStartDate(new Date(2024, monthsRangeToBeShown.initial, 1));
        setEndDate(new Date(2024, monthsRangeToBeShown.final + 1, 0));
      }, 800);
    }
    if (monthsRangeToBeShown.lastUpdatedBy === "select") {
      setStartDate(new Date(2024, monthsRangeToBeShown.initial, 1));
      setEndDate(new Date(2024, monthsRangeToBeShown.final + 1, 0));
    }
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [monthsRangeToBeShown]);

  return (
    <div className="mb-2 grid h-[72px] gap-x-20 lg:grid-cols-[10fr_3fr]">
      <DualRangeSlider
        value={[monthsRangeToBeShown.initial, monthsRangeToBeShown.final]}
        onValueChange={(newValues) =>
          dispatch({
            type: "SET_RANGE",
            payload: { monthRange: newValues, updatebBy: "slider" },
          })
        }
        min={0}
        max={11}
        step={1}
        className="mx-auto w-[90%] lg:mx-0 lg:ml-10 lg:w-full"
      />
      <DatePickerByDay dispatch={dispatch} />
      {/* <MonthSelector
        monthsRangeState={monthsRangeToBeShown}
        dispatch={dispatch}
      /> */}
    </div>
  );
}

export default TimeSelector;
