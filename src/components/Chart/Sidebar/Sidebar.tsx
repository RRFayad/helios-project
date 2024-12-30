import SidebarOptions from "./SidebarOptions";
import SidebarChartLegend from "./SidebarChartLegend";

function Sidebar() {
  return (
    <div className="-mt-4 flex w-full gap-y-[16px] text-[12px] leading-4 md:flex-row md:items-start md:justify-center lg:flex-col lg:items-center lg:justify-center">
      <SidebarOptions />
      <SidebarChartLegend />
    </div>
  );
}

export default Sidebar;
