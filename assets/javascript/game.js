
        // declare global variables
        var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        console.log(alphabetArray.length);

        var wins = 0;               // hold the number of win input
        var losses = 0;             // hold the number of losses input
        var guessesLeft = 9;        // hold the amonunt number of guessLeft, var gusses; changed to guessesLeft = 9;
        var letterGuessed = [];     // hold the value of letterGussesd, guessesChoices = [] changed to LetterGuessed = [];
        var score = 0;
        var keyholder;          // variable to hold the index of alphabetArray

        var userPick = "";     
        var computerPick = "";

    var renderScore = function() { //wrap these in a function to test win/losses

        // if (scoreholder === (alphabetArray.length - 1)) {
        //     score ++;
        //     // document.querySelector("#score").innerHTML = alphabetArray[keyholder]
        // }
        // else {
        //     // document.querySelector("#score").innerHTML = "Final Score: " + score + "out of " + alphabetArray.length;

        // }

    if (userPick === computerPick) { // If the user picks the right letter
        console.log(computerPick + " inside win condition");

        alert("You win!");
        wins ++;

        // wins = wins + 1;
        // guessesLeft = 9;
        // letterguessed = [];
        startReset()

    }
    
    // if the user picks the wrong letter
    else if (userPick !=  computerPick) {
        console.log(computerPick + "you get wrong letter");
        //increment losses - but we don't wnt to increment osses until 9 guesses have failed?
        // losses ++; 
        //every time they guess wrong, the guessesLeft should go down
        guessesLeft -= 1;
        if(guessesLeft === 0){

            alert("Try again!");
            //now we do the loss function
            losses++;
            startReset()
        }
        console.log(userPick);
        letterGuessed.push(userPick);
    }
       if (guessesLeft === 9) {
        // FILL CONTENT

       
    }
        function updatedScore () {  // function to display wins in HTML
            document.getElementById("win").innerHTML = "Win : " + wins;
            }updatedScore ();

        function updatedlossesScore () { //function to display loss in HTML
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            }updatedlossesScore();

        function guessesLeftDisplay () { //function to display guessLeftDisplay in HTML
            document.getElementById("guesses-left").innerHTML = "Guesses left : " + guessesLeft;
            }guessesLeftDisplay();

        function displayGuesses () { // function to display letterGuessed}
            document.getElementById("displayedGuess").innerHTML = "Your guesses so far :" + letterGuessed;
            }displayGuesses();

        function myFunction() {     // set the image in HTML
            document.body.style.backgroundImage = "url(../assets/images/curtain.jpg')";
            }myFunction();
        
        }


        document.onkeyup = function(event) {    // when the user presses a key, it will run the function

        
        userPick = event.key.toLowerCase();     // Determine which key was pressed, set to userPick varable 
        console.log(userPick)
        console.log('wins:', wins, 'losses: ', losses)
        console.log(computerPick + " comp pick on keyup");
        renderScore();
        
        
        }

    function startReset() {
        computerPick = alphabetArray[Math.floor(Math.random() * alphabetArray.length + guessesLeft )];
        guessesLeft = 9;
        letterGuessed = [];
        
    }
startReset();

    function addLetter (keyholder) {
        var repeatGuess = letterGuessed.some(function(item) {
            return item === keyholder;
        })
        if (repeatGuess) {
            letterGuessed.push(keyholder);
            alert(keyholder + "already geussed again!");
        }
         else {
            letterGuessed.push(keyholder);
            console.log(letterGuessed + "repeat letter");
        }
        
        }addLetter();

        

//         function winReset() {
//         computerPick = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
//         // wins ++;
//         guessesLeft= 9;
//         letterGuessed =[];
        
// }
// winReset();
//         function loseReset() {
//             computerPick = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
//             guessesLeft = 9;
//             // losses --;
//             letterGuessed = [];
// }
// loseReset ();
    