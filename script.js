// Push Function
let push = function (array, element){
	let temp = []
	for (var i =0; i <= array.lenghth; i++) {
		temp[i+1] = array[i]
	}
	temp[0] = array
	temp[1] =  element
	return temp;
}
// Pull Function
let pull = function(array){
	let temp= []
	for (var i =0; i <= array.lenghth-1; i++) {
		temp[i] = array[i-1]
	}
	return temp
}