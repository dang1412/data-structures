// QuickSort sorts array of items
export function mergeSort(arr: number[]) {
	msort(arr, 0, arr.length - 1)
}

function msort(arr: number[], low: number, high: number) {
	if (low < high) {
    const mid = Math.floor((low + high) / 2)
		msort(arr, low, mid)
    msort(arr, mid+1, high)
    merge(arr, low, mid, high)
	}
}

function merge(arr: number[], low: number, mid: number, high: number) {
  const tmplen = mid - low + 1
  const tmp = arr.slice(low, mid + 1)

	let d = low
	let i = 0
	let j = mid + 1
	for (; i < tmplen && j <= high; d++) {
		if (tmp[i] < arr[j]) {
			arr[d] = tmp[i]
			i++
		} else {
			arr[d] = arr[j]
			j++
		}
	}

	while (i < tmplen) {
		arr[d] = tmp[i]
		i++
		d++
	}
}
