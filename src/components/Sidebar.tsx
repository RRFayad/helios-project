import SidebarChartLegend from "./SidebarChartLegend";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className="-mt-4 flex w-[204px] gap-y-[16px] text-[12px] leading-4 md:w-full md:flex-row md:items-start md:justify-center lg:flex-col lg:items-center lg:justify-center">
      <SidebarOptions />
      <SidebarChartLegend />
    </div>
  );
}

export default Sidebar;
