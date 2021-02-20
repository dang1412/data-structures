package priorityqueue

import (
	"reflect"
	"sort"
	"testing"
)

// Int implements the Item interface for integers.
type Int int

// Less returns true if int(a) < int(b).
func (a Int) Less(b Item) bool {
	return a < b.(Int)
}

var priorityQueue = New()

func TestPriorityQueue(t *testing.T) {
	arr := []Int{3, 6, 2, 1, 7, 8, 9}
	for _, num := range arr {
		priorityQueue.Push(num)
	}

	// pop from queue
	sorted := make([]Int, 0, len(arr))
	for !priorityQueue.IsEmpty() {
		sorted = append(sorted, priorityQueue.Pop().(Int))
	}

	// sort origin array
	sort.Slice(arr, func(i, j int) bool {
		return arr[i].Less(arr[j])
	})

	// check equal
	if !reflect.DeepEqual(sorted, arr) {
		t.Fatalf("mismatch:\n got: %v\nwant: %v", sorted, arr)
	}
}
