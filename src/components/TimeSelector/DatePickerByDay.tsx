"use client";

import { useContext } from "react";
import { ChevronDown } from "lucide-react";
import { format, getMonth } from "date-fns";
import { TimeSelectorAction } from "@/types/time-selector";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MonthSelectorProps {
  dispatch: (action: TimeSelectorAction) => void;
}

function DatePickerByDay({ dispatch }: MonthSelectorProps) {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  const selectDateHandler = (
    newDate: Date,
    dateToBeUpdated: "startDate" | "endDate",
  ) => {
    if (dateToBeUpdated === "startDate") {
      setStartDate(newDate);
      dispatch({
        type: "SET_INITIAL_MONTH",
        payload: { month: getMonth(newDate), updatedBy: "date-picker" },
      });
    }
    if (dateToBeUpdated === "endDate") {
      setEndDate(newDate);
      dispatch({
        type: "SET_FINAL_MONTH",
        payload: { month: getMonth(newDate), updatedBy: "date-picker" },
      });
    }
  };

  return (
    <div className="hidden flex-row items-center justify-center space-x-4 lg:flex">
      <div className="flex flex-col pt-2">
        <label className="text-[12px] leading-4 text-[#444444]">
          Start Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="mt-1 flex h-[32px] w-[130px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm leading-4 shadow-sm xl:w-[179px]">
              <span>{format(startDate, "MMM dd, yyyy")}</span>
              <ChevronDown size={14} color="gray" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={(date) => selectDateHandler(date!, "startDate")}
              initialFocus
              captionLayout="dropdown-buttons"
              fromDate={new Date(2024, 0, 1)}
              toDate={endDate}
              defaultMonth={startDate}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col pt-2">
        <label className="text-[12px] leading-4 text-[#444444]">End Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="mt-1 flex h-[32px] w-[130px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm leading-4 shadow-sm xl:w-[179px]">
              <span>{format(endDate, "MMM dd, yyyy")}</span>
              <ChevronDown size={14} color="gray" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={(date) => selectDateHandler(date!, "endDate")}
              initialFocus
              captionLayout="dropdown-buttons"
              fromDate={startDate}
              toDate={new Date(2024, 11, 31)}
              defaultMonth={endDate}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default DatePickerByDay;
