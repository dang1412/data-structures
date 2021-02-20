package sort

// InsertionSort sorts array of items
func InsertionSort(arr []Item) {
	n := len(arr)
	for i := 1; i < n; i++ {
		key := arr[i]
		j := i - 1
		for ; j >= 0 && key.Less(arr[j]); j-- {
			arr[j+1] = arr[j]
		}
		arr[j+1] = key
	}
}
