// Push function 
let push = function(array, element){
	try{
		let temp = []
		temp[0] = element
		for (let i = 0; i <= array.length; i++) {
			temp[i+1] = array[i]
		}
		return temp
	}
	catch(err){
		console.log("Error has occured" + err.stack)
	}
}
//Pull function
let pull = function(array){
	try{
		console.log("The last index value is:" + array[array.length-1])
		let temp = [] 
		for (let i = 0; i <= array.length; i++) {
			temp[i] = array[i]
		}
		temp.length = array.length-1
		return temp
	}
	catch(err){
		console.log("Error has occured" + err.stack)
	}
}
