package suffixtree

import (
	"testing"
)

func TestNewTree(t *testing.T) {
	suffixTree := New("abcbcbabcbd")
	suffixTree.Print()
}
