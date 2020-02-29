package suffixtree

import "fmt"

type node struct {
	edges map[rune]*edge
	link  *node
	index int
}

type edge struct {
	start, end int
	child      *node
}

func (e *edge) len(maxLen int) int {
	if e.end == 0 {
		return maxLen - e.start
	}
	return e.end - e.start
}

func (e *edge) toStr(text []rune) string {
	if e.end == 0 {
		return string(text[e.start:])
	}
	return string(text[e.start:e.end])
}

type activePoint struct {
	n *node
	e *edge
	l int
}

func (p *activePoint) split(t *SuffixTree, splitC, newC rune, i int) *node {
	leaf := &node{index: t.count}
	t.count++
	leafEdge := &edge{i, 0, leaf}
	if p.e == nil {
		p.n.edges[newC] = leafEdge
		return p.n
	}

	iEdge := &edge{p.e.start + p.l, p.e.end, p.e.child}
	edges := make(map[rune]*edge)
	edges[splitC] = iEdge
	edges[newC] = leafEdge

	iNode := &node{edges, nil, t.count}
	t.count++

	// update current edge
	p.e.end = p.e.start + p.l
	p.e.child = iNode

	return iNode
}

// SuffixTree main
type SuffixTree struct {
	root  *node
	text  []rune
	count int
}

// guarantee that the move can be done or panic
func (t *SuffixTree) move(n *node, l, r int) *activePoint {
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
	return &activePoint{n, nil, 0}
}

// guarantee that activeLen < activeEdge's length
func (t *SuffixTree) stepForward(point *activePoint, c rune) bool {
	maxlen := len(t.text)
	// active point is at a node
	if point.e == nil {
		edge := point.n.edges[c]
		if edge == nil {
			return false
		}

		point.l = 1
		point.e = edge
		return true
	}

	// active point is on middle of an edge
	if t.text[point.e.start+point.l] == c {
		// can step forward
		point.l++
		if point.l == point.e.len(maxlen) {
			point.n = point.e.child
			point.e = nil
			point.l = 0
		}

		return true
	}

	return false
}

// Print prints tree
func (t *SuffixTree) Print() {
	fmt.Println("tree")
	var f func(*edge, *node, string)
	f = func(e *edge, n *node, pre string) {
		substr := ""
		if e != nil {
			substr = e.toStr(t.text)
		}
		edges := n.edges
		if len(edges) == 0 {
			fmt.Println("╴", substr)
			return
		}
		fmt.Println("┐", substr)
		for _, edge := range edges {
			fmt.Print(pre, "├─")
			f(edge, edge.child, pre+"│ ")
		}
	}
	f(nil, t.root, "")
}

// New create new Suffixtree with text
func New(text []rune) *SuffixTree {
	root := &node{
		edges: make(map[rune]*edge),
	}
	t := &SuffixTree{root, text, 1}

	ap := &activePoint{root, nil, 0}
	remainingSuffix := 0

	var lastInternalNode *node = nil

	for i := range text {
		// extend(i)
		remainingSuffix++
		for remainingSuffix > 0 {
			if !t.stepForward(ap, text[i]) {
				var splitC rune
				if ap.e != nil {
					splitC = text[ap.e.start+ap.l]
				}
				newInternalNode := ap.split(t, splitC, text[i], i)
				if lastInternalNode != nil {
					lastInternalNode.link = newInternalNode
				}
				if ap.e != nil {
					lastInternalNode = newInternalNode
				} else {
					lastInternalNode = nil
				}

				remainingSuffix--
				if ap.n.link != nil {
					if ap.e != nil {
						ap = t.move(ap.n.link, ap.e.start, ap.e.start+ap.l)
					} else {
						ap.n = ap.n.link
					}

				} else {
					ap = t.move(root, i-remainingSuffix+1, i)
				}
			} else {
				lastInternalNode = nil
				break
			}
		}

	}

	return t
}
