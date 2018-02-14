

// var dogs = {
// 	raining: true,
// 	noise: "Woof!",
// 	makeNoise: function(){
// 			if(this.raining){
// 					console.log(this.noise);
// 			};
// 	}
// };


// var cats = {
// 	raining: false,
// 	noise: "Meow!",
// 	makeNoise: function(){
// 		if(this.raining){
// 			console.log(this.noise);
// 		}
// 	}
// };

// dogs.makeNoise();
// cats.raining = true;
// cats.makeNoise();
// dogs.raining = false;

// function massHysteria(dogs, cats){
// 	if(cats.raining && dogs.raining){
// 		console.log("mass hysteria!");
// 	}
// }

// massHysteria(dogs, cats);

//new syntax starting now



function Animal(raining, noise){
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function(){
		if(this.raining){
			console.log(this.noise);
		};
	};
};



var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");
var birds = new Animal(true, "Chirp!");


//Constructor does this behind the scenes
// var birds = {
// 	raining: true,
// 	noise: "Chirp!",
// 	makeNoise: function(){
// 		if(this.raining){
// 			console.log(makeNoise);
// 		};
// }

dogs.makeNoise();
cats.makeNoise();


var massHysteria = function massHysteria(dogs, cats){
	if(cats.raining && dogs.raining){
		console.log("mass hysteria!");
	}
}