export interface TimeSelectorState {
  initial: number;
  final: number;
  lastUpdatedBy?: "slider" | "select";
}

export type TimeSelectorAction =
  | { type: "SET_RANGE"; payload: number[] }
  | { type: "SET_INITIAL_MONTH"; payload: number }
  | { type: "SET_FINAL_MONTH"; payload: number };
