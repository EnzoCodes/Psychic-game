
// Declaring Variables
console.log("JavaScript Running")

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Pulls random letter from Array.
var randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessCount = 0;
console.log(randLetter);




/*
var guessTrue() {
    while (guessCount > 10) {
        var guessHonesty = true;
    }
}
*/

/*
    var guessingTime() {
        while (guessHonesty === true) {
            var userGuess = prompt("What is your guess?");
            document.write(userGuess);
            document.write("Guess #: " + guessCount);
            if (userGuess != randLetter) {
                document.write("That wasn't it. Guess again!");
                guessCount + 1;
            } else if (userGuess == randLetter) {
                document.write("You did it " + randLetter + " was correct!");
                break;
            }
        }
    }
*/
