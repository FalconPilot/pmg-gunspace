// Pick an unbiased random value
export const pickRandom = <T>(
  arr: T[] | readonly T[],
): T =>
  arr[Math.floor(Math.random() * arr.length)]

// Pick a random value with percentile chance
export const pickPercentileRandom = <T>(
  arr: T[] | readonly T[],
  rng: Array<readonly [T, number]>,
): T => {
  const roll = Math.floor(Math.random() * 100) + 1

  const fallback = pickRandom(
    arr.filter(i => !rng.map(r => r[0]).includes(i))
  )

  return rng.reduce((current, [item, prob]) => (
    roll <= prob ? item : current
  ), fallback)
}
