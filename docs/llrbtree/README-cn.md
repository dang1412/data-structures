# 左斜红黑树

**红黑树**是计算机科学中一种自平衡的二进制搜索树。 二叉树的每个节点都有一个额外的位，该位通常被解释为节点的颜色（红色或黑色）。这些颜色位用于确保树在插入和删除期间保持大致平衡。修改树后，将重新排列新树并重新粉刷以恢复着色属性。这些属性的设计方式使得可以有效地执行重新排列和重新着色操作，以使搜索，插入和删除操作均在O(log n) 时间内完成。**左倾红黑树**是红黑树的一种变体，其设计更易于实现。

![左倾红黑树](https://codetube.vn/images/llrbtree.png "左倾红黑树")

<!-- HeadMark -->

- [Definition](#definition)
- [Implementation](#implementation)
- [References](#references)
- [Demostration](#demostration)

## Definition

左倾红黑树是 **二叉搜索树** ，满足以下属性：

- 每个节点都是红色或黑色的。
- 根节点是黑色的。 有时会忽略此规则。由于根节点始终可以从红色更改为黑色，但不一定反之亦然，因此该规则对分析的影响很小。
- 所有的叶子节点 (NIL) 都是黑色的。
- 如果节点是红色的，那么它的两个子节点都是黑色的。
- 从指定节点到其任何后代NIL节点的每条路径都经过相同数量的黑色节点。
- （向左倾斜表示在可能的情况下将红色推向左侧）。

## Implementation

来自 [gollrb](https://github.com/petar/GoLLRB) 的简化实现。

## References

- [红黑树](https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91)
- [左倾红黑树](https://zh.wikipedia.org/wiki/%E5%B7%A6%E5%80%BE%E7%BA%A2%E9%BB%91%E6%A0%91)

## Demostration

<!-- EndMark -->

[左倾红黑树](https://codetube.vn/redblacktree)
