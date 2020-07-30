function specialMultiply  (first, second) {
	if (arguments[1]) {
		return arguments[0] * arguments[1]
	}
	return function(second) {
		return first * second
	}
}