export class BinaryNode {
  left: BinaryNode | null = null
  right: BinaryNode | null = null

  constructor(public data: number) {}

  search(data: number): BinaryNode | null {
    if (data === this.data) {
      return this
    }

    const next = data < this.data ? this.left : this.right

    return next === null ? null : next.search(data)
  }

  insert(data: number): boolean {
    if (data === this.data) {
      return false
    }

    const isGoLeft = data < this.data

    const next = isGoLeft ? this.left : this.right

    if (next === null) {
      const newNode = new BinaryNode(data)
      if (isGoLeft) {
        this.left = newNode
      } else {
        this.right = newNode
      }

      return true
    }

    return next.insert(data)
  }

  delete(data: number): BinaryNode | null {
    if (data < this.data) {
      if (this.left) this.left = this.left.delete(data)
    } else if (data > this.data) {
      if (this.right) this.right = this.right.delete(data)
    } else {
      if (this.left === null) {
        return this.right
      }

      if (this.right === null) {
        return this.left
      }

      // replace with min value of right subtree
      const nextVal = this.right.minValue()
      this.data = nextVal

      // delete min value of right subtree
      this.right = this.right.delete(nextVal)
    }

    return this
  }

  traverseInOrder(cb: (data: number) => void): void {
    if (this.left) {
      this.left.traverseInOrder(cb)
    }

    cb(this.data)

    if (this.right) {
      this.right.traverseInOrder(cb)
    }
  }

  traversePreOrder(cb: (data: number) => void): void {
    cb(this.data)

    if (this.left) {
      this.left.traversePreOrder(cb)
    }

    if (this.right) {
      this.right.traversePreOrder(cb)
    }
  }

  traversePostOrder(cb: (data: number) => void): void {
    if (this.left) {
      this.left.traversePostOrder(cb)
    }

    if (this.right) {
      this.right.traversePostOrder(cb)
    }

    cb(this.data)
  }

  minValue(): number {
    let node = this as BinaryNode
    while (node.left) node = node.left

    return node.data
  }
}

export class BinaryTree {
  root: BinaryNode | null = null

  search(data: number): BinaryNode | null {
    return this.root ? this.root.search(data): null
  }

  insert(data: number): boolean {
    if (!this.root) {
      this.root = new BinaryNode(data)
      return true
    }

    return this.root.insert(data)
  }

  delete(data: number): void {
    if (!this.root) {
      return
    }

    this.root = this.root.delete(data)
  }
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
