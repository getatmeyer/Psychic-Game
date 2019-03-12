// <!DOCTYPE html>
// <html lang="en">

// // <head>
// //     <meta charset="UTF-8">
// // <title>Be Careful what you wish for</title>

// // </head>
// // <body>

<div id="game">
<h1>The Psychic Game</h1>
<p>Guess what letter I'm thinking of</p>
<p>Wins:<span id="won"></span> </p>
<p>Losses: </p>
<p>Guesses Left: </p>
</div>

<script type="text/javascript">

// declare our variables

var guessLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]; 
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesChoices = [];

// confirm 
var guessGame = confirm("How good are you at guessing?")
var wantGame = confirm("Want to play a game?")

// promptv
var confirmGame = prompt("Yes or No?");

if (confirmGame) {
    alert("Good Luck!");
}
else {
     document.write("Have a good day.");
      }

// document keyup
document.onkeyup = function(event) {

var userPick  = event.key;

var computerpick = guessLetter[Math.floor(Math.random() * guessLetter.length)];

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q" ,"r", "s", "t", "u","v", "w", "x", "y", "z",];
console.log(userPick); 

    if (userPick === guessLetter){
    wins ++;
    guesses = 9;
    guessesChoices = [];
}

    if (userPick !==  guessLetter) {
    guesses --;
    guessesChoices.push(userPick);
}
    if (guesses === 0) {
    guesses = 9;
    losses ++;
    guessChoices = [];
}

}
</script>
</body>
</html>