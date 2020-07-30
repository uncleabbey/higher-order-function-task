function randomNumber () {
	var number;
	var counter = 0;

	var getRandom = setInterval(function () {
		number = Math.random()
		counter++;

		if (number > .75) {
			console.log(counter + 'times')
			clearInterval(getRandom)
		}

	}, 1000)
}