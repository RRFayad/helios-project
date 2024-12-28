"use client";
import { useContext } from "react";
import { Checkbox } from "./ui/checkbox";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

function SidebarOptions() {
  const {
    showClimateRisk,
    showPriceRange,
    toggleShowClimateRisk,
    toggleShowPriceRange,
  } = useContext(ChartContext) as ChartContextInterface;

  return (
    <div className="flex w-full flex-col items-center gap-y-[8px] lg:items-start">
      <h3 className="font-medium">Options</h3>
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex items-center justify-start gap-x-2">
          <Checkbox
            className="h-[15px] w-[15px]"
            checked={showClimateRisk}
            onCheckedChange={toggleShowClimateRisk}
          />
          <span>Show climate risk</span>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <Checkbox
            className="h-[15px] w-[15px]"
            checked={showPriceRange}
            onCheckedChange={toggleShowPriceRange}
          />
          <span>Show price ranges</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarOptions;
