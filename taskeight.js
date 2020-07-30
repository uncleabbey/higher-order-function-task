function findIndex (arr, callBack) {

	for(var i = 0, length1 = arr.length; i < length1; i++){
		if(callBack(arr[i])) {
			return i
		}
	}
}

