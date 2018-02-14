

var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function(){
			if(this.raining){
					console.log(this.noise);
			};
	}
};


var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function(){
		if(this.raining){
			console.log(this.noise);
		}
	}
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
dogs.raining = false;

function massHysteria(dogs, cats){
	if(cats.raining && dogs.raining){
		console.log("mass hysteria!");
	}
}

massHysteria(dogs, cats);

//new syntax starting now



function ANimal(raining, noise){
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function(){
		if(this.raining){
			console.log(makeNoise);
		};
	};
};