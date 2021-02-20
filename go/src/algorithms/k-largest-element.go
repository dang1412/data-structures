package algorithms

// KLargestElement finds k'th largest element
func KLargestElement(a []int, k int) int {
	left := 0
	right := len(a) - 1
	// k largest element mean we find pivot = k -1
	k--
	for left < right {
		pivot := partition(a, left, right)
		// found (pivot + 1)th largest element
		if pivot == k {
			return a[k]
		} else if pivot < k {
			// continue with right part
			left = pivot + 1
		} else {
			// continue with left part
			right = pivot - 1
		}
	}

	if right > 0 {
		return a[right]
	}

	return a[0]
}

func partition(a []int, left, right int) int {
	i := left
	for a[i] > a[right] {
		i++
	}

	// choose a[right] as the pivot
	for j := i + 1; j < right; j++ {
		if a[j] > a[right] {
			// move the larger number to head
			swap(a, i, j)
			i++
		}
	}

	if i < right {
		swap(a, i, right)
	}

	// a[i] is pivot,
	// all the elements before i (if any) larger than pivot,
	// all the elements after i (if any) less or equal pivot
	return i
}

func swap(a []int, i, j int) {
	tmp := a[i]
	a[i] = a[j]
	a[j] = tmp
}
