
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
var i = 9;
// Comaprison Variables
var userInput;
var activePrint;
var activeLetters = [];
// Alphabet length (26)
var len = alphabet.length;
var randLetter = alphabet[Math.floor(Math.random() * len)];


// Main Function
    document.onkeyup = function(event) {
        // Capture user input.
        userInput = event.key;
        //
        console.log(randLetter);
        //
        activeLetters.push(userInput);
        //
        document.getElementById("activeLetters").innerHTML = activeLetters.join(" ");

        if (userInput === randLetter) {
            win += 1; // adds 1 to win counter if condition met.
            randLetter = alphabet[Math.floor(Math.random() * len)];
            activeLetters = [];
            // document.getElementById("game_active").innerHTML = game_active;
            i = 9;
            // Reset Chances
        } else if (userInput != randLetter) {
            i -= 1; //Subtracts an attempt if incorrect guess is entered.
        } if (i === 0) {
            loss += 1;
            i = 9; // Reset Chances
            activeLetters = [];
        }
        var game_active = "<p>Wins: " + win + "</p><p>Loss: " + loss + "<p>Guess: " + userInput + "</p><p>Guesses: " + i + "</p>";
        document.getElementById("game_active").innerHTML = game_active;
    }
