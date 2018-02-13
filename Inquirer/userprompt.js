// Create a basic command line Node application using the inquirer package.
var inquire = require("inquirer");
// Your application should ask the user any five questions of your choosing.
inquire.prompt([
	{
		type: "input",
		message: "What is your name?",
		name: "username"
	},
	{
		type: "password",
		message: "Set your password.",
		name: "password"
	},
	{
		type: "confirm",
		message: "Are you sure?",
		default: true,
		name: "confirm"
	},
	{
		type: "list",
		message: "Choose your weapon!",
		choices: ["Sword", "Mace", "Bow and Arrow", "Hammer"],
		name: "list"
	},
	{
		type: "confirm",
		message: "Are you sure?",
		name: "confirm",
		default: true
	}
])
.then(function(inquireResponse){
	console.log(inquireResponse);

	if(inquireResponse.confirm){
		console.log("\nWelcome " + inquireResponse.username);
		console.log("Prepare your " + inquireResponse.list + " for battle!\n");
	}
});

// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
