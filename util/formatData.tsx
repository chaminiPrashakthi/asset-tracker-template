import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

/**
 * Get marketCapture in given format
 * @param {number} n - price
 * @returns {string} The formatted value
 */
export function formatMarketCapture(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + " Bn";
  else if (n >= 1e6) return (n / 1e6).toFixed(2) + " Mn";
  return n.toString();
}
/**
 *  * Get price change percentage for the last 24 hours with inline styles
 * @param {number} percentChange - Price change
 * @returns {any} Formatted fluctuated price with inline stlyes
 */
export function getPriceChangePercentage(percentChange: number): {
  color: string;
  styleClass: string;
  formattedPercentChange: string;
} {
  // Calculate formatted percent change with two decimal points
  const formattedPercentChange: string =
    percentChange > 0
      ? "▲" + Math.abs(percentChange).toFixed(2)
      : "▼" + Math.abs(percentChange).toFixed(2);
  const color: string = percentChange > 0 ? "green" : "red";
  const styleClass: string = percentChange > 0 ? "status green" : "status red";

  return {
    color,
    styleClass,
    formattedPercentChange,
  };
}

/**
 * Get token proce in given format by concat with currency
 * @param {number} value - token price
 * @returns {string} Formatted price with concatenated currency
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
