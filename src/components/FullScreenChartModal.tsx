"use client";
import { Maximize2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Chart from "./Chart";
import { useContext } from "react";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";
import { format } from "date-fns";
import SidebarChartLegend from "./SidebarChartLegend";

function FullScreenChartModal() {
  const { startDate, endDate } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  return (
    <Dialog>
      <DialogTrigger>
        <Maximize2 size={16} color="#1c1c1c" />
      </DialogTrigger>
      <DialogContent className="h-[90vh] w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {`${format(startDate, "MMM dd, yyyy")} to ${format(endDate, "MMM dd, yyyy")}`}
          </DialogTitle>
          <Chart />
        </DialogHeader>
        <DialogFooter className="flex">
          <SidebarChartLegend fullScreenChartMode />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FullScreenChartModal;
