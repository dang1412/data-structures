package llrbtree

import (
	"testing"
)

func TestNewTree(t *testing.T) {
	tree := New()
	tree.Insert(Int(1))
}
