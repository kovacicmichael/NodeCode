var fs = require("fs");








var operator = process.argv[2];
var value = parseInt(process.argv[3]);
var balance = 0;


if(operator === "deposit"){
	deposit();
}else if(operator === "withdraw"){
	total = balance - withdraw
}else if(operator === "total"){
	total();
}
// else if(){

// }


console.log(total);

function total(){

	fs.readFile("bank.txt", "utf8", function(err, data){
		if(err){
			console.log(err);
		}else{
			data = data.split(", ");
			var balance = 0;

			for(var i = 0; i < data.length; i++){
				if (parseFloat(data[i]))
				var balance = balance + parseFloat(data[i]);
				//var balance += data[i];
			}
			console.log(`You have a total of $${balance.toFixed(2)}`);
		}
	})

};

function deposit(){

	fs.appendFile("bank.txt", value + ", ", function(err) {
		if(err){
			console.log(err);
		}else{
		console.log("added total")
		}
	});	


};

