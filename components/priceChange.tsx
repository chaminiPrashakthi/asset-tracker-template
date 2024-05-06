import React from "react";
import { getPriceChangePercentage } from "../util/formatData";

interface PriceChangeProps {
  percentChange: number;
}

const PriceChange: React.FC<PriceChangeProps> = ({ percentChange }) => {
  const { color, styleClass, formattedPercentChange } = getPriceChangePercentage(percentChange);

  return (
    <span style={{ color }} className={styleClass}>
      {formattedPercentChange}%
    </span>
  );
};

export default PriceChange;
