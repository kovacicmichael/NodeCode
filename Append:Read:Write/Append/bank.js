var fs = require("fs");








var operator = process.argv[2];
var value = parseInt(process.argv[3]);
var balance = 0;


if(operator === "deposit"){
	deposit();
}else if(operator === "withdraw"){
	withdraw();
}else if(operator === "total"){
	total();
}else if(operator === "lotto"){
	lotto();
}


//console.log(total);

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

function withdraw(){

	fs.appendFile("bank.txt", "-" + value + ", ", function(err){
		if(err){
			console.log(err);
		}else{
			console.log("value withdrawn")
		};
	})
};

function lotto(){
	var randomNumber = Math.floor(Math.random() * Math.floor(2));
	//console.log(randomNumber);
	if(randomNumber == 1){
		fs.appendFile("bank.txt", "-0.25, ", function(err){
			if(err){
				console.log(err);
			}else{
				console.log("Sorry, you lost, play again soon!");
			};
		})
	}else{
		fs.appendFile("bank.txt", "2.00, ", function(err){
			if(err){
				console.log(err);
			}else{
				console.log("You won 2 dollars!");
			};
		});
	};
}





