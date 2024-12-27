export type CommodityData = {
  commodity: string;
  date_on: string;
  wapr: number;
  last: number | null;
  season_status: string;
};

export type PreparedDataForChart = {
  commodity: string;
  date_on: string;
  wapr: number | null;
  predictedWapr: number | null;
  last: number | null;
  priceRangeMin: string | null;
  priceRangeMax: string | null;
  month: string;
};
