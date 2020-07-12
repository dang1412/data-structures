export function bfs(g: Map<number, number[]>, start: number) {
  const q = [start]
  const visitted = {}
  visitted[start] = true
  let i = 0
  while (i < q.length) {
    const u = q[i++]
    for (const v of g.get(u)) {
      if (!visitted[v]) {
        q.push(v)
        visitted[v] = true
      }
    }
  }
}
