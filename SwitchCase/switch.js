


for(var i = 2; i < process.argv.length; i++){

	var input = process.argv[i]


	switch(input){
		case "Motobecane":
		case "motobecane":
			console.log("Motobecanes cost $450 minimum.")
			break;
		case "Trek":
		case "trek":
			console.log("it stops here")
			break;
		case "cannondale":
		case "Cannondale":
			console.log("Both Trek and Cannondale are expensive, but reliable and well built brands.")
			break;
		case "hello":
			console.log("goodbye");
			break;
		//this is optional and is similar to an else clause
		default: 
			console.log("I am sorry, but that opperator does not exist.")

	}

}