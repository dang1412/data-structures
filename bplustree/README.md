# B+tree

B+tree is a variant of btree, which is also widely used for storing data in a block-oriented (I/O operations are expensive and will process a block of many records of data at once instead of a single record) storage context, such as database storage or filesystems like XFS, BFS or NTFS. B+tree node often has high number of elements/children (order of 100 or more), which reduces the number of I/O operations required to find an element in the tree.

![b+tree image](https://codetube.vn/images/bplustree.png "B+tree")

<!-- HeadMark -->

- [Definitions](#definitions)
- [Implementation](#implementation)
  - [Search](#search)
  - [Insertion](#insertion)
  - [Deletion](#deletion)
- [References](#references)
- [Demostration](#demostration)

## Definition

A B+tree is a btree with one different property: all the elements will stay at leaf. Therefore the internal nodes's keys are duplicated with leaf's keys and be used for searching purpose only, all the meaningful data will be at leaf.

According to this implementation we will have `leftSubtree <= separateKey < rightSubtree` (In case the subtrees are at leaf, separateKey is duplicated to the last element of leftSubtree).

The leaves of B+tree are linked to one another in a linked list, which make range queries or iteration through elements much simpler and more efficient.

## Implementation

Assuming no duplicate key at leaf, we will separate the leaf node that `leftSubtree <= separateKey < rightSubtree` (separateKey is duplicated to the last element of leftSubtree), and separate the internal node that `leftSubtree < separateKey < rightSubtree`. All Search, Insert, Deletion operations will end up at leaf.

### Search

Starting at the root, the tree is recursively traversed from top to bottom. At each level, the search reduces its field of view to the child pointer (subtree) whose range includes the search value. The range of subtree follows rule: `separationKey[i] < correspondingSubtree <= separationKey[i+1]`. Get result only when reach **leaf node**.

Because the number of elements in b+tree node in real application may large (~100), binary search should be applied to search for the subtree winthin a node (rather than linear search).

### Insertion

To insert a new element, search the tree to find the leaf node where the new element should be added. Insert the new element into that node with the following steps:

- While searching the tree from the root to the node where the insertion will take place, splitting any full nodes encountered on the way preemptively into two nodes:

  - A single median is chosen from among the node's keys and the new key.
  - Keys less than the median are put in the new left node and keys greater than the median are put in the new right node, with the median acting as a separation key.
  - The separation value is inserted in the node's parent (which guaranteed that is not full node). If the node has no parent (i.e., the node was the root), create a new root above this node (increasing the height of the tree).
  - In case splitting the leaf node, the separation key is duplicated and pushed to the last position of the left.

- Reach the non-full leaf node, simply insert the new key in the right position.

### Deletion

To delete an element/key, search the tree to find the **leaf node** where the element should be deleted, following below strategies:

- While searching the tree from the root to the node where the deletion will occur, before entering a node we will perform restructure if the node has min (d-1) elements to make sure every node we go through will have more than min elements (so we can easily remove one in the next step):

  - If the left sibling has more than min elements then move one element from left sibling to current node (rotate right). Then update the separation element at parent node appropriately (2 cases for leaf and non-leaf node, see demo).

  - If not, check if right sibling has more than min elements then move one element from right sibling to current node (rotate left). Then update the separation element at parent node appropriately (2 cases for leaf and non-leaf node, see demo).

  - If none of the above (which mean both left and right siblings if exist, has min (d-1) elements), merge the current node with the right sibling (or left sibling if right one not exist). To perform merge non-leaf node, we have to remove the separation element of the two children from parent (will be just fine because parent node has more than min elements), and put it down in the middle of the merged-node in the following form: `...leftElements, separationElement, ...rightElements`. Merged node will have (d-1) + 1 + (d-1) = 2 * d - 1 which is maximum number of elements. In case of leaf node there is only `...left-elements, ...right-elements` (no separationElement because it is already in leftElements).

  - After rotate or merge elements we will have to adjust the children (node pointer array) accordingly in case of non-leaf node.

- When the delete element is found at a leaf node, simply remove the element from the leaf.

## References

[WIKI B+tree](https://en.wikipedia.org/wiki/B%2B_tree)

## Demostration

<!-- EndMark -->

[B+tree](https://codetube.vn/bplustree)
