console.log(process.argv);


// [ '/usr/local/bin/node',
//   '/Users/michaelkovacic/Desktop/Projects/NodeCode/node-calculator.js' 

var operator = process.argv[2];
var number1 =  parseInt(process.argv[3]);
var number2 = parseInt(process.argv[4]);

var total = 0;

console.log(operator);
console.log(typeof number1);
console.log(typeof number2);


if(operator === "add"){
	total = number1 + number2;
	console.log("addition");
}else if(operator === "subtract"){
	total = number1 - number2;
	console.log("subtraction");
}else if(operator === "divide" || "/"){
	total = number1 / number2;
}else if(operator === "multiply" || "*"){
	total = number1 * number2;
}else if(operator === "remainder"){
	total = number1 % number2;
}



// switch(operator){
// 	case "add":
// 		total = number1 + number2;
// 		console.log(total);
// 		break;
// 	case "subtract":
// 		total = number1 - number2;
// 		break;
// 	case "multiply":
// 		total = number1 * number2;
// 		break;
// 	case "divede":
// 		total = number1 / number2;
// 		break;
// 	case "remainder":
// 		total = number1 % number2;
// 		break;
// 	default:
// 		console.log("that will never work!")
// }

console.log("TOTAL: " + total);









