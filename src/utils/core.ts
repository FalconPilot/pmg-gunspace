export const pickRandom = <T>(arr: T[] | readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)]
