import { Checkbox } from "./ui/checkbox";

function Sidebar() {
  return (
    <div className="mt-4 flex w-[204px] flex-col text-[14px]">
      <div>
        <h3 className="mb-2">Options</h3>
        <div className="mt-1 flex items-center justify-start gap-x-2">
          <Checkbox />
          <span>Show climate risk</span>
        </div>
        <div className="mt-1 flex items-center justify-start gap-x-2">
          <Checkbox />
          <span>Show price ranges</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-2">Legend</h3>
        <div className="mt-1 flex items-center justify-start gap-x-2">
          <button className="bg-project-blue h-4 w-4" />
          <span>Climate risk</span>
        </div>
        <div className="mt-1 flex items-center justify-start gap-x-2">
          <button className="bg-project-brown h-4 w-4" />
          <span>Average Price</span>
        </div>
        <div className="mt-1 flex items-center justify-start gap-x-2">
          <button className="h-4 w-4 bg-red-600" />
          <span>Forecasted Climate Risk</span>
        </div>
        <div className="mt-1 flex items-center justify-start gap-x-2">
          <button className="bg-project-yellow h-4 w-4" />
          <span>Price Range (Max & Min)</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
