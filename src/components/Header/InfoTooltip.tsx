import { Info } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function InfoTooltip() {
  return (
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
  );
}

export default InfoTooltip;
