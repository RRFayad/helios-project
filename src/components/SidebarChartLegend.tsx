interface SidebarChartLegendProps {
  fullScreenChartMode?: boolean;
}

function SidebarChartLegend({
  fullScreenChartMode = false,
}: SidebarChartLegendProps) {
  return (
    <div className="flex w-full flex-col items-center gap-y-[8px] lg:items-start">
      <h3 className={`font-medium ${fullScreenChartMode ? "hidden" : "block"}`}>
        Legend
      </h3>
      <div
        className={`flex gap-y-[8px] ${fullScreenChartMode ? "-mt-4 w-full flex-row items-center justify-around" : "flex-col"}`}
      >
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
