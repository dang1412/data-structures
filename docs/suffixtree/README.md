# Suffix Tree

A suffix tree (also called PAT tree or, in an earlier form, position tree) is a compressed trie containing all the suffixes of the given text as their keys and positions in the text as their values. Suffix trees allow particularly fast implementations of many important string operations: quickly locating a substring in S, locating a substring if a certain number of mistakes are allowed, locating matches for a regular expression pattern etc. Suffix trees also provide one of the first linear-time solutions for the longest common substring problem. Ukkonen based algorithm allows to construct suffix tree of the string S in linear (to the length of S) time and space.

![suffixtree image](https://codetube.vn/images/suffixtree.png "Suffix Tree")

<!-- HeadMark -->

- [Definitions](#definitions)
- [Implementation](#implementation)
- [References](#references)
- [Demostration](#demostration)

## Definition

The suffix tree for the string S of length n is defined as a tree such that:

- The tree has exactly n leaves numbered from 1 to n.
- Except for the root, every internal node has at least two children.
- Each edge is labelled with a non-empty substring of S.
- No two edges starting out of a node can have string-labels beginning with the same character.
- The string obtained by concatenating all the string-labels found on the path from the root to leaf i spells out suffix S[i..n], for i from 1 to n.

S is normally padded with a terminal symbol not seen in the string (usually denoted `$`). This ensures that no suffix is a prefix of another, and that there will be n leaf nodes, one for each of the n suffixes of S.

Suffix links are a key feature for linear-time construction algorithms. In a complete suffix tree, all internal non-root nodes have a suffix link to another internal node. If the path from the root to a node spells the string `xA`, where `x` is a single character and `A` is a string (possibly empty), it has a suffix link to the internal node representing `A`.

## Implementation

The algorithm begins with an implicit suffix tree containing the first character of the string. Then it steps through the string adding successive characters until the tree is complete.

## References

- [WIKI Suffix Tree](https://en.wikipedia.org/wiki/Suffix_tree)
- Demo is referenced from this [Visualization of Ukkonen's Algorithm](http://brenden.github.io/ukkonen-animation/)

## Demostration

<!-- EndMark -->

[Suffix Tree](https://codetube.vn/suffixtree)
