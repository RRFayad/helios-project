"use client";

import { format } from "date-fns";

import { useState, useContext, useEffect } from "react";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

import { ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerForm() {
  const context = useContext(ChartContext) as ChartContextInterface;

  const [formStartDate, setFormStartDate] = useState({
    date: context.startDate,
    userHasUpdated: false,
  });
  const [formEndDate, setFormEndDate] = useState({
    date: context.endDate,
    userHasUpdated: false,
  });

  useEffect(() => {
    if (formStartDate.userHasUpdated && formEndDate.userHasUpdated) {
      console.log("Ihaaaa", formStartDate.date, formEndDate.date);
    }
  }, [formStartDate.userHasUpdated, formEndDate.userHasUpdated]);

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <div className="flex flex-col pt-2">
        <label className="text-[12px] leading-4 text-[#444444]">
          Start Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="mt-1 flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm leading-4 shadow-sm">
              <span>Jan 2024</span>
              <ChevronDown size={14} color="gray" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={formStartDate.date}
              onSelect={(date) =>
                setFormStartDate({ date: date!, userHasUpdated: true })
              }
              initialFocus
              captionLayout="dropdown-buttons"
              fromDate={new Date(2023, 0, 1)}
              toDate={new Date(2025, 11, 31)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col pt-2">
        <label className="text-[12px] leading-4 text-[#444444]">End Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex h-[32px] w-[179px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm leading-4 shadow-sm">
              <span>Dec 2024</span>
              <ChevronDown size={14} color="gray" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={formEndDate.date}
              onSelect={(date) =>
                setFormEndDate({ date: date!, userHasUpdated: true })
              }
              initialFocus
              captionLayout="dropdown-buttons"
              fromDate={new Date(2023, 0, 1)}
              toDate={new Date(2025, 11, 31)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
