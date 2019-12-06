var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function gameEnded() {
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('easyBtn').style.display = "none";
    document.getElementById('hardBtn').style.display = "none";
}

function easyMode() {
    maxGuesses = 10;
    document.getElementById('easyBtn').className = "activeButton";
    document.getElementById('hardBtn').className = "";
}

function hardMode() {
    maxGuesses = 5;
    document.getElementById('hardBtn').className = "activeButton";
    document.getElementById('easyBtn').className = "";
}

function newGame() {
	window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    //button below shows only when game is finished
	document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
	// store variable of user's guess
	var userGuess = " " + document.getElementById("inputBox").value;
	//add guesses to empty array "userGuessLog"
	userGuessLog.push(userGuess);
	//console.log(userGuess);

	document.getElementById("guessLog").innerHTML = userGuessLog;

	attempts++;
    document.getElementById("attempts").innerHTML = attempts;
    
    if(userGuessLog.length < maxGuesses) {
        if (userGuess > computerGuess) {
            //changes text in h3 above
            document.getElementById("textOutput").innerHTML = "Your guess is too high";
            document.getElementById("inputBox").value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "Your guess is too low";
            document.getElementById("inputBox").value = "";
        } else {
            document.getElementById("textOutput").innerHTML = "You guessed correctly!";
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "You lose!";
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "You lose!";
            gameEnded();
        } else {
            document.getElementById("textOutput").innerHTML = "Correct!";
            gameEnded();
        }
    }


}
