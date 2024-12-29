"use client";

import { Upload } from "lucide-react";
import { exportDataToCSVByPeriod } from "@/actions/export-data";
import ChartContext, { ChartContextInterface } from "@/context/chart-context";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useContext, useEffect, useState } from "react";

function ExportDataBtn() {
  const { startDate, endDate } = useContext(
    ChartContext,
  ) as ChartContextInterface;

  const [startDownload, setStartDownload] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDataToCSV = async () => {
      if (startDownload) {
        try {
          const cocoaData = await exportDataToCSVByPeriod(startDate, endDate);

          const blob = new Blob([cocoaData], {
            type: "text/csv;charset=utf-8;",
          });

          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "cocoa_data.csv");

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchDataToCSV();
    setStartDownload(false);

    return () => {
      controller.abort();
    };
  }, [startDownload, endDate, startDate]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={() => setStartDownload(true)}>
          <Upload size={16} color="#1c1c1c" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Export Data</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ExportDataBtn;
