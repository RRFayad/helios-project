import { useState } from "react";
import { DualRangeSlider } from "./ui/dual-range-slider";

function TimeSelector() {
  const [values, setValues] = useState([0, 11]);
  return (
    <div className="grid h-[72px] grid-cols-[10fr_3fr] gap-x-10">
      <DualRangeSlider
        value={values}
        onValueChange={setValues}
        min={0}
        max={11}
        step={1}
        className="mx-10 w-full"
      />

      <div className="w-full">A</div>
    </div>
  );
}

export default TimeSelector;
