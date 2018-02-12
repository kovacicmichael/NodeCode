// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"

var request = require("request");
var movieName = process.argv[2];

for(var i = 2; i < process.argv.length; i++){
	if(i > 2 && i < process.argv.length){

	var movieName = process.argv[2] + "+" + process.argv[i];
	}else{
		var movieName = process.argv[2];
	}

// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, function(error, response, body){
	if (!error && response.statusCode === 200) {
		//console.log(body)
		//console.log(JSON.parse(body));
		console.log(JSON.parse(body));
	}
});

}
// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...

  // If the request is successful
  // ...

  // Then log the Release Year for the movie
  // ...
