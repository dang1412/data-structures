class SuffixNode {
  constructor(public edges: {[c: string]: number} = {}, public start = 0, public end = 0, public link = 0) {}

  edgeLen(maxLen: number): number {
    return (this.end === 0 ? maxLen : this.end) - this.start;
  }

  edgeString(text: string): string {
    if (this.end === 0) {
      return text.substr(this.start);
    }

    return text.substr(this.start, this.end - this.start);
  }
}

interface ActivePoint {
  node, length: number;
  edge: string;
}

export class SuffixTree {
  nodes: SuffixNode[] = [];

  constructor(public text: string) {
    this.newNode({}, 0, 0);

    let ap: ActivePoint = {node: 0, length: 0, edge: ''};
    let remainingSuffix = 0;
    let lastInternalNode = 0;
  
    for (let i = 0; i < text.length; i++) {
      remainingSuffix++;
      while (remainingSuffix > 0) {
        if (this.stepForward(ap, text[i])) {
          lastInternalNode = 0;
          break;
        }
        const newInternalNode = this.split(ap, i);
        if (ap.edge !== '' && lastInternalNode !== 0) {
          this.nodes[lastInternalNode].link = newInternalNode;
        }

        // TODO clarify some logic
        lastInternalNode = newInternalNode;

        remainingSuffix--;
        const link = this.nodes[ap.node].link;
        if (link > 0) {
          // suffix link exist
          if (ap.edge !== '') {
            // TODO next 2 lines duplicate code
            const childNodeIndex = this.nodes[ap.node].edges[ap.edge];
            const childNode = this.nodes[childNodeIndex];
            ap = this.move(link, childNode.start, childNode.start+ap.length);
          } else {
            ap.node = link
          }
        } else {
          // suffix link not exist, go back and traverse from root
          ap = this.move(0, i-remainingSuffix+1, i)
        }

        // patch suffix link
        // in case ap is right on node not root
        if (ap.node !== 0 && ap.edge === '') {
          this.nodes[lastInternalNode].link = ap.node
        }
      }
    }
  }

  private newNode(edges: {[c: string]: number}, start: number, end: number): number {
    const ind = this.nodes.length;
    const node = new SuffixNode(edges, start, end);
    this.nodes.push(node);

    return ind;
  }

  private split(ap: ActivePoint, pos: number): number {
    const activeNode = this.nodes[ap.node];
    if (ap.length === 0) {
      activeNode.edges[this.text[pos]] = this.newNode({}, pos, 0);
      return ap.node;
    }

    if (!ap.edge) {
      throw Error('active edge must exist when activeLen > 0');
    }

    // current edge info
    const childNodeIndex = activeNode.edges[ap.edge];
    const childNode = this.nodes[childNodeIndex];
    const edgeStart = childNode.start;
    const edgeMidPos = edgeStart + ap.length;

    // update current edge
    childNode.start = edgeMidPos;

    // internal edges
    const internalEdges = {
      [this.text[edgeMidPos]]: childNodeIndex,
    };
    // create new internal node
    const internalNodeIndex = this.newNode(internalEdges, edgeStart, edgeMidPos);
    // create new leaf node
    internalEdges[this.text[pos]] = this.newNode({}, pos, 0);

    // update activeNode's child
    activeNode.edges[this.text[edgeStart]] = internalNodeIndex;
    
    return internalNodeIndex;
  }

  // move and return the active point
  // guarantee that the move can be done otherwise throw error
  private move(nodeIndex: number, l: number, r: number): ActivePoint {
    const maxLen = this.text.length;
    while (l < r) {
      const count = r - l;
      const node = this.nodes[nodeIndex];
      // follow the edge started by character at position l
      const childNodeIndex = node.edges[this.text[l]];
      // throw error if childNodeIndex not exist
      if (typeof childNodeIndex !== 'number') {
        throw new Error(`can not move from node(${nodeIndex}): ${l} -> ${r}`);
      }

      const childNode = this.nodes[childNodeIndex];
      const edgeLength = childNode.edgeLen(maxLen);

      // stop on middle this edge
      if (edgeLength > count) {
        return {node: nodeIndex, length: count, edge: this.text[l]};
      }

      // move down
      nodeIndex = childNodeIndex;
      l += edgeLength;
    }

    // stop right at a node
	  return {node: nodeIndex, length: 0, edge: ''};
  }

  // guarantee that activeLen < activeEdge's length
  private stepForward(ap: ActivePoint, c: string): boolean {
    // TODO check activeLen < activeEdge's length
    const maxlen = this.text.length;
    // active point is at a node
    if (ap.length === 0) {
      // follow the edge started by character c
      const childNodeIndex = this.nodes[ap.node].edges[c];
      if (!childNodeIndex) {
        return false;
      }

      ap.edge = c;
    }

    // TODO throw Error if ap.edge (activeEdge) = ''

    // get childNode
    const childNodeIndex = this.nodes[ap.node].edges[ap.edge];
    const childNode = this.nodes[childNodeIndex];

    // active point is on middle of an edge
    // can step forward
    if (this.text[childNode.start+ap.length] === c) {
      // can step forward
      ap.length++;
      // in case complete this edge and move down to childnode
      if (ap.length === childNode.edgeLen(maxlen)) {
        ap.node = childNodeIndex;
        ap.edge = '';
        ap.length = 0;
      }

      return true;
    }

    return false;
  }
}
