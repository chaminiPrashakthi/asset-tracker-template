import React from "react";

import { getPriceChangePercentage } from "@/util/formatData";

// price change component in the last 24 hours
const PriceChange: React.FC<{ percentChange: number }> = ({ percentChange }) => {
  const { color, styleClass, formattedPercentChange } = getPriceChangePercentage(percentChange);

  return (
    <span style={{ color }} className={styleClass}>
      {formattedPercentChange}%
    </span>
  );
};

export default PriceChange;
