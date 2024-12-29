export interface TimeSelectorState {
  initial: number;
  final: number;
  lastUpdatedBy?: "slider" | "select" | "date-picker";
}

export type TimeSelectorAction =
  | {
      type: "SET_RANGE";
      payload: { monthRange: number[]; updatebBy: "slider" };
    }
  | {
      type: "SET_INITIAL_MONTH";
      payload: { month: number; updatedBy: "select" | "date-picker" };
    }
  | {
      type: "SET_FINAL_MONTH";
      payload: { month: number; updatedBy: "select" | "date-picker" };
    };
