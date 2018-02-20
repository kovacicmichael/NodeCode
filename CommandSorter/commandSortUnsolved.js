// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================


//want to gather the numbers entered into terminal
//push thise numbers into and array
//have that array organize its contents in numerical order


var number = [];

function sortNumerically(a, b){
	return a - b;
};
//parse int will gather the input and convert it to and integer
for(var i = 2; i < process.argv.length; i++){
	number.push(parseInt(process.argv[i]));
};

//console.log(number);

number.sort(sortNumerically);

console.log(number);
