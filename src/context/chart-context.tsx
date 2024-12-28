"use client";
import React, { useState } from "react";

export interface ChartContextInterface {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  showClimateRisk: boolean;
  toggleShowClimateRisk: () => void;
  showPriceRange: boolean;
  toggleShowPriceRange: () => void;
}

const DUMMY_START_DATE = new Date(Date.UTC(2024, 0, 1));
const DUMMY_END_DATE = new Date(Date.UTC(2024, 11, 31));

const ChartContext = React.createContext<ChartContextInterface | null>(null);

export const ChartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [startDate, setStartDate] = useState(DUMMY_START_DATE);
  const [endDate, setEndDate] = useState(DUMMY_END_DATE);
  const [showClimateRisk, setShowClimateRisk] = useState(true);
  const [showPriceRange, setShowPriceRange] = useState(true);

  const toggleShowClimateRisk = () => {
    setShowClimateRisk((prevState) => !prevState);
  };
  const toggleShowPriceRange = () => {
    setShowPriceRange((prevState) => !prevState);
  };

  const contextValue = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    showClimateRisk,
    toggleShowClimateRisk,
    showPriceRange,
    toggleShowPriceRange,
  };

  return (
    <ChartContext.Provider value={contextValue}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartContext;
