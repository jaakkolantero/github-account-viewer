export const clamp = (num: number, clamp: number, higher: number): number =>
  higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp);
