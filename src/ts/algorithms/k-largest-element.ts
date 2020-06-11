// KLargestElement finds k'th largest element
export function kLargestElement(a: number[], k: number): number {
	let left = 0
	let right = a.length - 1
	// k largest element === l smallest element
	const l = a.length - k
	while (left < right) {
		const pivot = partition(a, left, right)
		// found l smallest element
		if (pivot == l) {
			return a[l]
		} else if (pivot < l) {
			// continue with right part
			left = pivot + 1
		} else {
			// continue with left part
			right = pivot - 1
		}
	}

	return right > 0 ? a[right] : a[0]
}

function partition(a: number[], left: number, right: number): number {
	let i = left
	while (a[i] < a[right]) {
		i++
	}

	// choose a[right] as the pivot
	for (let j = i + 1; j < right; j++) {
		if (a[j] < a[right]) {
			// move the less number to head
			swap(a, i, j)
			i++
		}
	}

	if (i < right) {
		swap(a, i, right)
	}

	// a[i] is pivot,
	// all the elements before i (if any) less than pivot,
	// all the elements after i (if any) large or equal pivot
	return i
}

function swap(a: number[], i: number, j: number) {
	const tmp = a[i]
	a[i] = a[j]
	a[j] = tmp
}
