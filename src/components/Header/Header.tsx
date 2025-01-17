import InfoTooltip from "./InfoTooltip";
import ExportDataBtn from "./ExportDataBtn";
import FullScreenChartModal from "./FullScreenChartModal";

function Header() {
  return (
    <div className="flex h-8 items-center justify-between px-8 md:flex-row">
      <h1 className="text-center text-base font-semibold">
        Global Price of Cocoa Beans (per kg)
      </h1>
      <div className="hidden items-center justify-center gap-x-4 md:flex">
        <InfoTooltip />
        <ExportDataBtn />
        <FullScreenChartModal />
      </div>
    </div>
  );
}

export default Header;
