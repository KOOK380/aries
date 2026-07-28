import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names while de-duplicating conflicting Tailwind
 * utilities. Keeps component code readable: `cn("p-2", isActive && "p-4")`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
