# 后缀树

后缀树（也称为PAT树或位置树）是一种压缩的特里树，其中包含给定文本的所有后缀作为键，并在文本中的位置作为其值。后缀树可以非常快速地实现许多重要的字符串操作：快速定位S中的子字符串，如果允许一定数量的错误，则定位子字符串，查找正则表达式模式的匹配项等。后缀树还为最长公共子串问题提供了第一个线性时间解。基于Ukkonen的算法允许在线性（到S的长度）的时间和空间中构造字符串S的后缀树。

![suffixtree image](https://codetube.vn/images/suffixtree.png "后缀树")

<!-- HeadMark -->

- [Definitions](#definitions)
- [Implementation](#implementation)
- [References](#references)
- [Demostration](#demostration)

## Definition

长度为n的字符串S的后缀树定义为这样的树：

- 树正好有n片叶子，编号从1到n。
- 除了根节点，每个内部节点至少有两个子节点。
- 每个边都标有S的非空子串。
- 从节点开始的任何两条边都不能具有以相同字符开头的字符串标签。
- 通过串联从根到叶的路径上找到的所有字符串标签而获得的字符串，i表示后缀S [i..n]，即i从1到n。

S是通常用字符串中看不到的终端符号填充（通常表示为$）。这样可以确保没有后缀是另一个后缀的前缀，并且将确保有n个叶节点，每个S的后缀都一个。

后缀链接是线性时间构造算法的关键特性。在完整的后缀树中，所有内部非根节点都有到另一个内部节点的后缀链接。如果从根到节点的路径拼写为字符串 `xA`，其中 `x` 为单个字符，而 `A` 为字符串（可能为空），则它具有指向表示 `A` 的内部节点的后缀链接。

## Implementation

该算法从包含字符串第一个字符的隐式后缀树开始。然后逐步遍历字符串，添加连续的字符，直到树完成为止。

## References

- [后缀树WIKI](https://zh.wikipedia.org/wiki/%E5%90%8E%E7%BC%80%E6%A0%91)
- 演示是从 [Ukkonen算法的可视化](http://brenden.github.io/ukkonen-animation/) 中引用的

## Demostration

<!-- EndMark -->

[后缀树](https://codetube.vn/suffixtree)
