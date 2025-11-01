var secretNumber = 5;

var guess = prompt("Guess a number between 1 and 10:");

if (isNaN(guess)) {
  alert(" Please enter a valid number!");
} else if (guess < secretNumber) {
  alert("Too low! Try again.");
} else if (guess > secretNumber) {
  alert("Too high! Try again.");
} else {
  alert(" Correct! You guessed the secret number!");
}