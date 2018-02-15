// * **Instructions**

//   * Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

//   * Start out by creating a constructor function called "Player" with the following properties and methods...

//     * `name`: Property which contains the player's name
//     * `position`: Property which holds the player's position
//     * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
//     * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
//     * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
//     * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
//     * `printStats`: Method which prints all of the player's properties to the screen

var inquirer = require("inquirer");

var count = 0;

var playerArray = [];
var starterArray = [];
var subArray = [];



function Player(name, position, offense, defense){
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  this.goodGame = function(){
    var coinflip = Math.floor(Math.random() * Math.floor(2));
    if(coinflip == 1){
      this.offense++
    }else{
      this.defense++
    }
  }
  this.badGame = function(){
    var coinflip = Math.floor(Math.random() * Math.floor(2));
    if(coinflip == 1){
      this.offense--
    }else{
      this.defense--
    }
  }
  this.printStats = function(){
    console.log("Name: " + this.name + "\nPosition: " + this.position +
      "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n--------------");
  }
}

//   * Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

function generatePlayer(){
    if(count < 3){
        inquirer.prompt([
            {
              name: "name",
              message: "Player's name?"
            },
            {
              name: "position",
              message: "Player's position?"
            },
            {
              name: "offense",
              message: "What is their level of offense? (From 1-10)",
              validate: function(value){
                if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) < 10){
                  return true;
                }
                return false
              }
            },
            {
              name: "defense",
              message: "What is their level of defense? (From 1-10)",
              validate: function(value){
                if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) < 10){
                  return true;
                }
                return false
              }
            }
            // {
            //   starter: "starter",
            //   confirm: true
            // }
          ]).then(function(answers){
              var newPlayer = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            
            if(starterArray.length < 2){
              playerArray.push(newPlayer)
              starterArray.push(newPlayer)
              console.log(newPlayer.name + " was added to the Starters")
            }else{
              playerArray.push(newPlayer);
              subArray.push(newPlayer);
              console.log(newPlayer.name + " was added to the Subs")
            }

            count++
            console.log("NEW PLAYER");
            generatePlayer();

          })
    }else{
      //   * Once all of the players have been created, print their stats.
      console.log("Your roster is filled!")
      for(var i = 0; i < playerArray.length; i++){
        playerArray[i].printStats(); 
      }
      console.log("Get ready to play!")
      playGame(0);
    }


};
generatePlayer();



//   * Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:
var teamOneScore = 0;
//var teamTwoScore = 0;

function playGame(roundNumber){

  for(var i = 0; i < starterArray.length; i++){

  defenseTotal = playerArray[0].defense + playerArray[i].defense;
  offesnseTotal = playerArray[0].offense + playerArray[i].offense;
  };

    for(var i = 0; i < 10; i ++){
      randomNumber1 = Math.floor(Math.random() * Math.floor(21));
      randomNumber2 = Math.floor(Math.random() * Math.floor(21));

        if(randomNumber1 < offesnseTotal){
          teamOneScore++;
        }if else(randomNumber2 > defenseTotal){
          teamOneScore--;
        }
    };
    inquirer.prompt([
        {

        }



      ])


}

//     * Run 10 times. Each time the function runs:
//       * Two random numbers between 1 and 50 are rolled and compared against the starter's offensive and defensive stats
//         * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
//         * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
//       * After the score has been changed, prompt the user to allow them to choose to substitute any of the players within the starters array with the player within the subs array.
//     * After the game has finished (been run 10 times):
//       * If the score is positive, run `goodGame` for all of the players currently within the starters array.
//       * If the score is negative, run `badGame` for all of the players currently within the starters array.
//       * If the score is equal to zero, do nothing with the starters.
//       * Gives the user a message about if they won, and the status of their starters.
//       * After printing the results, prompts the player if they would like to play again.
//         * Runs `playGame` from the start once more if they do.
//         * Ends the program if they don't.

//   * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

//   * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.