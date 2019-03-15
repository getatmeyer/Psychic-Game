

// declare our variables
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]; 
console.log(alphabetArray);

var wins = 0;
var losses = 0;
var guesses;
var guessesChoices = [];
var userPick = "";
var computerPick = "";

// confirm 
var guessGame = confirm("How good are you at guessing?")
var wantGame = confirm("Take your shot!")

// delcare startReset function
// function startReset() {
//     return;


    // guesses = 9;
    // computerPick = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    // console.log(computerPick);

 function startReset () {
     
     guesses = 9;
     
 }

// delcare 
startReset ();
// delcare onkey up fuction
document.onkeyup = function(event) {

    var userPick  = event.key;
    console.log(userPick)

    var computerPick = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    // var guessLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q" ,"r", "s", "t", "u","v", "w", "x", "y", "z",];
    console.log(computerPick);
    // return userPick
}

    // If the user picks the right letter
    if (userPick === computerPick) {
    console.log(computerPick);
    wins ++;
    guesses = 9;
    guessesChoices = [];
}
    // if the user picks the wrong letter
    else if (userPick !==  computerPick) {
        console.log("you get wrong letter");
        guesses --;
        
        console.log(userPick);
    
    guessesChoices.push(userPick);
}
    if (guesses === 0) {
    guesses = 9;
    losses ++;
    guessChoices = [];
}
