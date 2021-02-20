package algorithms

import (
	"testing"
)

func TestKLargestElement(t *testing.T) {
	a := []int{1, 6, 4, 2, 7, 8, 4}
	klargest := KLargestElement(a, 3)
	if klargest != 6 {
		t.Fatalf("Got %d\nWant %v\n", klargest, 6)
	}
}
