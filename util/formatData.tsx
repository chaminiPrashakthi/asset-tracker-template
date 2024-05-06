import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

export function formatMarketCapture(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + " Bn";
  else if (n >= 1e6) return (n / 1e6).toFixed(2) + " Mn";
  return n.toString();
}

export function getPriceChangePrecentage(percentChange: number): {
  icon: JSX.Element;
  color: string;
  formattedPercentChange: string;
} {
  // Calculate formatted percent change with two decimal points
  const formattedPercentChange: string = Math.abs(percentChange).toFixed(2);

  const icon: JSX.Element = percentChange > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />;
  const color: string = percentChange > 0 ? "green" : "red";

  return {
    icon,
    color,
    formattedPercentChange,
  };
}
