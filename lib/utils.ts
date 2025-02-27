import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// Соединение классов
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
