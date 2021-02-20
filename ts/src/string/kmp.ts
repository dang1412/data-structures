// KmpSearch searchs for the all match positions
export function kmpSearch(text: string, pat: string): number[] {
  const lps = computeLps(pat)
  const rs = []
  let start = 0
  let matched = 0

  while (start <= text.length - pat.length) {
    while (matched < pat.length && text[start + matched] == pat[matched]) {
      matched++
    }
    // reach the not matched pos or matched all
    if (matched === pat.length) {
      rs.push(start)
    }

    if (matched === 0) {
      // not matched any char
      start++
    } else {
      start += matched - lps[matched-1]
      matched = lps[matched-1]
    }
  }

  return rs
}

function computeLps(m: string): number[] {
  let last = 0
  const lps = []
  lps[0] = 0

  for (let i = 1; i < m.length;) {
    if (m[i] === m[last]) {
      // the prev lps match the next char
      last++
      lps[i] = last
      i++
    } else if (last > 0) {
      // longest prefex suffix doesn't match next char, try the next longest
      last = lps[last-1]
    } else {
      // doesn't match any prev character
      lps[i] = 0
      i++
    }
  }

  return lps
}
