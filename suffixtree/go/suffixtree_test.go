package suffixtree

import (
	"testing"
)

func TestNewTree(t *testing.T) {
	suffixTree := New("abcbcbabcbd")
	suffixTree.Print()

	suffixTree2 := New("abcbcdcdabcdddee")
	suffixTree2.Print()
}
