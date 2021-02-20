// InsertionSort sorts array of items
export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]
    let j = i - 1
    for (; j >= 0 && key < arr[j]; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = key
  }
}
