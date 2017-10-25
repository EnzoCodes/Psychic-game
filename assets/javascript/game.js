
// Script running...
console.log("JavaScript Running")

// Array holding Alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable to hold wins.
var win = 0;
// Variable to hold losses.
var loss = 0;
// Variable to hold guess count/chances.
var i;
// Comaprison Variables
var randLetter;
var userInput;

// Alphabet length (26)
var len = alphabet.length;

// Function Start
    document.onkeyup = function(event) {
        var userInput = event.key;
        // Computer Choice
        var randLetter = alphabet[Math.floor(Math.random() * len)];
        //Each Guess, counter -1.
        for (var i = 9; i > 0; i--) {
            if (userInput != randLetter) {
                continue;
            } else if (userInput === randLetter) {
                win++; //adds 1 to win counter.
                return; // Hopefully resets.
            } else if (i == 0) {
                loss++;
                return; //maybe return??
            }
        }
        var game_active = "</p><p>Wins: " + win + "</p><p>Loss: " + loss + "<p>Guess: " + userInput + "</p><p>Guesses: " + i + "</p>";

        document.getElementById("game_active").innerHTML = game_active;
    }


 // App randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

 // Guess what letter I'm thinking of

 // Wins: (# of times the user has guessed the letter correctly)

 // Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

 // Guesses Left: (# of guesses left. This will update)

 // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

 // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
