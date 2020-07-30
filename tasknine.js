function specialMultiply  (first, second) {
	if (second) {
		return arguments[0] * arguments[1]
	}
	return function(second) {
		return first * second
	}
}