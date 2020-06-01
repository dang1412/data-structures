package sort

// MergeSort sorts array of items arr
func MergeSort(arr []Item) {
	msort(arr, 0, len(arr)-1)
}

func msort(arr []Item, low, high int) {
	if low < high {
		mid := (low + high) / 2
		msort(arr, low, mid)
		msort(arr, mid+1, high)
		merge(arr, low, mid, high)
	}
}

func merge(arr []Item, low, mid, high int) {
	tmplen := mid - low + 1
	tmp := make([]Item, tmplen)
	copy(tmp, arr[low:mid+1])

	d := low
	i := 0
	j := mid + 1
	for ; i < tmplen && j <= high; d++ {
		if tmp[i].Less(arr[j]) {
			arr[d] = tmp[i]
			i++
		} else {
			arr[d] = arr[j]
			j++
		}
	}

	for i < tmplen {
		arr[d] = tmp[i]
		i++
		d++
	}
}
