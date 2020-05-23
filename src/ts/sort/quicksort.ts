import { swap } from './common'

// QuickSort sorts array of items
export function quickSort(arr: number[]) {
	sort(arr, 0, arr.length - 1)
}

function sort(arr: number[], low: number, high: number) {
	if (low < high) {
		const pi = partition(arr, low, high)
		sort(arr, low, pi-1)
		sort(arr, pi+1, high)
	}
}

function partition(arr: number[], low: number, high: number): number {
	const pivot = arr[high]
	let i = low

	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			swap(arr, i, j)
			i++
		}
	}
	swap(arr, i, high)

	return i
}
