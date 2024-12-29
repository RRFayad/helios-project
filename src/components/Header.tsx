import { Info, Upload } from "lucide-react";
import FullScreenChartModal from "./FullScreenChartModal";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Header() {
  return (
    <div className="flex h-8 items-center justify-between px-8">
      <h1 className="text-base font-semibold">
        Global Price of Cocoa Beans (per kg)
      </h1>
      <div className="flex items-center justify-center gap-x-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} color="#1c1c1c" />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                To make this data possible and accurate, Helios's artificial
                <br />
                intelligence analyzes data from over 150 countries and more than
                <br />
                60,000 global sources, updated every 15 minutes.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Upload size={16} color="#1c1c1c" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Export Data</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <FullScreenChartModal />
      </div>
    </div>
  );
}

export default Header;
