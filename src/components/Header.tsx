import { Info, Upload, Maximize2 } from "lucide-react";

function Header() {
  return (
    <div className="flex h-8 items-center justify-between">
      <h1 className="text-base font-semibold">
        Global Price of Cocoa Beans (per kg)
      </h1>
      <div className="flex items-center justify-center gap-x-6">
        <button className="cursor-pointer">
          <Info size={20} color="#1c1c1c" />
        </button>
        <button className="cursor-pointer">
          <Upload size={20} color="#1c1c1c" />
        </button>
        <button className="cursor-pointer">
          <Maximize2 size={20} color="#1c1c1c" />
        </button>
      </div>
    </div>
  );
}

export default Header;
