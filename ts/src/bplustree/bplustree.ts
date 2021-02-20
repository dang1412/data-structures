export type Comparator<T> = (t1: T, t2: T) => -1 | 0 | 1;

const DEFAULT_COMPARATOR: Comparator<any> = (a, b) => {
  return a < b ? -1 : a == b ? 0 : 1;
}

export class BPlusTreeNode<T> {
  items: T[];
  children: BPlusTreeNode<T>[] = [];
  next: BPlusTreeNode<T> | null = null;

  constructor(private readonly comparator: Comparator<T>, items: T[] = []) {
    this.items = items;
  }

  isleaf(): Boolean {
    return this.children.length == 0;
  }

  split(i: number): [T, BPlusTreeNode<T>] {
    const item = this.items[i];
    const right = new BPlusTreeNode<T>(this.comparator);
    right.items = this.items.splice(i + 1);

    if (!this.isleaf()) {
      // remove the upper item
      this.items.pop();
      right.children = this.children.splice(i + 1);
    }

    right.next = this.next;
    this.next = right;

    return [item, right];
  }

  maybeSplitChild(i: number, maxItems: number): boolean {
    if (this.children[i].items.length < maxItems) {
      return false;
    }

    const left = this.children[i];
    const [item, right] = left.split(Math.floor(maxItems / 2));
    this.items.splice(i, 0, item);
    this.children.splice(i + 1, 0, right);

    return true;
  }

  insert(item: T, maxItems: number): T | null {
    let [i, found] = this.findItem(item);

    // leaf node
    if (this.isleaf()) {
      if (found) {
        // replace
        const out = this.items[i];
        this.items[i] = item;
        return out;
      }

      this.items.splice(i, 0, item);
      return null;
    }

    // internal node, try split before go to child
    if (this.maybeSplitChild(i, maxItems)) {
      const inTree = this.items[i];
      if (this.comparator(inTree, item) < 0) {
        // we want second split node
        i++;
      }
    }

    return this.children[i].insert(item, maxItems);
  }

  get(key: T): T | null {
    const [i, found] = this.findItem(key);
    const isLeaf = this.isleaf();
    if (isLeaf && found) {
      return this.items[i];
    }

    if (!isLeaf) {
      return this.children[i].get(key);
    }

    return null;
  }

  remove(item: T, minItems: number): T | null {
    const [i, found] = this.findItem(item);
    if (this.isleaf()) {
      if (found) {
        return this.items.splice(i, 1)[0];
      }

      return null;
    }

    // internal node, we grow child if needed
    if (this.children[i].items.length <= minItems) {
      this.growChild(i, minItems);
      // redo this step after grow child
      return this.remove(item, minItems);
    }

    // child has enough items
    const child = this.children[i];
    // recursively remove at child
    return child.remove(item, minItems);
  }

  private growChild(i: number, minItems: number) {
    if (i > 0 && this.children[i-1].items.length > minItems) {
      // steal from left child
      const child = this.children[i];
      const stealFrom = this.children[i-1];
      const stolenItem = stealFrom.items.pop()!;

      if (child.isleaf()) {
        // push stolenItem to the child's head
        child.items.splice(0, 0, stolenItem);
        // assign upper item
        this.items[i-1] = stealFrom.items.slice(-1)[0];
      } else {
        // push upper item to the child's head
        child.items.splice(0, 0, this.items[i-1]);
        // move stolenItem up
        this.items[i-1] = stolenItem;
        // move last child of stealFrom to child's head
        child.children.splice(0, 0, stealFrom.children.pop()!);
      }
    } else if (i < this.items.length && this.children[i+1].items.length > minItems) {
      // steal from right child
      const child = this.children[i];
      const stealFrom = this.children[i+1];
      const stolenItem = stealFrom.items.shift()!;

      if (child.isleaf()) {
        child.items.push(stolenItem);
      } else {
        child.items.push(this.items[i]);
        child.children .push(stealFrom.children.shift()!);
      }
      this.items[i] = stolenItem;
    } else {
      // merge with right child
      if (i >= this.items.length) {
        i--;
      }

      const child = this.children[i];
      const mergeItem = this.items.splice(i, 1)[0];
      const mergeChild = this.children.splice(i + 1, 1)[0];
      if (!child.isleaf()) {
        child.items.push(mergeItem);
        child.children.push(...mergeChild.children);
      }
      child.items.push(...mergeChild.items);
      child.next = mergeChild.next;
      // TODO free node mergeChild?
    }
  }

  private findItem(item: T): [number, boolean] {
    let i = 0;
    let compareResult = 1;
    for (; i < this.items.length; i++) {
      compareResult = this.comparator(item, this.items[i]);
      if (compareResult < 1) {
        break;
      }
    }

    return [i, compareResult == 0];
  }
}

// TODO implements Iterable<T>
export class BPlusTree<T> {
  length: number = 0;
  root: BPlusTreeNode<T> | null = null;

  constructor(
    private readonly degree: number,
    private readonly comparator: Comparator<T> = DEFAULT_COMPARATOR
  ) {}

  maxItems(): number {
    return this.degree * 2 - 1;
  }

  minItems(): number {
    return this.degree - 1;
  }

  newNode(items: T[] = []): BPlusTreeNode<T> {
    return new BPlusTreeNode<T>(this.comparator, items);
  }

  replaceOrInsert(item: T): T | null {
    if (!item) {
      throw new Error("null item being added to Bplustree");
    }

    if (!this.root) {
      this.root = this.newNode();
      this.root.items = [item];
      this.length = 1;

      return null;
    }

    const maxItems = this.maxItems();

    if (this.root.items.length >= maxItems) {
      const [item2, second] = this.root.split(Math.floor(maxItems / 2));
      const oldRoot = this.root;
      this.root = this.newNode([item2]);
      this.root.children = [oldRoot, second];
    }

    const out = this.root.insert(item, maxItems);
    if (out == null) {
      this.length++;
    }

    return out;
  }

  remove(item: T): T | null {
    if (this.root == null || this.root.items.length == 0) {
      return null;
    }
    const out = this.root.remove(item, this.minItems());
    if (this.root.items.length == 0 && this.root.children.length > 0) {
      const oldRoot = this.root;
      // only 1 child in this case
      this.root = oldRoot.children[0];
      // TODO free node oldRoot
    }

    if (out != null) {
      this.length--;
    }

    return out;
  }

  get(key: T): T | null {
    if (this.root == null) {
      return null;
    }

    return this.root.get(key);
  }

  has(key: T): boolean {
    return this.get(key) != null;
  }
}
