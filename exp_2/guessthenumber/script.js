let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
const attemptsElement = document.getElementById("attempts");
const messageElement = document.getElementById("message");

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptsLeft--;

    if (guess === numberToGuess) {
        messageElement.textContent = `Congratulations! You guessed the number!`;
        messageElement.style.color = "green";
        endGame();
    } else if (guess < numberToGuess) {
        messageElement.textContent = `Too low! Try again.`;
        messageElement.style.color = "red";
    } else if (guess > numberToGuess) {
        messageElement.textContent = `Too high! Try again.`;
        messageElement.style.color = "red";
    }

    attemptsElement.textContent = attemptsLeft;

    if (attemptsLeft === 0) {
        messageElement.textContent = `Game Over! The correct number was ${numberToGuess}.`;
        endGame();
    }
}

function endGame() {
    document.getElementById("guess").disabled = true;
    document.querySelector("button").disabled = true;
}
