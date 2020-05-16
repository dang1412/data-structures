# Priority Queue

A priority queue is an abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. In a priority queue, an element with high priority is served before an element with low priority. Priority queues are often implemented using heap, which is a specialized tree-based data structure which is essentially an almost complete tree (can be simply represented by an array) that satisfies the heap property: in a min heap, the parent node's key is less than or equal to the keys of children.

![priorityqueue](https://codetube.vn/images/priorityqueue.png "Priority Queue")

<!-- HeadMark -->

## Operations

- isEmpty: check whether the queue has no elements.
- push: add an element to the queue with an associated priority.
- pop: remove the element from the queue that has the lowest priority, and return it.
- top: return the lowest-priority element but does not modify the queue.

## Implementation

In some implementations, if two elements have the same priority, they are served according to the order in which they were enqueued, while in other implementations, ordering of elements with the same priority is undefined. Using heap, to represent the tree (binary heap) we use an array `a` which has the following properties:

- `a[0]` is the root
- left child of `a[i]` is `a[2*i+1]`
- right child of `a[i]` is `a[2*i+2]`
- parent of `a[i]` is `a[(i - 1)/2]`

Base on that assumption, we implement the following methods:
- `_heapify(i)`: for the subtree that take i-th element as root, the heap is satisfied conditions except for the root. We put down the root (i-th element, swap with left or right child) until it's key is less than or equal to all of its children's keys, or reach leaf.
- `push(element)`:
  - push the new element to the last position.
  - put the element up (swap with its parent) until it's key is greater than or equal to it's parent's key, or reach root.
- `pop()`:
  - take out the root element `a[0]`, ready to be returned later.
  - override the root with the last element, decrease heap size by 1: `a[0] = a[size - 1]`.
  - invoke `_heapify(0)`.
- `top()`: simply return the `a[0]` element.

## References

- [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))
- [PriorityQueue](https://en.wikipedia.org/wiki/Priority_queue)

## Demo

<!-- EndMark -->

[PriorityQueue](https://codetube.vn/priorityqueue)
