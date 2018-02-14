// * **Instructions**

//   * Remember Tamagotchis? They were those little toys that contained "digital pets" which you could feed, pet, play with, and care for. Kind of like Furbies but a whole lot less terrifying. Over the next thirty minutes or so, you are going to create your own basic Tamagotchi clone using constructors.

//   * Create a constructor called "DigitalPal" which will create four properties and four methods...
//     * The first property is "hungry" and it initially starts out as false

//     * The second property is "sleepy" and it initially starts out as false

//     * The third property is "bored" and it initially starts out as true

//     * The fourth property is "age" and it initially starts out at 0

//     * The first method is "feed()" - If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."

//     * The second method is "sleep()" - If sleepy is true, print "Zzzzzzzz", set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."

//     * The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"

//     * The fourth method is "increaseAge()" - This method runs within the sleepy() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"


function digitalPal(){
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function(){
    if(this.hungry){
      console.log("that wa yummy!");
      this.hungry = false;
      this.sleepy = true;
    }else{
      console.log("No thanks I am full.");
    };
  };
  this.sleep = function(){
    if(this.sleepy){
      console.log("Zzzzzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }else{
      console.log("No way! I'm not tired.")
    }
  };
  this.play = function(){
    if(this.bored){
      console.log("Yay,lets play!");
      this.bored = false;
      this.hungry = true;
    }else{
      console.log("not right now, later?");
    }
  };
  this.increaseAge = function(){
    this.age++
    console.log("Happy Birthday to me! I am " + this.age + " year old!")
  }
};

var dog = new digitalPal();
var cat = new digitalPal();

//   * Create a variable named "Dog" that is set to a new DigitalPal before adding the following unique properties/methods to it...

//     * Outside - Initially set to false

//     * Bark() - Prints out "Woof! Woof!" when run

//     * goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs Bark(). If outside is true, prints "We're already outside though..."

//     * goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."

dog.outside = false;
dog.bark = function(){
  console.log("woof, woof!")
};
dog.goOutside = function(){
  if(this.outside == false){
  console.log("yay i love the outdoors!");
  dog.outside = true;
  dog.bark();
  }
};
dog.goInside = function(){
  if(this.outside){
    console.log("Do we have to? Fine...")
    this.outside = false;
  }else{
    console.log("I am already inside...")
  }
}


cat.houseCondition = 100;
cat.meow = function(){
  console.log("Meow, Meow!");
};
cat.destroyFurniture = function(){
  if(cat.houseCondition - 10 > 0){
  console.log("mwahahahwaha!");
  cat,houseCondition -=10;
  cat.bored = false;
  cat.sleepy = true;
  };
};
cat.buyNewFurniture = function(){
  console.log("Are you sure about that?");
  cat.houseCondition += 50;
}


dog.sleep();
console.log(dog);


//   * Make a second variable named "Cat" that is set to a new DigitalPal and add the following methods to it:

//     * HouseCondition - Initially set to 100... But not for long...

//     * meow() - prints out "Meow! Meow!" when run

//     * destroyFurniture() - Lowers HouseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If HouseCondition is equal to 0, then this should not run anymore.

//     * buyNewFurniture() - Raises HouseCondition by 50 and prints "Are you sure about that?" to the screen.

//   * Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

//   * BONUS: Make it so your Tamagotchis run off of user-input. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.


// Add CommentCollapse 

// Message #class