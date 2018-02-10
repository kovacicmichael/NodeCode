
//parameter check
//create a command line node application that takes in two parameters and outputs whether they are equal or not.

//start by simply logging the value of each argument to console.  then use your usual Javascript approach



// var value1 = parseFloat(process.argv[2]);

// var value2 = parseFloat(process.argv[3]);


// if(value1 === value2){
// 	console.log(parseFloat(process.argv[2]) + "is equal to" + parseFloat(process.argv[3]));
// }else{
// 	console.log(parseFloat(process.argv[2]) + "is not equal to" + parseFloat(process.argv[3]));
// }


function test (value1, value2){
	if(value1 === value2){
	console.log("is equal to");
	}else{
	console.log("is not equal to");
	}
};

test(parseFloat(process.argv[2]), parseFloat(process.argv[3]));

console.log(parseFloat(process.argv[2]) === parseFloat(process.argv[3]));