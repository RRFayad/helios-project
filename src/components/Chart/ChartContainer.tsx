import Chart from "./Chart";
import Sidebar from "@/components/Chart/Sidebar/Sidebar";

function ChartContainer() {
  return (
    <div className="lg:grid lg:grid-cols-[5fr_1fr] lg:gap-x-10">
      <div className="flex w-full flex-row items-center justify-center">
        <div className="hidden text-xs font-semibold [-webkit-transform:rotate(180deg)] [writing-mode:vertical-lr] md:block">
          Weighted Avg price per kg
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="h-[301px] w-full">
            <Chart />
          </div>
        </div>
        <div className="hidden text-xs font-semibold [-webkit-transform:rotate(180deg)] [writing-mode:vertical-lr] md:block">
          Weighted Avg % Risk (WA%R)
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default ChartContainer;
