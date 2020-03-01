package suffixtree

// edges: map character => node index
// end = 0 means no end
type node struct {
	edges                   map[byte]int
	start, end, index, link int
}

// type edge struct {
// 	start, end int
// 	child      *node
// }

func (n *node) len(maxLen int) int {
	if n.end == 0 {
		return maxLen - n.start
	}
	return n.end - n.start
}

func (n *node) edgeStr(text string) string {
	if n.end == 0 {
		return text[n.start:]
	}
	return text[n.start:n.end]
}

type activePoint struct {
	node, length int
	edge         byte
}

// func (ap *activePoint) split(tree *SuffixTree, afterSplitChar, newChar uint8, pos int) *node {
// 	leaf := &node{index: t.count}
// 	t.count++
// 	leafEdge := &edge{i, 0, leaf}
// 	if p.e == nil {
// 		p.n.edges[newC] = leafEdge
// 		return p.n
// 	}

// 	iEdge := &edge{p.e.start + p.l, p.e.end, p.e.child}
// 	edges := make(map[rune]*edge)
// 	edges[splitC] = iEdge
// 	edges[newC] = leafEdge

// 	iNode := &node{edges, nil, t.count}
// 	t.count++

// 	// update current edge
// 	p.e.end = p.e.start + p.l
// 	p.e.child = iNode

// 	return iNode
// }

type SuffixTree struct {
	nodes []node
	text  string
}

// New creates
func New(text string) *SuffixTree {
	root := node{make(map[byte]int), 0, 0, 0, 0}
	tree := &SuffixTree{[]node{root}, text}
	return tree
}

func (tree *SuffixTree) newNode(edges map[byte]int, start, end int) int {
	index := len(tree.nodes)
	node := node{edges, start, end, index, 0}
	tree.nodes = append(tree.nodes, node)
	return index
}

func (tree *SuffixTree) split(ap *activePoint, pos int) int {
	if ap.length == 0 {
		tree.newNode(nil, pos, 0)
		return ap.node
	}

	// TODO panic if active edge not available (ap.edge == 0)

	// current edge info
	activeNode := tree.nodes[ap.node]
	childNode := tree.nodes[activeNode.edges[ap.edge]]
	edgeStart := childNode.start
	edgeMidPos := childNode.start + ap.length

	// update current edge
	childNode.start = edgeMidPos

	// create new internal node
	internalEdges = make(map[byte]int)
	internalEdges[tree.text[edgeMidPos]] = childNode.index
	internalNodeIndex := tree.newNode(internalEdges, edgeStart, edgeMidPos)

	// create new leaf node
	internalEdges[tree.text[pos]] = tree.newNode(nil, pos, 0)

	return internalNodeIndex
}

// guarantee that the move can be done or panic
func (tree *SuffixTree) move(nodeIndex, left, right int) *activePoint {
	maxlen := len(t.text)
	for l < r {
		count := r - l
		edge := n.edges[t.text[l]]

		// TODO if edge nil panic

		// stop on middle this edge
		if edge.len(maxlen) > count {
			return &activePoint{n, edge, count}
		}

		// move down
		n = edge.child
		l += edge.len(maxlen)
	}

	// stop right at a node
	return &activePoint{nodeIndex, 0, 0}
}
