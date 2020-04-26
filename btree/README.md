# Btree

B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. The B-tree generalizes the binary search tree, allowing for nodes with more than two children (hold more than 1 key).
B-tree is well suited for storage systems that read and write relatively large blocks of data, such as discs. It is commonly used in databases and file systems.

## Definitions

Arcording to this implementation, a B-tree of degree d (order m = 2 * d) is a tree which satisfies the following properties:

- Every node has at most 2 * d - 1 keys (2 * d children for non-leaf node).
- Except root every node has at least d - 1 keys (d children for non-leaf node).
- A non-leaf node with k children contains k − 1 keys.
- All leaves appear in the same level.

Each internal node's keys act as separation values which divide its subtrees. For example, if an internal node has 3 child nodes (or subtrees) then it must have 2 keys: a1 and a2. All values in the leftmost subtree will be less than a1, all values in the middle subtree will be between a1 and a2, and all values in the rightmost subtree will be greater than a2.

## Implementation

### Search

Searching is similar to searching a binary search tree. Starting at the root, the tree is recursively traversed from top to bottom. At each level, the search reduces its field of view to the child pointer (subtree) whose range includes the search value. A subtree's range is defined by the values, or keys, contained in its parent node. These limiting values are also known as separation values.

Binary search is typically (but not necessarily) used within nodes to find the separation values and child tree of interest.

### Insertion

To insert a new element, search the tree to find the leaf node where the new element should be added. Insert the new element into that node with the following steps:

- While searching the tree from the root to the node where the insertion will take place, splitting any full nodes encountered on the way preemptively into two nodes:
  - A single median is chosen from among the node's keys and the new key.
  - Keys less than the median are put in the new left node and keys greater than the median are put in the new right node, with the median acting as a separation key.
  - The separation value is inserted in the node's parent (which guarantee that is not full node). If the node has no parent (i.e., the node was the root), create a new root above this node (increasing the height of the tree).
- Reach the non-full leaf node, simply insert the new key in the right position.

### Deletion

To delete an element(key), search the tree to find the node where the element should be deleted, following below strategies:

- While searching the tree from the root to the node where the deletion will occur, before entering a node we will perform restructure if the node has min (d-1) elements to make sure every node we go through will have more than min elements (so we can easily remove one in the next step):
  - If the left sibling has more than min elements then move one element from left sibling to current node (rotate right).
  - If not, check if right sibling has more than min elements then move one element from right sibling to current node (rotate left).
  - If none of the above (which mean both left and right siblings if exist, has min (d-1) elements), merge the current node with the right sibling (or left sibling if right one not exist). To perform merge, we have to remove the separation element of the two children from parent (will be just fine because parent node has more than min elements), and put it down in the middle of the merged-node in the following form: `...left-elements, separation-element, ...right-elements`. Merged node will have (d-1) + 1 + (d-1) = 2 * d - 1 which is maximum number of elements.
  - After rotate or merge elements we will have to adjust the children (node pointer array) accordingly in case of non-leaf node.
- If the delete element is found at a leaf node, simply remove the element from the leaf.
- If the delete element is found at a non-leaf node:
  - Remove the max element in the subtree at the left of the found element. This is equivalent to remove the rightmost element in the rightmost leaf so it becomes `delete element is found at a leaf node` case above.
  - Move that max element up to replace the found element in the node.

## References

[WIKI](https://en.wikipedia.org/wiki/B-tree){:target="_blank"}

## Demostration

[B-tree](https://en.wikipedia.org/wiki/B-tree){:target="_blank"}
