interface BinaryTree {
  data: number
  left?: BinaryTree
  right?: BinaryTree
}

export function search(t: BinaryTree | null, data: number): BinaryTree | null {
  if (!t) {
    return null
  }

  if (data === t.data) {
    return t
  }

  if (data < t.data) {
    return search(t.left || null, data)
  }

  return search(t.right || null, data)
}
