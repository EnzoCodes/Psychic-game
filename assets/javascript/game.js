
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
var randLetter;
var userInput;

// Alphabet length (26)
var len = alphabet.length;

// Capture and hold Keypress
var activePrint = document.getElementById("activeLetters");

var activeLetters = [];

    document.onkeyup = function(aevent) {
        activeLetters = aevent.key;
        activePrint.textContent = activeLetters;
    }
// Non of this works ^^^ 


// Main Function
    document.onkeyup = function(bevent) {
        // Capture user input.
        var userInput = bevent.key;
        // Computer Choice
        var randLetter = alphabet[Math.floor(Math.random() * len)];

        if (userInput == randLetter) {
            win += 1; // adds 1 to win counter if condition met.
            i = 9; // Reset Chances
        } else if (userInput != randLetter) {
            i -= 1; //Subtracts an attempt if incorrect guess is entered.
        } if (i == 0) {
            loss += 1;
            i = 9; // Reset Chances
        }
        console.log(randLetter);

        var game_active = "<p>Wins: " + win + "</p><p>Loss: " + loss + "<p>Guess: " + userInput + "</p><p>Guesses: " + i + "</p>";
        document.getElementById("game_active").innerHTML = game_active;
    }
