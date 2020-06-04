import { swap } from './common'

// SelectionSort sorts array of items
export function selectionSort(a: number[]) {
	const n = a.length
	for (let i = 0; i < n-1; i++) {
		for (let j = i + 1; j < n; j++) {
			if (a[j] < a[i]) {
				swap(a, i, j)
			}
		}
	}
}
