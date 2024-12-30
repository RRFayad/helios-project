import { convertMonthNumberToContent } from "@/lib/utils";
import { TimeSelectorAction, TimeSelectorState } from "@/types/time-selector";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MonthSelectorProps {
  dispatch: (action: TimeSelectorAction) => void;
  monthsRangeState: TimeSelectorState;
}

function MonthSelector({ dispatch, monthsRangeState }: MonthSelectorProps) {
  return (
    <div className="hidden w-full flex-row items-center justify-center space-x-4 lg:flex">
      <div className="flex w-full flex-col pt-2">
        <Select
          onValueChange={(value) =>
            dispatch({
              type: "SET_INITIAL_MONTH",
              payload: { month: Number(value), updatedBy: "select" },
            })
          }
        >
          <span className="text-[12px] leading-4 text-[#444444S]">
            Start Date
          </span>
          <SelectTrigger className="mt-1 flex h-[32px] w-[130px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm shadow-sm xl:w-[179px]">
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
      <div className="flex w-full flex-col pt-2">
        <Select
          onValueChange={(value) => {
            dispatch({
              type: "SET_FINAL_MONTH",
              payload: { month: Number(value), updatedBy: "select" },
            });
          }}
        >
          <span className="text-[12px] leading-4 text-[#444444S]">
            End Date
          </span>
          <SelectTrigger className="mt-1 flex h-[32px] w-[130px] items-center justify-between rounded-md border border-[#C9C9C9] bg-[#F3F3F3] px-3 py-2 text-sm shadow-sm xl:w-[179px]">
            <SelectValue
              placeholder={convertMonthNumberToContent(monthsRangeState.final)}
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
  );
}

export default MonthSelector;
