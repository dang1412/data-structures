package sort

// HeapSort sorts array of item using max heap
func HeapSort(a []Item) {
	n := len(a)
	// max heapify
	for i := n / 2; i >= 0; i-- {
		heapify(a, i, n)
	}

	// sort
	for i := n - 1; i > 0; i-- {
		// swap the largest element to the end
		swap(a, 0, i)
		// heapify from root, exclude the last element
		heapify(a, 0, i)
	}
}

func heapify(a []Item, i, n int) {
	l := 2*i + 1
	r := 2*i + 2
	largest := i
	if l < n && a[i].Less(a[l]) {
		largest = l
	}
	if r < n && a[largest].Less(a[r]) {
		largest = r
	}
	if largest != i {
		swap(a, i, largest)
		heapify(a, largest, n)
	}
}
