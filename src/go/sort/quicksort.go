package sort

// QuickSort sorts array of items arr
func QuickSort(arr []Item) {
	sort(arr, 0, len(arr)-1)
}

func sort(arr []Item, low, high int) {
	if low < high {
		pi := partition(arr, low, high)
		sort(arr, low, pi-1)
		sort(arr, pi+1, high)
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
