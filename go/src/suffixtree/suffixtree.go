package suffixtree

import "fmt"

// edges: map character => node index
// end = 0 means no end
type node struct {
	edges                   map[byte]int
	start, end, index, link int
}

func (n *node) edgeLen(maxLen int) int {
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

// SuffixTree type
type SuffixTree struct {
	nodes []node
	text  string
}

// New creates SuffixTree and return its pointer
func New(text string) *SuffixTree {
	// root := node{make(map[byte]int), 0, 0, 0, 0}
	tree := &SuffixTree{[]node{}, text}
	tree.newNode(make(map[byte]int), 0, 0)

	ap := &activePoint{0, 0, 0}
	remainingSuffix := 0
	lastInternalNode := 0

	for i := range text {
		remainingSuffix++
		for remainingSuffix > 0 {
			if tree.stepForward(ap, text[i]) {
				lastInternalNode = 0
				break
			} else {
				newInternalNode := tree.split(ap, i)
				if ap.edge != 0 && lastInternalNode != 0 {
					tree.nodes[lastInternalNode].link = newInternalNode
				}

				// TODO clarify some logic
				lastInternalNode = newInternalNode

				remainingSuffix--
				if link := tree.nodes[ap.node].link; link > 0 {
					// suffix link exist
					if ap.edge != 0 {
						// TODO next 2 lines duplicate code
						childNodeIndex := tree.nodes[ap.node].edges[ap.edge]
						childNode := tree.nodes[childNodeIndex]
						ap = tree.move(link, childNode.start, childNode.start+ap.length)
					} else {
						ap.node = link
					}
				} else {
					// suffix link not exist, go back and traverse from root
					ap = tree.move(0, i-remainingSuffix+1, i)
				}

				// patch suffix link
				// in case ap is right on node not root
				if ap.node != 0 && ap.edge == 0 {
					tree.nodes[lastInternalNode].link = ap.node
				}
			}
		}
	}

	return tree
}

// Print prints
func (tree *SuffixTree) Print() {
	fmt.Println("SuffixTree", tree.text)
	var f func(int, string)
	f = func(nodeIndex int, pre string) {
		substr := ""
		node := tree.nodes[nodeIndex]
		if nodeIndex != 0 {
			substr = node.edgeStr(tree.text)
		}
		if len(node.edges) == 0 {
			fmt.Println("╴", substr)
			return
		}
		fmt.Println("┐", substr)
		for _, child := range node.edges {
			fmt.Print(pre, "├─")
			f(child, pre+"│ ")
		}
	}
	f(0, "")
}

func (tree *SuffixTree) newNode(edges map[byte]int, start, end int) int {
	index := len(tree.nodes)
	node := node{edges, start, end, index, 0}
	tree.nodes = append(tree.nodes, node)
	return index
}

func (tree *SuffixTree) split(ap *activePoint, pos int) int {
	activeNode := tree.nodes[ap.node]
	if ap.length == 0 {
		activeNode.edges[tree.text[pos]] = tree.newNode(nil, pos, 0)
		return ap.node
	}

	// TODO panic if active edge not available (ap.edge == 0)

	// current edge info
	childNodeIndex := activeNode.edges[ap.edge]
	childNode := tree.nodes[childNodeIndex]
	edgeStart := childNode.start
	edgeMidPos := childNode.start + ap.length

	// update current edge
	tree.nodes[childNodeIndex].start = edgeMidPos

	// create new internal node
	internalEdges := make(map[byte]int)
	internalEdges[tree.text[edgeMidPos]] = childNodeIndex
	internalNodeIndex := tree.newNode(internalEdges, edgeStart, edgeMidPos)

	// create new leaf node
	internalEdges[tree.text[pos]] = tree.newNode(nil, pos, 0)

	// update activeNode's child
	activeNode.edges[tree.text[edgeStart]] = internalNodeIndex

	return internalNodeIndex
}

// guarantee that the move can be done or panic
func (tree *SuffixTree) move(nodeIndex, l, r int) *activePoint {
	maxlen := len(tree.text)
	for l < r {
		count := r - l
		node := tree.nodes[nodeIndex]
		// follow the edge started by character at position l
		childNodeIndex := node.edges[tree.text[l]]
		// TODO panic if childNodeIndex not exist
		childNode := tree.nodes[childNodeIndex]
		edgeLength := childNode.edgeLen(maxlen)

		// stop on middle this edge
		if edgeLength > count {
			return &activePoint{nodeIndex, count, tree.text[l]}
		}

		// move down
		nodeIndex = childNodeIndex
		l += edgeLength
	}

	// stop right at a node
	return &activePoint{nodeIndex, 0, 0}
}

// guarantee that activeLen < activeEdge's length
func (tree *SuffixTree) stepForward(ap *activePoint, c byte) bool {
	// TODO check activeLen < activeEdge's length
	maxlen := len(tree.text)
	// active point is at a node
	if ap.length == 0 {
		// follow the edge started by character c
		childNodeIndex := tree.nodes[ap.node].edges[c]
		if childNodeIndex == 0 {
			return false
		}

		ap.edge = c
	}

	// TODO panic if ap.edge (activeEdge) = 0

	// get childNode
	childNodeIndex := tree.nodes[ap.node].edges[ap.edge]
	childNode := tree.nodes[childNodeIndex]

	// active point is on middle of an edge
	// can step forward
	if tree.text[childNode.start+ap.length] == c {
		// can step forward
		ap.length++
		// in case complete this edge and move down to childnode
		if ap.length == childNode.edgeLen(maxlen) {
			ap.node = childNodeIndex
			ap.edge = 0
			ap.length = 0
		}

		return true
	}

	return false
}
