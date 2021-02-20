package sort

// Item interface
type Item interface {
	Less(than Item) bool
}

func swap(arr []Item, i, j int) {
	tmp := arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}
