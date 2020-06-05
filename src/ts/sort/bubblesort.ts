import { swap } from './common'

// BubbleSort sorts array of items
export function bubbleSort(a: number[]) {
  const n = a.length
  for (let i = 0; i < n-1; i++) {
    let swapped = false
    for (let j = 0; j < n-i-1; j++) {
      if (a[j+1] < a[j]) {
        swap(a, j, j+1)
        swapped = true
      }
    }

    // IF no two elements were swapped by inner loop, then break
    if (!swapped) {
      break
    }
  }
}
