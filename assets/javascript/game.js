
        // create an Array of options
        var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        console.log(alphabetArray.length);

        var wins = 0;               // hold the number of win input
        var losses = 0;             // hold the number of losses input
        var guessesLeft = 9;        // hold the amonunt number of guessLeft, var gusses; changed to guessesLeft = 9;
        var letterGuessed = [];     // hold the value of letterGussesd, guessesChoices = [] changed to LetterGuessed = [];

        var keyholder;              // variable to hold the index of alphabetArray

        var userPick = "";     
        var computerPick = "";

        // when the user presses a key, it will run the function
        document.onkeyup = function(event) {
             
            userPick = event.key.toLowerCase(); // Determine which key was pressed, set to userPick varable 
            console.log(userPick)
            console.log('wins:', wins, 'losses: ', losses)
            console.log(computerPick + " comp pick on keyup");
            renderScore();
        }

    var renderScore = function() { 

     // If the user picks the right letter    
    if (userPick === computerPick) { // If the user picks the right letter
        console.log(computerPick + " inside win condition");

        alert("You win!");
        wins ++;

        startReset()
        
    }
    // if the user picks the wrong letter
    else if (userPick !=  computerPick) {
        console.log(computerPick + "you get wrong letter");

        guessesLeft -= 1;

        if(guessesLeft === 0){

            alert("Try again!");
            
            losses++;
            startReset()
            
        }
        console.log(userPick);
        letterGuessed.push(userPick);
    }
    // loss = 9, alert "GAME OVER"
    if (losses === 9) {
        alert("Game Over")
        
    }
        function updatedScore () {  // function to display wins in HTML
            document.getElementById("win").innerHTML = "Win : " + wins;
            }updatedScore ();

        function updatedlossesScore () { //function to display loss in HTML
            document.getElementById("losses").innerHTML = "Losses : " + losses;
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
        document.onkeyup = function(event) { // when the user presses a key, it will run the function
            userPick = event.key.toLowerCase(); // Determine which key was pressed, set to userPick varable 
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
        if (repeatGuess ) {
            letterGuessed.push(keyholder);
            alert(keyholder + "already guessed again!");
        }
         else {
            letterGuessed.push(keyholder);
            console.log(letterGuessed + "repeat letter");
        }
        }addLetter();
  