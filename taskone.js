function countdown (number) {
	var count = setInterval(function () {
		console.log(number--)
		if (number < 1) {
			console.log('DONE!')
			clearInterval(count)
		}
	}, 1000)
	
}