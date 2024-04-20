import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const formatNumber = (num:number)=>{
  return  new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 }).format(num)
}

export function decimal(num: number): number {
  return Number(num) * Number(1e9)
}

export function unDecimal(num: number): number {
  return Number(num) / Number(1e9)
}

export const handleCopy = async () => {
    await navigator.clipboard.readText().then(text => {
    return text
      });
    };
