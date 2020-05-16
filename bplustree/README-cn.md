# B+树

B+树是b树的一种变体，它也广泛用于将数据存储在面向块的存储上下文中（I/O操作非常昂贵，将同时处理多个数据记录块，而不是单个记录），例如数据库存储或文件系统，如XFS、BFS或NTFS。B+树节点通常具有大量的元素/子节点（100个或更多），这减少了在树中查找元素所需的I/O操作数。

![b+树 image](https://codetube.vn/images/bplustree.png "B+树")

<!-- HeadMark -->

- [Definitions](#definitions)
- [Implementation](#implementation)
  - [Search](#search)
  - [Insertion](#insertion)
  - [Deletion](#deletion)
- [References](#references)
- [Demostration](#demostration)

## Definition

B+树是一个具有不同属性的B树：所有元素都将保存在叶子节点上。因此，非叶子节点的key与叶子节点的key是重复的。非叶子节点只用于检索目的，所有有意义的数据都将在存储在叶子。

根此实现，我们将得到: `leftSubtree <= separateKey < rightSubtree` （如果子树位于叶子节点处，则sepeparateKey将复制到leftSubtree的最后一个元素）。

B+树的叶子节点在一个链表中相互链接，这使得范围查询或元素迭代更加简单和高效。

## Implementation

假设叶子节点上没有重复的key，我们将分离 `leftSubtree <= separateKey < rightSubtree` 的叶子节点（separateKey与leftSubtree的最后一个元素重复），并分离`leftSubtree <= separateKey < rightSubtree`的内部节点。 
所有的检索、插入、删除操作都将在叶子节点结束。

### Search

从根节点开始，从上到下递归遍历树。在每个级别，搜索都会将其检索范围缩小为包括搜索值的子指针（子树）。子树的范围遵循规则：`separationKey[i] < correspondingSubtree <= separationKey[i+1]`。仅在到达 **叶节点** 时获得结果。

由于实际应用中b+树节点中的元素数量可能很大（〜100），因此应使用二进制搜索来搜索节点中的子树（而不是线性搜索）。

### Insertion

要插入新元素，请搜索树以找到应在其中添加新元素的叶子节点。 通过以下步骤将新元素插入该节点：

- 从根节点到要进行插入的节点中搜索树时，将过程中遇到的所有完整节点先分成两个节点：

  - 如果拆分叶节点，则将分离键复制并推到左侧的最后一个位置。
  - 从节点的key和插入元素的key中选择一个中位数。
  - 小于中位数的key将放置在新的左节点中，大于中位数的key将放置在新的右节点中，其中位数用作分隔key。
  - 分隔值插入到节点的父节点中（保证不是完整的节点）。 如果该节点没有父节点（即该节点是根节点），则在该节点上方创建一个新的根节点（增加树的高度）。
  - 如果拆分叶节点，则将分离key复制并推到左侧的最后一个位置。
 
- 到达非完整叶节点后，只需在右侧位置插入新元素的key即可。

### Deletion

要删除元素/key，请按照以下策略检索树以找到应删除元素的 **叶节点**：

- 从根节点到要删除的节点搜索树时，在进入节点之前，如果该节点具有min（d-1）个元素，我们将进行重组，以确保我们经过的每个节点都具有超过min个元素（以便我们可以轻松地在下一步中删除元素）：

  - 如果左侧同级的元素数大于min，则将一个元素从左侧同级移动到当前节点（向右旋转）。 然后在父节点上适当地更新分离元素（对于叶节点和非叶节点有2种情况，请参见演示）。

  - 如果左侧同级的元素数小于min，则检查右同级元素是否大于min，然后将一个元素从右同级元素移动到当前节点（向左旋转）。之后在父节点上适当地更新分离元素（对于叶节点和非叶节点有2种情况，请参见演示）。

  - 如果以上都不是（表示左侧和右侧同级都具有min（d-1）个元素），请将当前节点与右侧同级合并（如果右侧不存在，则合并左侧同级）。要执行合并非叶子节点，我们必须从父级中移除两个子级的分离元素（这很好，因为父节点中有多个min元素），并将其放在合并节点的中间，如下所示： `...leftElements, separationElement, ...rightElements`。 
 合并的节点将具有（d-1）+ 1 +（d-1）= 2 * d-1，这是最大元素数。在叶节点的情况下，只有`... left-elements，... right-elements`（没有splitElement，因为它已经在leftElements中）。

  - 旋转或合并元素后，对于非叶节点，我们将必须相应地调整子节点（节点指针数组）。

- 在叶节点上找到delete元素后，只需从叶中删除该元素即可。

## References

[WIKI B+树](https://zh.wikipedia.org/wiki/B%2B%E6%A0%91)

## Demostration

<!-- EndMark -->

[B+tree](https://codetube.vn/bplustree)
