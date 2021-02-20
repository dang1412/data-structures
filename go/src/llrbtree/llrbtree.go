package llrbtree

// Item interface
type Item interface {
	Less(than Item) bool
}

// Node struct
type Node struct {
	Item
	Left, Right *Node
	Black       bool
}

// LLRBTree struct
type LLRBTree struct {
	count int
	root  *Node
}

// New allocates a new tree
func New() *LLRBTree {
	return &LLRBTree{}
}

// Root returns the root node of the tree.
// It is intended to be used by functions that serialize the tree.
func (t *LLRBTree) Root() *Node {
	return t.root
}

// Len returns the number of nodes in the tree.
func (t *LLRBTree) Len() int { return t.count }

// Has returns true if the tree contains an element whose order is the same as that of key.
func (t *LLRBTree) Has(key Item) bool {
	return t.Get(key) != nil
}

// Get retrieves an element from the tree whose order is the same as that of key.
func (t *LLRBTree) Get(key Item) Item {
	h := t.root
	for h != nil {
		switch {
		case key.Less(h.Item):
			h = h.Left
		case h.Item.Less(key):
			h = h.Right
		default:
			return h.Item
		}
	}
	return nil
}

// Insert inserts item into the tree. If an existing element
// has the same order, both elements remain in the tree.
func (t *LLRBTree) Insert(item Item) {
	if item == nil {
		panic("inserting nil item")
	}
	t.root = t.insert(t.root, item)
	t.root.Black = true
	t.count++
}

func (t *LLRBTree) insert(node *Node, item Item) *Node {
	if node == nil {
		return &Node{Item: item}
	}

	if item.Less(node.Item) {
		node.Left = t.insert(node.Left, item)
	} else {
		node.Right = t.insert(node.Right, item)
	}

	if isRed(node.Right) && !isRed(node.Left) {
		node = rotateLeft(node)
	}

	if isRed(node.Left) && isRed(node.Left.Left) {
		node = rotateRight(node)
	}

	if isRed(node.Left) && isRed(node.Right) {
		flip(node)
	}

	return node
}

// DeleteMin deletes the minimum element in the tree and returns the
// deleted item or nil otherwise.
func (t *LLRBTree) DeleteMin() Item {
	var deleted Item
	t.root, deleted = deleteMin(t.root)
	if t.root != nil {
		t.root.Black = true
	}
	if deleted != nil {
		t.count--
	}
	return deleted
}

// deleteMin code for LLRBTree 2-3 trees
func deleteMin(h *Node) (*Node, Item) {
	if h == nil {
		return nil, nil
	}
	if h.Left == nil {
		return nil, h.Item
	}

	if !isRed(h.Left) && !isRed(h.Left.Left) {
		h = moveRedLeft(h)
	}

	var deleted Item
	h.Left, deleted = deleteMin(h.Left)

	return fixUp(h), deleted
}

// DeleteMax deletes the maximum element in the tree and returns
// the deleted item or nil otherwise
func (t *LLRBTree) DeleteMax() Item {
	var deleted Item
	t.root, deleted = deleteMax(t.root)
	if t.root != nil {
		t.root.Black = true
	}
	if deleted != nil {
		t.count--
	}
	return deleted
}

func deleteMax(h *Node) (*Node, Item) {
	if h == nil {
		return nil, nil
	}
	if isRed(h.Left) {
		h = rotateRight(h)
	}
	if h.Right == nil {
		return nil, h.Item
	}
	if !isRed(h.Right) && !isRed(h.Right.Left) {
		h = moveRedRight(h)
	}
	var deleted Item
	h.Right, deleted = deleteMax(h.Right)

	return fixUp(h), deleted
}

// Delete deletes an item from the tree whose key equals key.
// The deleted item is return, otherwise nil is returned.
func (t *LLRBTree) Delete(key Item) Item {
	var deleted Item
	t.root, deleted = t.delete(t.root, key)
	if t.root != nil {
		t.root.Black = true
	}
	if deleted != nil {
		t.count--
	}
	return deleted
}

func (t *LLRBTree) delete(h *Node, item Item) (*Node, Item) {
	var deleted Item
	if h == nil {
		return nil, nil
	}
	if item.Less(h.Item) {
		if h.Left == nil { // item not present. Nothing to delete
			return h, nil
		}
		if !isRed(h.Left) && !isRed(h.Left.Left) {
			h = moveRedLeft(h)
		}
		h.Left, deleted = t.delete(h.Left, item)
	} else {
		if isRed(h.Left) {
			h = rotateRight(h)
		}
		// If @item equals @h.Item and no right children at @h
		if !h.Item.Less(item) && h.Right == nil {
			return nil, h.Item
		}
		// PETAR: Added 'h.Right != nil' below
		if h.Right != nil && !isRed(h.Right) && !isRed(h.Right.Left) {
			h = moveRedRight(h)
		}
		// If @item equals @h.Item, and (from above) 'h.Right != nil'
		if !h.Item.Less(item) {
			var subDeleted Item
			h.Right, subDeleted = deleteMin(h.Right)
			if subDeleted == nil {
				panic("logic")
			}
			deleted, h.Item = h.Item, subDeleted
		} else { // Else, @item is bigger than @h.Item
			h.Right, deleted = t.delete(h.Right, item)
		}
	}

	return fixUp(h), deleted
}

/* Internal Utilities Functions */

func isRed(node *Node) bool {
	if node == nil {
		return false
	}
	return !node.Black
}

func rotateLeft(h *Node) *Node {
	x := h.Right
	if x.Black {
		panic("rotating a black link")
	}
	h.Right = x.Left
	x.Left = h
	x.Black = h.Black
	h.Black = false
	return x
}

func rotateRight(h *Node) *Node {
	x := h.Left
	if x.Black {
		panic("rotating a black link")
	}
	h.Left = x.Right
	x.Right = h
	x.Black = h.Black
	h.Black = false
	return x
}

// REQUIRE: Left and Right children must be present
func flip(h *Node) {
	h.Black = !h.Black
	h.Left.Black = !h.Left.Black
	h.Right.Black = !h.Right.Black
}

// REQUIRE: Left and Right children must be present
func moveRedLeft(h *Node) *Node {
	flip(h)
	if isRed(h.Right.Left) {
		h.Right = rotateRight(h.Right)
		h = rotateLeft(h)
		flip(h)
	}
	return h
}

// REQUIRE: Left and Right children must be present
func moveRedRight(h *Node) *Node {
	flip(h)
	if isRed(h.Left.Left) {
		h = rotateRight(h)
		flip(h)
	}
	return h
}

func fixUp(h *Node) *Node {
	if isRed(h.Right) {
		h = rotateLeft(h)
	}

	if isRed(h.Left) && isRed(h.Left.Left) {
		h = rotateRight(h)
	}

	if isRed(h.Left) && isRed(h.Right) {
		flip(h)
	}

	return h
}

/* Interface int, string */

// Int Item interface
type Int int

// Less implements Item interface for Int
func (x Int) Less(than Item) bool {
	return x < than.(Int)
}

// String Item interface
type String string

// Less implements Item interface for String
func (x String) Less(than Item) bool {
	return x < than.(String)
}
