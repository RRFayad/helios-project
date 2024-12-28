import { useState } from "react";
import { DualRangeSlider } from "./ui/dual-range-slider";
import { DatePickerForm } from "./date-picker-form";

function TimeSelector() {
  const [values, setValues] = useState([0, 11]);
  return (
    <div className="mb-2 grid h-[72px] grid-cols-[10fr_3fr] gap-x-20">
      <DualRangeSlider
        value={values}
        onValueChange={setValues}
        min={0}
        max={11}
        step={1}
        className="ml-10 w-full"
      />

      <div className="w-full">
        <DatePickerForm />
      </div>
    </div>
  );
}

export default TimeSelector;
