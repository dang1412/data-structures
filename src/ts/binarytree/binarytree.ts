// interface BinaryTree {
//   data: number
//   left?: BinaryTree
//   right?: BinaryTree
// }

export class BinaryNode {
  left: BinaryNode | null = null
  right: BinaryNode | null = null

  constructor(private data: number) {}

  search(data: number): BinaryNode | null {
    if (data === this.data) {
      return this
    }

    const next = data < this.data ? this.left : this.right

    return next === null ? null : next.search(data)
  }
}

export class BinaryTree {
  root: BinaryNode | null = null
}

// export function search(t: BinaryTree | null, data: number): BinaryTree | null {
//   if (!t) {
//     return null
//   }

//   if (data === t.data) {
//     return t
//   }

//   if (data < t.data) {
//     return search(t.left || null, data)
//   }

//   return search(t.right || null, data)
// }

// export function insert(t: BinaryTree | null, data: number, p: BinaryTree | null): BinaryTree | null {
//   if (!t) {

//   }
// }
