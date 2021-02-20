package priorityqueue

// Item represents a single object in the heap.
type Item interface {
	// Less tests whether the current item is less than the given argument.
	Less(i Item) bool
}

// Heap structure
type Heap struct {
	items []Item
}

// New creates empty heap
func New() *Heap {
	return &Heap{}
}

// IsEmpty determines if heap empty or not
func (h *Heap) IsEmpty() bool {
	return len(h.items) == 0
}

// Push pushes 1 item to the heap and rebuild
func (h *Heap) Push(item Item) {
	h.items = append(h.items, item)

	i := len(h.items) - 1
	for i > 0 {
		parent := (i - 1) / 2
		if h.items[i].Less(h.items[parent]) {
			swap(&h.items[i], &h.items[parent])
			i = parent
		} else {
			break
		}
	}
}

// Pop removes the first item and return it
func (h *Heap) Pop() Item {
	if h.IsEmpty() {
		return nil
	}

	item := h.items[0]
	index := len(h.items) - 1
	h.items[0] = h.items[index]
	h.items[index] = nil
	h.items = h.items[:index]
	if !h.IsEmpty() {
		h.heapify(0)
	}

	return item
}

// Top gets the first item without remove it
func (h *Heap) Top() Item {
	if h.IsEmpty() {
		return nil
	}

	return h.items[0]
}

func (h *Heap) heapify(i int) {
	l := 2*i + 1
	r := 2*i + 2
	smallest := i
	heapSize := len(h.items)
	if l < heapSize && h.items[l].Less(h.items[i]) {
		smallest = l
	}
	if r < heapSize && h.items[r].Less(h.items[smallest]) {
		smallest = r
	}
	if smallest != i {
		swap(&h.items[i], &h.items[smallest])
		h.heapify(smallest)
	}
}

func swap(i1 *Item, i2 *Item) {
	tmp := *i1
	*i1 = *i2
	*i2 = tmp
}
