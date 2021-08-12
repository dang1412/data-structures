export interface RedBlackNode {
  value: number
  color: 0 | 1
  parent: RedBlackNode | null
  left: RedBlackNode | null
  right: RedBlackNode | null
}

function createNode(value: number): RedBlackNode {
  return {
    value,
    color: 1,
    parent: null,
    left: null,
    right: null
  }
}

export class RedBlackTree {
  root: RedBlackNode | null = null

  insert(value: number) {
    console.log('insert', value)
    const k = insertNode(this.root, value)
    if (!k) return
    if (!this.root) {
      this.root = k
    }

    this.fixInsert(k)
  }

  remove(value: number) {
    const delNode = searchNode(this.root, value)
    if (!delNode) return

    // find actual removed node
    let altNode: RedBlackNode | null = null
    if (delNode.left && delNode.right) {
      altNode = findMinNode(delNode.right)
    }

    const xNode = altNode || delNode

    // fix the node to be deleted
    this.fixDelete(xNode)

    // override delnode if different, then delete
    delNode.value = xNode.value
    this.deleteNode(xNode)
  }

  private rotateLeft(x: RedBlackNode): void {
    if (!x) return
    const p = x.parent
    const y = x.right
    if (!y) return
    const b = y.left

    // update b
    if (b) b.parent = x

    // update x
    x.parent = y
    x.right = b

    // update y
    y.parent = p
    y.left = x

    // update p
    if (p) {
      // not rotate root
      if (p.left === x) {
        p.left = y
      } else {
        p.right = y
      }
    } else {
      // rotate root
      this.root = y
    }
  }

  private rotateRight(y: RedBlackNode): void {
    if (!y) return
    const p = y.parent
    const x = y.left
    if (!x) return
    const b = x.right

    // update b
    if (b) b.parent = y

    // update y
    y.parent = x
    y.left = b

    // update x
    x.parent = p
    x.right = y

    // update p
    if (p) {
      // not rotate root
      if (p.left === y) {
        p.left = x
      } else {
        p.right = x
      }
    } else {
      // rotate root
      this.root = x
    }
  }

  private deleteNode(node: RedBlackNode) {
    if (!node) return
    if (node.left && node.right) return

    const child = node.left || node.right
    const p = node.parent
    if (p) {
      if (p.left === node) {
        p.left = child
      } else {
        p.right = child
      }
      if (child) {
        child.parent = p
      }
    } else {
      this.root = child
      if (child) {
        child.parent = null
      }
    }
  }

  // fix 2 consecutive red nodes (mainly)
  private fixInsert(k: RedBlackNode) {
    const p = k.parent
    if (!p) {
      // root node, make it black
      k.color = 0
      return
    }

    const isNodeLeft = p.left === k

    if (!isRed(p)) {
      // Case 2: nothing to do if parent is black
      return
    }

    const g = p.parent
    if (!g) return

    const isParentLeft = g.left === p
    const u = isParentLeft ? g.right : g.left

    if (u && isRed(u)) {
      p.color = 0
      u.color = 0
      g.color = 1
      this.fixInsert(g)
      return
    }

    // u is black

    if (!isParentLeft) {
      // p is right child
      if (!isNodeLeft) {
        // node is right child
        this.rotateLeft(g)
        p.color = 0
        g.color = 1
      } else {
        // node is left child
        this.rotateRight(p)
        // repeat the above fix
        this.fixInsert(p)
      }
    } else {
      // p is left child
      if (isNodeLeft) {
        // node is left
        this.rotateRight(g)
        p.color = 0
        g.color = 1
      } else {
        this.rotateLeft(p)
        this.fixInsert(p)
      }
    }
  }

  // try to turn the node into red
  private fixDelete(x: RedBlackNode) {
    console.log('fix_Delete', x)
    if (isRed(x)) {
      return
    }

    // only 1 red child node
    if (!x.left || !x.right) {
      const child = x.left || x.right
      if (child && isRed(child)) {
        x.color = 1
        child.color = 0
        return
      }
    }

    // node's children are black (possibly NULL)

    const p = x.parent
    // if node is root change color to red
    // (to remove or swap again after recursive call)
    if (!p) {
      // TODO document this case
      x.color = 1
      return
    }

    const isNodeLeft = p.left === x
    // sibling

    if (isNodeLeft) {
      const s = p.right
      // this case not exist (break attribute 5)
      if (!s) return

      // s is black
      if (!isRed(s)) {
        if (s.right && isRed(s.right)) {
          // 3.1, s.right is red
          this.rotateLeft(p)
          s.color = p.color
          p.color = 0
          s.right.color = 0
          x.color = 1 // done
          // this.onchange({ x: x.value, P: p.value, S: s.value, text: `Case 3.1: rotated left P and updated colors` })
        } else  if (s.left && isRed(s.left)) {
          // 3.2, s.left is red
          s.color = 1
          s.left.color = 0
          this.rotateRight(s)
          // reduce to 3.1
          this.fixDelete(x)
        } else {
          // 3.3, both s's children are black
          if (isRed(p)) {
            // 3.3.1
            p.color = 0
            s.color = 1
            x.color = 1
            // this.onchange({ x: x.value, P: p.value, S: s.value, text: `Case 3.3.1: set P black, S red, x red` })
          } else {
            // 3.3.2
            // TODO check if P root do {...}
            this.fixDelete(p)
            // changed p into red, reduce to 3.3.1
            this.fixDelete(x)
          }
        }
      } else {
        // 3.4
        this.rotateLeft(p)
        s.color = 0
        p.color = 1
        // reduce to 3.1, 3.2 or 3.3.1
        this.fixDelete(x)
      }
    } else {
      // mirror of above 3.* cases
      const s = p.left
      // this case not exist (break attribute 5)
      if (!s) return
      // s is black
      if (!isRed(s)) {
        if (s.left && isRed(s.left)) {
          // mirror 3.1, s.left is red
          this.rotateRight(p)
          s.color = p.color
          p.color = 0
          s.left.color = 0
          x.color = 1 // done
        } else  if (s.right && isRed(s.right)) {
          // mirror 3.2, s.right is red
          this.rotateLeft(s)
          s.color = 1
          s.right.color = 0
          // reduce to mirror 3.1
          this.fixDelete(x)
        } else {
          // mirror 3.3, both s's children are black
          if (isRed(p)) {
            // mirror 3.3.1
            p.color = 0
            s.color = 1
            x.color = 1
          } else {
            // mirror 3.3.2
            this.fixDelete(p)
            // changed p into red, reduce to mirror 3.3.1
            this.fixDelete(x)
          }
        }
      } else {
        // mirror 3.4
        this.rotateRight(p)
        s.color = 0
        p.color = 1
        // reduce to mirror 3.1, 3.2 or 3.3.1
        this.fixDelete(x)
      }
    }
  }
}

function insertNode(node: RedBlackNode | null, value: number): RedBlackNode | null {
  if (!node) {
    return createNode(value)
  }

  // no insert duplicate value
  if (node.value === value) return null

  const isGoLeft = value < node.value
  const next = isGoLeft ? node.left : node.right

  const k = insertNode(next, value)
  if (!k) return null

  if (!next) {
    // just created k
    k.parent = node
    if (isGoLeft) {
      node.left = k
    } else {
      node.right = k
    }
  }

  return k
}

function isRed(node: RedBlackNode | null): boolean {
  return node ? node.color === 1 : false
}

function searchNode(node: RedBlackNode | null, value: number): RedBlackNode | null {
  if (!node) return null
  if (node.value === value) return node
  if (value < node.value) {
    return searchNode(node.left, value)
  }

  return searchNode(node.right, value)
}

function findMinNode(node: RedBlackNode): RedBlackNode {
  let n = node
  while (n.left) n = n.left

  return n
}
