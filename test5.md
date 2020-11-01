
# Markdown Visualization

This feature allows user creating flexible interactive visualization with ease.

## Btree

~~~[tree](itemSize=30,height=200)
1:(3)
2:(1,2)|3:(4,5,6,8)

1:(3)
2:(1,2)|3:(4,5,6,7,8)

1:(3,6)
2:(1,2)|3:(4,5)|4:(7,8)
~~~

## Binary Tree

~~~[tree](itemShape=circle,itemSize=30,height=250)
1:(4)
2:(2)|3:(5)
4:(1)|5:(3)
~~~

## RedBlack Tree

~~~[tree](itemShape=circle,itemSize=30,height=250)
1:(4):black
2:(2):black|3:(5):green
4:(1):black|5:(3):red

1:(4):black
2:(2):black|3:(5):red
4:(1):black|5:(3):red|6:(10):black|7:(15):black
~~~

## Bars

~~~[bars](height=200)
1,7,6,3,4,5,2

1,7,3,6,4,2,5
~~~

## TODO

- Array, Linkedlist
- Graph
- Geometry Math

## Tabs {.tabset}

## Tab One

RedBlackTree

~~~[tree](itemShape=circle,itemSize=30,height=250)
1:(4):black
2:(2):black|3:(5):green
4:(1):black|5:(3):red

1:(4):black
2:(2):black|3:(5):red
4:(1):black|5:(3):red|6:(10):black|7:(15):black
~~~

## Tab Two

BinaryTree

~~~js
var x = 1;
let y = 2;
const z = x + y;
~~~

## {-}

## Code Highlight

~~~js
// SelectionSort sorts array of items
function selectionSort(a) {
  const n = a.length
  for (let i = 0; i < n-1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[i]) {
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
      }
    }
  }
}
~~~

## Debugable CodeEditor

~~~[codeeditor](lang=javascript,height=280px)
// SelectionSort sorts array of items
function selectionSort(a) {
  const n = a.length
  for (let i = 0; i < n-1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[i]) {
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
      }
    }
  }

  return a
}

selectionSort([3,2,1,4,5])
~~~

## Slideshow with Reveal.js

Code slideshow animation, focus and press `f` to enter fullscreen mode 

~~~[slideshow](height=300)
~~~

## Blockly Programming

Programmable drag and drop blocks

~~~[blockly](height=300px)
~~~
