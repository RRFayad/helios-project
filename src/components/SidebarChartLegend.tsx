import { Checkbox } from "./ui/checkbox";

function SidebarChartLegend() {
  return (
    <div className="flex w-full flex-col gap-y-[8px]">
      <h3 className="font-medium">Legend</h3>
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex items-center justify-start gap-x-2">
          <button className="h-3 w-3 bg-project-blue" />
          <span>Climate risk</span>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <button className="h-3 w-3 bg-project-brown" />
          <span>Average Price</span>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <button className="flex h-3 w-3 items-center justify-center overflow-hidden text-[12px] font-extrabold text-project-blue">
            <span>- -- -</span>
          </button>
          <span>Forecasted Climate Risk</span>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <button className="h-3 w-3 bg-project-yellow" />
          <span className="[white-space: nowrap]">Price Range (Max & Min)</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarChartLegend;
