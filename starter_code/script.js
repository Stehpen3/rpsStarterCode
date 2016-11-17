var generateComputerChoice = function () {
var array =["rock","paper","scissors"]
var randomNum = (Math.round(Math.random()*2))
return array[randomNum]
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
 if (userChoice == ROCK) {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = COMPUTER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    else if (userChoice == PAPER) {
       if (computerChoice == ROCK) {
           outcome = USER_WINS;
       }
       else if (computerChoice == PAPER) {
           outcome = DRAW;
       }
       else {
           outcome = COMPUTER_WINS;
       }
    }
    else {
       if (computerChoice == ROCK) {
           outcome = DRAW;
       }
       else if (computerChoice == PAPER) {
           outcome = USER_WINS;
       }
       else {
           outcome = DRAW;
       }
    }
    
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {
    console.log("here")
    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();
    console.log(computerChoice)
    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    pickWinner(userChoice, computerChoice);

});