package sort

// SelectionSort sorts array of items
func SelectionSort(arr []Item) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if arr[j].Less(arr[i]) {
				swap(arr, i, j)
			}
		}
	}
}
