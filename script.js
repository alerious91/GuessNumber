let numToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const submitGuessButton = document.getElementById('submitGuess');
const playAgainButton = document.getElementById('playAgain');

function resetGame() {
    numToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    message.textContent = '';
    attemptsDisplay.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitGuessButton.disabled = false;
    playAgainButton.classList.add('hidden');
}

function handleGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess > 100 || guess < 1) {
        message.textContent = 'Please enter a number between 1 and 100!';
        guessInput.value = '';
        return;
    }

    if (guess > numToGuess) {
        attempts--;
        message.textContent = 'Too high! Try again.';
    } else if (guess < numToGuess) {
        attempts--;
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = `Congratulations! You guessed the number with ${attempts} attempts left!`;
        endGame();
        return;
    }

    if (attempts === 0) {
        message.textContent = `You lost! The number was ${numToGuess}.`;
        endGame();
    } else {
        attemptsDisplay.textContent = `Attempts left: ${attempts}`;
    }

    guessInput.value = '';  
    guessInput.focus();
}

function endGame() {
    guessInput.disabled = true;
    submitGuessButton.disabled = true;
    playAgainButton.classList.remove('hidden');
}

submitGuessButton.addEventListener('click', handleGuess);

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});

playAgainButton.addEventListener('click', resetGame);
