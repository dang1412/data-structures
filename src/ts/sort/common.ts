export function swap(arr: number[], i: number, j: number) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
