# Left Leaning Red Black Tree

A **red–black tree** is a kind of self-balancing binary search tree in computer science. Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions. When the tree is modified, the new tree is subsequently rearranged and repainted to restore the coloring properties. The properties are designed in such a way that this rearranging and recoloring can be performed efficiently that search, insertion and deletion operations are all performed in O(log n) time. **Left leaning red-black tree** is a variant of red-black tree that is designed to be easier to implement.

![left leaning red black tree](https://codetube.vn/images/llrbtree.png "Left Leaning Red-Black Tree")

<!-- HeadMark -->

- [Definition](#definition)
- [Implementation](#implementation)
- [References](#references)
- [Demostration](#demostration)

## Definition

Left leaning red-black tree is **binary search tree** that satisfies the following properties:

- Each node is either red or black.
- The root is black. This rule is sometimes omitted. Since the root can always be changed from red to black, but not necessarily vice versa, this rule has little effect on analysis.
- All leaves (NIL) are black.
- If a node is red, then both its children are black.
- Every path from a given node to any of its descendant NIL nodes goes through the same number of black nodes.
- (Left leaning means that push the red color to the left when possible).

## Implementation

Simplified implementation from [gollrb](https://github.com/petar/GoLLRB).

## References

- [Red Black Tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [Left-leaning Red Black Tree](https://en.wikipedia.org/wiki/Left-leaning_red%E2%80%93black_tree)

## Demostration

<!-- EndMark -->

[Left-leaning red-black tree](https://codetube.vn/redblacktree)
