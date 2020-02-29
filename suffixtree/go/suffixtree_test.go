package suffixtree

import (
	"testing"
)

func TestNewTree(t *testing.T) {
	suffixTree := New([]rune("abcbcdabcdx"))
	suffixTree.Print()
}
