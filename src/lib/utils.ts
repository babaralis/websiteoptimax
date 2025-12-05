import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to parse stat strings like "340%", "$47M", "127+", "68%", "5.0"
export function parseStatValue(stat: string): {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
} {
  const match = stat.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (!match) return { value: 0, prefix: "", suffix: "", decimals: 0 };

  const [, prefix, numStr, suffix] = match;
  const value = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return { value, prefix, suffix, decimals };
}
