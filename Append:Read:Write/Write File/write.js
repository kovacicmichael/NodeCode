// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("write.txt", "Inception, Die Hard", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});




//example of 
// function actionA(name, type, callback) {
// 	console.log(name, type);
// 	callback(`The name is: ${name}`, `The type is: ${type}`);
// }

// actionA("Name", "Type", function (nameString, typeString) {
// 	console.log(nameString);
// });