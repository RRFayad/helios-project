import { Checkbox } from "./ui/checkbox";

function SidebarOptions() {
  return (
    <div className="flex w-full flex-col gap-y-[8px]">
      <h3 className="font-medium">Options</h3>
      <div className="flex flex-col gap-y-[8px]">
        <div className="flex items-center justify-start gap-x-2">
          <Checkbox className="h-[15px] w-[15px]" />
          <span>Show climate risk</span>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <Checkbox className="h-[15px] w-[15px]" />
          <span>Show price ranges</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarOptions;
