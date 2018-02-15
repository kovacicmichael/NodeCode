// Implement the logic for the UserSearch component. You should begin planning the component with pseudocode.

// This component requires you to use the weather-js NPM package. Take a moment to research and experiment with the API, documented here: https://www.npmjs.com/package/weather-js

// Create a UserSearch constructor. It should accept a user's name and location as arguments, and store the value of Date.now() in a date property. (This will be formatted later.)

// Objects returned by the UserSearch constructor should also have a getWeather method, which should log or return the weather in the user's location.

// Test your UserSearch constructor by feeding it dummy data for now.


//create switch case
//create constructor
//create instance
//append function to push to log.txt

//var getData = require("log.txt");
var weather = require('weather-js');
//var log = require("./log.txt")
var fs = require("fs");


	function userSearch(name, location, date){
		this.name = name;
		this.location = location;
		this.date = date;
		this.getWeather = function(){
			weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
  			if(err) console.log(err);
 			
  			console.log(JSON.stringify(result, null, 2));
		});
		};
		this.newUserSearch = function(){
			var userData = "\nName: " + this.name + "," +
				" Location: " + this.location + "," +
				" Date: " + this.date + ";"
			
			fs.appendFile("log.txt", userData, function(err) {

		  // If an error was experienced we say it.
			  	if (err) {
			    console.log(err);
			  	}

			  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
			  	else {
			    console.log("Content Added!");
			  	}
		  	});

		};

	}

	userSearch();

	var newSearch = new userSearch(process.argv[2], process.argv[3], Date.now())

	//console.log(newSearch);
	//console.log(newSearch.getWeather());
	newSearch.newUserSearch();


module.exports = userSearch;

	


