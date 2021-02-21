import { BinaryTree } from './binarytree'

describe('Binarytree Tests', () => {
  let tree = new BinaryTree()
  beforeAll(() => {
    tree = new BinaryTree()
    tree.insert(5)
    tree.insert(3)
    tree.insert(7)
    tree.insert(6)
  })

  it('Test minValue', () => {
    expect(tree.root?.minValue()).toBe(3)
  })

  it('Test insert', () => {
    tree.insert(4)
    const arr = getInOrderData(tree)
    expect(arr).toEqual([3,4,5,6,7])
  })

  it('Test delete', () => {
    tree.delete(5)
    const arr = getInOrderData(tree)
    expect(arr).toEqual([3,4,6,7])
  })
})

function getInOrderData(tree: BinaryTree): number[] {
  const arr: number[] = []
  if (tree.root) {
    tree.root.traverseInOrder((d) => arr.push(d))
  }

  return arr
}
