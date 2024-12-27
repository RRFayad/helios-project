import SidebarChartLegend from "./SidebarChartLegend";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className="flex w-[204px] flex-col items-center justify-center gap-y-[16px] text-[12px] leading-4">
      <SidebarOptions />
      <SidebarChartLegend />
    </div>
  );
}

export default Sidebar;
