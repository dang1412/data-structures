export type Comparator<T> = (t1: T, t2: T) => -1 | 0 | 1;

const DEFAULT_COMPARATOR: Comparator<any> = (a, b) => {
  return a < b ? -1 : a === b ? 0 : 1;
}

export interface LLRBNode<T> {
  item: T;
  left: LLRBNode<T> | null;
  right: LLRBNode<T> | null;
  black: boolean;
}

function isRed<T>(h: LLRBNode<T> | null): boolean {
  if (h == null) {
    return false;
  }

  return !h.black;
}

export class LLRBTree<T> {
  count = 0;
  root: LLRBNode<T> | null = null;

  constructor(
    private readonly comparator: Comparator<T> = DEFAULT_COMPARATOR
  ) {}

  getRoot(): LLRBNode<T> | null {
    return this.root;
  }

  getLen(): number {
    return this.count;
  }

  // Get retrieves an element from the tree whose order is the same as that of key.
  get(key: T): T | null {
    let h = this.root;
    while (h != null) {
      const compare = this.comparator(key, h.item);
      switch (compare) {
        // case key < h.item:
        case -1: {
          h = h.left;
          break;
        }
        // case key > h.item:
        case 1: {
          h = h.right;
          break;
        }
        // key = h.item
        default:
          return h.item;
      }
    }

	  return null;
  }

  insert(item: T | null) {
    if (item == null) {
      throw new Error('inserting null item');
    }
    this.root = this.insertNode(this.root, item);
    this.root.black = true;
    this.count++;
  }

  private insertNode(h: LLRBNode<T> | null, item: T): LLRBNode<T> {
    if (h == null) {
      return { item, left: null, right: null, black: false };
    }
  
    // if item.Less(h.Item) {
    if (this.comparator(item, h.item) < 0) {
      // item < h.item
      h.left = this.insertNode(h.left, item);
    } else {
      h.right = this.insertNode(h.right, item);
    }
  
    if (isRed(h.right) && !isRed(h.left)) {
      h = this.rotateLeft(h);
    }
  
    if (isRed(h.left) && isRed(h.left!.left)) {
      h = this.rotateRight(h);
    }
  
    if (isRed(h.left) && isRed(h.right)) {
      this.flip(h);
    }
  
    return h;
  }

  // DeleteMin deletes the minimum element in the tree and returns the
  // deleted item or null otherwise.
  deleteMin(): T | null {
    let deleted: T | null;
    [this.root, deleted] = this.deleteMinNode(this.root);
    if (this.root != null) {
      this.root.black = true;
    }
    if (deleted != null) {
      this.count--;
    }

    return deleted;
  }

  // deleteMin code for LLRBTree 2-3 trees
  private deleteMinNode(h: LLRBNode<T> | null): [LLRBNode<T> | null, T | null] {
    if (h == null) {
      return [null, null];
    }
    if (h.left == null) {
      return [null, h.item];
    }

    if (!isRed(h.left) && !isRed(h.left.left)) {
      h = this.moveRedLeft(h);
    }

    let deleted: T | null;
    [h.left, deleted] = this.deleteMinNode(h.left);

    return [this.fixUp(h), deleted];
  }

  // DeleteMax deletes the maximum element in the tree and returns
  // the deleted item or null otherwise
  deleteMax(): T | null {
    let deleted: T | null;
    [this.root, deleted] = this.deleteMaxNode(this.root);
    if (this.root != null) {
      this.root.black = true;
    }
    if (deleted != null) {
      this.count--;
    }

    return deleted;
  }

  private deleteMaxNode(h: LLRBNode<T> | null): [LLRBNode<T> | null, T | null] {
    if (h == null) {
      return [null, null];
    }
    if (isRed(h.left)) {
      h = this.rotateRight(h);
    }
    if (h.right == null) {
      return [null, h.item]
    }
    if (!isRed(h.right) && !isRed(h.right.left)) {
      h = this.moveRedRight(h);
    }
    let deleted: T | null;
    [h.right, deleted] = this.deleteMaxNode(h.right);

    return [this.fixUp(h), deleted];
  }

  // // Delete deletes an item from the tree whose key equals key.
  // // The deleted item is return, otherwise null is returned.
  Delete(key: T): T | null {
    let deleted: T | null;
    [this.root, deleted] = this.deleteNode(this.root, key);
    if (this.root != null) {
      this.root.black = true
    }
    if (deleted != null) {
      this.count--;
    }

    return deleted;
  }

  private deleteNode(h: LLRBNode<T> | null, item: T): [LLRBNode<T> | null, T | null] {
    let deleted: T | null;
    if (h == null) {
      return [null, null];
    }
    if (this.comparator(item, h.item) < 0) {
      // item < h.item
      if (h.left == null) { // item not present. Nothing to delete
        return [h, null];
      }
      if (!isRed(h.left) && !isRed(h.left.left)) {
        h = this.moveRedLeft(h);
      }
      [h.left, deleted] = this.deleteNode(h.left, item);
    } else {
      if (isRed(h.left)) {
        h = this.rotateRight(h);
      }
      // If @item equals @h.Item and no right children at @h
      if (this.comparator(item, h.item) === 0 && h.right == null) {
        return [null, h.item];
      }
      // PETAR: Added 'h.right != null' below
      if (h.right != null && !isRed(h.right) && !isRed(h.right.left)) {
        h = this.moveRedRight(h);
      }
      // If @item equals @h.Item, and (from above) 'h.right != null'
      if (this.comparator(item, h.item) === 0) {
        let subDeleted: T | null;
        [h.right, subDeleted] = this.deleteMinNode(h.right);
        if (subDeleted == null) {
          throw new Error('logic');
        }
        [deleted, h.item] = [h.item, subDeleted];
      } else { // Else, @item is bigger than @h.Item
        [h.right, deleted] = this.deleteNode(h.right, item);
      }
    }

    return [this.fixUp(h), deleted];
  }
  
  private rotateLeft(h: LLRBNode<T>): LLRBNode<T> {
    const x = h.right;
    if (x == null || x.black) {
      throw new Error('rotating a black link');
    }
    h.right = x.left;
    x.left = h;
    x.black = h.black;
    h.black = false;

    return x;
  }
  
  private rotateRight(h: LLRBNode<T>): LLRBNode<T> {
    const x = h.left;
    if (x == null || x.black) {
      throw new Error('rotating a black link');
    }
    h.left = x.right;
    x.right = h;
    x.black = h.black;
    h.black = false;

    return x;
  }
  
  // REQUIRE: left and right children must be present
  private flip(h: LLRBNode<T>) {
    if (h.left == null || h.right == null) {
      return;
    }
    h.black = !h.black;
    h.left.black = !h.left.black
    h.right.black = !h.right.black
  }
  
  // REQUIRE: left and right children must be present
  private moveRedLeft(h: LLRBNode<T>): LLRBNode<T> {
    if (h.left == null || h.right == null) {
      return h;
    }
    this.flip(h);
    if (isRed(h.right.left)) {
      h.right = this.rotateRight(h.right);
      h = this.rotateLeft(h);
      this.flip(h);
    }

    return h;
  }
  
  // REQUIRE: left and right children must be present
  private moveRedRight(h: LLRBNode<T>): LLRBNode<T> {
    if (h.left == null || h.right == null) {
      return h;
    }
    this.flip(h);
    if (isRed(h.left.left)) {
      h = this.rotateRight(h);
      this.flip(h);
    }

    return h;
  }

  private fixUp(h: LLRBNode<T>): LLRBNode<T> {
    if (isRed(h.right)) {
      h = this.rotateLeft(h);
    }
  
    if (isRed(h.left) && isRed(h.left!.left)) {
      h = this.rotateRight(h);
    }
  
    if (isRed(h.left) && isRed(h.right)) {
      this.flip(h);
    }
  
    return h;
  }
}

