import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatLabel(label: string) {
  return label
    .replace(/([A-Z])/g, ' $1')
    .replace(/^\s?([a-z])/, (c) => c.toUpperCase())
    .trim();
}



