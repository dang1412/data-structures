package sort

// QuickSort sorts array of items arr
func QuickSort(arr []Item) {
	qsort(arr, 0, len(arr)-1)
}

func qsort(arr []Item, low, high int) {
	if low < high {
		pi := partition(arr, low, high)
		qsort(arr, low, pi-1)
		qsort(arr, pi+1, high)
	}
}

func partition(arr []Item, low, high int) int {
	pivot := arr[high]
	i := low

	for j := low; j < high; j++ {
		if arr[j].Less(pivot) {
			swap(arr, i, j)
			i++
		}
	}
	swap(arr, i, high)

	return i
}
