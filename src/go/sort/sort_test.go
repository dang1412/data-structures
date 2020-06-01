package sort

import (
	"reflect"
	"testing"
)

// Int implements the Item interface for integers.
type Int int

// Less returns true if int(a) < int(b).
func (a Int) Less(b Item) bool {
	return a < b.(Int)
}

var origin = []Int{3, 4, 9, 1, 4, 2, 7, 10, 8, 8}
var sorted = clone([]Int{1, 2, 3, 4, 4, 7, 8, 8, 9, 10})

func clone(origin []Int) []Item {
	n := len(origin)
	arr := make([]Item, n)
	for i := 0; i < n; i++ {
		arr[i] = origin[i]
	}

	return arr
}

func TestBubbleSort(t *testing.T) {
	arr := clone(origin)
	if BubbleSort(arr); !reflect.DeepEqual(arr, sorted) {
		t.Fatalf("Got %v\nWant %v\n", arr, sorted)
	}
}

func TestInsertionSort(t *testing.T) {
	arr := clone(origin)
	if InsertionSort(arr); !reflect.DeepEqual(arr, sorted) {
		t.Fatalf("Got %v\nWant %v\n", arr, sorted)
	}
}

func TestQuickSort(t *testing.T) {
	arr := clone(origin)
	if QuickSort(arr); !reflect.DeepEqual(arr, sorted) {
		t.Fatalf("Got %v\nWant %v\n", arr, sorted)
	}
}

func TestSelectionSort(t *testing.T) {
	arr := clone(origin)
	if SelectionSort(arr); !reflect.DeepEqual(arr, sorted) {
		t.Fatalf("Got %v\nWant %v\n", arr, sorted)
	}
}

func TestMergeSort(t *testing.T) {
	arr := clone(origin)
	if MergeSort(arr); !reflect.DeepEqual(arr, sorted) {
		t.Fatalf("Got %v\nWant %v\n", arr, sorted)
	}
}
