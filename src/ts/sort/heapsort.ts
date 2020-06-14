import { swap } from './common'

// HeapSort sorts array of item using max heap
export function heapSort(a: number[]) {
	const n = a.length
	// max heapify
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(a, i, n)
	}

	// sort
	for (let i = n - 1; i > 0; i--) {
		// swap the largest element to the end
		swap(a, 0, i)
		// heapify from root, exclude the last element
		heapify(a, 0, i)
	}
}

function heapify(a: number[], i: number, n: number) {
	const l = 2*i + 1
	const r = 2*i + 2
	let largest = i
	if (l < n && a[i] < a[l]) {
		largest = l
	}
	if (r < n && a[largest] < a[r]) {
		largest = r
	}
	if (largest !== i) {
		swap(a, i, largest)
		heapify(a, largest, n)
	}
}
