function isEven (num) {
	if (num % 2 == 0) {
		return true
	} else {
		return false
	}
}


function isPrime (num) {
	if (num === 1) {
		return false
	} else if (num === 2) {
		return true
	} else {
		for(var i = 2; i < num; i++){
		if (num % i === 0) {
			return false;
		}
	}
	return true;
	}
	
}

function isOdd (num) {
	if (num % 2 > 0) {
		return true
	} else {
		return false
	}
}



function numberFact (num, func) {
	return func(num)
}
