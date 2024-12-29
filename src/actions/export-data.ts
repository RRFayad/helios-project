"use server";

import DUMMY_DATA from "@/lib/data.json";
import { CommodityData } from "@/types/data";

export const exportDataToCSVByPeriod = async (
  startDate: Date,
  endDate: Date,
) => {
  const data: CommodityData[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA);
    }, 500);
  });

  const updatedData = data.filter(
    (item) =>
      new Date(item.date_on) >= startDate && new Date(item.date_on) <= endDate,
  );

  const headers = Object.keys(updatedData[0]).join(",");
  const rows = updatedData.map((row) =>
    Object.values(row)
      .map((value) => (value !== null ? `"${value}"` : ""))
      .join(","),
  );

  return [headers, ...rows].join("\n");
};
