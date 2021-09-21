export class BTreeNode {
  children: BTreeNode[] = []
  next: BTreeNode | null = null

  constructor(public values: number[] = []) {}

  isleaf(): Boolean {
    return this.children.length === 0
  }

  search(value: number): [BTreeNode, number] | null {
    return null
  }

  split(i: number): [number, BTreeNode] {
    // new right node
    const right = new BTreeNode()
    right.values = this.values.splice(i + 1)
    // remove the upper item
    const item = this.values.pop()!

    if (!this.isleaf()) {
      right.children = this.children.splice(i + 1)
    }

    right.next = this.next
    this.next = right

    return [item, right]
  }

  fixInsert(max: number): [number, BTreeNode] | null {
    if (this.values.length <= max) {
      return null
    }

    return this.split(Math.floor(max / 2))
  }

  // insert and fix
  insert(value: number, max: number): [number, BTreeNode] | null {
    const [pos, found] = this.findPosition(value)

    if (found) {
      return null
    }

    if (this.isleaf()) {
      this.values.splice(pos, 0, value)

      return this.fixInsert(max)
    } else {
      const rs = this.children[pos].insert(value, max)
      if (rs) {
        this.values.splice(pos, 0, rs[0])
        this.children.splice(pos + 1, 0, rs[1])

        return this.fixInsert(max)
      }

      return null
    }
  }

  // value null means delete the max value (last value of the right-most child) 
  delete(value: number | null, min: number, replace?: [BTreeNode, number]): number | null {
    const [pos, found] = value ? this.findPosition(value)
      // get the last value
      : this.isleaf() ? [this.values.length - 1, true]
      // go down the last subtree
      : [this.values.length, false]

    // leaf node
    if (this.isleaf()) {
      let out: number | null = null
      if (found) {
        // remove
        out = this.values.splice(pos, 1)[0]
        // replace (in case delete an internal value originally)
        if (replace) {
          const [node, i] = replace
          node.values[i] = out
        }
      }
      return out
    }

    // internal node
    const child = this.children[pos]
    const out = found ? child.delete(null, min, [this, pos]) : child.delete(value, min)

    // after delete, grow child if needed
    if (child.values.length < min) {
      this.growChild(pos, min)
    }

    return out
  }

  private growChild(i: number, min: number) {
    if (i > 0 && this.children[i-1].values.length > min) {
      // steal from left child
      const child = this.children[i]
      const stealFrom = this.children[i-1]
      const stolenItem = stealFrom.values.pop()!

      // push upper item to the child's head
      child.values.splice(0, 0, this.values[i-1])
      // move stolenItem up
      this.values[i-1] = stolenItem
      if (!child.isleaf()) {
        // move last child of stealFrom to child's head
        child.children.splice(0, 0, stealFrom.children.pop()!)
      }
    } else if (i < this.values.length && this.children[i+1].values.length > min) {
      // steal from right child
      const child = this.children[i]
      const stealFrom = this.children[i+1]
      const stolenItem = stealFrom.values.shift()!

      child.values.push(this.values[i])
      if (!child.isleaf()) {
        child.children.push(stealFrom.children.shift()!)
      }
      this.values[i] = stolenItem
    } else {
      // merge with right child
      if (i >= this.values.length) {
        i--
      }

      const child = this.children[i]
      const mergeItem = this.values.splice(i, 1)[0]
      const mergeChild = this.children.splice(i + 1, 1)[0]
      child.children.push(...mergeChild.children)
      child.values.push(mergeItem, ...mergeChild.values)
      child.next = mergeChild.next
      // TODO free node mergeChild?
    }
  }

  private findPosition(value: number): [number, boolean] {
    let i = 0
    for (; i < this.values.length && value > this.values[i]; i++) {}

    return [i, value === this.values[i]]
  }
}

export class BTree {
  root: BTreeNode | null = null

  constructor(public minOrder: number) {}

  insert(value: number) {
    if (!this.root) {
      this.root = new BTreeNode()
    }
    const rs = this.root.insert(value, this.minOrder * 2 - 1)
    if (rs) {
      const children = [this.root, rs[1]]
      this.root = new BTreeNode([rs[0]])
      this.root.children = children
    }
  }

  delete(value: number) {
    if (!this.root) {
      return
    }

    const out = this.root.delete(value, this.minOrder - 1)

    // update new root
    if (this.root.values.length === 0) {
      this.root = this.root.children[0] || null
    }
  }
}
