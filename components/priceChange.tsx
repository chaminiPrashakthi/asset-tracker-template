import React from "react";
import { getPriceChangePrecentage } from "@/util/formatData";

const PriceChange: React.FC<{ percentChange: number }> = ({ percentChange }) => {
  const { color, formattedPercentChange } = getPriceChangePrecentage(percentChange);

  return <span style={{ color }}>{formattedPercentChange}%</span>;
};

export default PriceChange;
