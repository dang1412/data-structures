package string

// KmpSearch searchs for the first match position
func KmpSearch(text string, pat string) int {
	lps := computeLps(pat)
	start := 0
	matched := 0

	for start <= len(text)-len(pat) {
		for matched < len(pat) && text[start+matched] == pat[matched] {
			matched++
		}
		// reach the not matched pos or matched all
		if matched == len(pat) {
			return start
		}
		if matched == 0 {
			// not matched any char
			start++
		} else {
			start += matched - lps[matched-1]
			matched = lps[matched-1]
		}
	}

	return -1
}

func computeLps(m string) []int {
	last := 0
	lps := []int{len(m)}
	lps[0] = 0

	i := 1
	for i < len(m) {
		if m[i] == m[last] {
			// the prev lps match the next char
			last++
			lps[i] = last
			i++
		} else if last > 0 {
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
